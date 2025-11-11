"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { translations, type Language, type TranslationKey } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "fr"
    const stored = window.localStorage.getItem("lang") as Language | null
    if (stored) return stored
    const nav = (navigator?.language || navigator?.languages?.[0] || "fr").slice(0, 2).toLowerCase()
    const supported = ["fr", "en", "ar", "es", "de"] as const
    return (supported.find((l) => l === (nav as any)) as Language) || "fr"
  })

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.fr[key]
  }

  // Persistance + attribut lang sur <html>
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem("lang", language)
      if (document?.documentElement) {
        document.documentElement.lang = language
      }
    } catch {}
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
