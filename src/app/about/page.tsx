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
        description="Cybersecurity student focused on practical security engineering and governance."
      />

      <section className="surface rounded-xl p-6 text-slate-300">
        <p>
          I&apos;m studying cybersecurity with a focus on hands-on lab work and practical
          experimentation. My work spans security engineering, detection, and governance — building
          skills through self-directed projects, lab environments, and tooling.
        </p>
      </section>
    </Container>
  );
}
