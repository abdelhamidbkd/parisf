export default function ParisFriandHome() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Paris Friand</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Retrouvez nos univers Chocolaterie, Pâtisserie, Boulangerie et Traiteur.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a className="rounded-xl border border-border p-6 hover:border-accent transition-colors" href="/paris-friand/chocolaterie">Chocolaterie</a>
          <a className="rounded-xl border border-border p-6 hover:border-accent transition-colors" href="/paris-friand/patisserie">Pâtisserie</a>
          <a className="rounded-xl border border-border p-6 hover:border-accent transition-colors" href="/paris-friand/boulangerie">Boulangerie</a>
          <a className="rounded-xl border border-border p-6 hover:border-accent transition-colors" href="/paris-friand/traiteur">Traiteur</a>
        </div>
      </div>
    </div>
  )
}


