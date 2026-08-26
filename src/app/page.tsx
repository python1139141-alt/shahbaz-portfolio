import { SiteShell } from "@/components/SiteShell";
import { Hero } from "@/components/sections/Hero";
import {
  Statement,
  ExpertisePreview,
  ExperienceHighlights,
  SelectedProjects,
  TechPreview,
  CTA,
} from "@/components/sections/HomeSections";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <Statement />
      <ExpertisePreview />
      <ExperienceHighlights />
      <SelectedProjects />
      <TechPreview />
      <CTA />
    </SiteShell>
  );
}
