import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as instance } from "../_libs/i18next.mjs";
import { r as initReactI18next, t as I18nextProvider } from "../_libs/react-i18next.mjs";
import { i as __exportAll } from "./server-DdW0lG-5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DfkipkJP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-xcAl66jH.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var pt_default = {
	header: {
		"title": "CaioIT",
		"navigation": {
			"sobre": "Sobre",
			"skills": "Skills",
			"competencias": "Competências",
			"contato": "Contato",
			"portfolio": "Portfólio",
			"status": "Status"
		},
		"whatsapp": "WhatsApp",
		"contact": "Entre em contato",
		"menu": {
			"open": "Abrir menu",
			"close": "Fechar menu"
		}
	},
	hero: {
		"availability": "Disponível para projetos",
		"resultsTitle": "Resultados que comprovam a entrega",
		"intro": "Ao longo da minha trajetória, desenvolvi habilidades em hardware e software e busco constantemente aprimorar minhas capacidades com cada novo desafio. Acredito no poder da criatividade, inovação e colaboração para gerar resultados impactantes e memoráveis.",
		"cta": "Fale comigo"
	},
	about: {
		"label": "Sobre",
		"title": "Infraestrutura confiável, do hardware à nuvem.",
		"description": "Considero-me um profissional generalista, com conhecimentos que abrangem diversas áreas da tecnologia e habilidades diversificadas em ambientes correlacionados. Com um interesse nativo pela área desde cedo, iniciei minha trajetória na adolescência com jogos online, atuando no gerenciamento de servidores e no desenvolvimento Fullstack."
	},
	stats: {
		"experience": "Anos de experiência",
		"projects": "Projetos entregues",
		"uptime": "Uptime garantido",
		"support": "Suporte técnico"
	},
	skills: {
		"title": "Skills",
		"heading": "Tecnologias e ferramentas",
		"description": "Tecnologias e ferramentas que domino para entregar soluções robustas e escaláveis.",
		"programming": "Programação",
		"databases": "Banco de Dados",
		"operatingSystems": "Sistemas Operacionais",
		"aws": "Amazon Web Services",
		"gcp": "Google Cloud",
		"languages": [
			"JavaScript",
			"Python",
			"Dart",
			"HTML",
			"PHP",
			"CSS"
		],
		"dbs": [
			"Microsoft SQL Server",
			"SQLite",
			"MongoDB",
			"MySQL",
			"PostgreSQL"
		],
		"os": [
			"Ubuntu Server 16.04 a 24.04",
			"Windows Server 2001 a 2019",
			"Windows 7 a 11",
			"Ubuntu Desktop",
			"Debian 10 a 12"
		],
		"awsServices": [
			"Amazon CloudWatch",
			"Amazon EC2",
			"Amazon RDS",
			"Amazon S3"
		],
		"gcpServices": [
			"Cloud Functions",
			"Compute Engine",
			"Cloud Storage",
			"Cloud SQL",
			"Firebase"
		]
	},
	competencies: {
		"title": "Competências",
		"infrastructure": {
			"title": "Infraestrutura de Rede",
			"description": "Configuração e gerenciamento de redes empresariais com alta disponibilidade e performance."
		},
		"security": {
			"title": "Segurança da Informação",
			"description": "Implementação de políticas de segurança, firewalls e monitoramento de ameaças."
		},
		"servers": {
			"title": "Administração de Servidores",
			"description": "Gestão de servidores Windows e Linux, virtualização e containers."
		},
		"cloud": {
			"title": "Cloud Computing",
			"description": "Arquitetura e migração para AWS e Google Cloud com otimização de custos."
		},
		"automation": {
			"title": "Automação",
			"description": "Scripts e automação de processos para aumentar eficiência operacional."
		},
		"monitoring": {
			"title": "Monitoramento",
			"description": "Dashboards e alertas em tempo real para garantir máxima disponibilidade."
		}
	},
	contact: {
		"label": "Contato",
		"heading": "Vamos conversar?",
		"intro": "Estou disponível para novos projetos e oportunidades. Entre em contato pelos canais abaixo.",
		"interestTitle": "Achou interessante?",
		"interestDescription": "Para uma visão abrangente das minhas habilidades e experiências, sinta-se à vontade para entrar em contato.",
		"whatsapp": "Falar no WhatsApp",
		"title": "Entre em contato",
		"description": "Tem um projeto em mente? Vamos trabalhar juntos!",
		"email": "Email",
		"phone": "Telefone",
		"message": "Mensagem",
		"send": "Enviar mensagem"
	},
	footer: {
		"copyright": "© 2024 Caio Marcondes. Todos os direitos reservados.",
		"links": "Links"
	},
	profile: {
		"name": "Caio Marcondes",
		"role": "Analista de Sistemas & Infraestrutura"
	}
};
var en_default = {
	header: {
		"title": "CaioIT",
		"navigation": {
			"sobre": "About",
			"skills": "Skills",
			"competencias": "Competencies",
			"contato": "Contact",
			"portfolio": "Portfolio",
			"status": "Status"
		},
		"whatsapp": "WhatsApp",
		"contact": "Get in touch",
		"menu": {
			"open": "Open menu",
			"close": "Close menu"
		}
	},
	hero: {
		"availability": "Available for projects",
		"resultsTitle": "Results that demonstrate delivery",
		"intro": "Throughout my career, I have developed skills in hardware and software and constantly seek to improve my abilities with each new challenge. I believe in the power of creativity, innovation, and collaboration to generate impactful and memorable results.",
		"cta": "Talk to me"
	},
	about: {
		"label": "About",
		"title": "Reliable infrastructure, from hardware to the cloud.",
		"description": "I consider myself a generalist professional, with knowledge spanning several areas of technology and diverse skills across related environments. With a natural interest in the field from an early age, I began my journey as a teenager with online games, managing servers and working on Full Stack development."
	},
	stats: {
		"experience": "Years of experience",
		"projects": "Projects delivered",
		"uptime": "Guaranteed uptime",
		"support": "24/7 Support"
	},
	skills: {
		"title": "Skills",
		"heading": "Technologies and tools",
		"description": "Technologies and tools I master to deliver robust and scalable solutions.",
		"programming": "Programming",
		"databases": "Databases",
		"operatingSystems": "Operating Systems",
		"aws": "Amazon Web Services",
		"gcp": "Google Cloud",
		"languages": [
			"JavaScript",
			"Python",
			"Dart",
			"HTML",
			"PHP",
			"CSS"
		],
		"dbs": [
			"Microsoft SQL Server",
			"SQLite",
			"MongoDB",
			"MySQL",
			"PostgreSQL"
		],
		"os": [
			"Ubuntu Server 16.04 to 24.04",
			"Windows Server 2001 to 2019",
			"Windows 7 to 11",
			"Ubuntu Desktop",
			"Debian 10 to 12"
		],
		"awsServices": [
			"Amazon CloudWatch",
			"Amazon EC2",
			"Amazon RDS",
			"Amazon S3"
		],
		"gcpServices": [
			"Cloud Functions",
			"Compute Engine",
			"Cloud Storage",
			"Cloud SQL",
			"Firebase"
		]
	},
	competencies: {
		"title": "Competencies",
		"infrastructure": {
			"title": "Network Infrastructure",
			"description": "Configuration and management of enterprise networks with high availability and performance."
		},
		"security": {
			"title": "Information Security",
			"description": "Implementation of security policies, firewalls and threat monitoring."
		},
		"servers": {
			"title": "Server Administration",
			"description": "Management of Windows and Linux servers, virtualization and containers."
		},
		"cloud": {
			"title": "Cloud Computing",
			"description": "Architecture and migration to AWS and Google Cloud with cost optimization."
		},
		"automation": {
			"title": "Automation",
			"description": "Scripts and process automation to increase operational efficiency."
		},
		"monitoring": {
			"title": "Monitoring",
			"description": "Real-time dashboards and alerts to ensure maximum availability."
		}
	},
	contact: {
		"label": "Contact",
		"heading": "Let's talk?",
		"intro": "I'm available for new projects and opportunities. Get in touch through the channels below.",
		"interestTitle": "Interested?",
		"interestDescription": "For a comprehensive overview of my skills and experience, feel free to get in touch.",
		"whatsapp": "Talk on WhatsApp",
		"title": "Get in touch",
		"description": "Have a project in mind? Let's work together!",
		"email": "Email",
		"phone": "Phone",
		"message": "Message",
		"send": "Send message"
	},
	footer: {
		"copyright": "© 2024 Caio Marcondes. All rights reserved.",
		"links": "Links"
	},
	profile: {
		"name": "Caio Marcondes",
		"role": "Systems Analyst & Infrastructure"
	}
};
var getLanguage = () => {
	if (typeof window === "undefined") return "pt";
	const savedLanguage = localStorage.getItem("language");
	if (savedLanguage && ["pt", "en"].includes(savedLanguage)) return savedLanguage;
	return (navigator.languages.length > 0 ? navigator.languages : [navigator.language]).map((language) => language.split("-")[0]).find((language) => ["pt", "en"].includes(language)) ?? "pt";
};
instance.use(initReactI18next).init({
	resources: {
		pt: { translation: pt_default },
		en: { translation: en_default }
	},
	lng: getLanguage(),
	fallbackLng: "pt",
	interpolation: { escapeValue: false }
});
var config_default = instance;
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Página não encontrada."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Está página não existe."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Tentar novamente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Início"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Caio Marcondes — Analista de Sistemas & Infraestrutura" },
			{
				name: "description",
				content: "Portfólio profissional de Caio Marcondes, analista de sistemas e infraestrutura."
			},
			{
				name: "author",
				content: "Caio Marcondes"
			},
			{
				property: "og:site_name",
				content: "Caio Marcondes"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&family=Ubuntu:wght@400;500;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				async: true,
				defer: true,
				src: "https://tianji.caioit.com/tracker.js",
				"data-website-id": "cmt9939440003nnpk77c0p3sb"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nextProvider, {
		i18n: config_default,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
			client: queryClient,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})
	});
}
var profile = {
	name: "Caio Marcondes",
	initials: "CM"
};
var competenciesData = [
	{ icon: "network" },
	{ icon: "shield" },
	{ icon: "server" },
	{ icon: "cloud" },
	{ icon: "automation" },
	{ icon: "monitor" }
];
var whatsappUrl = "https://wa.me/5515997605704";
var contacts = [
	{
		label: "phone",
		value: "+55 (15) 99760-5704",
		href: "https://wa.me/5515997605704",
		icon: "phone"
	},
	{
		label: "email",
		value: "contato@caioit.com",
		href: "mailto:contato@caioit.com",
		icon: "mail"
	},
	{
		label: "linkedin",
		value: "/in/marcondescaio",
		href: "https://www.linkedin.com/in/marcondescaio/",
		icon: "linkedin"
	},
	{
		label: "github",
		value: "/caiomarcondes",
		href: "https://github.com/caiomarcondes",
		icon: "github"
	}
];
var navLinks = [
	{
		label: "sobre",
		href: "#sobre"
	},
	{
		label: "skills",
		href: "#skills"
	},
	{
		label: "competencias",
		href: "#competencias"
	},
	{
		label: "contato",
		href: "#contato"
	}
];
var $$splitComponentImporter$1 = () => import("./routes-CS0Bxknq.mjs");
var title$1 = "Caio Marcondes — Analista de Sistemas & Infraestrutura";
var description$1 = "Portfólio de Caio Marcondes, analista de Sistemas e infraestrutura: servidores Windows e Linux, segurança da informação, AWS, Google Cloud, automação e monitoramento.";
var Route$1 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: title$1 },
			{
				name: "description",
				content: description$1
			},
			{
				property: "og:title",
				content: title$1
			},
			{
				property: "og:description",
				content: description$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
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
				sameAs: contacts.filter((c) => c.href.startsWith("http")).map((c) => c.href)
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./status-CuVueZ9q.mjs");
var title = "Status dos Serviços — Caio Marcondes";
var description = "Página de status dos serviços e infraestrutura monitorados por Caio Marcondes.";
var Route = createFileRoute("/status")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/status"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	StatusRoute: Route.update({
		id: "/status",
		path: "/status",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { profile as a, navLinks as i, competenciesData as n, whatsappUrl as o, contacts as r, router_exports as t };
