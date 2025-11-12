"use client";

import { Button } from "@/components/ui/button";
import VideoPlayer from "@/components/VideoPlayer";

export default function DomaineAccueil() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Domaine des Seigneurs</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Lieu de réception à Bourg-de-Péage: mariages, séminaires, hébergement de charme.
        </p>

        {/* PLAYER */}
        <div className="mb-10">
          <VideoPlayer
            srcMp4="/video/domaine.mp4"
          />
        </div>

        {/* Liens / navigation */}
        <div className="grid md:grid-cols-3 gap-6">
          <a className="rounded-xl border border-border p-6 hover:border-accent transition-colors" href="/domaine-des-seigneurs/salle-de-reception">
            Salle de réception
          </a>
          <a className="rounded-xl border border-border p-6 hover:border-accent transition-colors" href="/domaine-des-seigneurs/chambres">
            Chambres
          </a>
          <a className="rounded-xl border border-border p-6 hover:border-accent transition-colors" href="/">
            Retour Accueil
          </a>
        </div>
      </div>
    </div>
  );
}
