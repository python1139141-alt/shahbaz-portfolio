"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS, type Category, type Project } from "@/lib/data";
import { TechBadge } from "@/components/ui";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ProjectMediaOverlay, ProjectActions, LiveBadge } from "@/components/ProjectMediaOverlay";

type Filter = "All" | "Live" | Category;

const FILTERS: Filter[] = ["All", "Live", ...PROJECT_FILTERS.filter((f) => f !== "All")];

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const reduce = useReducedMotion();

  const visible = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Live") return Boolean(p.liveUrl);
    return p.categories.includes(filter as Category);
  });

  return (
    <>
      {/* Filters */}
      <div className="mb-12 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active ? "text-black" : "text-ink-soft hover:text-ink"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-accent"
                  transition={{ duration: reduce ? 0 : 0.3 }}
                />
              )}
              {!active && (
                <span className="absolute inset-0 -z-10 rounded-full border border-white/10" />
              )}
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: reduce ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
      transition={{ duration: 0.45, delay: reduce ? 0 : index * 0.04 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-colors hover:border-white/25"
      >
        <div className="relative overflow-hidden">
          {project.coverImage ? (
            <>
              <img
                src={project.coverImage}
                alt={project.name}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </>
          ) : (
            <ProjectVisual
              project={project}
              className="h-48 transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {project.liveUrl && (
            <span className="absolute left-3 top-3">
              <LiveBadge />
            </span>
          )}
          {project.note && (
            <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-wider text-ink-soft backdrop-blur">
              {project.note}
            </span>
          )}
          <ProjectMediaOverlay project={project} />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
              {project.categories.join(" · ")}
            </span>
            <ArrowUpRight className="h-4 w-4 text-ink-muted transition-colors group-hover:text-accent" />
          </div>
          <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
            {project.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
            {project.tagline}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
          <ProjectActions project={project} />
        </div>
      </Link>
    </motion.div>
  );
}
