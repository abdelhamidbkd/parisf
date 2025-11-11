import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail, Train, Car } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/elegant-french-pastry-shop-storefront.jpg" alt="Contact" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-6">Contactez-nous</h1>
          <p className="text-xl md:text-2xl text-white/90">Nous sommes à votre écoute</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl mb-6 text-foreground">Nos Boutiques</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deux adresses à Valence pour vous accueillir
            </p>
          </div>

          {/* Pour Nous Joindre */}
          <div className="mb-12">
            <Card className="p-10 border-2 border-border bg-card">
              <h3 className="font-serif text-3xl mb-6 text-card-foreground">Pour Nous Joindre</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Par téléphone</h4>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-accent" />
                    <a href="tel:+33475440676" className="hover:text-accent transition-colors">
                      (+33) 04. 75. 44 .06. 76
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Par mail</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <a href="mailto:contact@parisfriand.com" className="hover:text-accent transition-colors">
                        contact@parisfriand.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <a href="mailto:fredericcolomb@domainedesseigneurs.fr" className="hover:text-accent transition-colors">
                        fredericcolomb@domainedesseigneurs.fr
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Par courrier</h4>
                  <address className="not-italic text-muted-foreground leading-relaxed">
                    Paris Friand Frédéric Colomb
                    <br />
                    7, Avenue Pierre Semard
                    <br />
                    26000 Valence
                  </address>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-10 border-2 border-border bg-card">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-accent/10 p-4 rounded-full">
                  <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl mb-3 text-card-foreground">Domaine des Seigneurs</h3>
                  <p className="text-lg text-muted-foreground">
                    Domaine des Seigneurs
                    <br />
                    1285 Route Charlemagne
                    <br />
                    26300 Bourg-de-Péage
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Train className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg">À 8 minutes de la Gare TGV Valence</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Car className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg">À 5 minutes de la sortie d’autoroute A49</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="text-lg">
                    <p className="font-semibold text-foreground mb-1">Horaires d'ouverture</p>
                    <p>Lundi- Dimanche : 7h00 - 19h30</p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-8 bg-accent hover:bg-accent/90 text-accent-foreground" size="lg" asChild>
                <a
                  href="https://www.google.com/maps/place/Domaine+Des+Seigneurs+Fr%C3%A9d%C3%A9ric+Colomb/@45.0210842,5.0758739,16z/data=!4m6!3m5!1s0x47f552b6ef8f1d07:0xb3a01e9c78b43bdb!8m2!3d45.0212862!4d5.0761282!16s%2Fg%2F11bvcvsfkv?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir sur la carte
                </a>
              </Button>
            </Card>

            <Card className="p-10 border-2 border-border bg-card">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-accent/10 p-4 rounded-full">
                  <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl mb-3 text-card-foreground">Paris Friand</h3>
                  <p className="text-lg text-muted-foreground">
                    7, Avenue Pierre Semard, 26000 Valence
                    <br />
                    5, rue des Alpes, 26000 Valence
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                  <a href="tel:0475704257" className="text-lg hover:text-accent transition-colors">
                    04 75 70 42 57
                  </a>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="text-lg">
                    <p className="font-semibold text-foreground mb-1">Horaires d'ouverture</p>
                    <p>Lundi- Dimanche : 7h00 - 19h30</p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-8 bg-accent hover:bg-accent/90 text-accent-foreground" size="lg" asChild>
                <a
                  href="https://www.google.com/maps/place/7+Av.+Pierre+Semard,+26000+Valence/@44.9287147,4.888596,17z/data=!3m1!4b1!4m6!3m5!1s0x47f5582dd20b1c05:0xb2c9b05e6c1470a!8m2!3d44.9287109!4d4.8911709!16s%2Fg%2F11b8v6zn95?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir sur la carte
                </a>
              </Button>
            </Card>
          </div>

        </div>
      </section>
    </div>
  )
}
