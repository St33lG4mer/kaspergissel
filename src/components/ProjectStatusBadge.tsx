type ProjectStatus = "Planned" | "In Progress" | "Completed";

type ProjectStatusBadgeProps = {
  status: ProjectStatus;
  className?: string;
};

const STATUS_THEME: Record<
  ProjectStatus,
  {
    badge: string;
    card: string;
    node: string;
    connector: string;
  }
> = {
  Planned: {
    badge: "border-slate-600/80 bg-slate-900/80 text-slate-300",
    card: "border-slate-800/90 bg-slate-950/60",
    node: "border-slate-700/80 bg-slate-900/80 text-slate-300 shadow-[0_0_0_1px_rgba(148,163,184,0.08)]",
    connector: "from-slate-600/55 via-slate-700/70 to-transparent",
  },
  "In Progress": {
    badge: "border-cyan-400/45 bg-cyan-500/15 text-cyan-100",
    card: "border-cyan-400/35 bg-slate-950/70 shadow-[0_0_0_1px_rgba(34,211,238,0.12)]",
    node: "border-cyan-400/55 bg-cyan-500/15 text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.2)]",
    connector: "from-cyan-400/65 via-cyan-500/45 to-transparent",
  },
  Completed: {
    badge: "border-emerald-300/35 bg-emerald-500/10 text-emerald-100",
    card: "border-emerald-300/30 bg-slate-950/70 shadow-[0_0_0_1px_rgba(110,231,183,0.12)]",
    node: "border-emerald-300/40 bg-emerald-500/12 text-emerald-100 shadow-[0_0_0_1px_rgba(110,231,183,0.16)]",
    connector: "from-emerald-300/55 via-emerald-400/35 to-transparent",
  },
};

export { STATUS_THEME };
export type { ProjectStatus };

export default function ProjectStatusBadge({ status, className }: ProjectStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.16em] ${STATUS_THEME[status].badge} ${className ?? ""}`}
    >
      {status}
    </span>
  );
}