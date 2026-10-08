import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { LifecycleStrip } from "@/components/SolutionCards";
import { lifecycle as c } from "@/content/site";

export const metadata: Metadata = { title: c.meta.title, description: c.meta.description };

export default function LifecyclePage() {
  return (
    <>
      <PageHero eyebrow="Solutions · Across the lifecycle" title={c.hero.title} sub={c.hero.sub} />

      <section className="section section--tight">
        <div className="container stack">
          <span className="eyebrow">{c.stagesTitle}</span>
          <LifecycleStrip />
        </div>
      </section>

      <section className="container">
        {c.stages.map((s, i) => (
          <article key={s.id} id={s.id} className="stage">
            <div className="stage__head">
              <span className="stage__icon">
                <Icon name={s.icon} size={24} />
              </span>
              <div className="stack" style={{ gap: 10 }}>
                <span className="stage__num">Stage {String(i + 1).padStart(2, "0")}</span>
                <h2>{s.title}</h2>
                <p className="stage__body">{s.body}</p>
              </div>
            </div>
            <div className="stage__detail">
              <div>
                <h3>viabo support</h3>
                <ul>
                  {s.helps.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Typical services</h3>
                <div className="chips">
                  {s.services.map((x) => (
                    <span key={x} className="chip chip--static">
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <CtaBand title={c.cta.title} body={c.cta.body} />
    </>
  );
}
