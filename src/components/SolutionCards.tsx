import Link from "next/link";
import { lifecycle, sectors, solutionsIndex as c } from "@/content/site";
import { Icon } from "./Icon";

const orderedSectors = c.sectorOrder
  .map((slug) => sectors.find((s) => s.slug === slug))
  .filter(Boolean) as typeof sectors;

export function SectorCards() {
  return (
    <div className="grid-3">
      {orderedSectors.map((s) => (
        <Link key={s.slug} href={`/solutions/${s.slug}`} className={`card${s.image ? " card--sector" : ""}`}>
          {s.image && (
            <div
              className="card__photo"
              style={{ backgroundImage: `url(${s.image})` }}
              aria-hidden="true"
            />
          )}
          <div className="card__body">
            <span className="icon-badge">
              <Icon name={s.icon} />
            </span>
            <h3>{s.label}</h3>
            <p>{s.card}</p>
            <span className="arrow-link">Learn more</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function LifecycleStrip({ highlight }: { highlight?: string[] }) {
  return (
    <ol className="lifecycle">
      {lifecycle.stages.map((s) => (
        <li key={s.id} className={highlight && !highlight.includes(s.id) ? "is-dim" : undefined}>
          <Link href={`/solutions/lifecycle#${s.id}`}>
            <span className="lifecycle__top">
              <Icon name={s.icon} size={20} />
            </span>
            <span className="lifecycle__label">{s.label}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function SolutionCards() {
  return (
    <div className="stack stack--lg">
      <SectorCards />
      <div className="stack">
        <div className="group-head">
          <h3>
            <Link href="/solutions/lifecycle">{c.lifecycleTitle}</Link>
          </h3>
          <p>{c.lifecycleIntro}</p>
        </div>
        <LifecycleStrip />
      </div>
    </div>
  );
}
