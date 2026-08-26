import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Container, SectionLabel } from "@/components/ui";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { PROJECTS } from "@/lib/data";

export const metadata = {
  title: "Projects",
  description:
    "Selected projects by Shahbaz Ahmed — mobile apps, backend systems, desktop tools, and client work across Flutter, Python, Django, FastAPI, and more.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Work that
            <br />
            <span className="text-accent">ships</span>.
          </>
        }
        description="A collection of products and client work spanning mobile, backend, web, and desktop. Filter by discipline to explore."
      >
        <div className="mt-8">
          <SectionLabel>{`${PROJECTS.length} projects`}</SectionLabel>
        </div>
      </PageHeader>

      <section className="section-pad">
        <Container>
          <ProjectsExplorer />
        </Container>
      </section>
    </SiteShell>
  );
}
