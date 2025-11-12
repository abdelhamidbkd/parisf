"use client";
import { useEffect, useRef } from "react";

export default function VideoBG() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.muted = true;
    // @ts-ignore pour compat iOS
    v.playsInline = true;

    const tryPlay = () => v.play().catch(() => {});

    const onCanPlay = () => tryPlay();
    const onLoadedMeta = () => tryPlay();
    const onVisibility = () => { if (!document.hidden) tryPlay(); };

    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("loadedmetadata", onLoadedMeta);
    document.addEventListener("visibilitychange", onVisibility);

    tryPlay();

    return () => {
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("loadedmetadata", onLoadedMeta);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 w-full h-full object-cover z-0"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src="/video/domaine.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas la vidéo HTML5.
    </video>
  );
}
