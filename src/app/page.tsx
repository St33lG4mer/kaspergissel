import type { Metadata } from "next";
import Button from "@/components/Button";
import Container from "@/components/Container";
import LabArchitecture from "@/components/LabArchitecture";
import ProjectCard from "@/components/ProjectCard";
import SecurityLabRoadmap from "@/components/SecurityLabRoadmap";
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
  const hasFeaturedCaseStudies = featured.length > 0;

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
          Building a hands-on security lab focused on attack simulation, detection engineering,
          automation, and governance.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/projects">View projects</Button>
          <Button href="/contact" variant="ghost">
            Get in touch
          </Button>
        </div>
      </section>

      <SecurityLabRoadmap />

      <LabArchitecture />

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Detection Engineering",
            copy: "Building detection logic and telemetry pipelines inside the SOC lab.",
          },
          {
            title: "Platform Reliability",
            copy: "Designing the infrastructure that powers attack simulation, monitoring, and automation.",
          },
          {
            title: "Risk Governance",
            copy: "Mapping operational controls to measurable security outcomes and ownership.",
          },
        ].map((pillar) => (
          <article key={pillar.title} className="surface rounded-xl p-5">
            <h2 className="text-lg font-semibold text-slate-100">{pillar.title}</h2>
            <p className="mt-2 text-slate-300">{pillar.copy}</p>
          </article>
        ))}
      </section>

      {hasFeaturedCaseStudies ? (
        <section className="space-y-5">
          <SectionHeading
            eyebrow="Featured"
            title="Selected projects"
            description="Completed case studies with concrete implementation details and outcomes."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} basePath="/projects" />
            ))}
          </div>
        </section>
      ) : (
        <section className="surface rounded-2xl border border-slate-800/80 p-6 md:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Case studies</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
            Detailed write-ups will be published progressively.
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            The roadmap above outlines the lab build sequence for 2026. Detailed case studies will be
            added here as projects move from Planned to In Progress to Completed.
          </p>
        </section>
      )}
    </Container>
  );
}
