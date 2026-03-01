type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-cyan-200">
      {label}
    </span>
  );
}
