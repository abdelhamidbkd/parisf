import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Paris Friand - Maître Artisan Pâtissier Chocolatier Traiteur à Valence",
  description:
    "Découvrez les créations artisanales de Frédéric COLOMB, Maître Artisan Pâtissier Chocolatier à Valence. Gâteaux, chocolats, viennoiseries et traiteur.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <SiteHeader />
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
