import Link from "next/link";
import { Icon, type IconName } from "./Icon";

export function PageHero({
  icon,
  eyebrow,
  title,
  sub,
  cta,
}: {
  icon?: IconName;
  eyebrow?: string;
  title: string;
  sub?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="page-hero">
      <div className="container stack stack--lg">
        <div className="stack">
          {icon && (
            <span className="icon-badge icon-badge--lg">
              <Icon name={icon} size={28} />
            </span>
          )}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {sub && <p className="lede">{sub}</p>}
        </div>
        {cta && (
          <div>
            <Link href={cta.href} className="btn btn--primary">
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
