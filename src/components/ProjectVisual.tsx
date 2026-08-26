import type { Project } from "@/lib/data";

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Deterministic, on-brand abstract visual for a project.
 * Uses no external images — every project gets a unique generated composition.
 */
export function ProjectVisual({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const h = hash(project.id + project.name);
  const angle = h % 360;
  const cx = 20 + (h % 60);
  const cy = 25 + ((h >> 3) % 50);
  const r = 28 + ((h >> 5) % 22);
  const label = initials(project.name);

  return (
    <div
      className={`relative overflow-hidden bg-[#0d0d10] ${className}`}
      aria-hidden="true"
    >
      {/* grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      {/* gradient wash */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(120% 120% at ${cx}% ${cy}%, rgba(198,255,0,0.14), transparent 55%), linear-gradient(${angle}deg, rgba(255,255,255,0.04), transparent 40%)`,
        }}
      />
      {/* accent arc */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="rgba(198,255,0,0.35)"
          strokeWidth="0.6"
        />
        <circle
          cx={100 - cx}
          cy={100 - cy}
          r={r * 0.55}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="0.5"
        />
        <line
          x1="0"
          y1={cy}
          x2="100"
          y2={cy}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="0.4"
        />
      </svg>
      {/* monogram */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-5xl font-bold tracking-tighter text-white/15">
          {label}
        </span>
      </div>
      {/* corner index */}
      <div className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">
        {project.categories[0]}
      </div>
    </div>
  );
}
