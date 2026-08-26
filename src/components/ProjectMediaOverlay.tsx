"use client";

import { ArrowUpRight, Play, Images } from "lucide-react";
import type { Project } from "@/lib/data";
import { useMediaLightbox } from "@/components/MediaLightbox";

const actionBase =
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors";

export function ProjectMediaOverlay({ project }: { project: Project }) {
  const { openImage, openVideo } = useMediaLightbox();
  const hasImages = !!project.images?.length;
  const hasVideo = !!project.videos?.length;
  const live = !!project.liveUrl;

  if (!hasImages && !hasVideo && !live) return null;

  return (
    <div className="absolute inset-0 flex flex-col justify-end gap-3 bg-gradient-to-t from-background/90 via-background/30 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="flex flex-wrap gap-2">
        {hasImages && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openImage(project.images!);
            }}
            className={`${actionBase} bg-white/10 text-ink backdrop-blur hover:bg-white/20`}
          >
            <Images className="h-3.5 w-3.5" /> View Pictures
          </button>
        )}
        {hasVideo && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openVideo(project.videos![0]);
            }}
            className={`${actionBase} bg-accent text-black`}
          >
            <Play className="h-3.5 w-3.5" /> Watch Video
          </button>
        )}
        {live && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(project.liveUrl, "_blank", "noopener,noreferrer");
            }}
            className={`${actionBase} border border-white/20 text-ink backdrop-blur hover:border-accent hover:text-accent`}
          >
            Live Site &#8599;
          </button>
        )}
      </div>
    </div>
  );
}

export function ProjectActions({ project }: { project: Project }) {
  const { openImage, openVideo } = useMediaLightbox();
  const hasImages = !!project.images?.length;
  const hasVideo = !!project.videos?.length;
  const live = !!project.liveUrl;

  if (!hasImages && !hasVideo && !live) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {hasImages && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openImage(project.images!);
          }}
          className={`${actionBase} bg-white/10 text-ink hover:bg-white/20`}
        >
          <Images className="h-3.5 w-3.5" /> View Pictures
        </button>
      )}
      {hasVideo && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openVideo(project.videos![0]);
          }}
          className={`${actionBase} bg-accent text-black`}
        >
          <Play className="h-3.5 w-3.5" /> Watch Video
        </button>
      )}
      {live && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(project.liveUrl, "_blank", "noopener,noreferrer");
          }}
          className={`${actionBase} border border-accent/40 text-accent hover:bg-accent/10`}
        >
          Live Site &#8599;
        </button>
      )}
    </div>
  );
}

export function LiveBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-black" />
      Live
    </span>
  );
}
