import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, Heart, Users } from "lucide-react"
import Image from "next/image"

export default function TraiteurPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/elegant-french-catering-buffet.jpg" alt="Traiteur" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-6">Traiteur & Buffet</h1>
          <p className="text-xl md:text-2xl text-white/90">Service traiteur pour tous vos événements</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/elegant-french-appetizers-catering.jpg" alt="Service traiteur" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-5xl mb-8 text-foreground">Votre Traiteur d'Exception</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Pour vos événements professionnels ou privés, nous vous proposons un service traiteur complet avec des
                buffets raffinés et des créations salées et sucrées.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Cocktails, réceptions, mariages, anniversaires... Nous adaptons nos prestations à vos besoins et à vos
                envies pour faire de votre événement un moment inoubliable.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Service Professionnel</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>Créations Sur Mesure</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5 text-accent" />
                  <span>Tous Types d'Événements</span>
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

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <h4 className="font-serif text-2xl mb-4 text-card-foreground">Cocktails & Réceptions</h4>
              <p className="text-muted-foreground leading-relaxed">
                Buffets apéritifs raffinés avec verrines, canapés et bouchées salées
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h4 className="font-serif text-2xl mb-4 text-card-foreground">Événements Privés</h4>
              <p className="text-muted-foreground leading-relaxed">
                Mariages, anniversaires, baptêmes... Des prestations personnalisées
              </p>
            </Card>
            <Card className="p-8 text-center">
              <h4 className="font-serif text-2xl mb-4 text-card-foreground">Événements Professionnels</h4>
              <p className="text-muted-foreground leading-relaxed">
                Séminaires, inaugurations, réunions... Un service adapté
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

      {/* CTA Section */}
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
