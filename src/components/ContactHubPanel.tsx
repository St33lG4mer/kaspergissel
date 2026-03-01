"use client";

import dynamic from "next/dynamic";

const ContactHub3D = dynamic(() => import("@/components/ContactHub3D"), {
  ssr: false,
  loading: () => (
    <div className="surface flex h-72 items-center justify-center rounded-xl text-sm text-slate-400">
      Loading 3D contact hub…
    </div>
  ),
});

export default function ContactHubPanel() {
  return <ContactHub3D />;
}
