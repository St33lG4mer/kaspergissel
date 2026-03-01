"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import type { Project, ProjectCategory } from "@/data/projects";
import { TAGS } from "@/data/tags";

type SortOption = "newest" | "oldest";

type ProjectsViewProps = {
  projects: Project[];
  lockedCategory?: ProjectCategory;
};

const isValidSort = (value: string | null): value is SortOption =>
  value === "newest" || value === "oldest";

export default function ProjectsView({ projects, lockedCategory }: ProjectsViewProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const baseProjects = useMemo(
    () => (lockedCategory ? projects.filter((item) => item.category === lockedCategory) : projects),
    [lockedCategory, projects],
  );

  const availableYears = useMemo(() => {
    const years = baseProjects.map((item) => new Date(item.completedAt).getFullYear());
    return [...new Set(years)].sort((a, b) => b - a);
  }, [baseProjects]);

  const rawTag = searchParams.get("tag");
  const rawYear = searchParams.get("year");
  const rawSort = searchParams.get("sort");

  const tag = rawTag && TAGS.includes(rawTag as (typeof TAGS)[number]) ? rawTag : null;
  const parsedYear = rawYear ? Number.parseInt(rawYear, 10) : null;
  const year = parsedYear && availableYears.includes(parsedYear) ? parsedYear : null;
  const sort: SortOption = isValidSort(rawSort) ? rawSort : "newest";

  const normalizedSearch = useMemo(() => {
    const params = new URLSearchParams();

    if (tag) {
      params.set("tag", tag);
    }

    if (year) {
      params.set("year", String(year));
    }

    if (sort === "oldest") {
      params.set("sort", "oldest");
    }

    return params.toString();
  }, [sort, tag, year]);

  useEffect(() => {
    const current = searchParams.toString();
    if (current !== normalizedSearch) {
      const href = normalizedSearch ? `${pathname}?${normalizedSearch}` : pathname;
      router.replace(href, { scroll: false });
    }
  }, [normalizedSearch, pathname, router, searchParams]);

  const filtered = useMemo(() => {
    const result = baseProjects
      .filter((item) => (tag ? item.tags.includes(tag as (typeof TAGS)[number]) : true))
      .filter((item) => (year ? new Date(item.completedAt).getFullYear() === year : true))
      .sort((a, b) => {
        const aDate = new Date(a.completedAt).getTime();
        const bDate = new Date(b.completedAt).getTime();
        return sort === "newest" ? bDate - aDate : aDate - bDate;
      });

    return result;
  }, [baseProjects, sort, tag, year]);

  const applyParam = (next: { tag?: string; year?: string; sort?: SortOption }) => {
    const params = new URLSearchParams(normalizedSearch);

    if (next.tag !== undefined) {
      if (next.tag) {
        params.set("tag", next.tag);
      } else {
        params.delete("tag");
      }
    }

    if (next.year !== undefined) {
      if (next.year) {
        params.set("year", next.year);
      } else {
        params.delete("year");
      }
    }

    if (next.sort !== undefined) {
      if (next.sort === "newest") {
        params.delete("sort");
      } else {
        params.set("sort", next.sort);
      }
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const reset = () => router.push(pathname, { scroll: false });
  const basePath = lockedCategory ? `/projects/${lockedCategory}` : "/projects";

  return (
    <section className="space-y-6">
      <div className="surface rounded-xl p-4 md:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
              Filters ({filtered.length} result{filtered.length === 1 ? "" : "s"})
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => applyParam({ tag: "" })}
                className={`rounded-md border px-3 py-1.5 text-sm ${
                  !tag
                    ? "border-cyan-400/70 bg-cyan-500/20 text-cyan-100"
                    : "border-slate-700 text-slate-200 hover:border-slate-500"
                }`}
              >
                All tags
              </button>
              {TAGS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => applyParam({ tag: item })}
                  className={`rounded-md border px-3 py-1.5 text-sm capitalize ${
                    tag === item
                      ? "border-cyan-400/70 bg-cyan-500/20 text-cyan-100"
                      : "border-slate-700 text-slate-200 hover:border-slate-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <label className="flex items-center gap-2 text-slate-300">
              Year
              <select
                value={year ?? ""}
                onChange={(event) => applyParam({ year: event.target.value })}
                className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1.5"
              >
                <option value="">All</option>
                {availableYears.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 text-slate-300">
              Sort
              <select
                value={sort}
                onChange={(event) => applyParam({ sort: event.target.value as SortOption })}
                className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1.5"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </label>

            <button
              type="button"
              onClick={reset}
              className="rounded-md border border-slate-700 px-3 py-1.5 text-slate-200 hover:border-slate-500"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {filtered.length ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} basePath={basePath} />
          ))}
        </div>
      ) : (
        <div className="surface rounded-xl p-8 text-center text-slate-300">
          No projects match the current filters.
        </div>
      )}
    </section>
  );
}
