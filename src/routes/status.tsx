import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Server, Shield, Wifi } from "lucide-react";

const title = "Status dos Serviços — Caio Marcondes";
const description = "Página de status dos serviços e infraestrutura monitorados por Caio Marcondes.";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/status" }],
  }),
  component: Status,
});

const services = [
  { name: "Site principal", status: "Operacional", icon: Wifi },
  { name: "Servidores Linux", status: "Operacional", icon: Server },
  { name: "Servidores Windows", status: "Operacional", icon: Server },
  { name: "Monitoramento", status: "Operacional", icon: Shield },
];

function Status() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-[1200px] px-5 pb-24 pt-28 sm:px-8">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar para o início
        </Link>

        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div className="mb-8 flex items-center gap-3">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-emerald-500"></span>
            </span>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Todos os sistemas operacionais
            </h1>
          </div>

          <p className="mb-10 max-w-2xl text-muted-foreground">
            Acompanhe o status dos principais serviços e infraestruturas monitorados. Última
            verificação: {new Date().toLocaleString("pt-BR")}.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/20"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-secondary">
                  <service.icon className="size-5 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="font-medium text-foreground">{service.name}</h2>
                  <p className="text-sm text-muted-foreground">{service.status}</p>
                </div>
                <CheckCircle2 className="size-6 text-emerald-500" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
