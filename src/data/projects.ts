import type { Tag } from "@/data/tags";

export const CATEGORIES = ["cybersecurity", "engineering", "governance"] as const;

export type ProjectCategory = (typeof CATEGORIES)[number];

export const CATEGORY_META: Record<
  ProjectCategory,
  { title: string; intro: string }
> = {
  cybersecurity: {
    title: "Cybersecurity",
    intro:
      "Offensive and defensive work across detection, incident response, and practical security operations.",
  },
  engineering: {
    title: "Engineering",
    intro:
      "Systems-focused engineering with strong emphasis on maintainability, observability, and delivery speed.",
  },
  governance: {
    title: "Governance",
    intro:
      "Risk-aware governance and control design that connects policy intent with execution reality.",
  },
};

export type ProjectLinks = {
  github?: string;
  demo?: string;
  report?: string;
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  tags: Tag[];
  completedAt: string;
  updatedAt?: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  links: ProjectLinks;
  featured?: boolean;
  priority?: number;
  impactScore?: number;
};

export const projects: Project[] = [];
