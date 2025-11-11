"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage, type Language } from "@/components/language-provider"
import { Globe } from "lucide-react"

const languages = [
  { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
  { code: "en" as Language, name: "English", flag: "🇬🇧" },
  { code: "ar" as Language, name: "العربية", flag: "🇲🇦" },
  { code: "es" as Language, name: "Español", flag: "🇪🇸" },
  { code: "de" as Language, name: "Deutsch", flag: "🇩🇪" },
]

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-accent" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
