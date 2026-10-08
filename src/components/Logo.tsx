import Image from "next/image";
import Link from "next/link";

// The viabo logo — mark and wordmark as one image. The mark always keeps the
// brand cyan (#00D8FE); the "viabo" wordmark switches with the theme so it
// stays legible: white on dark surfaces, ink on light ones. The .logo rules in
// globals.css show exactly one of the two. public/logo.png (all-cyan) and
// ../_backup/ hold the earlier versions.
export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="viabo home">
      <Image
        className="logo__img logo__img--light"
        src="/logo-dark-word.png"
        alt="viabo"
        width={1319}
        height={370}
        sizes="240px"
        priority
      />
      <Image
        className="logo__img logo__img--dark"
        src="/logo-white-word.png"
        alt=""
        aria-hidden="true"
        width={1319}
        height={370}
        sizes="240px"
        priority
      />
    </Link>
  );
}
