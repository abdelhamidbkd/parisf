import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, Heart, Users } from "lucide-react"
import Image from "next/image"

export default function TraiteurParisFriandPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/elegant-french-catering-buffet.jpg" alt="Traiteur" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
            Traiteur Valence – L’Excellence Culinaire pour vos Réceptions
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Votre traiteur d’exception à Valence et Bourg‑de‑Péage.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/azz.webp" alt="Service traiteur" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-5xl mb-8 text-foreground">Paris Friand, votre traiteur sur‑mesure</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Dirigé par Frédéric Colomb, Maître Artisan Chocolatier et Pâtissier, Paris Friand met son savoir‑faire au
                service de vos réceptions pour une expérience gastronomique remarquable: mariages, séminaires,
                anniversaires, soirées d’entreprise ou cocktails dinatoires.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Ensemble, nous imaginons un menu personnalisé qui marque les esprits et régale tous vos convives.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Produits frais et locaux</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>25+ ans d’expertise primée</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5 text-accent" />
                  <span>Menus sur‑mesure, service clé en main</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl mb-6 text-foreground">Nos Prestations</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions adaptées à tous vos événements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-8 text-center">
              <h4 className="font-serif text-2xl mb-4 text-card-foreground">Mariages & réceptions privées</h4>
              <p className="text-muted-foreground leading-relaxed">
                Offrez à vos invités un repas inoubliable, entre mets raffinés et pâtisseries d’exception.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h4 className="font-serif text-2xl mb-4 text-card-foreground">Cocktails & buffets</h4>
              <p className="text-muted-foreground leading-relaxed">
                Buffets froids/chauds, pièces cocktails salées et sucrées, animations culinaires.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h4 className="font-serif text-2xl mb-4 text-card-foreground">Séminaires & événements d’entreprise</h4>
              <p className="text-muted-foreground leading-relaxed">
                Plateaux repas, pauses gourmandes, déjeuners d’affaires: un service fiable et soigné.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h4 className="font-serif text-2xl mb-4 text-card-foreground">Brunchs & petits‑déjeuners</h4>
              <p className="text-muted-foreground leading-relaxed">
                Viennoiseries artisanales, jus frais, thés et cafés sélectionnés pour bien commencer la journée.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="tel:0475430035">Demander un devis</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-4xl mb-6">Confiez-nous votre événement</h3>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <a href="tel:0475430035">04 75 43 00 35</a>
          </Button>
        </div>
      </section>
    </div>
  )
}


