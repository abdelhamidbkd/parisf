import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChefHat, Award, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PatisseriePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/elegant-french-pastry-display.jpg" alt="Pâtisserie" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-6">Maître Artisan Pâtissier</h1>
          <p className="text-xl md:text-2xl text-white/90">Gâteaux d'anniversaire, entremets et créations sur mesure</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-serif text-5xl mb-8 text-foreground">Notre Savoir-Faire</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Chaque création est le fruit d'un savoir-faire artisanal transmis de génération en génération. Nous
                sélectionnons avec soin les meilleurs ingrédients pour vous offrir des pâtisseries d'exception.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Gâteaux d'anniversaire personnalisés, entremets raffinés, pièces montées spectaculaires... Nous
                réalisons toutes vos envies pour vos événements les plus précieux.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Maître Artisan</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>Fait Maison</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ChefHat className="w-5 h-5 text-accent" />
                  <span>Créations Sur Mesure</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/french-pastry-chef-decorating-cake.jpg" alt="Pâtissier au travail" fill className="object-cover" />
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl mb-6 text-foreground">Nos Spécialités</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre sélection de pâtisseries artisanales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <h4 className="font-serif text-2xl mb-4 text-card-foreground">Gâteaux d'Anniversaire</h4>
              <p className="text-muted-foreground leading-relaxed">
                Créations personnalisées pour célébrer vos moments précieux
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h4 className="font-serif text-2xl mb-4 text-card-foreground">Entremets</h4>
              <p className="text-muted-foreground leading-relaxed">
                Desserts raffinés aux saveurs délicates et équilibrées
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h4 className="font-serif text-2xl mb-4 text-card-foreground">Pièces Montées</h4>
              <p className="text-muted-foreground leading-relaxed">
                Créations spectaculaires pour vos grandes occasions
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/boutique">Commander en ligne</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-4xl mb-6">Commandez votre gâteau personnalisé</h3>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour discuter de votre projet et créer ensemble le gâteau de vos rêves
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            asChild
          >
            <a href="tel:0475430035">Nous contacter</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
