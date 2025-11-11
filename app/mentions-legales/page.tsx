import { Card } from "@/components/ui/card"

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl mb-12 text-foreground">Mentions Légales</h1>

        <Card className="p-8 mb-8">
          <h2 className="font-serif text-3xl mb-4 text-foreground">Éditeur du site</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">
            <strong>Raison sociale :</strong> Paris Friand - COLOMB Frédéric
          </p>
          <p className="text-muted-foreground leading-relaxed mb-2">
            <strong>Forme juridique :</strong> Artisan Pâtissier Chocolatier Traiteur
          </p>
          <p className="text-muted-foreground leading-relaxed mb-2">
            <strong>Adresse :</strong> 7 Avenue Pierre Sémard, 26000 Valence
          </p>
          <p className="text-muted-foreground leading-relaxed mb-2">
            <strong>Téléphone :</strong> 04 75 43 00 35
          </p>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="font-serif text-3xl mb-4 text-foreground">Hébergement</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ce site est hébergé par un prestataire professionnel garantissant la sécurité et la disponibilité des
            données.
          </p>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="font-serif text-3xl mb-4 text-foreground">Propriété intellectuelle</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive de Paris Friand
            - COLOMB Frédéric, sauf mention contraire.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents
            éléments est strictement interdite sans l'accord exprès par écrit de Paris Friand.
          </p>
        </Card>

        <Card className="p-8 mb-8">
          <h2 className="font-serif text-3xl mb-4 text-foreground">Protection des données personnelles</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la
            Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des
            données vous concernant.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Pour exercer ce droit, vous pouvez nous contacter par téléphone au 04 75 43 00 35 ou vous rendre directement
            dans l'une de nos boutiques.
          </p>
        </Card>

        <Card className="p-8">
          <h2 className="font-serif text-3xl mb-4 text-foreground">Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer votre
            navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne pas fonctionner
            correctement.
          </p>
        </Card>
      </div>
    </div>
  )
}
