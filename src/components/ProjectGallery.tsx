"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";

export function ProjectGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  if (!images?.length) return null;

  return (
    <Reveal>
      <div>
        <img
          src={images[active]}
          alt={`${name} screenshot ${active + 1}`}
          className="h-64 w-full rounded-2xl border border-white/10 object-cover sm:h-[30rem]"
        />
        {images.length > 1 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View screenshot ${i + 1}`}
                className={`h-16 w-24 overflow-hidden rounded-lg border transition-colors ${
                  i === active
                    ? "border-accent"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}
