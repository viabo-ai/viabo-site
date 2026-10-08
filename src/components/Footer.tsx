import Link from "next/link";
import { nav, sectors, site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const top = nav.primary.map((i) => ({ label: i.label, href: i.href }));
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid footer__grid--4">
          <div className="stack" style={{ gap: 12 }}>
            <Logo />
            <p>{site.tagline}.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul className="stack" style={{ gap: 6 }}>
              {top.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contactus">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Solutions</h3>
            <ul className="stack" style={{ gap: 6 }}>
              {sectors.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/solutions/${s.slug}`}>{s.label}</Link>
                    </li>
                  ))}
              <li>
                <Link href="/solutions/lifecycle">Across the lifecycle</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Talk to us</h3>
            <ul className="stack" style={{ gap: 6 }}>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.linkedin} rel="noopener noreferrer" target="_blank">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {site.legalName}
          </span>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
