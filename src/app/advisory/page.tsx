import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { VideoHero } from "@/components/VideoHero";
import { advisory as c } from "@/content/site";

export const metadata: Metadata = { title: c.meta.title, description: c.meta.description };

export default function AdvisoryPage() {
  return (
    <>
      <VideoHero src={c.video.src} title={c.hero.title} sub={c.hero.sub} cta={c.cta.cta} />

      <section className="section">
        <div className="container stack stack--lg">
          <h2>{c.areas.title}</h2>
          <div className="grid-3">
            {c.areas.items.map((a) => (
              <div key={a.title} className="feature">
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container stack stack--lg">
          <h2>{c.process.title}</h2>
          <div className="grid-3">
            {c.process.items.map((s, i) => (
              <div key={s.title} className="step">
                <span className="step__num">{i + 1}</span>
                <div className="stack" style={{ gap: 6 }}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={c.cta.title} body={c.cta.body} cta={c.cta.cta} />
    </>
  );
}
