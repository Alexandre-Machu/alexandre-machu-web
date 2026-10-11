"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Photo = { src: string; alt: string };

// Galerie en mosaïque ; un clic ouvre la photo en grand dans un <dialog> natif
// (Échap pour fermer, flèches pour naviguer, clic sur le fond pour fermer).
export default function Gallery({
  photos,
  labels,
  tone = "dark",
}: {
  photos: Photo[];
  labels: { open: string; close: string; prev: string; next: string };
  tone?: "dark" | "light";
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const move = useCallback(
    (step: number) => setIndex((i) => (i === null ? i : (i + step + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!dialog.current?.open) return;
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move]);

  const current = index === null ? null : photos[index];

  return (
    <>
      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((ph, i) => (
          <button
            key={ph.src}
            type="button"
            onClick={() => open(i)}
            aria-label={`${labels.open} : ${ph.alt}`}
            className={`group mb-4 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-xl ring-1 focus-visible:outline-2 focus-visible:outline-offset-2 ${tone === "dark" ? "ring-white/10 focus-visible:outline-white" : "ring-line focus-visible:outline-accent"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ph.src}
              alt={ph.alt}
              loading="lazy"
              className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-black/90 p-0 text-white backdrop:bg-black/80"
      >
        {current && (
          <div className="flex h-full items-center justify-center p-4 sm:p-12" onClick={(e) => e.target === e.currentTarget && close()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.src} alt={current.alt} className="max-h-full max-w-full rounded-lg object-contain" />
          </div>
        )}
        <button
          type="button"
          onClick={close}
          aria-label={labels.close}
          className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 hover:bg-white/20"
        >
          <X size={20} />
        </button>
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label={labels.prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 hover:bg-white/20 sm:left-4"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label={labels.next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 hover:bg-white/20 sm:right-4"
        >
          <ChevronRight size={22} />
        </button>
        {index !== null && (
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tabular-nums text-white/60">
            {index + 1} / {photos.length}
          </p>
        )}
      </dialog>
    </>
  );
}
