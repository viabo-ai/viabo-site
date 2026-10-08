import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Art } from "@/components/Art";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { LifecycleStrip } from "@/components/SolutionCards";
import { lifecycle, sectors } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = sectors.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.meta.title, description: s.meta.description };
}

export default async function SectorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = sectors.find((x) => x.slug === slug);
  if (!s) notFound();
  const stages = s.stages.map((id) => lifecycle.stages.find((x) => x.id === id)).filter((x) => x !== undefined);

  return (
    <>
      <PageHero
        icon={s.icon}
        title={s.hero.title}
        sub={s.hero.sub}
        cta={{ label: "Book a walkthrough", href: "/contactus" }}
      />

      <section className="container">
        <div className="split">
          <div className="stack">
            <h2>{s.main.title}</h2>
            {s.main.body && <p>{s.main.body}</p>}
            <div className="lists">
              <div>
                <h3>What this enables</h3>
                <ul>
                  {s.main.enables.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Value</h3>
                <ul>
                  {s.main.value.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="split__art">
            {s.main.image ? (
              <img src={s.main.image} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            ) : (
              <Art kind={s.main.art} />
            )}
          </div>
        </div>

        {s.extra.map((x, i) => (
          <div key={x.title} className={`split${i % 2 === 0 ? " split--flip" : ""}`}>
            <div className="stack">
              <h2>{x.title}</h2>
              <p>{x.body}</p>
            </div>
            <div className="split__art">
              {x.image ? (
                <img src={x.image} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              ) : (
                <Art kind={x.art} />
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="section section--tint">
        <div className="container stack stack--lg">
          <div className="stack">
            <span className="eyebrow">Across the lifecycle</span>
            <h2>Key lifecycle stages for {s.label.toLowerCase()}</h2>
          </div>
          <div className="grid-3">
            {stages.map((st) => (
              <Link key={st.id} href={`/solutions/lifecycle#${st.id}`} className="card">
                <span className="icon-badge">
                  <Icon name={st.icon} />
                </span>
                <h3>{st.title}</h3>
                <p>{st.body}</p>
                <span className="arrow-link">View stage</span>
              </Link>
            ))}
          </div>
          <LifecycleStrip highlight={s.stages} />
        </div>
      </section>

      <CtaBand title={s.cta.title} body={s.cta.body} />
    </>
  );
}
