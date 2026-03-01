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
  return (
    <Container className="space-y-8 py-12 md:py-16">
      <SectionHeading
        eyebrow="Projects"
        title="Project overview"
        description="Filter projects by tag, completion year, and sort order. Defaults are represented by a clean URL without query params."
      />
      <Suspense
        fallback={<div className="surface rounded-xl p-8 text-center text-slate-300">Loading projects…</div>}
      >
        <ProjectsView projects={projects} />
      </Suspense>
    </Container>
  );
}
