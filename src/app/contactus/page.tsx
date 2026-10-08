import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { contact as c, site } from "@/content/site";

export const metadata: Metadata = { title: c.meta.title, description: c.meta.description };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title={c.hero.title} sub={c.hero.sub} />
      <section className="section">
        <div className="container stack" style={{ maxWidth: 560, gap: 16 }}>
          <p style={{ color: "var(--mute)" }}>{c.hero.sub}</p>
          <a href={`mailto:${site.email}`} className="btn">
            Email us at {site.email}
          </a>
          <p>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--mute)" }}>
              Connect on LinkedIn
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
