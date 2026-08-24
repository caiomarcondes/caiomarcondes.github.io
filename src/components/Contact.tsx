import { Phone, Mail, Linkedin, Instagram, Github, Download, ArrowUpRight } from "lucide-react";
import { contacts, whatsappUrl, profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const icons = {
  phone: Phone,
  mail: Mail,
  linkedin: Linkedin,
  instagram: Instagram,
  github: Github,
} as const;

export function Contact() {
  return (
    <section id="contato" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contato
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
              Vamos conversar?
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Estou disponível para novos projetos e oportunidades. Entre em contato pelos canais
              abaixo.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((contact, i) => {
              const Icon = icons[contact.icon];
              return (
                <Reveal key={contact.label} delay={i * 60}>
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="card-surface flex h-full rounded-md items-center gap-4 p-6"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                        {contact.label}
                      </span>
                      <span className="mt-1 block truncate text-sm font-medium">
                        {contact.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="ml-auto size-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </a>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120}>
            <div className="aurora flex h-full flex-col justify-between gap-8 rounded-md border border-border p-8">
              <div>
                <h3 className="font-display text-xl font-semibold">Achou interessante?</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Para uma visão abrangente das minhas habilidades e experiências, sinta-se à
                  entrar em contato.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
