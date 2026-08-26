import { SiteShell } from "@/components/SiteShell";
import { Container, SectionLabel } from "@/components/ui";
import {
  ContactForm,
  ContactSidebar,
} from "@/components/sections/ContactForm";
import { PERSONAL } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description:
    "Let's build something useful. Get in touch with Shahbaz Ahmed for freelance and contract mobile, backend, and web engineering work.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 0%, rgba(198,255,0,0.10), transparent 55%)",
          }}
        />
        <Container>
          <div className="pb-20 pt-32 sm:pt-40">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.92] tracking-tightest sm:text-7xl">
              Let&apos;s build
              <br />
              something <span className="text-accent">useful</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              {PERSONAL.status.charAt(0).toUpperCase() +
                PERSONAL.status.slice(1)}
              . Tell me about your project and I&apos;ll get back to you.
            </p>
          </div>
        </Container>
      </section>

      <section id="contact-form" className="section-pad border-t border-white/10 scroll-mt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <ContactSidebar />
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
