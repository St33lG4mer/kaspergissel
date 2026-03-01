import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const featured = projects
    .filter((project) => project.featured)
    .sort((a, b) => (a.priority ?? 100) - (b.priority ?? 100))
    .slice(0, 3);

  return (
    <Container className="space-y-16 py-14 md:py-20">
      <section className="space-y-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
          Cybersecurity • Engineering • Governance
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-100 md:text-6xl">
          Building resilient systems where security, delivery, and governance align.
        </h1>
        <p className="max-w-2xl text-lg text-slate-300">
          I help teams close the gap between strategic risk decisions and practical technical execution.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/projects">View projects</Button>
          <Button href="/contact" variant="ghost">
            Get in touch
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Detection Engineering",
            copy: "Turn telemetry into high-signal detections with measurable quality gates.",
          },
          {
            title: "Platform Reliability",
            copy: "Build delivery and observability foundations that reduce operational risk.",
          },
          {
            title: "Risk Governance",
            copy: "Connect policy requirements to operational controls and ownership.",
          },
        ].map((pillar) => (
          <article key={pillar.title} className="surface rounded-xl p-5">
            <h2 className="text-lg font-semibold text-slate-100">{pillar.title}</h2>
            <p className="mt-2 text-slate-300">{pillar.copy}</p>
          </article>
        ))}
      </section>

      <section className="space-y-5">
        <SectionHeading
          eyebrow="Featured"
          title="Selected projects"
          description="A quick overview of recent work and measurable outcomes."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} basePath="/projects" />
          ))}
        </div>
      </section>

      <section className="surface glow-accent rounded-xl p-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Governance highlight</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-100">Risk-control mapping at execution level</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          The governance portfolio focuses on traceable decision-making: controls map to risk, evidence,
          and accountable owners without adding process overhead.
        </p>
        <div className="mt-4">
          <Link href="/projects/governance" className="text-cyan-300 hover:text-cyan-200">
            Explore governance projects →
          </Link>
        </div>
      </section>
    </Container>
  );
}
