import { ArrowUpRight, GraduationCap, Award, Briefcase, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container, SectionLabel, TechBadge, ArrowLink } from "@/components/ui";
import {
  EXPERIENCE,
  CLIENT_WORK,
  EDUCATION,
  CERTIFICATIONS,
} from "@/lib/data";

export const metadata = {
  title: "Experience",
  description:
    "Shahbaz Ahmed's professional experience — Devnox Solutions, Petalnex Ltd, Codematics Uraan, client & freelance work, education, and certifications.",
};

const PROGRESSION = [
  "Flutter Intern",
  "Software / Flutter Developer",
  "Full-Stack Developer",
];

export default function ExperiencePage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Experience"
        title={
          <>
            From intern to
            <br />
            <span className="text-accent">full-stack</span>.
          </>
        }
        description="A clear progression through real company roles and client work — from my first Flutter internship to shipping full-stack products."
      >
        <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
          {PROGRESSION.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span
                className={
                  i === PROGRESSION.length - 1 ? "text-accent" : "text-ink-soft"
                }
              >
                {step}
              </span>
              {i < PROGRESSION.length - 1 && (
                <span className="text-ink-muted">→</span>
              )}
            </span>
          ))}
        </div>
      </PageHeader>

      {/* Professional Experience */}
      <section className="section-pad">
        <Container>
          <div className="mb-14 flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-accent" />
            <SectionLabel>Professional experience</SectionLabel>
          </div>

          <div className="relative">
            <div className="absolute left-[7px] top-2 hidden h-full w-px bg-white/10 md:block" />
            <div className="space-y-16">
              {EXPERIENCE.map((exp) => (
                <Reveal key={exp.id}>
                  <div className="grid gap-6 md:grid-cols-12">
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-4 md:block">
                        <span className="relative z-10 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-background md:block" />
                        <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                          {exp.period}
                        </p>
                      </div>
                      <span className="mt-2 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] uppercase tracking-wider text-accent">
                        {exp.type}
                      </span>
                      {exp.location && (
                        <p className="mt-3 text-xs text-ink-muted">
                          {exp.location}
                        </p>
                      )}
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-xs text-ink-soft hover:text-accent"
                        >
                          {exp.linkLabel}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>

                    <div className="md:col-span-9">
                      <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                        {exp.company}
                      </h3>
                      <p className="mt-1 text-accent">{exp.role}</p>
                      <p className="mt-3 max-w-2xl text-ink-soft">
                        {exp.summary}
                      </p>

                      <Stagger className="mt-6 grid gap-3 sm:grid-cols-2">
                        {exp.responsibilities.map((r) => (
                          <StaggerItem
                            key={r}
                            className="flex gap-3 rounded-xl border border-white/10 bg-card/60 p-4 text-sm leading-relaxed text-ink-soft"
                          >
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {r}
                          </StaggerItem>
                        ))}
                      </Stagger>

                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {exp.technologies.map((t) => (
                          <TechBadge key={t}>{t}</TechBadge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Client & Freelance Work */}
      <section className="border-t border-white/10 bg-surface/30 section-pad">
        <Container>
          <div className="mb-14 flex items-center gap-3">
            <FolderGit2 className="h-5 w-5 text-accent" />
            <SectionLabel>Client &amp; freelance work</SectionLabel>
          </div>

          <Stagger className="grid gap-5 md:grid-cols-3">
            {CLIENT_WORK.map((c) => (
              <StaggerItem
                key={c.id}
                className="surface-card flex flex-col p-7"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  {c.type}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-accent">{c.role}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                  {c.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-ink-soft hover:text-accent"
                    >
                      {c.linkLabel}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {c.projectSlug && (
                    <Link
                      href={`/projects/${c.projectSlug}`}
                      className="inline-flex items-center gap-1 text-sm text-ink-soft hover:text-accent"
                    >
                      View project
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Education */}
      <section className="section-pad">
        <Container>
          <div className="mb-14 flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-accent" />
            <SectionLabel>Education</SectionLabel>
          </div>

          <Stagger className="grid gap-5 sm:grid-cols-2">
            {EDUCATION.map((edu) => (
              <StaggerItem key={edu.id} className="surface-card p-7">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  {edu.period}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-ink-soft">{edu.school}</p>
                {edu.note && (
                  <span className="mt-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] uppercase tracking-wider text-accent">
                    {edu.note}
                  </span>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Certifications */}
      <section className="border-t border-white/10 bg-surface/30 section-pad">
        <Container>
          <div className="mb-14 flex items-center gap-3">
            <Award className="h-5 w-5 text-accent" />
            <SectionLabel>Certifications</SectionLabel>
          </div>

          <Stagger className="grid gap-5 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <StaggerItem
                key={cert.id}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-card p-7 transition-colors hover:border-white/25"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {cert.provider}
                  </p>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  {cert.date}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-16">
            <ArrowLink href="/projects">See it all in my work →</ArrowLink>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
