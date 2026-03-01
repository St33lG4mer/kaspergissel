import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 py-8">
      <Container className="flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Kasper Gissel</p>
        <p className="font-mono uppercase tracking-[0.16em] text-slate-500">Built for static export</p>
      </Container>
    </footer>
  );
}
