"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Container } from "@/components/ui";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 20% 0%, rgba(198,255,0,0.08), transparent 55%)",
        }}
      />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="pb-16 pt-32 sm:pt-40"
        >
          <p className="accent-label">{eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tightest sm:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-soft">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </Container>
    </header>
  );
}
