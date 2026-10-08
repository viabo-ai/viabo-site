import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SolutionCards } from "@/components/SolutionCards";
import { solutionsIndex as c } from "@/content/site";

export const metadata: Metadata = { title: c.meta.title, description: c.meta.description };

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Solutions" title={c.hero.title} sub={c.hero.sub} />
      <section className="section">
        <div className="container">
          <SolutionCards />
        </div>
      </section>
      <CtaBand title="Sites that span several sectors or stages" body="Most projects do. A short conversation identifies the right starting point." />
    </>
  );
}
