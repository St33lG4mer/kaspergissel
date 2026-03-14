import { Suspense } from "react";
import type { Metadata } from "next";
import Container from "@/components/Container";
import ProjectsView from "@/components/ProjectsView";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  alternates: {
    canonical: "/projects/",
  },
};

export default function ProjectsPage() {
  const hasProjects = projects.length > 0;

  return (
    <Container className="space-y-8 py-12 md:py-16">
      <SectionHeading
        eyebrow="Projects"
        title={hasProjects ? "Project overview" : "Case study archive"}
        description={
          hasProjects
            ? "Filter projects by tag, completion year, and sort order. Defaults are represented by a clean URL without query params."
            : "Detailed case studies will be published progressively as roadmap projects move from Planned to In Progress to Completed."
        }
      />
      <Suspense
        fallback={<div className="surface rounded-xl p-8 text-center text-slate-300">Loading projects…</div>}
      >
        <ProjectsView projects={projects} />
      </Suspense>
    </Container>
  );
}
