import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container, SectionLabel, TechBadge } from "@/components/ui";
import { EXPERTISE, PERSONAL } from "@/lib/data";

const PRINCIPLES = [
  {
    title: "Clean code",
    body: "Readable, modular code that future teammates can understand and extend without friction.",
  },
  {
    title: "Maintainable architecture",
    body: "Systems designed to grow — separated concerns, clear boundaries, and sensible abstractions.",
  },
  {
    title: "Performance",
    body: "Fast, responsive experiences are a feature, not an afterthought. I engineer for speed.",
  },
  {
    title: "Understanding the user",
    body: "Technology serves people. I design around real goals instead of unnecessary complexity.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Engineering with
            <br />
            <span className="text-accent">intent</span>.
          </>
        }
        description={PERSONAL.bio}
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {PERSONAL.brand.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink-soft"
            >
              {b}
            </span>
          ))}
        </div>
      </PageHeader>

      {/* Journey */}
      <section className="section-pad">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel>The journey</SectionLabel>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tighter sm:text-4xl">
                From curiosity to shipping software.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p>
                  My journey started from curiosity — a desire to understand how
                  software actually works behind the screen. What began as
                  basic scripting and web development grew into something much
                  bigger.
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p>
                  Over time I progressed toward{" "}
                  <span className="text-ink">scalable backend systems</span>,
                  real <span className="text-ink">Flutter applications</span>,
                  <span className="text-ink"> Django backends</span>, and{" "}
                  <span className="text-ink">REST APIs</span>. Today I build
                  across mobile applications and full-stack development — and I
                  keep learning with every project I take on.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-ink-muted">
                  Along the way, my development philosophy settled on a few
                  non-negotiables: clean code, maintainable architecture,
                  performance, and a deep understanding of the user.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="border-t border-white/10 bg-surface/30 section-pad">
        <Container>
          <SectionLabel>Principles</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tighter sm:text-4xl">
            How I approach engineering.
          </h2>
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <StaggerItem key={p.title} className="bg-background p-8">
                <span className="font-mono text-sm text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {p.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Disciplines */}
      <section className="section-pad">
        <Container>
          <SectionLabel>Disciplines</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tighter sm:text-4xl">
            Three connected practices.
          </h2>
          <div className="mt-12 space-y-12">
            {EXPERTISE.map((area, i) => (
              <Reveal key={area.id}>
                <div className="grid gap-6 border-t border-white/10 pt-10 lg:grid-cols-12">
                  <div className="lg:col-span-1">
                    <span className="font-mono text-accent">{area.index}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {area.focus}
                    </p>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((s) => (
                        <TechBadge key={s}>{s}</TechBadge>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing statement */}
      <section className="border-t border-white/10 section-pad">
        <Container>
          <Reveal>
            <blockquote className="max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
              “{PERSONAL.philosophy}”
            </blockquote>
            <p className="mt-6 text-ink-soft">{PERSONAL.tagline}</p>
            <p className="mt-3 text-sm text-ink-muted">
              Currently pursuing a BSc in Software Engineering at Hazara
              University (2023 — 2027).
            </p>
          </Reveal>
        </Container>
      </section>
    </SiteShell>
  );
}
