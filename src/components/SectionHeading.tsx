type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">{title}</h2>
      {description ? <p className="max-w-3xl text-slate-300">{description}</p> : null}
    </div>
  );
}
