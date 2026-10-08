"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, type NavItem } from "@/content/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

// Desktop dropdown: opens on hover or click, closes on mouse-leave, on
// selecting a link, on Escape, on a click elsewhere, and on navigation.
function Dropdown({ item }: { item: Extract<NavItem, { groups: object[] }> }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const enter = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const leave = () => {
    timer.current = setTimeout(() => setOpen(false), 150);
  };
  const close = () => setOpen(false);

  return (
    <div className="dropdown" ref={ref} onMouseEnter={enter} onMouseLeave={leave}>
      <button
        type="button"
        className="dropdown__trigger"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
      </button>
      {open && (
        <div className="menu menu--grouped">
          {item.groups.map((g) => (
            <div key={g.heading} className="menu__group">
              <Link href={g.href} className="menu__heading" onClick={close}>
                {g.heading}
              </Link>
              {g.links.map((c) => (
                <Link key={c.href} href={c.href} onClick={close} className="menu__link">
                  {c.icon && <Icon name={c.icon} size={18} />}
                  <span>{c.label}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <nav className="nav" aria-label="Main">
            {nav.primary.map((item) =>
              item.groups ? (
                <Dropdown key={item.label} item={item} />
              ) : (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ),
            )}
            <Link href={nav.cta.href} className="btn btn--primary">
              {nav.cta.label}
            </Link>
          </nav>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <nav id="mobile-nav" className="nav-mobile" data-open={open} aria-label="Main (mobile)">
          {nav.primary.map((item) =>
            item.groups ? (
              <div key={item.label} style={{ display: "contents" }}>
                <Link href={item.href} onClick={close}>
                  {item.label}
                </Link>
                {item.groups.map((g) => (
                  <div key={g.heading} style={{ display: "contents" }}>
                    <Link href={g.href} className="nav-mobile__heading" onClick={close}>
                      {g.heading}
                    </Link>
                    {g.links.map((c) => (
                      <Link key={c.href} href={c.href} className="sub" onClick={close}>
                        {c.icon && <Icon name={c.icon} size={17} />}
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <Link key={item.href} href={item.href} onClick={close}>
                {item.label}
              </Link>
            ),
          )}
          <Link href={nav.cta.href} className="btn btn--primary" onClick={close}>
            {nav.cta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
