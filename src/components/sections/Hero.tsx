"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { PERSONAL } from "@/lib/data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const FLOATERS = ["Flutter", "Python", "FastAPI", "Next.js"];

export function Hero() {
  const reduce = useReducedMotion();

  const scrollToWork = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.getElementById("selected-work");
    if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 72% 18%, rgba(198,255,0,0.10), transparent 60%)",
        }}
      />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container-px mx-auto max-w-8xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 pb-16 pt-28 lg:min-h-[92vh] lg:grid-cols-12 lg:gap-10 lg:pb-20"
        >
          {/* LEFT — content */}
          <div className="lg:col-span-7">
            <motion.div variants={item} className="mb-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-ink-soft">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {PERSONAL.status} — {PERSONAL.location}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-[15vw] font-bold leading-[0.9] tracking-tightest sm:text-7xl lg:text-[8.5rem]"
            >
              <span className="block text-ink">Shahbaz</span>
              <span className="block text-ink">Ahmed</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-2xl font-display text-xl font-medium tracking-tight text-ink-soft sm:text-2xl"
            >
              {PERSONAL.role}
              <span className="text-accent">.</span>
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-soft"
            >
              {PERSONAL.intro} {PERSONAL.bio}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={scrollToWork}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                View Selected Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-16 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted"
            >
              {PERSONAL.brand.map((b) => (
                <span key={b} className="flex items-center gap-2">
                  {b}
                  <span className="text-accent">×</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — premium profile composition */}
          <motion.div variants={item} className="lg:col-span-5">
            <PremiumProfile />
          </motion.div>
        </motion.div>
      </div>

      <div className="container-px mx-auto max-w-8xl">
        <div className="flex justify-center pb-10">
          <button
            type="button"
            onClick={scrollToWork}
            aria-label="Scroll to explore"
            className="flex flex-col items-center gap-2 text-ink-muted transition-colors hover:text-accent"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}

function PremiumProfile() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
      <div className="absolute -inset-8 rounded-[2.5rem] bg-accent/10 blur-3xl" />
      <div className="absolute inset-0 rounded-[2rem] bg-grid opacity-40" />

      <div className="relative rounded-[2rem] border border-white/10 bg-surface p-2 shadow-2xl">
        <div className="relative overflow-hidden rounded-[1.6rem]">
          <img
            src={PERSONAL.profileImage}
            alt={PERSONAL.name}
            className="aspect-[4/5] w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="font-display text-lg font-semibold text-ink">
              {PERSONAL.name}
            </p>
            <p className="text-xs text-accent">{PERSONAL.role}</p>
          </div>
        </div>
      </div>

      <span className="absolute -left-3 -top-3 h-8 w-8 rounded-xl border-l-2 border-t-2 border-accent" />
      <span className="absolute -bottom-3 -right-3 h-8 w-8 rounded-xl border-b-2 border-r-2 border-accent" />

      {FLOATERS.map((f, i) => (
        <span
          key={f}
          className={`absolute hidden rounded-full border border-white/10 bg-surface/80 px-3 py-1 text-[11px] text-ink-soft backdrop-blur sm:block ${floatPos(
            i,
          )}`}
        >
          {f}
        </span>
      ))}
    </div>
  );
}

function floatPos(i: number) {
  const pos = [
    "left-0 top-12 -translate-x-1/2",
    "right-0 top-28 translate-x-1/2",
    "left-2 bottom-20 -translate-x-1/2",
    "right-2 bottom-28 translate-x-1/2",
  ];
  return pos[i % pos.length];
}
