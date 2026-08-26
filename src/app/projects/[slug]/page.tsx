import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container, SectionLabel, TechBadge } from "@/components/ui";
import { PROJECTS, PERSONAL, getProject } from "@/lib/data";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <SiteShell>
      <Container>
        <Reveal>
          <div className="pt-28">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              All projects
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-10">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  {project.categories.join(" · ")}
                </span>
                <span className="font-mono text-xs text-ink-muted">
                  / {project.year}
                </span>
                {project.company && (
                  <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-ink-soft">
                    {project.company}
                  </span>
                )}
                {project.note && (
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-accent">
                    {project.note}
                  </span>
                )}
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[0.95] tracking-tightest sm:text-6xl">
                {project.name}
              </h1>
              <p className="mt-4 max-w-2xl text-xl text-ink-soft">
                {project.tagline}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>

      <section className="section-pad">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel>Overview</SectionLabel>
              <Reveal>
                <p className="mt-5 text-balance text-xl leading-relaxed text-ink sm:text-2xl">
                  {project.description}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-6 text-ink-soft">
                  This project sits within my work across{" "}
                  {project.categories.join(", ")} — built with a focus on
                  clean, maintainable architecture and a reliable user
                  experience.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <SectionLabel>Stack</SectionLabel>
              <Stagger className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <StaggerItem key={t}>
                    <TechBadge>{t}</TechBadge>
                  </StaggerItem>
                ))}
              </Stagger>

              <div className="mt-8 space-y-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/10 p-4 transition-colors hover:border-accent"
                  >
                    <span className="text-sm font-medium">View source on GitHub</span>
                    <ArrowUpRight className="h-4 w-4 text-ink-muted transition-colors group-hover:text-accent" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-accent/40 bg-accent/5 p-4 transition-colors hover:border-accent"
                  >
                    <span className="text-sm font-semibold text-accent">
                      VIEW LIVE SITE &#8599;
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-accent" />
                  </a>
                )}
                {project.demoUrl && !project.liveUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/10 p-4 transition-colors hover:border-accent"
                  >
                    <span className="text-sm font-medium">Open live site</span>
                    <ArrowUpRight className="h-4 w-4 text-ink-muted transition-colors group-hover:text-accent" />
                  </a>
                )}
                <a
                  href={PERSONAL.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/10 p-4 transition-colors hover:border-accent"
                >
                  <span className="text-sm font-medium">View GitHub profile</span>
                  <ArrowUpRight className="h-4 w-4 text-ink-muted transition-colors group-hover:text-accent" />
                </a>
                <Link
                  href="/contact#contact-form"
                  className="group flex w-full items-center justify-between rounded-xl border border-white/10 p-4 text-left transition-colors hover:border-accent"
                >
                  <span className="text-sm font-medium">Discuss a similar build</span>
                  <ArrowRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-white/10">
        <Container>
          <div className="grid gap-px sm:grid-cols-2">
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col gap-1 py-10 transition-colors hover:text-accent"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Previous
              </span>
              <span className="font-display text-xl font-semibold">
                {prev.name}
              </span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col items-end gap-1 py-10 text-right transition-colors hover:text-accent sm:border-l sm:border-white/10 sm:pl-10"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Next
              </span>
              <span className="font-display text-xl font-semibold">
                {next.name}
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
