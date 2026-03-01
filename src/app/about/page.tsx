import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  return (
    <Container className="space-y-8 py-12 md:py-16">
      <SectionHeading
        eyebrow="About"
        title="Kasper Gissel"
        description="Security-focused engineer with a governance mindset and a bias for practical implementation."
      />

      <section className="surface rounded-xl p-6 text-slate-300">
        <p>
          I work across cybersecurity, engineering, and governance to help teams design resilient systems
          without unnecessary complexity. My focus is measurable improvement: faster detection, clearer
          ownership, and stronger delivery foundations.
        </p>
      </section>
    </Container>
  );
}
