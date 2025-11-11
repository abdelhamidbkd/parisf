import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, Heart, Gift } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ChocolateriePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/artisan-french-chocolates-display.jpg" alt="Chocolaterie" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-6">Expert du Chocolat</h1>
          <p className="text-xl md:text-2xl text-white/90">Chocolats fins et créations artisanales maison</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/chocolate-making-process-artisan.jpg" alt="Fabrication du chocolat" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-5xl mb-8 text-foreground">L'Art du Chocolat</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Notre chocolaterie artisanale vous propose une sélection raffinée de chocolats fins, pralinés et
                ganaches créés avec passion dans nos ateliers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Nous travaillons exclusivement avec des fèves de cacao sélectionnées et des ingrédients de première
                qualité pour vous offrir des chocolats d'exception.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Chocolatier Expert</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>Fabrication Artisanale</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Gift className="w-5 h-5 text-accent" />
                  <span>Coffrets Cadeaux</span>
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

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <h4 className="font-serif text-2xl mb-4 text-card-foreground">Ballotins</h4>
              <p className="text-muted-foreground leading-relaxed">
                Assortiments de chocolats fins dans nos élégants ballotins
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h4 className="font-serif text-2xl mb-4 text-card-foreground">Pralinés</h4>
              <p className="text-muted-foreground leading-relaxed">
                Pralinés maison aux saveurs délicates et raffinées
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h4 className="font-serif text-2xl mb-4 text-card-foreground">Ganaches</h4>
              <p className="text-muted-foreground leading-relaxed">
                Ganaches onctueuses aux parfums subtils et gourmands
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/boutique">Découvrir nos chocolats</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
