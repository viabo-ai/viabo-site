import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { ParticleCity } from "@/components/ParticleCity";
import { SolutionCards } from "@/components/SolutionCards";
import { home } from "@/content/site";

export const metadata: Metadata = { title: home.meta.title, description: home.meta.description };

export default function HomePage() {
  const { hero, challenge, approach, outcomes, solutions, paths, cta } = home;
  return (
    <>
      <section className="city">
        <ParticleCity className="city__stage" />
        <div className="container city__content">
          <h1>{hero.title}</h1>
          <p className="city__sub">{hero.sub}</p>
          <div className="btn-row city__actions">
            <Link href={hero.primary.href} className="btn city__btn--primary">
              {hero.primary.label}
            </Link>
            <Link href={hero.secondary.href} className="btn city__btn--ghost">
              {hero.secondary.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 1. The challenge */}
      <section className="section section--tint">
        <div className="container stack stack--lg">
          <div className="stack">
            <h2 className="measure">{challenge.title}</h2>
          </div>
          <div className="grid-3">
            {challenge.items.map((c) => (
              <div key={c.title} className="feature feature--icon">
                <span className="icon-badge">
                  <Icon name={c.icon} />
                </span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. The approach */}
      <section className="section">
        <div className="container stack stack--lg">
          <div className="stack">
            <h2 className="measure">{approach.title}</h2>
          </div>
          <div className="grid-3">
            {approach.items.map((s, i) => (
              <div key={s.title} className="step">
                <span className="step__num">{i + 1}</span>
                <div className="stack" style={{ gap: 6 }}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href={approach.link.href} className="arrow-link">
            {approach.link.label}
          </Link>
        </div>
      </section>

      {/* 3. Solutions */}
      <section className="section section--tint">
        <div className="container stack stack--lg">
          <div className="stack">
            <h2>{solutions.title}</h2>
          </div>
          <SolutionCards />
        </div>
      </section>

      {/* 4. Outcomes */}
      <section className="section">
        <div className="container stack stack--lg">
          <div className="stack">
            <h2>{outcomes.title}</h2>
          </div>
          <div className="grid-3">
            {outcomes.items.map((p) => (
              <div key={p.title} className="feature feature--icon">
                <span className="icon-badge">
                  <Icon name={p.icon} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Partners / Advisory */}
      <section className="section section--tint">
        <div className="container grid-2">
          {paths.map((p) => (
            <Link key={p.link.href} href={p.link.href} className="card">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <span className="arrow-link">{p.link.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title={cta.title} body={cta.body} cta={cta.cta} />
    </>
  );
}
