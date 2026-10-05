import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as gallery } from "./router-BCjNVk8M.mjs";
import { t as Reveal } from "./Reveal-DskLRJLT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DtNgDCNM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	(0, import_react.useMemo)(() => ["All", ...Array.from(new Set(gallery.map((g) => g.category)))], []);
	const [active, setActive] = (0, import_react.useState)("All");
	const items = active === "All" ? gallery : gallery.filter((g) => g.category === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "surface-dark relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid-lines-dark opacity-50",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-gis relative py-5 md:py-15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-cyan text-center",
				children: "Gallery"
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-gis",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5",
				children: items.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i % 6 * .05,
					className: "card-lift break-inside-avoid overflow-hidden rounded-xl border border-border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: g.src,
						alt: g.title,
						loading: "lazy",
						className: "w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-primary",
							children: g.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-sm font-medium text-foreground",
							children: g.title
						})]
					})]
				}, g.src + g.title))
			})
		})
	})] });
}
//#endregion
export { GalleryPage as component };
