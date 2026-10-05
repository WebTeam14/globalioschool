import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as Building2, n as UserCheck } from "../_libs/lucide-react.mjs";
import { _ as recruiters, g as placementMenu } from "./router-BCjNVk8M.mjs";
import { t as Reveal } from "./Reveal-DskLRJLT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/placement-C5uFBvzS.js
var import_jsx_runtime = require_jsx_runtime();
function PlacementPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "surface-dark relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid-lines-dark opacity-50",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-gis relative py-8 md:py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-cyan",
						children: "Placement"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-3xl font-semibold md:text-5xl",
						children: "Careers built with industry partners"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-navy-foreground/70",
						children: "Our placement cell connects learners with associate companies hiring for Artificial Intelligence, IoT, Cybersecurity and SAP roles."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-wrap gap-3",
						children: placementMenu.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${m.id}`,
							className: "inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-navy-foreground/85 transition-colors hover:bg-white/10",
							children: m.title
						}) }, m.id))
					})
				] })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "associate-companies",
			className: "section-y scroll-mt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-gis",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
						className: "size-4",
						"aria-hidden": true
					}), " Associate Company"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold",
					children: "Companies that hire from Global IoT School"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5",
					children: recruiters.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .03,
						className: "grid h-24 place-items-center rounded-xl border border-border bg-card p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: r.src,
							alt: r.name,
							loading: "lazy",
							className: "max-h-12 w-auto object-contain opacity-80"
						})
					}, r.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "placed-students",
			className: "section-y scroll-mt-24 bg-secondary/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-gis",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, {
							className: "size-4",
							"aria-hidden": true
						}), " Placed Student"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold",
						children: "Learner placement outcomes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted-foreground",
						children: "Placed student profiles are shared by the Global IoT School placement cell. For the latest verified placement list and student details, please contact the placement team."
					})
				] })
			})
		})
	] });
}
//#endregion
export { PlacementPage as component };
