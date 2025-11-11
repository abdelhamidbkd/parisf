export default function ActualitesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Actualités</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Retrouvez ici les dernières nouvelles, événements et créations de la maison.
        </p>
        <div className="grid gap-8">
          <div className="rounded-xl border border-border p-6 bg-card">
            <p className="text-muted-foreground">Aucune actualité pour le moment. Revenez bientôt !</p>
          </div>
        </div>
      </div>
    </div>
  )
}


