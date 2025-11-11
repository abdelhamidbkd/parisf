import { Button } from "@/components/ui/button"
import { Award, Heart, ChefHat } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/french-pastry-shop-interior-elegant.jpg" alt="À propos" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-6">Notre Histoire</h1>
          <p className="text-xl md:text-2xl text-white/90">L'excellence de la pâtisserie française à Valence</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-serif text-5xl mb-8 text-foreground">COLOMB Frédéric</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                À Valence, Maison Paris Friand incarne l'excellence de la pâtisserie française artisanale. Frédéric
                COLOMB, Maître Artisan Pâtissier Chocolatier Traiteur, perpétue un savoir-faire transmis de génération
                en génération.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Nous vous proposons des spécialités exceptionnelles : Chocolat, Gâteaux d'anniversaire, Pognes,
                Saint-Genix, Suisse... ainsi que de nombreuses gourmandises dans nos deux pâtisseries à Valence.
              </p>
              <div className="rounded-xl border border-border p-6 bg-card mb-8">
                <h3 className="font-serif text-2xl mb-4 text-foreground">Frédéric Colomb : Un Maître Artisan Passionné</h3>
                <p className="text-muted-foreground mb-4">
                  Fort de son expérience et de ses distinctions prestigieuses, Frédéric Colomb s’est imposé comme une
                  référence de la pâtisserie à Valence. Son parcours d’exception inclut&nbsp;:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>1995</strong> : Finaliste Meilleur Apprenti de France</li>
                  <li><strong>1996 – 1997</strong> : 1er Prix Concours Chocolat et Entremets</li>
                  <li><strong>2000</strong> : Sous-Chef Pâtissier au Palace Eden Roc Cap d’Antibes</li>
                  <li><strong>2001</strong> : Ouverture de sa première pâtisserie à Valence</li>
                  <li><strong>2006</strong> : Reconnaissance en tant qu’Expert du Chocolat</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
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
                  <span>Savoir-faire Français</span>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/01102.webp" alt="Frédéric Colomb" fill className="object-cover" />
            </div>
          </div>

          <div className="bg-muted/30 rounded-2xl p-12 mb-24">
            <h3 className="font-serif text-4xl mb-8 text-center text-foreground">Nos Valeurs</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-serif text-2xl mb-3 text-foreground">Excellence</h4>
                <p className="text-muted-foreground">
                  Nous sélectionnons les meilleurs ingrédients pour vous offrir des créations d'exception
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-serif text-2xl mb-3 text-foreground">Passion</h4>
                <p className="text-muted-foreground">
                  Chaque création est réalisée avec amour et dévouement pour votre plaisir
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-serif text-2xl mb-3 text-foreground">Tradition</h4>
                <p className="text-muted-foreground">
                  Un savoir-faire artisanal transmis et perfectionné au fil des années
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-serif text-4xl mb-6 text-foreground">Venez nous rencontrer</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Découvrez nos deux boutiques à Valence et laissez-vous séduire par nos créations
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/#boutiques">Nos adresses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
