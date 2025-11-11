"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/components/language-provider"
import { ChefHat, MapPin, Phone, Clock, ShoppingBag, Award, Heart, Train, Car } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const { t } = useLanguage()

  const specialties = [
    {
      title: "Maître Artisan Pâtissier",
      description: "Gâteaux d'anniversaire, entremets et créations sur mesure",
      image: "/elegant-french-pastry-cakes-display.jpg",
      link: "#specialites",
    },
    {
      title: "Expert du Chocolat",
      description: "Chocolats fins et créations artisanales maison",
      image: "/artisan-french-chocolates-pralines.jpg",
      link: "#specialites",
    },
    {
      title: "Confiserie Maison",
      description: "À offrir en toutes occasions",
      image: "/french-confectionery-sweets.jpg",
      link: "#specialites",
    },
    {
      title: "Pains & Viennoiseries",
      description: "Pognes, Saint-Genix, Suisse et spécialités locales",
      image: "/french-brioche-viennoiseries.jpg",
      link: "#specialites",
    },
    {
      title: "Macarons",
      description: "Macarons artisanaux aux saveurs variées",
      image: "/colorful-french-macarons.png",
      link: "#specialites",
    },
    {
      title: "Marrons Glacés",
      description: "Spécialité traditionnelle française",
      image: "/marrons-glaces-french-chestnuts.jpg",
      link: "#specialites",
    },
    {
      title: "Traiteur et Buffet",
      description: "Service traiteur pour tous vos événements",
      image: "/french-catering-buffet-appetizers.jpg",
      link: "#specialites",
    },
    {
      title: "Glaces Maison",
      description: "Glaces artisanales aux parfums authentiques",
      image: "/artisan-french-ice-cream.jpg",
      link: "#specialites",
    },
    {
      title: "Pièces Montées",
      description: "Créations spectaculaires pour vos grandes occasions",
      image: "/french-wedding-cake-piece-montee.jpg",
      link: "#specialites",
    },
    {
      title: "Fruits Confits Maison",
      description: "Fruits confits traditionnels faits maison",
      image: "/candied-fruits-french-confits.jpg",
      link: "#specialites",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Split Screen Hero - style maquette */}
      <section className="min-h-[90vh] grid md:grid-cols-2">
        {/* Panneau gauche */}
        <div className="relative min-h-[50vh] md:min-h-full">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/Video/domaine.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="p-6 md:p-12 lg:p-16 max-w-2xl">
              <h2 className="font-serif text-white text-5xl md:text-7xl leading-tight mb-4">
                Domaine des<br />Seigneurs
              </h2>
              <p className="text-white/90 text-2xl md:text-3xl mb-6">Wines of Excellence</p>
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90" asChild>
                <a href="https://domainedesseigneurs.fr/" target="_blank" rel="noopener noreferrer">Découvrir</a>
              </Button>
            </div>
          </div>
        </div>
        {/* Panneau droit */}
        <div className="relative min-h-[50vh] md:min-h-full">
          <Image
            src="/french-brioche-viennoiseries.jpg"
            alt="Paris Friand - Chocolate & Pastry"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-red-600/35 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="p-6 md:p-12 lg:p-16 max-w-2xl ml-auto text-right">
              <h2 className="font-serif text-white text-5xl md:text-7xl leading-tight mb-4">
                Paris Friand
              </h2>
              <p className="text-white/90 text-2xl md:text-3xl mb-6">Chocolate &amp; Pastry</p>
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90" asChild>
                <a href="/paris-friand">Découvrir</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/acc.png"
                alt="Frédéric Colomb"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block mb-6">
                <span className="text-accent text-sm font-semibold tracking-wider uppercase">{t("ourStory")}</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl mb-8 text-foreground leading-tight">COLOMB Frédéric</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">{t("aboutText1")}</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t("aboutText2")}</p>
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
                  <span>{t("masterArtisan")}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>{t("homemade")}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ChefHat className="w-5 h-5 text-accent" />
                  <span>{t("frenchKnowHow")}</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t("learnMore")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section id="specialites" className="py-32 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
              {t("ourSpecialties")}
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">{t("discoverOurCreations")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("specialtiesDescription")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer border-border bg-card hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl mb-3 text-card-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                  <Link href={item.link}>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-accent group-hover:translate-x-2 transition-transform"
                    >
                      {t("discover")} →
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Locations */}
      <section id="boutiques" className="py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
              {t("ourShops")}
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">{t("visitUs")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("locationsDescription")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-10 border-2 border-border bg-card hover:border-accent transition-colors duration-300">
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
                    <p className="font-semibold text-foreground mb-1">{t("openingHours")}</p>
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
                  {t("viewOnMap")}
                </a>
              </Button>
            </Card>

            <Card className="p-10 border-2 border-border bg-card hover:border-accent transition-colors duration-300">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-accent/10 p-4 rounded-full">
                  <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl mb-3 text-card-foreground">Paris Friand</h3>
                  <p className="text-lg text-muted-foreground">
                  7, Avenue Pierre Semard Valence 26000<br /> 5, rue des Alpes Valence 26000
                    <br />
                   
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg">04 75 70 42 57</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="text-lg">
                    <p className="font-semibold text-foreground mb-1">{t("openingHours")}</p>
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
                  {t("viewOnMap")}
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/elegant-french-pastry-pattern.jpg" alt="Background pattern" fill className="object-cover" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="bg-primary-foreground/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <ChefHat className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl mb-8 text-balance leading-tight">{t("customOrders")}</h2>
          <p className="text-xl mb-12 opacity-95 text-balance max-w-3xl mx-auto leading-relaxed">
            {t("customOrdersDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6"
              asChild
            >
              <a href="tel:0475430035">{t("makeAppointment")}</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 bg-transparent"
              asChild
            >
              <a href="#specialites">{t("viewOurWork")}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h3 className="font-serif text-4xl mb-6">{t("heroTitle")}</h3>
              <p className="text-background/80 leading-relaxed text-lg mb-6">{t("footerDescription")}</p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-background/20 hover:bg-background/10 bg-transparent"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-background/20 hover:bg-background/10 bg-transparent"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-6">{t("navigation")}</h4>
              <ul className="space-y-3 text-background/80">
                <li>
                  <Link href="/patisserie" className="hover:text-background transition-colors text-lg">
                    {t("patisserie")}
                  </Link>
                </li>
                <li>
                  <Link href="/chocolaterie" className="hover:text-background transition-colors text-lg">
                    {t("chocolaterie")}
                  </Link>
                </li>
                <li>
                  <Link href="/boulangerie" className="hover:text-background transition-colors text-lg">
                    {t("boulangerie")}
                  </Link>
                </li>
                <li>
                  <Link href="/traiteur" className="hover:text-background transition-colors text-lg">
                    {t("traiteur")}
                  </Link>
                </li>
                <li>
                  <Link href="/boutique" className="hover:text-background transition-colors text-lg">
                    {t("shop")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-6">{t("information")}</h4>
              <ul className="space-y-3 text-background/80">
                <li>
                  <Link href="/a-propos" className="hover:text-background transition-colors text-lg">
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link href="/#boutiques" className="hover:text-background transition-colors text-lg">
                    {t("ourShops")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-background transition-colors text-lg">
                    {t("contact")}
                  </Link>
                </li>
                <li>
                  <Link href="/mentions-legales" className="hover:text-background transition-colors text-lg">
                    {t("legalNotice")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p className="text-lg">&copy; 2025 Paris Friand - Frédéric COLOMB. {t("allRightsReserved")}.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
