import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as CircleCheck, i as Shield, o as Server, r as Wifi, y as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Header, t as Footer } from "./Footer-BDQxwMNR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/status-Chq3psyZ.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		name: "Site principal",
		status: "Operacional",
		icon: Wifi
	},
	{
		name: "Servidores Linux",
		status: "Operacional",
		icon: Server
	},
	{
		name: "Servidores Windows",
		status: "Operacional",
		icon: Server
	},
	{
		name: "Monitoramento",
		status: "Operacional",
		icon: Shield
	}
];
function Status() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-[1200px] px-5 pb-24 pt-28 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Voltar para o início"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-card p-8 sm:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex size-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-3 rounded-full bg-emerald-500" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
								children: "Todos os sistemas operacionais"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-10 max-w-2xl text-muted-foreground",
							children: [
								"Acompanhe o status dos principais serviços e infraestruturas monitorados. Última verificação: ",
								(/* @__PURE__ */ new Date()).toLocaleString("pt-BR"),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/20",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-11 place-items-center rounded-xl bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service.icon, {
											className: "size-5 text-primary",
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-medium text-foreground",
											children: service.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground",
											children: service.status
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "size-6 text-emerald-500",
										"aria-hidden": "true"
									})
								]
							}, service.name))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Status as component };
