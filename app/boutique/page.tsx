"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  category: string
  image: string
}

export default function BoutiquePage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    adresse: "",
    ville: "",
    codePostal: "",
    commentaire: "",
  })

  const products = [
    // Ballotins Chocolats
    {
      id: "1",
      name: "Ballotin Chocolats 250g",
      price: 13.9,
      category: "Chocolaterie",
      image: "/french-chocolate-ballotin-box-250g.jpg",
    },
    {
      id: "2",
      name: "Ballotin Chocolats 500g",
      price: 27.9,
      category: "Chocolaterie",
      image: "/french-chocolate-ballotin-box-500g.jpg",
    },
    {
      id: "3",
      name: "Ballotin Chocolats 750g",
      price: 41.9,
      category: "Chocolaterie",
      image: "/french-chocolate-ballotin-box-750g.jpg",
    },
    {
      id: "4",
      name: "Ballotin Chocolats 1kg",
      price: 55.9,
      category: "Chocolaterie",
      image: "/french-chocolate-ballotin-box-1kg.jpg",
    },
    {
      id: "5",
      name: "Ballotin Chocolats 2kg",
      price: 96.9,
      category: "Chocolaterie",
      image: "/french-chocolate-ballotin-box-2kg.jpg",
    },

    // Nougat et Confiserie
    {
      id: "6",
      name: "Boîte métallique nougat de Valence tendre",
      price: 13.9,
      category: "Confiserie",
      image: "/french-nougat-de-valence-metal-box.jpg",
    },
    {
      id: "7",
      name: "Fruits Confits Maison",
      price: 15,
      category: "Confiserie",
      image: "/french-candied-fruits-assortment.jpg",
    },

    // Camionnette Valence
    {
      id: "8",
      name: "Camionnette Valence (petit modèle)",
      price: 18.6,
      category: "Spécialités",
      image: "/chocolate-truck-camionnette-valence-small.jpg",
    },
    {
      id: "9",
      name: "Camionnette Valence (grand modèle)",
      price: 22.9,
      category: "Spécialités",
      image: "/chocolate-truck-camionnette-valence-large.jpg",
    },

    // Gâteaux et Pâtisseries
    {
      id: "10",
      name: "Carabosse (sans gluten)",
      price: 28,
      category: "Pâtisserie",
      image: "/french-chocolate-carabosse-cake-gluten-free.jpg",
    },
    { id: "11", name: "Ambassadeur", price: 32, category: "Pâtisserie", image: "/french-ambassadeur-cake-pastry.jpg" },
    { id: "12", name: "Andalou", price: 30, category: "Pâtisserie", image: "/french-andalou-cake-pastry.jpg" },
    {
      id: "13",
      name: "Chiboust Framboise",
      price: 28,
      category: "Pâtisserie",
      image: "/french-chiboust-raspberry-cake.jpg",
    },
    { id: "14", name: "Cristal", price: 30, category: "Pâtisserie", image: "/french-cristal-cake-pastry.jpg" },
    { id: "15", name: "Diamant Vert", price: 32, category: "Pâtisserie", image: "/french-diamant-vert-green-cake.jpg" },

    {
      id: "16",
      name: "Ambre (chocolat)",
      price: 4.5,
      category: "Chocolaterie",
      image: "/french-ambre-chocolate-praline.jpg",
    },
    {
      id: "17",
      name: "Coffret Chocolat",
      price: 25,
      category: "Chocolaterie",
      image: "/french-chocolate-gift-box-assortment.jpg",
    },

    {
      id: "18",
      name: "Carte Cadeau 20€",
      price: 20,
      category: "Cartes Cadeaux",
      image: "/paris-friand-gift-card-20.jpg",
    },
    {
      id: "19",
      name: "Carte Cadeau 50€",
      price: 50,
      category: "Cartes Cadeaux",
      image: "/paris-friand-gift-card-50.jpg",
    },
    {
      id: "20",
      name: "Carte Cadeau 100€",
      price: 100,
      category: "Cartes Cadeaux",
      image: "/paris-friand-gift-card-100.jpg",
    },

    {
      id: "21",
      name: "Macarons (boîte de 6)",
      price: 12,
      category: "Macarons",
      image: "/french-macarons-box-6-pieces.jpg",
    },
    {
      id: "22",
      name: "Macarons (boîte de 12)",
      price: 22,
      category: "Macarons",
      image: "/french-macarons-box-12-pieces.jpg",
    },
    {
      id: "23",
      name: "Macarons (boîte de 24)",
      price: 42,
      category: "Macarons",
      image: "/french-macarons-box-24-pieces.jpg",
    },

    {
      id: "24",
      name: "Marrons Glacés (boîte de 6)",
      price: 28,
      category: "Marrons Glacés",
      image: "/french-marrons-glaces-box-6-pieces.jpg",
    },
    {
      id: "25",
      name: "Marrons Glacés (boîte de 12)",
      price: 52,
      category: "Marrons Glacés",
      image: "/french-marrons-glaces-box-12-pieces.jpg",
    },

    { id: "26", name: "Pogne", price: 8, category: "Viennoiseries", image: "/french-pogne-brioche-specialty.jpg" },
    {
      id: "27",
      name: "Saint-Genix",
      price: 9,
      category: "Viennoiseries",
      image: "/french-saint-genix-brioche-pralines.jpg",
    },
    { id: "28", name: "Suisse", price: 3.5, category: "Viennoiseries", image: "/french-suisse-pastry-valence.jpg" },

    {
      id: "29",
      name: "Gâteau d'anniversaire (6 personnes)",
      price: 28,
      category: "Gâteaux d'anniversaire",
      image: "/french-birthday-cake-6-servings.jpg",
    },
    {
      id: "30",
      name: "Gâteau d'anniversaire (8 personnes)",
      price: 35,
      category: "Gâteaux d'anniversaire",
      image: "/french-birthday-cake-8-servings.jpg",
    },
    {
      id: "31",
      name: "Gâteau d'anniversaire (12 personnes)",
      price: 50,
      category: "Gâteaux d'anniversaire",
      image: "/french-birthday-cake-12-servings.jpg",
    },
  ]

  const addToCart = (product: { id: string; name: string; price: number; category: string; image: string }) => {
    const existingItem = cart.find((item) => item.id === product.id)
    if (existingItem) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const updateQuantity = (id: string, change: number) => {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Créer le message de commande
    const orderDetails = cart.map((item) => `${item.quantity}x ${item.name} (${item.price}€)`).join("\n")

    const message = `
NOUVELLE COMMANDE

Client:
${formData.prenom} ${formData.nom}
Email: ${formData.email}
Téléphone: ${formData.telephone}

Adresse de livraison:
${formData.adresse}
${formData.codePostal} ${formData.ville}

Commande:
${orderDetails}

Total: ${total.toFixed(2)}€

Commentaire:
${formData.commentaire || "Aucun"}
    `.trim()

    // Envoyer par email (simulation)
    alert("Commande envoyée ! Nous vous contacterons bientôt.\n\n" + message)

    // Réinitialiser
    setCart([])
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      adresse: "",
      ville: "",
      codePostal: "",
      commentaire: "",
    })
  }

  const groupedProducts = products.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }
      acc[product.category].push(product)
      return acc
    },
    {} as Record<string, typeof products>,
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-3xl">
            Paris Friand
          </Link>
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" />
            <span className="font-semibold">{cart.length} article(s)</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-5xl mb-4">Boutique en ligne</h1>
          <p className="text-xl text-muted-foreground">Commandez vos produits préférés</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Products */}
          <div className="lg:col-span-2 space-y-8">
            {Object.entries(groupedProducts).map(([category, items]) => (
              <div key={category}>
                <h2 className="font-serif text-3xl mb-4 text-accent">{category}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {items.map((product) => (
                    <Card key={product.id} className="p-4 hover:shadow-lg transition-shadow">
                      <div className="relative w-full h-48 mb-3 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold mb-1">{product.name}</h3>
                          <p className="text-lg font-bold text-accent">{product.price.toFixed(2)}€</p>
                        </div>
                        <Button onClick={() => addToCart(product)} size="sm">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cart & Form */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="p-6">
              <h2 className="font-serif text-2xl mb-4">Votre panier</h2>

              {cart.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">Votre panier est vide</p>
              ) : (
                <>
                  <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between gap-2 p-3 bg-muted rounded-lg">
                        <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.price.toFixed(2)}€</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 bg-transparent"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 bg-transparent"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                          <Button
                            size="icon"
                            variant="destructive"
                            className="h-8 w-8"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-accent">{total.toFixed(2)}€</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="prenom">Prénom*</Label>
                        <Input
                          id="prenom"
                          required
                          value={formData.prenom}
                          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="nom">Nom*</Label>
                        <Input
                          id="nom"
                          required
                          value={formData.nom}
                          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email*</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="telephone">Téléphone*</Label>
                      <Input
                        id="telephone"
                        type="tel"
                        required
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="adresse">Adresse*</Label>
                      <Input
                        id="adresse"
                        required
                        value={formData.adresse}
                        onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="codePostal">Code postal*</Label>
                        <Input
                          id="codePostal"
                          required
                          value={formData.codePostal}
                          onChange={(e) => setFormData({ ...formData, codePostal: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="ville">Ville*</Label>
                        <Input
                          id="ville"
                          required
                          value={formData.ville}
                          onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="commentaire">Commentaire</Label>
                      <Textarea
                        id="commentaire"
                        rows={3}
                        value={formData.commentaire}
                        onChange={(e) => setFormData({ ...formData, commentaire: e.target.value })}
                        placeholder="Instructions spéciales, date de retrait..."
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Commander
                    </Button>
                  </form>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
