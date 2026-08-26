"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { PERSONAL, SOCIALS } from "@/lib/data";
import { TechBadge } from "@/components/ui";

type Status = "idle" | "submitting" | "success" | "error";

const FIELDS = [
  { name: "firstName", label: "First Name", type: "text", placeholder: "First Name" },
  { name: "lastName", label: "Last Name", type: "text", placeholder: "Last Name" },
  { name: "email", label: "Email", type: "email", placeholder: "Your Email" },
] as const;

export function ContactForm() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    details: "",
  });

  const update = (key: string, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Network error. Please try again or email me directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-start justify-center rounded-2xl border border-accent/30 bg-accent/5 p-10"
      >
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <h3 className="mt-5 font-display text-2xl font-semibold">
          Message received.
        </h3>
        <p className="mt-3 max-w-sm text-ink-soft">
          Thanks, {form.firstName || "there"} — I&apos;ll get back to you at{" "}
          <span className="text-ink">{form.email}</span> as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm({ firstName: "", lastName: "", email: "", details: "" });
            setStatus("idle");
          }}
          className="mt-6 text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <label key={field.name} className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider text-ink-muted">
              {field.label}
            </span>
            <input
              type={field.type}
              required
              value={form[field.name]}
              onChange={(e) => update(field.name, e.target.value)}
              placeholder={field.placeholder}
              className="rounded-xl border border-white/10 bg-card px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-accent"
            />
          </label>
        ))}
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-wider text-ink-muted">
          Project Details
        </span>
        <textarea
          required
          value={form.details}
          onChange={(e) => update("details", e.target.value)}
          rows={5}
          placeholder="Tell me about your product, timeline, and what you're looking to build…"
          className="resize-none rounded-xl border border-white/10 bg-card px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-accent"
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

export function ContactSidebar() {
  const icons: Record<string, React.ReactNode> = {
    GitHub: <Github className="h-4 w-4" />,
    LinkedIn: <Linkedin className="h-4 w-4" />,
    WhatsApp: <MessageCircle className="h-4 w-4" />,
    Email: <Mail className="h-4 w-4" />,
  };
  return (
    <div className="space-y-8">
      <div>
        <p className="accent-label mb-3">Direct</p>
        <a
          href={`mailto:${PERSONAL.email}`}
          className="font-display text-xl font-medium text-ink transition-colors hover:text-accent"
        >
          {PERSONAL.email}
        </a>
        <p className="mt-2 text-sm text-ink-muted">{PERSONAL.location}</p>
      </div>
      <div>
        <p className="accent-label mb-3">Elsewhere</p>
        <ul className="space-y-2">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-accent"
              >
                {icons[s.label]}
                {s.label}
                <span className="text-ink-muted">— {s.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="accent-label mb-3">Stack I&apos;ll bring</p>
        <div className="flex flex-wrap gap-2">
          {["Flutter", "Python", "Django", "FastAPI", "React", "Next.js", "Firebase"].map(
            (t) => (
              <TechBadge key={t}>{t}</TechBadge>
            )
          )}
        </div>
      </div>
    </div>
  );
}
