import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as Building2, C as CircleCheck, a as Send, f as MapPin, m as LoaderCircle, p as Mail, s as Phone, u as MessageCircle } from "../_libs/lucide-react.mjs";
import { v as site } from "./router-BCjNVk8M.mjs";
import { t as Reveal } from "./Reveal-DskLRJLT.mjs";
import { t as sendEnquiryEmail } from "./emailService-U0lY8Su3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BO8WBrhp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("Course Enquiry");
	const [message, setMessage] = (0, import_react.useState)("");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const [referenceId, setReferenceId] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		const generatedId = "GIS-GEN-" + Math.floor(1e5 + Math.random() * 9e5);
		setReferenceId(generatedId);
		try {
			await sendEnquiryEmail({
				enquiryType: "Contact General Enquiry",
				subject: `[Website Enquiry] ${category} - ${fullName} [Ref: ${generatedId}]`,
				senderName: fullName,
				senderEmail: email,
				senderPhone: phone,
				referenceId: generatedId,
				fields: {
					"Enquiry Category": category,
					"Message / Query": message || "None provided"
				}
			});
		} catch (err) {
			console.error("General contact enquiry email failed:", err);
		} finally {
			setIsSubmitting(false);
			setIsSuccess(true);
		}
	};
	const handleReset = () => {
		setIsSuccess(false);
		setFullName("");
		setEmail("");
		setPhone("");
		setMessage("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "surface-dark relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid-lines-dark opacity-50",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-gis relative py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-cyan",
					children: "Contact Desk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-3xl font-bold md:text-5xl",
					children: "Let's talk about your future skills & collaborations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base text-navy-foreground/75 md:text-lg",
					children: "Our academic & advisory team is available for course admissions, institutional collaborations, corporate training, and career queries."
				})
			] })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-gis grid gap-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "space-y-6 lg:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-bold text-foreground",
							children: "Administrative & Campus Locations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-4 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "block text-foreground",
									children: "Head Office (Mumbai):"
								}), site.headOffice] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "mt-0.5 size-5 shrink-0 text-brand-orange" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "block text-foreground",
									children: "Corporate Office (Navi Mumbai):"
								}), site.corporateOffice] })]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-5 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-base font-bold text-foreground",
									children: "Call Desks"
								}),
								site.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${p.replace(/\s/g, "")}`,
									className: "mt-1.5 block text-xs font-medium text-muted-foreground hover:text-primary transition-colors",
									children: p
								}, p))
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-5 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5 text-brand-orange" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-base font-bold text-foreground",
									children: "Official Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:webadmin@technoriya.com`,
									className: "mt-1.5 block text-xs font-semibold text-primary hover:underline break-all",
									children: "webadmin@technoriya.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${site.email}`,
									className: "mt-0.5 block text-xs text-muted-foreground hover:text-primary transition-colors break-all",
									children: site.email
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl border border-border shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Global IoT School location map",
							src: "https://www.google.com/maps?q=Crystal+Plaza+Andheri+West+Mumbai&output=embed",
							loading: "lazy",
							className: "h-[260px] w-full border-0"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				className: "lg:col-span-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 border-b border-border pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold text-foreground sm:text-xl",
							children: "Send Us an Direct Enquiry"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: ["Sent directly to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-primary",
								children: "webadmin@technoriya.com"
							})]
						})] })]
					}), isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-3 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400",
								children: ["Enquiry Reference: ", referenceId]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl font-bold text-foreground",
								children: "Message Dispatched Successfully!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: [
									"Thank you, ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: fullName }),
									". Your enquiry has been routed to our administration team at",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "webadmin@technoriya.com" }),
									". We will get back to you promptly."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleReset,
								className: "mt-6 inline-flex rounded-xl bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-md hover:bg-primary/90",
								children: "Send Another Message"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "mt-5 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3.5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-xs font-semibold text-foreground",
									children: ["Your Full Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-brand-orange",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									value: fullName,
									onChange: (e) => setFullName(e.target.value),
									placeholder: "e.g. Rahul Patil",
									className: "mt-1 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-xs font-semibold text-foreground",
									children: ["Email Address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-brand-orange",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									required: true,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "rahul@example.com",
									className: "mt-1 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3.5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-xs font-semibold text-foreground",
									children: ["Contact / WhatsApp Number ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-brand-orange",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "tel",
									required: true,
									value: phone,
									onChange: (e) => setPhone(e.target.value),
									placeholder: "+91 98765 43210",
									className: "mt-1 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-foreground",
									children: "Enquiry Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: category,
									onChange: (e) => setCategory(e.target.value),
									className: "mt-1 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Course Enquiry",
											children: "Course Enquiry / Admissions"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "College Consultancy",
											children: "College & University Consultancy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Placement & Corporate",
											children: "Placement & Corporate Training"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Career & Faculty",
											children: "Career / Faculty Opening"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "General Query",
											children: "General Query"
										})
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs font-semibold text-foreground",
								children: ["Message / Requirement Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand-orange",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 4,
								required: true,
								value: message,
								onChange: (e) => setMessage(e.target.value),
								placeholder: "Please let us know your specific queries, required programs, batch timings, or institutional requirements...",
								className: "mt-1 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: isSubmitting,
									className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 disabled:opacity-50",
									children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Sending Enquiry to webadmin@technoriya.com..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), "Submit Enquiry Directly"] })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: site.whatsapp,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1.5 font-semibold text-emerald-600 hover:underline dark:text-emerald-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "Chat on WhatsApp (+91 77387 37922)"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Direct: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:webadmin@technoriya.com",
									className: "font-semibold text-primary hover:underline",
									children: "webadmin@technoriya.com"
								})] })]
							})
						]
					})]
				})
			})]
		})
	})] });
}
//#endregion
export { ContactPage as component };
