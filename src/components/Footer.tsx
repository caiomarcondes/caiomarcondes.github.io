import { profile, navLinks, contacts } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
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
                {c.label}
              </a>
            ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-[1200px] px-5 text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
