import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ProjectsView from "@/components/ProjectsView";
import SectionHeading from "@/components/SectionHeading";
import {
  CATEGORIES,
  CATEGORY_META,
  type ProjectCategory,
  projects,
} from "@/data/projects";

type Params = Promise<{ category: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category }));
}

function isProjectCategory(value: string): value is ProjectCategory {
  return CATEGORIES.includes(value as ProjectCategory);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category } = await params;
  if (!isProjectCategory(category)) {
    return {
      title: "Projects",
      alternates: {
        canonical: "/projects/",
      },
    };
  }

  return {
    title: CATEGORY_META[category].title,
    alternates: {
      canonical: `/projects/${category}/`,
    },
  };
}

export default async function CategoryProjectsPage({ params }: { params: Params }) {
  const { category } = await params;
  if (!isProjectCategory(category)) {
    notFound();
  }

  const meta = CATEGORY_META[category];
  const categoryProjects = projects.filter((project) => project.category === category);
  const hasProjects = categoryProjects.length > 0;

  return (
    <Container className="space-y-8 py-12 md:py-16">
      <SectionHeading
        eyebrow="Projects"
        title={hasProjects ? meta.title : `${meta.title} case studies`}
        description={
          hasProjects
            ? meta.intro
            : `Detailed ${meta.title.toLowerCase()} case studies will be published progressively as roadmap projects move from Planned to In Progress to Completed.`
        }
      />
      <Suspense
        fallback={<div className="surface rounded-xl p-8 text-center text-slate-300">Loading projects…</div>}
      >
        <ProjectsView projects={projects} lockedCategory={category} />
      </Suspense>
    </Container>
  );
}
