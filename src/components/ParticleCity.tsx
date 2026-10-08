"use client";

import { useEffect, useRef } from "react";

/*
 * Viabo particle city
 * - Dense Viabo-cyan points form buildings and streets.
 * - Mouse/touch controls horizontal orbit and a limited 0–20° elevation.
 * - The wheel is left to the page, so scrolling over the city scrolls the page.
 * - No external libraries are required.
 */

const CONFIG = {
  colour: "#00D8FE",
  desktopParticles: 9000,
  mobileParticles: 3200,
  cameraRadius: 10.8,
  targetHeight: 1.18,
  baseElevation: 10,
  verticalRange: 10,
};

type Vec = { x: number; y: number; z: number };
type Particle = Vec & { icon: number; building: number; weight: number; phase: number; pulse: number; size: number };
type Shape = "wide" | "round" | "pyramid" | "slope" | "rect";

function random(seed: number) {
  const n = Math.sin(seed * 12.9898) * 43758.5453123;
  return n - Math.floor(n);
}
const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
const clamp01 = (v: number) => clamp(v, 0, 1);
function normalise(v: Vec): Vec {
  const l = Math.hypot(v.x, v.y, v.z) || 1;
  return { x: v.x / l, y: v.y / l, z: v.z / l };
}
const cross = (a: Vec, b: Vec): Vec => ({ x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x });
const dot = (a: Vec, b: Vec) => a.x * b.x + a.y * b.y + a.z * b.z;

function addPoint(c: Particle[], x: number, y: number, z: number, icon: number, building: number, weight = 1) {
  c.push({
    x,
    y,
    z,
    icon,
    building,
    weight,
    phase: random(c.length + 400) * Math.PI * 2,
    pulse: 0.00055 + random(c.length + 600) * 0.0012,
    size: 0.72 + random(c.length + 800) * 0.62,
  });
}

// Add a rectangular shell. Optional roof styles create stronger silhouettes.
function createRectBuilding(c: Particle[], b: number, cx: number, cz: number, bw: number, bd: number, bh: number, roofType: "flat" | "pyramid" = "flat") {
  const verticalSteps = Math.max(7, Math.round(bh * 7.2));
  const horizontalSteps = Math.max(4, Math.round(Math.max(bw, bd) * 6.2));
  const t = b % 10;

  for (let level = 0; level <= verticalSteps; level++) {
    const y = 0.08 + (level / verticalSteps) * bh;
    for (let column = 0; column <= horizontalSteps; column++) {
      const u = column / horizontalSteps;
      const x = cx - bw / 2 + u * bw;
      const z = cz - bd / 2 + u * bd;
      addPoint(c, x, y, cz - bd / 2, (t + level) % 10, b);
      addPoint(c, x, y, cz + bd / 2, (t + level + 3) % 10, b);
      addPoint(c, cx - bw / 2, y, z, (t + column + 5) % 10, b);
      addPoint(c, cx + bw / 2, y, z, (t + column + 7) % 10, b);
    }
  }

  const roofSteps = Math.max(4, horizontalSteps + 1);
  if (roofType === "pyramid") {
    const roofHeight = Math.max(0.34, Math.min(bw, bd) * 0.72);
    const rings = Math.max(4, Math.round(roofHeight * 10));
    for (let ring = 0; ring <= rings; ring++) {
      const v = ring / rings;
      const rw = bw * (1 - v);
      const rd = bd * (1 - v);
      const y = bh + 0.06 + roofHeight * v;
      const ringSteps = Math.max(3, Math.round(roofSteps * (1 - v * 0.65)));
      for (let step = 0; step <= ringSteps; step++) {
        const u = step / ringSteps;
        addPoint(c, cx - rw / 2 + u * rw, y, cz - rd / 2, (t + 2) % 10, b, 1.14);
        addPoint(c, cx - rw / 2 + u * rw, y, cz + rd / 2, (t + 4) % 10, b, 1.14);
        addPoint(c, cx - rw / 2, y, cz - rd / 2 + u * rd, (t + 6) % 10, b, 1.14);
        addPoint(c, cx + rw / 2, y, cz - rd / 2 + u * rd, (t + 8) % 10, b, 1.14);
      }
    }
  } else {
    for (let step = 0; step <= roofSteps; step++) {
      const u = step / roofSteps;
      addPoint(c, cx - bw / 2 + u * bw, bh + 0.08, cz - bd / 2, (t + 2) % 10, b, 1.15);
      addPoint(c, cx - bw / 2 + u * bw, bh + 0.08, cz + bd / 2, (t + 4) % 10, b, 1.15);
      addPoint(c, cx - bw / 2, bh + 0.08, cz - bd / 2 + u * bd, (t + 6) % 10, b, 1.15);
      addPoint(c, cx + bw / 2, bh + 0.08, cz - bd / 2 + u * bd, (t + 8) % 10, b, 1.15);
    }
  }

  // Taller buildings receive a small rooftop plant/antenna cluster.
  if (roofType === "flat" && bh > 1.7) {
    const antennaHeight = 0.25 + random(b + 901) * 0.35;
    for (let i = 0; i < 5; i++) addPoint(c, cx, bh + 0.12 + antennaHeight * (i / 4), cz, (t + i) % 10, b, 1.22);
  }
}

