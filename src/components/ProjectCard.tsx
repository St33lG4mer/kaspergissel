"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/data/projects";
import Tag from "@/components/Tag";

type ProjectCardProps = {
  project: Project;
  basePath: string;
};

function formatDate(dateValue: string) {
  const date = new Date(dateValue);
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
}

export default function ProjectCard({ project, basePath }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="surface group rounded-xl p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-400/60">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
          <p className="mt-1 text-sm text-slate-400">Completed: {formatDate(project.completedAt)}</p>
          {project.updatedAt ? (
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
              Updated: {formatDate(project.updatedAt)}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Link key={tag} href={`${basePath}?tag=${tag}`}>
              <Tag label={tag} />
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-4 text-slate-300">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
        {project.stack.map((item) => (
          <span key={item} className="rounded border border-slate-700/80 px-2 py-1">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
        {project.links.github ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:text-cyan-200"
          >
            GitHub
          </a>
        ) : null}
        {project.links.demo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:text-cyan-200"
          >
            Demo
          </a>
        ) : null}
        {project.links.report ? (
          <a
            href={project.links.report}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:text-cyan-200"
          >
            Report
          </a>
        ) : null}
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="ml-auto rounded border border-slate-700 px-3 py-1.5 text-slate-200 hover:border-cyan-500/70"
        >
          {expanded ? "Hide details" : "Read more"}
        </button>
      </div>

      {expanded ? (
        <div className="mt-5 grid gap-4 border-t border-slate-800 pt-4 text-sm text-slate-300 md:grid-cols-3">
          <div>
            <h4 className="mb-1 font-medium text-slate-100">Problem</h4>
            <p>{project.problem}</p>
          </div>
          <div>
            <h4 className="mb-1 font-medium text-slate-100">Approach</h4>
            <p>{project.approach}</p>
          </div>
          <div>
            <h4 className="mb-1 font-medium text-slate-100">Outcome</h4>
            <p>{project.outcome}</p>
          </div>
        </div>
      ) : null}
    </article>
  );
}
