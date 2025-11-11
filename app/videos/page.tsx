import Image from "next/image"

export default function VideosPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Vidéos</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Découvrez les vidéos créées par notre équipe. Plus de contenus arrivent bientôt.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Emplacements prêts pour intégrer des URLs YouTube/Vimeo ou fichiers MP4 dans /public */}
          <div className="aspect-video rounded-xl overflow-hidden border border-border bg-muted/50 flex items-center justify-center">
            <span className="text-muted-foreground">Vidéo à venir</span>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden border border-border bg-muted/50 flex items-center justify-center">
            <span className="text-muted-foreground">Vidéo à venir</span>
          </div>
        </div>
        <div className="mt-10 text-sm text-muted-foreground">
          Pour ajouter des vidéos MP4 hébergées localement, placez vos fichiers dans <code>/public/videos</code> puis
          remplacez les blocs ci-dessus par des balises <code>&lt;video src=&quot;/videos/nom.mp4&quot; controls /&gt;</code>.
        </div>
      </div>
    </div>
  )
}


