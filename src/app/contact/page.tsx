import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactHubPanel from "@/components/ContactHubPanel";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  alternates: {
    canonical: "/contact/",
  },
};

const contactLinks = [
  { label: "Email", href: "mailto:kasper@kaspergissel.dk" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "CV", href: "/pub.CV.pdf" },
];

export default function ContactPage() {
  return (
    <Container className="space-y-8 py-12 md:py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s connect"
        description="All contact options are always available, with a subtle optional 3D side element."
      />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="surface rounded-xl p-6">
          <ul className="space-y-3">
            {contactLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex w-full items-center justify-between rounded-md border border-slate-700 px-4 py-3 text-slate-100 hover:border-cyan-400/70 hover:text-cyan-200"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-slate-400">Open</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside aria-hidden="true">
          <ContactHubPanel />
        </aside>
      </section>
    </Container>
  );
}
