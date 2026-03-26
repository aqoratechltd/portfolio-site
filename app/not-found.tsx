import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric/10 rounded-full blur-[80px]" />
      <div className="relative text-center">
        <p
          className="text-xs font-mono text-electric uppercase tracking-widest mb-6"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          404 Error
        </p>
        <h1
          className="text-7xl md:text-9xl font-display font-extrabold text-gradient-electric mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          404
        </h1>
        <p className="text-xl text-mist max-w-md mx-auto mb-10">
          This page has been lost in the void. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-electric text-white font-medium electric-glow hover:bg-electric-dim transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