function createRoundBuilding(c: Particle[], b: number, cx: number, cz: number, diameter: number, bh: number) {
  const radius = diameter / 2;
  const levels = Math.max(8, Math.round(bh * 8));
  const segments = Math.max(16, Math.round(diameter * 18));
  const t = b % 10;
  for (let level = 0; level <= levels; level++) {
    const y = 0.08 + (level / levels) * bh;
    for (let s = 0; s < segments; s++) {
      const a = (s / segments) * Math.PI * 2;
      addPoint(c, cx + Math.cos(a) * radius, y, cz + Math.sin(a) * radius, (t + s) % 10, b);
    }
  }
  // Concentric roof rings keep the circular footprint legible from above.
  for (let ring = 1; ring <= 4; ring++) {
    const rr = radius * (ring / 4);
    for (let s = 0; s < segments; s++) {
      const a = (s / segments) * Math.PI * 2;
      addPoint(c, cx + Math.cos(a) * rr, bh + 0.07, cz + Math.sin(a) * rr, (t + ring) % 10, b, 1.12);
    }
  }
}

function createSlopedBuilding(c: Particle[], b: number, cx: number, cz: number, bw: number, bd: number, bh: number) {
  const rise = Math.max(0.3, bw * 0.38);
  const xSteps = Math.max(7, Math.round(bw * 8));
  const zSteps = Math.max(5, Math.round(bd * 7));
  const levels = Math.max(7, Math.round((bh + rise) * 7));
  const t = b % 10;
  const topAt = (u: number) => bh + rise * u;

  // Front and rear walls follow the high edge of the mono-pitch roof.
  for (let xi = 0; xi <= xSteps; xi++) {
    const u = xi / xSteps;
    const x = cx - bw / 2 + u * bw;
    const wallTop = topAt(u);
    for (let level = 0; level <= levels; level++) {
      const y = 0.08 + (level / levels) * wallTop;
      addPoint(c, x, y, cz - bd / 2, (t + xi) % 10, b);
      addPoint(c, x, y, cz + bd / 2, (t + xi + 3) % 10, b);
    }
  }
  // End walls plus rows across the sloping roof plane.
  for (let zi = 0; zi <= zSteps; zi++) {
    const v = zi / zSteps;
    const z = cz - bd / 2 + v * bd;
    for (let level = 0; level <= levels; level++) {
      addPoint(c, cx - bw / 2, 0.08 + (level / levels) * bh, z, (t + zi + 5) % 10, b);
      addPoint(c, cx + bw / 2, 0.08 + (level / levels) * (bh + rise), z, (t + zi + 7) % 10, b);
    }
    for (let xi = 0; xi <= xSteps; xi++) {
      const u = xi / xSteps;
      addPoint(c, cx - bw / 2 + u * bw, topAt(u) + 0.07, z, (t + xi + zi) % 10, b, 1.14);
    }
  }
}

function createBuilding(c: Particle[], b: number, cx: number, cz: number, bw: number, bd: number, bh: number, shape: Shape) {
  if (shape === "round") createRoundBuilding(c, b, cx, cz, Math.min(bw, bd) * 1.12, bh);
  else if (shape === "pyramid") createRectBuilding(c, b, cx, cz, bw, bd, bh, "pyramid");
  else if (shape === "slope") createSlopedBuilding(c, b, cx, cz, bw, bd, bh);
  else createRectBuilding(c, b, cx, cz, bw, bd, bh, "flat");
}

