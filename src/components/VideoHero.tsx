import Link from "next/link";

// Page hero with a looping video behind the copy. The video is decorative:
// muted, autoplaying and loops, with a scrim over it so the text keeps its
// contrast whatever frame is showing. Under prefers-reduced-motion the CSS
// hides it and the hero falls back to the brand gradient underneath.
export function VideoHero({
  src,
  poster = "/advisory-poster.jpg",
  eyebrow,
  title,
  sub,
  cta,
}: {
  src: string;
  poster?: string;
  eyebrow?: string;
  title: string;
  sub?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="video-hero">
      <video
        className="video-hero__media"
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="video-hero__scrim" aria-hidden="true" />
      <div className="container video-hero__content stack stack--lg">
        <div className="stack">
          {eyebrow && <span className="eyebrow video-hero__eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {sub && <p className="lede video-hero__sub">{sub}</p>}
        </div>
        {cta && (
          <div>
            <Link href={cta.href} className="btn video-hero__btn">
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
