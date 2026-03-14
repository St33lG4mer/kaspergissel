import SectionHeading from "@/components/SectionHeading";
import Tag from "@/components/Tag";
import ProjectStatusBadge, { STATUS_THEME, type ProjectStatus } from "@/components/ProjectStatusBadge";

type RoadmapCategory = "Cybersecurity" | "Engineering" | "Governance";

type RoadmapItem = {
  title: string;
  status: ProjectStatus;
  category: RoadmapCategory;
  tags: string[];
  description: string;
  detailsLabel: string;
  details: string[];
};

const roadmapItems: RoadmapItem[] = [
  {
    title: "Attack Simulation Lab",
    status: "Planned",
    category: "Cybersecurity",
    tags: ["offensive", "defensive", "lab"],
    description:
      "Simulates real-world attacks in a controlled environment using attacker and victim virtual machines. Generates realistic logs and artifacts for detection experiments.",
    detailsLabel: "Focus areas",
    details: ["SSH brute force", "Network scanning", "Reverse shells", "Attack telemetry generation"],
  },
  {
    title: "Home SOC Lab",
    status: "Planned",
    category: "Cybersecurity",
    tags: ["detection", "SIEM", "platform"],
    description:
      "Build a personal SOC-style monitoring environment that collects and analyzes logs from the attack lab.",
    detailsLabel: "Stack",
    details: ["Wazuh", "Elastic", "Suricata", "pfSense"],
  },
  {
    title: "SOC Automation Tool",
    status: "Planned",
    category: "Engineering",
    tags: ["automation", "IR", "platform"],
    description:
      "A Python tool that parses security logs, enriches suspicious IP addresses, and generates automated incident reports.",
    detailsLabel: "Features",
    details: [
      "Log parsing",
      "IP enrichment",
      "WHOIS lookup",
      "geoIP",
      "Threat scoring",
      "Incident report generation",
    ],
  },
  {
    title: "Threat Intelligence Aggregator",
    status: "Planned",
    category: "Cybersecurity",
    tags: ["threatintel", "automation"],
    description:
      "Aggregates threat intelligence feeds and normalizes indicators of compromise for use in the SOC lab.",
    detailsLabel: "Sources",
    details: ["AbuseIPDB", "AlienVault OTX", "PhishTank"],
  },
  {
    title: "Phishing Awareness Simulator",
    status: "Planned",
    category: "Cybersecurity",
    tags: ["awareness", "defensive"],
    description:
      "Simulates phishing campaigns to measure user awareness and analyze click behavior.",
    detailsLabel: "Metrics",
    details: ["Click rate", "Credential submission rate", "Reporting rate"],
  },
  {
    title: "Secure Local LLM Lab",
    status: "Planned",
    category: "Engineering",
    tags: ["LLM", "AI", "security"],
    description:
      "Explores how organizations can safely use local AI models for security workflows.",
    detailsLabel: "Focus",
    details: [
      "Local LLM deployment",
      "Prompt logging",
      "Security log analysis",
      "AI-assisted incident triage",
    ],
  },
];

const roadmapPhases = [
  {
    title: "PHASE 1 · FOUNDATION",
    items: roadmapItems.slice(0, 2),
  },
  {
    title: "PHASE 2 · DETECTION & AUTOMATION",
    items: roadmapItems.slice(2, 4),
  },
  {
    title: "PHASE 3 · HUMAN + AI",
    items: roadmapItems.slice(4, 6),
  },
];

