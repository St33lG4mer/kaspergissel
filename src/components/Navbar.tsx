import Link from "next/link";
import Container from "@/components/Container";

const categories = [
  { href: "/projects/cybersecurity", label: "Cybersecurity" },
  { href: "/projects/engineering", label: "Engineering" },
  { href: "/projects/governance", label: "Governance" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/90 bg-slate-950/80 backdrop-blur">
      <Container className="py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="font-mono text-sm uppercase tracking-[0.22em] text-cyan-300">
            Kasper Gissel
          </Link>
          <nav className="flex items-center gap-6 text-sm text-slate-200">
            <Link href="/" className="hover:text-cyan-300">
              Home
            </Link>
            <Link href="/projects" className="hover:text-cyan-300">
              Projects
            </Link>
            <Link href="/about" className="hover:text-cyan-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-cyan-300">
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-400">
          {categories.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-800 px-3 py-1 hover:border-cyan-500/60 hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
}
