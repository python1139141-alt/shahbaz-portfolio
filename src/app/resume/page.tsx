import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PrintButton } from "@/components/sections/ResumeActions";
import {
  PERSONAL,
  EXPERTISE,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
  PROJECTS,
  SKILL_GROUPS,
} from "@/lib/data";

export const metadata = {
  title: "Resume",
  description:
    "Resume of Shahbaz Ahmed — Full-Stack Mobile & Backend Engineer. Flutter, Python, Django, FastAPI, React, and more.",
};

export default function ResumePage() {
  return (
    <SiteShell>
      <div className="container-px mx-auto max-w-5xl py-12">
        <div className="mb-8 hidden print:hidden md:flex md:items-center md:justify-between">
          <Link href="/" className="font-display text-sm font-semibold">
            ← Back to portfolio
          </Link>
          <PrintButton />
        </div>

        {/* Printable document */}
        <article className="rounded-2xl border border-white/10 bg-surface/40 p-8 text-ink sm:p-12 print:border-none print:bg-white print:p-0 print:text-black">
          <header className="border-b border-white/10 pb-6 print:border-black/20">
            <h1 className="font-display text-4xl font-bold tracking-tight">
              {PERSONAL.name}
            </h1>
            <p className="mt-1 text-lg text-ink-soft print:text-black/70">
              {PERSONAL.role}
            </p>
            <p className="mt-3 text-sm text-ink-muted print:text-black/60">
              {PERSONAL.email} · {PERSONAL.github} · {PERSONAL.location}
            </p>
          </header>

          <section className="mt-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent print:text-black">
              Summary
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft print:text-black/80">
              {PERSONAL.intro} {PERSONAL.bio} {PERSONAL.philosophy}
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent print:text-black">
              Skills
            </h2>
            <div className="mt-3 space-y-2">
              {SKILL_GROUPS.map((g) => (
                <p key={g.id} className="text-sm print:text-black/80">
                  <span className="font-medium text-ink print:text-black">
                    {g.name}:
                  </span>{" "}
                  <span className="text-ink-soft print:text-black/70">
                    {g.skills.join(", ")}
                  </span>
                </p>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent print:text-black">
              Experience
            </h2>
            <div className="mt-3 space-y-4">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-base font-semibold">
                      {exp.company}
                    </h3>
                    <span className="text-xs text-ink-muted print:text-black/60">
                      {exp.period} · {exp.type}
                    </span>
                  </div>
                  <p className="text-sm text-ink-soft print:text-black/80">
                    {exp.role}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-soft print:text-black/80">
                    {exp.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent print:text-black">
              Projects
            </h2>
            <div className="mt-3 space-y-3">
              {PROJECTS.map((p) => (
                <div key={p.id}>
                  <h3 className="text-sm font-semibold text-ink print:text-black">
                    {p.name}{" "}
                    <span className="font-normal text-ink-muted print:text-black/60">
                      — {p.technologies.join(", ")}
                    </span>
                  </h3>
                  <p className="text-sm text-ink-soft print:text-black/80">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent print:text-black">
              Education
            </h2>
            <div className="mt-3 space-y-3">
              {EDUCATION.map((edu) => (
                <div key={edu.id}>
                  <h3 className="text-sm font-semibold text-ink print:text-black">
                    {edu.degree}{" "}
                    <span className="font-normal text-ink-muted print:text-black/60">
                      — {edu.school} ({edu.period})
                    </span>
                  </h3>
                  {edu.note && (
                    <p className="text-sm text-ink-soft print:text-black/80">
                      {edu.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent print:text-black">
              Certifications
            </h2>
            <div className="mt-3 space-y-2">
              {CERTIFICATIONS.map((cert) => (
                <p key={cert.id} className="text-sm print:text-black/80">
                  <span className="font-medium text-ink print:text-black">
                    {cert.name}
                  </span>{" "}
                  — {cert.provider} ({cert.date})
                </p>
              ))}
            </div>
          </section>
        </article>
      </div>
    </SiteShell>
  );
}