function CategoryIcon({ category }: { category: RoadmapCategory }) {
  if (category === "Engineering") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-sky-300">
        <path
          d="M10.2 3.5 5 6.5v5l5.2 3 5.1-3v-5l-5.1-3Zm0 1.7 3.5 2-3.5 2-3.5-2 3.5-2Zm-3.8 3.4 3.1 1.8v3.6l-3.1-1.8V8.6Zm4.5 5.4v-3.6l3.1-1.8v3.6l-3.1 1.8Z"
          fill="currentColor"
        />
        <path
          d="M17.5 11.1v2.1l1.8 1v2.2l-1.8 1v2.1l3.6-2.1v-4.2l-3.6-2.1Z"
          fill="currentColor"
          opacity="0.72"
        />
      </svg>
    );
  }

  if (category === "Governance") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-violet-300">
        <path
          d="M12 2.5 4.5 5.2v6.2c0 4.3 2.7 8.2 7.5 10.1 4.8-1.9 7.5-5.8 7.5-10.1V5.2L12 2.5Zm0 2 5.4 2v4.9c0 3.3-2 6.3-5.4 8-3.4-1.7-5.4-4.7-5.4-8V6.5l5.4-2Zm-2.2 8.9 1.5 1.5 3.5-4.1 1.2 1-4.3 5.1-2.8-2.7 1-1Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-cyan-300">
      <path
        d="M12 2.5 4.5 5.7v5.1c0 4.7 2.9 8.9 7.5 10.7 4.6-1.8 7.5-6 7.5-10.7V5.7L12 2.5Zm0 2.2 5.1 2.2v4c0 3.6-2.1 6.8-5.1 8.3-3-1.5-5.1-4.7-5.1-8.3v-4L12 4.7Zm-1.9 3.4h3.8v1.5h-2.3v1.8h2v1.5h-2v2.8h-1.5V8.1Zm4.6 0h1.5v7.6h-1.5V8.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function SecurityLabRoadmap() {
  const flatRoadmap = roadmapPhases.flatMap((phase) => phase.items);

  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="Roadmap"
        title="2026 Security Lab Roadmap"
        description="This roadmap outlines the systems I’m building to simulate attacks, detect them, and automate response inside a personal security lab."
      />
      <p className="max-w-3xl text-slate-300">Each phase builds toward a practical SOC-style environment.</p>

      <div className="surface glow-accent rounded-2xl border border-slate-800/80 p-4 md:p-6">
        <div className="grid gap-5 md:gap-6">
          {roadmapPhases.map((phase, phaseIndex) => (
            <div key={phase.title} className="space-y-4 md:space-y-5">
              <div className="md:grid md:grid-cols-[72px_minmax(0,1fr)] md:gap-5">
                <div className="hidden md:block" />
                <div className="space-y-2.5 md:space-y-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    {phase.title}
                  </p>
                  <span
                    aria-hidden="true"
                    className="block h-px w-full bg-gradient-to-r from-slate-600/85 via-slate-600/45 to-transparent"
                  />
                </div>
              </div>

              {phase.items.map((item) => {
                const index = flatRoadmap.indexOf(item);
                const isLast = index === flatRoadmap.length - 1;
                const theme = STATUS_THEME[item.status];

                return (
                  <article
                    key={item.title}
                    className="grid gap-3 md:grid-cols-[72px_minmax(0,1fr)] md:gap-5"
                    aria-label={`${item.title} roadmap item`}
                  >
                    <div className="relative hidden md:flex md:justify-center">
                      {!isLast ? (
                        <span
                          aria-hidden="true"
                          className={`absolute top-12 bottom-[-1.25rem] left-1/2 w-px -translate-x-1/2 bg-gradient-to-b ${theme.connector}`}
                        />
                      ) : null}
                      <div
                        className={`relative mt-1 flex h-10 w-10 items-center justify-center rounded-full border ${theme.node}`}
                      >
                        <span className="font-mono text-xs">0{index + 1}</span>
                      </div>
                    </div>

                    <div
                      className={`rounded-2xl border p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-sm ${theme.card}`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                            <ProjectStatusBadge status={item.status} />
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-slate-400">
                              <CategoryIcon category={item.category} />
                              <span>{item.category}</span>
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold tracking-tight text-slate-100">{item.title}</h3>
                        </div>
                        <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300 md:hidden">
                          Stage 0{index + 1}
                        </span>
                      </div>

                      <p className="mt-4 max-w-3xl text-slate-300">{item.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Tag key={tag} label={tag} />
                        ))}
                      </div>

                      <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                          {item.detailsLabel}
                        </p>
                        <ul className="mt-3 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
                          {item.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2">
                              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}

              {phaseIndex < roadmapPhases.length - 1 ? (
                <div className="md:grid md:grid-cols-[72px_minmax(0,1fr)] md:gap-5">
                  <div className="hidden md:block" />
                  <div className="h-px w-full bg-gradient-to-r from-slate-700/90 via-slate-600/40 to-transparent" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}