function createCity(desiredParticles: number): Particle[] {
  const candidates: Particle[] = [];
  let b = 0;
  const grid = 7;
  const spacing = 1.18;
  const wideLots = new Set(["0,1", "0,5", "4,5"]);
  const reservedLots = new Set(["1,1", "1,5", "5,5"]);

  for (let gx = 0; gx < grid; gx++) {
    for (let gz = 0; gz < grid; gz++) {
      const centredX = gx - (grid - 1) / 2;
      const centredZ = gz - (grid - 1) / 2;
      const lotKey = `${gx},${gz}`;
      // Cross-shaped streets plus a few plazas make the city readable from above.
      if (centredX === 0 || centredZ === 0) continue;
      if (reservedLots.has(lotKey)) continue;
      if (!wideLots.has(lotKey) && random(gx * 31 + gz * 17 + 3) < 0.12) continue;

      const distanceFromCentre = Math.hypot(centredX, centredZ);
      const centreBoost = Math.max(0, 1 - distanceFromCentre / 4.4);
      const roll = b % 5;
      const shape: Shape = wideLots.has(lotKey) ? "wide" : roll === 1 ? "round" : roll === 2 ? "pyramid" : roll === 3 ? "slope" : "rect";
      let bw = 0.58 + random(b + 11) * 0.3;
      let bd = 0.58 + random(b + 29) * 0.3;
      let bh = 0.82 + random(b + 47) * 1.65 + centreBoost * 1.45;

      // Wide podiums deliberately span more than one standard lot.
      if (shape === "wide") {
        bw = 1.35 + random(b + 101) * 0.48;
        bd = 0.7 + random(b + 113) * 0.28;
        bh = 0.56 + random(b + 127) * 0.55;
      } else if (shape === "round") {
        bw = bd = 0.78 + random(b + 139) * 0.28;
      } else if (shape === "pyramid") {
        bh *= 0.78;
      } else if (shape === "slope") {
        bw *= 1.3;
        bh *= 0.68;
      }
      const cx = centredX * spacing + (random(b + 61) - 0.5) * 0.1;
      const cz = centredZ * spacing + (random(b + 79) - 0.5) * 0.1;
      createBuilding(candidates, b, cx, cz, bw, bd, bh, shape);
      b++;
    }
  }

  // Street and plaza particles sit slightly above the ground plane.
  for (let i = -17; i <= 17; i++) {
    const p = i * 0.22;
    addPoint(candidates, p, 0.025, -0.24, (i + 50) % 10, -1, 0.78);
    addPoint(candidates, p, 0.025, 0.24, (i + 53) % 10, -1, 0.78);
    addPoint(candidates, -0.24, 0.025, p, (i + 56) % 10, -1, 0.78);
    addPoint(candidates, 0.24, 0.025, p, (i + 59) % 10, -1, 0.78);
  }

  // Deterministic shuffle preserves an even sample across all buildings.
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(random(i + 3001) * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }
  return candidates.length <= desiredParticles ? candidates : candidates.slice(0, desiredParticles);
}

