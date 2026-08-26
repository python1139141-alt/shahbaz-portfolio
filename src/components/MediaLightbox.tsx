"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type ImageState = { images: string[]; index: number };

type Ctx = {
  openImage: (images: string[], index?: number) => void;
  openVideo: (src: string) => void;
  close: () => void;
  image: ImageState | null;
  video: string | null;
};

const MediaLightboxContext = createContext<Ctx | null>(null);

export function useMediaLightbox() {
  const ctx = useContext(MediaLightboxContext);
  if (!ctx)
    throw new Error("useMediaLightbox must be used within MediaLightboxProvider");
  return ctx;
}

export function MediaLightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<ImageState | null>(null);
  const [video, setVideo] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const openImage = useCallback(
    (images: string[], index = 0) => setImage({ images, index }),
    [],
  );
  const openVideo = useCallback((src: string) => setVideo(src), []);
  const close = useCallback(() => {
    setImage(null);
    setVideo(null);
  }, []);

  useEffect(() => {
    const locked = image || video;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [image, video]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (!image) return;
      if (e.key === "ArrowRight")
        setImage((s) =>
          s ? { ...s, index: (s.index + 1) % s.images.length } : s,
        );
      if (e.key === "ArrowLeft")
        setImage((s) =>
          s
            ? { ...s, index: (s.index - 1 + s.images.length) % s.images.length }
            : s,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [image, close]);

  const go = (dir: 1 | -1) =>
    setImage((s) =>
      s
        ? { ...s, index: (s.index + dir + s.images.length) % s.images.length }
        : s,
    );

  return (
    <MediaLightboxContext.Provider
      value={{ openImage, openVideo, close, image, video }}
    >
      {children}

      <AnimatePresence>
        {image && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={close}
            />
            <div className="relative z-10 flex w-full max-w-5xl items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                Project Gallery
              </span>
              <button
                type="button"
                aria-label="Close"
                onClick={close}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-ink-soft transition-colors hover:text-accent"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex w-full max-w-5xl flex-1 items-center justify-center"
            >
              {image.images.length > 1 && (
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={() => go(-1)}
                  className="absolute left-0 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/40 text-ink-soft transition-colors hover:text-accent"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              <img
                src={image.images[image.index]}
                alt={`Screenshot ${image.index + 1}`}
                className="max-h-[80vh] w-auto max-w-[90vw] rounded-xl border border-white/10 object-contain"
              />
              {image.images.length > 1 && (
                <button
                  type="button"
                  aria-label="Next"
                  onClick={() => go(1)}
                  className="absolute right-0 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/40 text-ink-soft transition-colors hover:text-accent"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </motion.div>
            {image.images.length > 1 && (
              <div className="relative z-10 flex flex-wrap justify-center gap-2">
                {image.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setImage((s) => (s ? { ...s, index: i } : s))}
                    aria-label={`View screenshot ${i + 1}`}
                    className={`h-14 w-20 overflow-hidden rounded-lg border transition-colors ${
                      i === image.index
                        ? "border-accent"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {video && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={close}
            />
            <div className="relative z-10 flex w-full max-w-[1100px] items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                Project Demo
              </span>
              <button
                type="button"
                aria-label="Close"
                onClick={close}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-ink-soft transition-colors hover:text-accent"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full"
              style={{ maxWidth: "min(90vw, 1100px)" }}
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                <video
                  src={video}
                  controls
                  preload="metadata"
                  className="h-auto max-h-[80vh] w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MediaLightboxContext.Provider>
  );
}
