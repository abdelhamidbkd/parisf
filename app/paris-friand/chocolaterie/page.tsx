import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, Heart, Gift } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ChocolaterieParisFriandPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/artisan-french-chocolates-display.jpg" alt="Chocolaterie" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">L’EXCELLENCE DU CHOCOLAT À VALENCE</h1>
          <p className="text-xl md:text-2xl text-white/90">
            Bienvenue chez Paris Friand, l’adresse incontournable pour les amateurs de chocolat à Valence. Fondé par
            Frédéric Colomb, Maître Artisan Chocolatier, notre établissement vous invite à découvrir un univers de
            saveurs raffinées, où tradition et créativité se rencontrent pour sublimer le chocolat.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/chocolate-making-process-artisan.jpg" alt="Fabrication du chocolat" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-5xl mb-8 text-foreground">Nos Créations en Chocolat</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Découvrez notre large gamme de chocolats artisanaux, confectionnés avec des ingrédients de premier
                choix et un savoir-faire inégalé :
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Qualité d’exception</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>Fabrication artisanale</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Gift className="w-5 h-5 text-accent" />
                  <span>Coffrets cadeaux</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl mb-6 text-foreground">Nos Créations Chocolatées</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une gamme complète de chocolats artisanaux pour tous les goûts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/artisan-french-chocolates-pralines.jpg" alt="Bonbons de chocolat" fill className="object-cover" />
              </div>
              <div className="p-8 text-center">
                <h4 className="font-serif text-2xl mb-4 text-card-foreground">Bonbons de chocolat</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ganaches parfumées aux textures fondantes et arômes équilibrés
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/french-confectionery-sweets.jpg" alt="Tablettes de chocolat" fill className="object-cover" />
              </div>
              <div className="p-8 text-center">
                <h4 className="font-serif text-2xl mb-4 text-card-foreground">Tablettes</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Noir, lait et blanc — saveurs authentiques et fèves sélectionnées
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/artisan-french-chocolates-pralines.jpg" alt="Pralines et rochers" fill className="object-cover" />
              </div>
              <div className="p-8 text-center">
                <h4 className="font-serif text-2xl mb-4 text-card-foreground">Pralines & rochers</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Croquants et gourmands, au praliné maison
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/french-wedding-cake-piece-montee.jpg" alt="Pièces artistiques en chocolat" fill className="object-cover" />
              </div>
              <div className="p-8 text-center">
                <h4 className="font-serif text-2xl mb-4 text-card-foreground">Pièces artistiques</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Sculptures et créations en chocolat pour vos événements
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/elegant-french-pastry-cakes-display.jpg" alt="Chocolats personnalisés" fill className="object-cover" />
              </div>
              <div className="p-8 text-center">
                <h4 className="font-serif text-2xl mb-4 text-card-foreground">Chocolats personnalisés</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Pour offrir ou se faire plaisir, personnalisés à votre image
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/boutique">Découvrir nos chocolats</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-4xl mb-6">Offrez du chocolat d'exception</h3>
          <p className="text-xl mb-8 opacity-90">Nos coffrets cadeaux sont parfaits pour faire plaisir à vos proches</p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link href="/boutique">Voir nos coffrets</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}


