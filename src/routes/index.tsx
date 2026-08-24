import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Competencies } from "@/components/Competencies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { profile, contacts } from "@/data/portfolio";

const title = "Caio Marcondes — Analista de Sistemas & Infraestrutura";
const description =
  "Portfólio de Caio Marcondes, analista de Sistemas e infraestrutura: servidores Windows e Linux, segurança da informação, AWS, Google Cloud, automação e monitoramento.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          description: profile.intro,
          email: "contato@caioit.com",
          telephone: "+5515997605704",
          url: "https://caioit.com",
          sameAs: contacts.filter((c) => c.href.startsWith("http")).map((c) => c.href),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Competencies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}