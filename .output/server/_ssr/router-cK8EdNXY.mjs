import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as __exportAll } from "./server-BX4twkXR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-cK8EdNXY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CY_YMz_W.css";
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var profile = {
	name: "Caio Marcondes",
	role: "Analista de Sistemas & Infraestrutura",
	availability: "Disponível para projetos",
	intro: "Ao longo da minha trajetória, desenvolvi habilidades em hardware e software e busco constantemente aprimorar minhas capacidades com cada novo desafio. Acredito no poder da criatividade, inovação e colaboração para gerar resultados impactantes e memoráveis.",
	initials: "CM"
};
var stats = [
	{
		value: "+7",
		label: "Anos de experiência"
	},
	{
		value: "+50",
		label: "Projetos entregues"
	},
	{
		value: "99%",
		label: "Uptime garantido"
	},
	{
		value: "24/7",
		label: "Suporte técnico"
	}
];
var skillGroups = [
	{
		title: "Programação",
		items: [
			"JavaScript",
			"Python",
			"Dart",
			"HTML",
			"PHP",
			"CSS"
		]
	},
	{
		title: "Banco de Dados",
		items: [
			"Microsoft SQL Server",
			"SQLite",
			"MongoDB",
			"MySQL",
			"PostgreSQL"
		]
	},
	{
		title: "Sistemas Operacionais",
		items: [
			"Ubuntu Server 16.04 a 24.04",
			"Windows Server 2001 a 2019",
			"Windows 7 a 11",
			"Ubuntu Desktop",
			"Debian 10 a 12"
		]
	},
	{
		title: "Amazon Web Services",
		items: [
			"Amazon CloudWatch",
			"Amazon EC2",
			"Amazon RDS",
			"Amazon S3"
		]
	},
	{
		title: "Google Cloud",
		items: [
			"Cloud Functions",
			"Compute Engine",
			"Cloud Storage",
			"Cloud SQL",
			"Firebase"
		]
	}
];
var competencies = [
	{
		title: "Infraestrutura de Rede",
		description: "Configuração e gerenciamento de redes empresariais com alta disponibilidade e performance.",
		icon: "network"
	},
	{
		title: "Segurança da Informação",
		description: "Implementação de políticas de segurança, firewalls e monitoramento de ameaças.",
		icon: "shield"
	},
	{
		title: "Administração de Servidores",
		description: "Gestão de servidores Windows e Linux, virtualização e containers.",
		icon: "server"
	},
	{
		title: "Cloud Computing",
		description: "Arquitetura e migração para AWS e Google Cloud com otimização de custos.",
		icon: "cloud"
	},
	{
		title: "Automação",
		description: "Scripts e automação de processos para aumentar eficiência operacional.",
		icon: "automation"
	},
	{
		title: "Monitoramento",
		description: "Dashboards e alertas em tempo real para garantir máxima disponibilidade.",
		icon: "monitor"
	}
];
var reasons = [
	"Resolução rápida de incidentes",
	"Documentação técnica detalhada",
	"Planejamento de capacidade",
	"Backup e disaster recovery",
	"Otimização de performance",
	"Suporte técnico especializado"
];
var contacts = [
	{
		label: "Telefone",
		value: "+55 (15) 99760-5704",
		href: "https://wa.me/5515997605704",
		icon: "phone"
	},
	{
		label: "Email",
		value: "contato@caioit.com",
		href: "mailto:contato@caioit.com",
		icon: "mail"
	},
	{
		label: "LinkedIn",
		value: "/in/marcondescaio",
		href: "https://www.linkedin.com/in/marcondescaio/",
		icon: "linkedin"
	},
	{
		label: "GitHub",
		value: "/caiomarcondes",
		href: "https://github.com/caiomarcondes",
		icon: "github"
	}
];
var whatsappUrl = "https://wa.me/5515997605704";
var navLinks = [
	{
		label: "Sobre",
		href: "#sobre"
	},
	{
		label: "Skills",
		href: "#skills"
	},
	{
		label: "Competências",
		href: "#competencias"
	},
	{
		label: "Contato",
		href: "#contato"
	}
];
var $$splitComponentImporter$1 = () => import("./routes-CFswUEV0.mjs");
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
var $$splitComponentImporter = () => import("./status-Chq3psyZ.mjs");
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
export { profile as a, stats as c, navLinks as i, whatsappUrl as l, competencies as n, reasons as o, contacts as r, skillGroups as s, router_exports as t };
