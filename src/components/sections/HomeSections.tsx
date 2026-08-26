"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  PERSONAL,
  EXPERTISE,
  EXPERIENCE,
  PROJECTS,
  SKILL_GROUPS,
} from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container, SectionLabel, TechBadge, ArrowLink } from "@/components/ui";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ProjectMediaOverlay, LiveBadge } from "@/components/ProjectMediaOverlay";

export function Statement() {
  return (
    <section className="section-pad">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionLabel>01 — Who I am</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">
              A builder at the intersection of{" "}
              <span className="text-accent">mobile, backend &amp; web</span>.
            </h2>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <Reveal>
              <p className="text-balance text-xl leading-relaxed text-ink-soft sm:text-2xl">
                {PERSONAL.intro} {PERSONAL.bio}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">
                {PERSONAL.philosophy} My engineering philosophy is simple:
                clean code, maintainable architecture, and performance — built
                around the people who actually use the product.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ExpertisePreview() {
  return (
    <section className="section-pad border-t border-white/10 bg-surface/30">
      <Container>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>02 — Core expertise</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tighter sm:text-5xl">
              Three disciplines, one standard.
            </h2>
          </div>
          <ArrowLink href="/skills">All skills</ArrowLink>
        </div>

        <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {EXPERTISE.map((area) => (
            <StaggerItem key={area.id} className="bg-background p-8">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-accent">
                  {area.index}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {area.focus}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {area.skills.map((s) => (
                  <TechBadge key={s}>{s}</TechBadge>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

export function ExperienceHighlights() {
  return (
    <section className="section-pad">
      <Container>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>03 — Experience</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tighter sm:text-5xl">
              Working, shipping, learning.
            </h2>
          </div>
          <ArrowLink href="/experience">Full timeline</ArrowLink>
        </div>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {EXPERIENCE.map((exp) => (
            <StaggerItem key={exp.id} className="surface-card p-7">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                {exp.period}
              </p>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                {exp.company}
              </h3>
              <p className="mt-1 text-sm text-accent">{exp.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {exp.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {exp.technologies.slice(0, 4).map((t) => (
                  <TechBadge key={t}>{t}</TechBadge>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

export function SelectedProjects() {
  const featured = PROJECTS.slice(0, 4);
  return (
    <section id="selected-work" className="section-pad border-t border-white/10 bg-surface/30">
      <Container>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>04 — Selected work</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tighter sm:text-5xl">
              Projects that ship.
            </h2>
          </div>
          <ArrowLink href="/projects">All projects</ArrowLink>
        </div>

        <Stagger className="grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <StaggerItem key={project.id}>
              <Link
                href={`/projects/${project.slug}`}
                className={`group block overflow-hidden rounded-2xl border border-white/10 bg-card transition-colors hover:border-white/25 ${
                  i === 0 ? "md:col-span-2 md:grid md:grid-cols-2" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.name}
                      loading="lazy"
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                        i === 0 ? "h-64 md:h-full" : "h-52"
                      }`}
                    />
                  ) : (
                    <ProjectVisual
                      project={project}
                      className={i === 0 ? "h-64 md:h-full" : "h-52"}
                    />
                  )}
                  {project.liveUrl && (
                    <span className="absolute left-4 top-4">
                      <LiveBadge />
                    </span>
                  )}
                  <ProjectMediaOverlay project={project} />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      {project.categories.join(" · ")}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-muted transition-colors group-hover:text-accent" />
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {project.tagline}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <TechBadge key={t}>{t}</TechBadge>
                    ))}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

export function TechPreview() {
  const top = SKILL_GROUPS.flatMap((g) => g.skills)
    .filter((v, i, a) => a.indexOf(v) === i)
    .slice(0, 12);
  return (
    <section className="section-pad">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>05 — Stack</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tighter sm:text-5xl">
              Tools I reach for.
            </h2>
          </div>
          <ArrowLink href="/skills">Explore the stack</ArrowLink>
        </div>
        <Reveal>
          <div className="flex flex-wrap gap-3">
            {top.map((t) => (
              <span
                key={t}
                className="rounded-xl border border-white/10 bg-card px-5 py-3 font-display text-lg font-medium tracking-tight transition-colors hover:border-accent hover:text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function CTA() {
  return (
    <section className="section-pad border-t border-white/10">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface px-8 py-20 text-center sm:px-16">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 80% at 50% 0%, rgba(198,255,0,0.12), transparent 60%)",
              }}
            />
            <div className="relative">
              <p className="accent-label mb-6">Let&apos;s collaborate</p>
              <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[0.95] tracking-tightest sm:text-6xl">
                Let&apos;s build something{" "}
                <span className="text-accent">useful</span>.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-ink-soft">
                Have a product, an API, or a mobile app in mind? I&apos;m
                available for freelance and contract engineering work.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact#contact-form"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {PERSONAL.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
