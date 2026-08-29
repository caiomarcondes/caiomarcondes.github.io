import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as profile, i as navLinks, l as whatsappUrl, r as contacts } from "./router-cK8EdNXY.mjs";
import { l as MessageCircle, t as X, u as Menu } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-BDQxwMNR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:h-25 sm:px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#topo",
					"aria-label": "Início",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-logo text-2xl font-bold tracking-tight sm:text-3xl",
						children: "CaioIT"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Principal",
					className: "hidden items-center gap-1 lg:flex",
					children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
						children: link.label
					}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://status.caioit.com",
						className: "ml-2 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex size-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-emerald-500" })]
						}), "Status"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							className: "size-4",
							"aria-hidden": "true"
						}), "WhatsApp"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contato",
						className: "rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]",
						children: "Entre em contato"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					"aria-expanded": open,
					"aria-label": open ? "Fechar menu" : "Abrir menu",
					className: "grid size-10 place-items-center rounded-xl border border-border lg:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile",
				className: "mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-4",
				children: [
					navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						onClick: () => setOpen(false),
						className: "rounded-xl px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
						children: link.label
					}, link.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/status",
						onClick: () => setOpen(false),
						className: "flex items-center gap-2 rounded-xl px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex size-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-emerald-500" })]
						}), "Status"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contato",
						onClick: () => setOpen(false),
						className: "mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground",
						children: "Entre em contato"
					})
				]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1200px] flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-base font-semibold",
					children: profile.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: profile.role
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Rodapé",
					className: "flex flex-wrap gap-x-5 gap-y-2",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-x-5 gap-y-2",
					children: contacts.filter((c) => c.href.startsWith("http")).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: c.href,
						target: "_blank",
						rel: "noreferrer",
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: c.label
					}, c.label))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mx-auto mt-8 max-w-[1200px] px-5 text-xs text-muted-foreground sm:px-8",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				profile.name,
				". Todos os direitos reservados."
			]
		})]
	});
}
//#endregion
export { Header as n, Footer as t };
