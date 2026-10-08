import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { VideoHero } from "@/components/VideoHero";
import { partners as c } from "@/content/site";

export const metadata: Metadata = { title: c.meta.title, description: c.meta.description };

export default function PartnersPage() {
  return (
    <>
      <link rel="preload" as="image" href="/partners-poster.jpg" fetchPriority="high" />
      <link rel="preload" as="video" href={c.video.src} fetchPriority="high" />
      <VideoHero src={c.video.src} poster="/partners-poster.jpg" title={c.hero.title} sub={c.hero.sub} cta={c.cta.cta} />

      <section className="section">
        <div className="container stack stack--lg">
          <h2>{c.who.title}</h2>
          <div className="grid-3">
            {c.who.items.map((w) => (
              <div key={w.title} className="feature">
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container stack stack--lg">
          <h2>{c.how.title}</h2>
          <div className="grid-3">
            {c.how.items.map((s, i) => (
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

      <section className="section">
        <div className="container grid-2">
          <h2>{c.benefits.title}</h2>
          <ul className="values">
            {c.benefits.items.map((b) => (
              <li key={b.lead}>
                <strong>{b.lead}</strong>
                <p>{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={c.cta.title} body={c.cta.body} cta={c.cta.cta} />
    </>
  );
}