export function ParticleCity({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const isMobile = window.matchMedia("(max-width: 700px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const particles = createCity(isMobile ? CONFIG.mobileParticles : CONFIG.desktopParticles);

    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    const startTime = performance.now();
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, pressed: false };

    function cameraFor(time: number) {
      const automaticYaw = (time - startTime) * 0.000085;
      pointer.x += (pointer.targetX - pointer.x) * 0.055;
      pointer.y += (pointer.targetY - pointer.y) * 0.055;

      const yaw = automaticYaw + pointer.x * 0.82;
      const elevation = (clamp(CONFIG.baseElevation + pointer.y * CONFIG.verticalRange, 0, 20) * Math.PI) / 180;
      const target = { x: 0, y: CONFIG.targetHeight, z: 0 };
      const r = CONFIG.cameraRadius;
      const camera = {
        x: Math.sin(yaw) * Math.cos(elevation) * r,
        y: target.y + Math.sin(elevation) * r,
        z: Math.cos(yaw) * Math.cos(elevation) * r,
      };
      const forward = normalise({ x: target.x - camera.x, y: target.y - camera.y, z: target.z - camera.z });
      const right = normalise(cross(forward, { x: 0, y: 1, z: 0 }));
      const up = normalise(cross(right, forward));
      return { camera, forward, right, up };
    }

    function render(time: number, staticFrame = false) {
      if (!visible && !staticFrame) return;
      if (!ctx) return;
      const cam = cameraFor(staticFrame ? startTime + 1700 : time);
      const focalLength = Math.min(width, height) * (isMobile ? 1.06 : 1.2);
      const centreX = width / 2;
      const centreY = height * (isMobile ? 0.59 : 0.57);
      const elapsed = time - startTime;
      const projected: { x: number; y: number; depth: number; size: number; alpha: number }[] = [];

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        const rel = { x: p.x - cam.camera.x, y: p.y - cam.camera.y, z: p.z - cam.camera.z };
        const cx = dot(rel, cam.right);
        const cy = dot(rel, cam.up);
        const cz = dot(rel, cam.forward);
        if (cz <= 0.1) continue;
        const perspective = focalLength / cz;
        const depth = clamp01(1.7 - cz / 11.8);
        const pulse = staticFrame ? 1 : 0.78 + 0.22 * Math.sin(elapsed * p.pulse + p.phase);
        projected.push({
          x: centreX + cx * perspective,
          y: centreY - cy * perspective,
          depth: cz,
          size: clamp((0.34 + depth * 0.72) * p.size * p.weight, 0.3, isMobile ? 1.3 : 1.55),
          alpha: clamp01((0.2 + depth * 0.8) * pulse),
        });
      }

      // Draw far-to-near so close points remain crisp over the distant skyline.
      projected.sort((a, b) => b.depth - a.depth);
      ctx.fillStyle = CONFIG.colour;
      for (const item of projected) {
        ctx.globalAlpha = item.alpha;
        ctx.beginPath();
        ctx.arc(item.x, item.y, Math.max(0.42, item.size), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!staticFrame && !reducedMotion.matches) raf = requestAnimationFrame(render);
    }

    function resize() {
      if (!root || !canvas || !ctx) return;
      const rect = root.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      const dpr = Math.min(isMobile ? 1.5 : 2, Math.max(1, window.devicePixelRatio || 1));
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reducedMotion.matches) render(performance.now(), true);
    }

    function setPointerTarget(e: PointerEvent) {
      if (!root) return;
      const rect = root.getBoundingClientRect();
      // Match the city's turn and dip directly to the pointer's direction.
      pointer.targetX = -(((e.clientX - rect.left) / rect.width) * 2 - 1);
      pointer.targetY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    }
    function endInteraction() {
      pointer.pressed = false;
      pointer.targetX = 0;
      pointer.targetY = 0;
    }

    const ac = new AbortController();
    const { signal } = ac;
    root.addEventListener("pointerenter", setPointerTarget, { signal });
    root.addEventListener("pointermove", (e) => { if (e.pointerType === "mouse" || pointer.pressed) setPointerTarget(e); }, { signal });
    root.addEventListener("pointerdown", (e) => { pointer.pressed = true; root.setPointerCapture?.(e.pointerId); setPointerTarget(e); }, { signal });
    root.addEventListener("pointerup", (e) => { pointer.pressed = false; if (e.pointerType !== "mouse") endInteraction(); }, { signal });
    root.addEventListener("pointercancel", endInteraction, { signal });
    root.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") endInteraction(); }, { signal });

    const ro = new ResizeObserver(resize);
    ro.observe(root);
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !raf && !reducedMotion.matches) raf = requestAnimationFrame(render);
        else if (!visible && raf) { cancelAnimationFrame(raf); raf = 0; }
      },
      { threshold: 0.02 },
    );
    io.observe(root);

    const onMotionChange = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      if (reducedMotion.matches) render(performance.now(), true);
      else raf = requestAnimationFrame(render);
    };
    reducedMotion.addEventListener?.("change", onMotionChange);

    resize();
    if (reducedMotion.matches) render(performance.now(), true);
    else raf = requestAnimationFrame(render);

    return () => {
      ac.abort();
      ro.disconnect();
      io.disconnect();
      reducedMotion.removeEventListener?.("change", onMotionChange);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className={className}>
      <canvas ref={canvasRef} className="city__canvas" aria-hidden="true" />
    </div>
  );
}
