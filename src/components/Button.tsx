import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5";
  const variantClass =
    variant === "primary"
      ? "border-cyan-400/60 bg-cyan-500/10 text-cyan-200 hover:border-cyan-300 hover:bg-cyan-500/20"
      : "border-slate-700 bg-slate-900/70 text-slate-100 hover:border-slate-500";

  return (
    <Link href={href} className={`${base} ${variantClass} ${className}`}>
      {children}
    </Link>
  );
}
