import type { ArtKind } from "@/content/site";

// Abstract, deterministic illustrations. They suggest "a building with assets located in it"
// without showing the product. Colours come from theme tokens so they read in both themes.

const ink = "var(--ink)";
const acc = "var(--acc)";
const soft = "var(--acc-soft)";
const rule = "var(--rule)";
const bg2 = "var(--bg-2)";

function Marker({ x, y, r = 5, filled = true }: { x: number; y: number; r?: number; filled?: boolean }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r + 4} fill={acc} opacity="0.18" />
      <circle cx={x} cy={y} r={r} fill={filled ? acc : bg2} stroke={acc} strokeWidth="1.5" />
    </g>
  );
}

function Plan({ x, y, w, h, rooms }: { x: number; y: number; w: number; h: number; rooms: [number, number, number, number][] }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" fill={bg2} stroke={ink} strokeOpacity="0.35" strokeWidth="1.5" />
      {rooms.map(([rx, ry, rw, rh], i) => (
        <rect key={i} x={x + rx} y={y + ry} width={rw} height={rh} fill="none" stroke={rule} strokeWidth="1.2" />
      ))}
    </g>
  );
}

export function Art({ kind, hero = false }: { kind: ArtKind; hero?: boolean }) {
  const vb = hero ? "0 0 480 360" : "0 0 400 300";
  const common = { viewBox: vb, role: "img" as const, "aria-hidden": true, xmlns: "http://www.w3.org/2000/svg" };

  switch (kind) {
    case "capture":
      return (
        <svg {...common}>
          <Plan x={50} y={50} w={300} h={200} rooms={[[0, 0, 110, 90], [110, 0, 110, 90], [220, 0, 80, 200], [0, 90, 220, 110]]} />
          {/* capture path */}
          <path d="M70 230 C 120 200, 150 120, 200 140 S 300 90, 330 80" fill="none" stroke={acc} strokeWidth="2" strokeDasharray="5 6" />
          <circle cx="70" cy="230" r="6" fill={acc} />
          <circle cx="330" cy="80" r="6" fill={bg2} stroke={acc} strokeWidth="2" />
          <Marker x={100} y={90} filled={false} />
          <Marker x={210} y={110} filled={false} />
          <Marker x={300} y={180} filled={false} />
        </svg>
      );
    case "register":
      return (
        <svg {...common}>
          <Plan x={40} y={60} w={200} h={180} rooms={[[0, 0, 100, 90], [100, 0, 100, 90], [0, 90, 200, 90]]} />
          <Marker x={90} y={105} />
          <Marker x={190} y={100} />
          <Marker x={140} y={195} />
          {/* register rows */}
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(262 ${90 + i * 46})`}>
              <rect width="100" height="34" rx="5" fill={bg2} stroke={rule} />
              <rect x="10" y="10" width="46" height="5" rx="2.5" fill={ink} opacity="0.5" />
              <rect x="10" y="20" width="30" height="4" rx="2" fill={ink} opacity="0.25" />
              <circle cx="86" cy="17" r="7" fill={soft} />
              <path d="M82.5 17 l2.5 2.5 l5 -5" fill="none" stroke={acc} strokeWidth="1.6" strokeLinecap="round" />
            </g>
          ))}
          <path d="M240 105 H 262" stroke={acc} strokeWidth="1.5" strokeDasharray="3 4" />
          <path d="M240 150 H 262" stroke={acc} strokeWidth="1.5" strokeDasharray="3 4" />
          <path d="M240 195 H 262" stroke={acc} strokeWidth="1.5" strokeDasharray="3 4" />
        </svg>
      );
    case "lifecycle":
      return (
        <svg {...common}>
          <Plan x={40} y={40} w={320} h={120} rooms={[[0, 0, 160, 120], [160, 0, 160, 120]]} />
          <Marker x={120} y={100} />
          <Marker x={280} y={100} />
          {/* timeline */}
          <path d="M50 230 H 350" stroke={rule} strokeWidth="2" />
          {[50, 125, 200, 275, 350].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy="230" r={i < 3 ? 6 : 5} fill={i < 3 ? acc : bg2} stroke={acc} strokeWidth="1.5" />
              <rect x={x - 14} y="245" width="28" height="4" rx="2" fill={ink} opacity="0.3" />
            </g>
          ))}
          <path d="M120 112 V 224" stroke={acc} strokeWidth="1.5" strokeDasharray="3 4" opacity="0.7" />
          <path d="M280 112 V 224" stroke={acc} strokeWidth="1.5" strokeDasharray="3 4" opacity="0.7" />
        </svg>
      );
    case "campus":
      return (
        <svg {...common}>
          <Plan x={40} y={40} w={130} h={100} rooms={[[0, 0, 65, 50], [65, 0, 65, 50], [0, 50, 130, 50]]} />
          <Plan x={230} y={60} w={130} h={80} rooms={[[0, 0, 130, 40], [0, 40, 130, 40]]} />
          <Plan x={100} y={180} w={200} h={80} rooms={[[0, 0, 100, 80], [100, 0, 100, 80]]} />
          <path d="M170 90 H 230" stroke={acc} strokeWidth="1.5" strokeDasharray="4 5" />
          <path d="M120 140 V 180" stroke={acc} strokeWidth="1.5" strokeDasharray="4 5" />
          <path d="M295 140 L 260 180" stroke={acc} strokeWidth="1.5" strokeDasharray="4 5" />
          <Marker x={72} y={65} />
          <Marker x={137} y={115} />
          <Marker x={295} y={80} />
          <Marker x={265} y={120} />
          <Marker x={150} y={220} />
          <Marker x={250} y={220} />
        </svg>
      );
    case "portfolio":
      return (
        <svg {...common}>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${45 + i * 110} 70)`}>
              <rect width="90" height="160" rx="6" fill={bg2} stroke={ink} strokeOpacity="0.35" strokeWidth="1.5" />
              {[0, 1, 2, 3].map((r) => (
                <rect key={r} x="12" y={14 + r * 36} width="66" height="24" rx="3" fill={r === 3 - i ? soft : "none"} stroke={rule} />
              ))}
              <Marker x={45} y={26 + (3 - i) * 36} r={4} />
            </g>
          ))}
          <path d="M60 250 H 340" stroke={rule} strokeWidth="1.5" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={72 + i * 110} y={250 - [42, 28, 56][i]} width="36" height={[42, 28, 56][i]} rx="3" fill={acc} opacity={0.5 + i * 0.2} />
          ))}
        </svg>
      );
    case "handover":
      return (
        <svg {...common}>
          {/* drawing */}
          <g transform="translate(40 60)">
            <rect width="140" height="180" rx="6" fill={bg2} stroke={rule} strokeWidth="1.5" />
            {[0, 1, 2, 3, 4].map((r) => (
              <rect key={r} x="16" y={18 + r * 30} width={[100, 70, 90, 60, 80][r]} height="5" rx="2.5" fill={ink} opacity="0.25" />
            ))}
          </g>
          <path d="M190 150 H 222" stroke={acc} strokeWidth="2" />
          <path d="M216 143 l7 7 l-7 7" fill="none" stroke={acc} strokeWidth="2" strokeLinecap="round" />
          {/* building */}
          <Plan x={232} y={60} w={130} h={180} rooms={[[0, 0, 65, 60], [65, 0, 65, 60], [0, 60, 130, 60], [0, 120, 130, 60]]} />
          <Marker x={264} y={90} />
          <Marker x={330} y={90} />
          <Marker x={297} y={150} />
          <Marker x={297} y={210} />
        </svg>
      );
  }
}
