import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Container, SectionLabel } from "@/components/ui";
import { SKILL_GROUPS, PERSONAL } from "@/lib/data";

export const metadata = {
  title: "Skills",
  description:
    "Shahbaz Ahmed's technology stack — mobile development with Flutter, backend engineering with Python/Django/FastAPI, web with React/Next.js, databases, and tooling.",
};

export default function SkillsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Skills"
        title={
          <>
            Tools of the
            <br />
            <span className="text-accent">trade</span>.
          </>
        }
        description="Not a checklist of buzzwords — a connected toolkit I use to take products from idea to production across mobile, backend, and web."
      />

      <section className="border-b border-white/10 py-10">
        <Container>
          <Reveal>
            <p className="font-display text-xl font-medium leading-snug tracking-tight text-ink-soft sm:text-2xl">
              {PERSONAL.stackLine.split(" × ").map((part, i, arr) => (
                <span key={part}>
                  <span className={i === arr.length - 1 ? "" : "text-ink"}>
                    {part}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="mx-2 text-accent">×</span>
                  )}
                </span>
              ))}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <Reveal key={group.id}>
                <div className="surface-card flex h-full flex-col p-8 transition-colors hover:border-white/25">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {group.name}
                    </h3>
                    <span className="font-mono text-sm text-accent">
                      {String(SKILL_GROUPS.indexOf(group) + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                    {group.description}
                  </p>
                  <Stagger className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <StaggerItem key={skill}>
                        <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent">
                          {skill}
                        </span>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Full stack flow */}
          <Reveal>
            <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-surface/40 p-8">
              <SectionLabel>The full-stack loop</SectionLabel>
              <p className="mt-3 max-w-2xl text-ink-soft">
                From a Flutter screen to a Django API and a PostgreSQL row — the
                same product, engineered end to end.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-ink-muted">
                {[
                  "Mobile (Flutter)",
                  "REST API",
                  "Backend (Python)",
                  "Database",
                  "Web (React)",
                ].map((step, i, arr) => (
                  <span key={step} className="flex items-center gap-3">
                    <span className="rounded-md border border-white/10 px-3 py-2 text-ink-soft">
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-accent">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </SiteShell>
  );
}
