'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LanguageSelector } from "@/components/language-selector"

export function SiteHeader() {
  const pathname = usePathname()
  const inParisFriand = pathname?.startsWith("/paris-friand")
  const inDomaine = pathname?.startsWith("/domaine-des-seigneurs")
  const linkClass =
    "text-primary hover:text-foreground transition-colors font-semibold tracking-wide text-sm md:text-[15px] hover:underline underline-offset-8 decoration-2 decoration-[var(--gold)]"

  function HeaderLink({ href, children }: { href: string; children: React.ReactNode }) {
    const active = pathname === href || pathname?.startsWith(href + "/")
    return (
      <Link
        href={href}
        className={`${linkClass} ${active ? "border-b-2 border-[var(--gold)] pb-1" : ""}`}
      >
        {children}
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl text-primary hover:text-foreground transition-colors">
          Paris Friand
        </Link>
        {/* Menu par contexte */}
        {!inParisFriand && !inDomaine && (
          <nav className="hidden md:flex items-center gap-6">
            {/* Rubriques spécifiques retirées de l'accueil */}
            <HeaderLink href="/boutique">Boutique</HeaderLink>
            <HeaderLink href="/actualites">Actualités</HeaderLink>
            <HeaderLink href="/videos">Vidéos</HeaderLink>
            <HeaderLink href="/a-propos">À propos</HeaderLink>
            <HeaderLink href="/contact">Contact</HeaderLink>
          </nav>
        )}
        {inParisFriand && (
          <nav className="hidden md:flex items-center gap-6">
            <HeaderLink href="/paris-friand/chocolaterie">Chocolaterie</HeaderLink>
            <HeaderLink href="/paris-friand/patisserie">Pâtisserie</HeaderLink>
            <HeaderLink href="/paris-friand/boulangerie">Boulangerie</HeaderLink>
            <HeaderLink href="/paris-friand/traiteur">Traiteur</HeaderLink>
          </nav>
        )}
        {inDomaine && (
          <nav className="hidden md:flex items-center gap-6">
            <HeaderLink href="/domaine-des-seigneurs">Accueil</HeaderLink>
            <HeaderLink href="/domaine-des-seigneurs/salle-de-reception">Salle de réception</HeaderLink>
            <HeaderLink href="/domaine-des-seigneurs/chambres">Chambres</HeaderLink>
          </nav>
        )}
        <div className="flex items-center gap-2">
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}


