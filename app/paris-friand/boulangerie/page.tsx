import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, Heart, Wheat } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BoulangerieParisFriandPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/french-viennoiseries-and-bread-display.jpg" alt="Boulangerie" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-6">Pains & Viennoiseries</h1>
          <p className="text-xl md:text-2xl text-white/90">Pognes, Saint-Genix, Suisse et spécialités locales</p>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-serif text-5xl mb-8 text-foreground">Nos Spécialités</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Découvrez nos spécialités régionales et viennoiseries artisanales, préparées chaque jour avec des
                ingrédients de qualité et un savoir-faire traditionnel.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                La Pogne, le Saint-Genix et le Suisse sont des trésors de la gastronomie locale que nous perpétuons avec
                passion et authenticité.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Recettes Traditionnelles</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>Fait Maison</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Wheat className="w-5 h-5 text-accent" />
                  <span>Ingrédients Sélectionnés</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/boulengerie.webp" alt="Boulanger au travail" fill className="object-cover" />
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl mb-6 text-foreground">Nos Spécialités Régionales Incontournables</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Des recettes emblématiques de notre terroir</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/french-brioche-viennoiseries.jpg" alt="Le Suisse de Valence" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h4 className="font-serif text-2xl mb-3 text-card-foreground">Le Suisse de Valence – Une Icône Gourmande</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ce biscuit sablé en forme de soldat, délicatement parfumé à la fleur d’oranger, est une véritable institution.
                  Son moelleux et ses subtiles notes fruitées séduisent les amateurs de douceurs artisanales depuis plus de 200 ans.
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/french-viennoiseries-and-bread-display.jpg" alt="La Pogne de Romans" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h4 className="font-serif text-2xl mb-3 text-card-foreground">La Pogne de Romans – L’Origine du Goût</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Brioche traditionnelle en forme de couronne, au parfum envoûtant de fleur d’oranger.
                  Autrefois réservée aux fêtes de Pâques, elle régale aujourd’hui les gourmands toute l’année.
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/french-viennoiseries-and-bread-display.jpg" alt="Le Saint-Genix" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h4 className="font-serif text-2xl mb-3 text-card-foreground">Le Saint-Genix – La Brioche Pralinée d’Exception</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Riche et fondante, généreusement garnie de pralines rouges pour une texture à la fois moelleuse et croquante.
                  Une véritable explosion de saveurs&nbsp;!
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/boutique">Commander nos spécialités</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-4xl mb-6">Venez découvrir nos spécialités</h3>
          <p className="text-xl mb-8 opacity-90">Disponibles chaque jour dans nos deux boutiques à Valence</p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            asChild
          >
            <Link href="/#boutiques">Nos adresses</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}


