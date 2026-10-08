import Link from "next/link";

export function CtaBand({
  title,
  body,
  cta = { label: "Book a walkthrough", href: "/contactus" },
}: {
  title: string;
  body?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div className="stack" style={{ gap: 12 }}>
          <h2>{title}</h2>
          {body && <p>{body}</p>}
        </div>
        <Link href={cta.href} className="btn btn--on-acc">
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
