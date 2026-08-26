import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PERSONAL, SOCIALS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/40">
      <div className="container-px mx-auto max-w-8xl py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <Link href="/" className="font-display text-2xl font-bold tracking-tighter">
              {PERSONAL.name}
            </Link>
            <p className="mt-4 text-ink-soft">{PERSONAL.role}</p>
            <p className="mt-4 text-balance text-sm leading-relaxed text-ink-muted">
              {PERSONAL.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <p className="accent-label mb-3">Navigate</p>
              <ul className="space-y-2 text-sm text-ink-soft">
                {[
                  ["About", "/about"],
                  ["Experience", "/experience"],
                  ["Projects", "/projects"],
                  ["Skills", "/skills"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-accent">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="accent-label mb-3">Connect</p>
              <ul className="space-y-2 text-sm text-ink-soft">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 hover:text-accent"
                    >
                      {s.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.2em]">
            {PERSONAL.brand.join("  ×  ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
