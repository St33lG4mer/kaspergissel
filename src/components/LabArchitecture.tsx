"use client";

import { useState } from "react";

const ARCHITECTURE_LAYERS = [
  { label: "ATTACK", title: "Attack Simulation Lab" },
  { label: "INFRASTRUCTURE", title: "Victim Infrastructure" },
  { label: "OBSERVABILITY", title: "Log Collection Layer (Wazuh Agents)" },
  { label: "DETECTION", title: "Detection Layer (Suricata / Wazuh)" },
  { label: "DATA PLATFORM", title: "Data Platform (Elastic)" },
  { label: "THREAT INTELLIGENCE", title: "Threat Intelligence" },
  { label: "AUTOMATION", title: "SOC Automation Tool" },
  { label: "ANALYST", title: "Analyst / Local LLM" },
];

export default function LabArchitecture() {
  const [open, setOpen] = useState(false);

  return (
    <section className="surface rounded-2xl p-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            SECURITY LAB
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-100">
            Lab Architecture
          </h2>
          <p className="max-w-xl text-sm text-slate-400">
            A high-level view of how the lab components connect across attack simulation,
            monitoring, detection, automation, and analysis.
          </p>
        </div>
        <span
          className="text-slate-400 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="mt-8">
          <ol className="mx-auto flex max-w-5xl flex-col items-center gap-0">
            {ARCHITECTURE_LAYERS.map((layer, i) => (
              <li key={layer.title} className="flex w-full flex-col items-center">
                <div className="w-full max-w-xl rounded-xl border border-slate-800/80 bg-slate-950/65 px-4 py-4 md:max-w-3xl md:px-8 md:py-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300/85">
                    {layer.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-100 md:text-base">{layer.title}</p>
                </div>
                {i < ARCHITECTURE_LAYERS.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="my-2 h-8 w-px bg-gradient-to-b from-cyan-400/55 via-slate-600/55 to-transparent md:my-3 md:h-10"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}
