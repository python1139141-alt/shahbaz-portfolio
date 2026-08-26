"use client";

import { Printer, ArrowDownToLine } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
    >
      <Printer className="h-4 w-4" />
      Print / Save as PDF
    </button>
  );
}

export function DownloadButton() {
  return (
    <a
      href="/resume"
      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
    >
      <ArrowDownToLine className="h-4 w-4" />
      Resume
    </a>
  );
}
