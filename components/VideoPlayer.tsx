"use client";

import { useEffect, useRef } from "react";

/**
 * Player simple et robuste (HTML5).
 * - Affiche les contrôles
 * - Lisible mobile (playsInline)
 * - Poster pour éviter l’écran noir avant lecture
 * - Fallback WebM (si présent)
 */
export default function VideoPlayer({
  srcMp4 = "/video/domaine.mp4",
  srcWebm = null,    // mets null/"" si tu n’as pas le .webm
  poster = null // mets null/"" si tu ne veux pas de poster
}: {
  srcMp4?: string;
  srcWebm?: string | null;
  poster?: string | null;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // quelques prefs UX
    v.controls = true;
    v.playsInline = true;
    v.preload = "metadata";
  }, []);

  return (
    <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
      <video
        ref={ref}
        className="h-full w-full"
        poster={poster || undefined}
        // options utiles; l’utilisateur contrôle la lecture
        // muted
        // autoPlay
        // loop
        controls
        playsInline
        preload="metadata"
        controlsList="nodownload noplaybackrate"
      >
        {srcWebm ? <source src={srcWebm} type="video/webm" /> : null}
        <source src={srcMp4} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>

      {/* Lien fallback si aucun format n’est reconnu */}
      <div className="sr-only">
        <a href={srcMp4} download>Télécharger la vidéo</a>
      </div>
    </div>
  );
}
