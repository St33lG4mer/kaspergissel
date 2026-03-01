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

export const projects: Project[] = [
  {
    id: "siem-tuning-lab",
    title: "SIEM Tuning Lab",
    category: "cybersecurity",
    tags: ["siem", "defensive", "automation"],
    completedAt: "2026-01-18",
    updatedAt: "2026-02-12",
    summary:
      "Reduced noisy detections by introducing reproducible rule testing and confidence scoring.",
    problem:
      "Alert fatigue made high-severity incidents harder to identify quickly across the SOC queue.",
    approach:
      "Built a test harness for detection rules, baselined false positives, and added score thresholds tied to playbooks.",
    outcome:
      "Cut low-value alerts by 43% and improved median triage speed from 19 to 11 minutes.",
    stack: ["Python", "Sigma", "Elastic", "GitHub Actions"],
    links: {
      github: "https://github.com/",
      report: "https://example.com/",
    },
    featured: true,
    priority: 1,
    impactScore: 91,
  },
  {
    id: "ctf-training-platform",
    title: "CTF Training Platform",
    category: "cybersecurity",
    tags: ["ctf", "offensive", "platform"],
    completedAt: "2025-10-07",
    summary:
      "Designed a modular challenge platform for team onboarding and practical security drills.",
    problem:
      "New team members lacked safe, realistic environments for practicing adversarial techniques.",
    approach:
      "Created isolated challenge templates with automatic reset and embedded learning checkpoints.",
    outcome:
      "Onboarding time for core offensive workflows dropped by 30% over two cohorts.",
    stack: ["TypeScript", "Docker", "PostgreSQL", "Terraform"],
    links: {
      demo: "https://example.com/",
    },
    featured: true,
    priority: 3,
    impactScore: 80,
  },
  {
    id: "incident-playbook-revamp",
    title: "Incident Playbook Revamp",
    category: "cybersecurity",
    tags: ["ir", "defensive", "risk"],
    completedAt: "2025-06-03",
    summary:
      "Refactored incident playbooks into decision-driven flows tied to severity and business impact.",
    problem:
      "Playbooks were long, hard to navigate, and inconsistent across response teams.",
    approach:
      "Mapped current workflows, removed duplication, and introduced role-specific quick paths.",
    outcome:
      "Improved response consistency and reduced coordination overhead during high-pressure events.",
    stack: ["Miro", "Markdown", "Jira"],
    links: {
      report: "https://example.com/",
    },
    priority: 5,
    impactScore: 76,
  },
  {
    id: "edge-observability-foundation",
    title: "Edge Observability Foundation",
    category: "engineering",
    tags: ["platform", "automation"],
    completedAt: "2026-02-02",
    summary:
      "Established observability baseline for edge services with shared telemetry standards.",
    problem:
      "Operational blind spots delayed root cause analysis across distributed services.",
    approach:
      "Implemented standardized metrics, logs, and traces with a shared dashboard taxonomy.",
    outcome:
      "Lowered mean-time-to-diagnose and enabled faster release verification.",
    stack: ["OpenTelemetry", "Grafana", "Prometheus", "Go"],
    links: {
      report: "https://example.com/",
    },
    featured: true,
    priority: 2,
    impactScore: 88,
  },
  {
    id: "secure-ci-blueprint",
    title: "Secure CI Blueprint",
    category: "engineering",
    tags: ["automation", "compliance", "defensive"],
    completedAt: "2025-11-22",
    summary:
      "Built a reusable CI blueprint with policy checks and signing guardrails.",
    problem:
      "Inconsistent pipeline security controls created compliance drift between repositories.",
    approach:
      "Encapsulated controls in templates and enforced minimum checks via protected workflows.",
    outcome:
      "Raised baseline security posture while reducing setup time for new projects.",
    stack: ["GitHub Actions", "SLSA", "Node.js"],
    links: {
      github: "https://github.com/",
    },
    priority: 4,
    impactScore: 82,
  },
  {
    id: "risk-control-mapping",
    title: "Risk-Control Mapping",
    category: "governance",
    tags: ["risk", "compliance"],
    completedAt: "2026-01-09",
    summary:
      "Mapped operational controls directly to risk statements and ownership domains.",
    problem:
      "Stakeholders struggled to connect policy obligations with day-to-day technical controls.",
    approach:
      "Built a traceability model linking controls, risks, evidence, and accountable owners.",
    outcome:
      "Improved audit readiness and made risk conversations materially more actionable.",
    stack: ["Confluence", "Notion", "Spreadsheets"],
    links: {
      report: "https://example.com/",
    },
    featured: true,
    priority: 1,
    impactScore: 90,
  },
  {
    id: "vendor-assurance-workflow",
    title: "Vendor Assurance Workflow",
    category: "governance",
    tags: ["risk", "automation", "compliance"],
    completedAt: "2025-08-16",
    summary:
      "Streamlined third-party assurance reviews through repeatable evidence requests.",
    problem:
      "Manual vendor assessments consumed excessive time and produced inconsistent outcomes.",
    approach:
      "Defined risk tiers and automated evidence collection based on vendor profile.",
    outcome:
      "Reduced cycle time for low/medium risk vendors while preserving review quality.",
    stack: ["TypeScript", "Airtable", "Zapier"],
    links: {
      demo: "https://example.com/",
    },
    priority: 2,
    impactScore: 78,
  },
];
