import { useTranslation } from "react-i18next";
import { profile, navLinks, contacts } from "@/data/portfolio";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{t("profile.role")}</p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(`header.navigation.${link.label}`)}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {contacts
            .filter((c) => c.href.startsWith("http"))
            .map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(`profile.${c.label}`, { defaultValue: c.label })}
              </a>
            ))}
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1200px] items-center justify-between gap-4 px-5 text-xs text-muted-foreground sm:px-8">
        <p>{t("footer.copyright").replace("2024", String(new Date().getFullYear()))}</p>
        <span>Build v2.0.6</span>
      </div>
    </footer>
  );
}
