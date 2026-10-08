import type { Metadata } from "next";
import { Art } from "@/components/Art";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { capabilities, howItWorks as c } from "@/content/site";

export const metadata: Metadata = { title: c.meta.title, description: c.meta.description };

export default function HowItWorksPage() {
  return (
    <>
      <PageHero title={c.hero.title} sub={c.hero.sub} />

      <section className="container">
        {c.steps.map((s, i) => (
          <div key={s.title} className={`split${i % 2 === 1 ? " split--flip" : ""}`}>
            <div className="stack">
              <span className="eyebrow">
                Step {i + 1} of {c.steps.length}
              </span>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
              <div className="you-get">
                <strong>Deliverable</strong>
                {s.youGet}
              </div>
            </div>
            <div className="split__art">
              {s.image ? (
                <img src={s.image} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              ) : (
                <Art kind={s.art} />
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="section section--tint">
        <div className="container stack stack--lg">
          <div className="stack">
            <h2>{capabilities.title}</h2>
            <p className="measure" style={{ color: "var(--mute)" }}>
              {capabilities.intro}
            </p>
          </div>
          <div className="grid-4">
            {capabilities.items.map((x) => (
              <div key={x.title} className="feature feature--icon">
                <span className="icon-badge">
                  <Icon name={x.icon} />
                </span>
                <h3>{x.title}</h3>
                <p>{x.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack stack--lg">
          <div className="stack">
            <h2>{c.engagement.title}</h2>
            <p style={{ color: "var(--mute)" }}>{c.engagement.body}</p>
          </div>
          <div className="grid-3">
            {c.engagement.items.map((e) => (
              <div key={e.title} className="feature">
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container grid-2">
          <div className="stack">
            <h2>{c.fits.title}</h2>
            <p style={{ color: "var(--mute)" }}>{c.fits.body}</p>
          </div>
          <div className="stack">
            <h2>{c.ownership.title}</h2>
            <p style={{ color: "var(--mute)" }}>{c.ownership.body}</p>
          </div>
        </div>
      </section>

      <CtaBand title={c.cta.title} body={c.cta.body} cta={c.cta.cta} />
    </>
  );
}
