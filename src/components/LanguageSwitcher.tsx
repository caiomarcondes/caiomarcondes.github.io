import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "pt", label: "BR", languageName: "Português" },
    { code: "en", label: "EN", languageName: "English" },
  ];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    // Apenas salvar no localStorage se estiver no navegador
    if (typeof window !== "undefined") {
      localStorage.setItem("language", code);
    }
  };

  return (
    <div
      className="ml-9 flex items-center gap-0.5 rounded-sm border border-border/70 bg-muted/60 p-1"
      aria-label="Idioma"
      role="group"
    >
      {languages.map((lang) => {
        const isActive = i18n.language === lang.code;

        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => handleLanguageChange(lang.code)}
            aria-label={lang.languageName}
            aria-pressed={isActive}
            className={`min-w-8 rounded-sm px-2 py-1 text-xs font-semibold transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-background hover:text-foreground"
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
