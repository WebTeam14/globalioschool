import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as CircleCheck, F as ArrowRight, M as BookOpen, a as Send, i as Sparkles, k as Check, l as MessageSquare, m as LoaderCircle, t as X } from "../_libs/lucide-react.mjs";
import { i as courses, s as domains, v as site } from "./router-BCjNVk8M.mjs";
import { t as Reveal } from "./Reveal-DskLRJLT.mjs";
import { t as sendEnquiryEmail } from "./emailService-U0lY8Su3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses-CZwt2z6Z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CourseEnquiryModal({ course, isOpen, onClose }) {
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [learnerType, setLearnerType] = (0, import_react.useState)("College Student / Graduate");
	const [learningMode, setLearningMode] = (0, import_react.useState)("Online Live Interactive");
	const [message, setMessage] = (0, import_react.useState)("");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const [enquiryId, setEnquiryId] = (0, import_react.useState)("");
	if (!isOpen || !course) return null;
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		const generatedId = "GIS-CRS-" + Math.floor(1e5 + Math.random() * 9e5);
		setEnquiryId(generatedId);
		try {
			await sendEnquiryEmail({
				enquiryType: "Course Enquiry",
				subject: `[Course Enquiry] ${course.title} - ${fullName} (Ref: ${generatedId})`,
				senderName: fullName,
				senderEmail: email,
				senderPhone: phone,
				referenceId: generatedId,
				fields: {
					"Interested Program": course.title,
					"Program Category": course.category,
					"Domain": domainLabels[course.domain] || course.domain,
					"Current Background": learnerType,
					"Preferred Batch Mode": learningMode,
					"Questions / Notes": message || "None provided"
				}
			});
		} catch (err) {
			console.error("Course enquiry email dispatch failed:", err);
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
		onClose();
	};
	const domainLabels = {
		ai: "Artificial Intelligence",
		iot: "Internet of Things",
		cyber: "Cybersecurity",
		sap: "SAP Enterprise"
	};
	const whatsappMessage = encodeURIComponent(`Hello Global IoT School, I would like more information and syllabus details for "${course.title}".`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-200 sm:p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: handleReset,
				className: "absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
				"aria-label": "Close modal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			}), isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-3 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400",
						children: ["Enquiry Reference: ", enquiryId]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-2xl font-bold text-foreground",
						children: "Course Enquiry Received!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: [
							"Thank you, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: fullName }),
							"! Our academic counselors for",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-primary",
								children: course.title
							}),
							" will share the complete curriculum, batch schedules, and fee details with you shortly."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-col gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `https://wa.me/917738737922?text=${whatsappMessage}`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-[1.02]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), "Connect Instantly on WhatsApp"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleReset,
							className: "rounded-xl border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary",
							children: "Close"
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 border-b border-border pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold text-foreground",
							children: "Course Enquiry & Syllabus Request"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-brand-orange/15 px-2 py-0.5 text-[10px] font-semibold text-brand-orange",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" }), " Live"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Get full brochure, live project list & batch schedule"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded bg-accent/20 px-2 py-0.5 text-[10px] font-semibold text-accent",
								children: domainLabels[course.domain] || course.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium text-muted-foreground",
								children: "Certification Program"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-1 font-display text-sm font-bold text-foreground sm:text-base",
							children: course.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground line-clamp-2",
							children: course.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-4 space-y-3.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs font-semibold text-foreground",
								children: ["Full Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand-orange",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: fullName,
								onChange: (e) => setFullName(e.target.value),
								placeholder: "e.g. Priyanshu Mehta",
								className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
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
								placeholder: "priyanshu@example.com",
								className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs font-semibold text-foreground",
								children: ["Phone / WhatsApp Number ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand-orange",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "tel",
								required: true,
								value: phone,
								onChange: (e) => setPhone(e.target.value),
								placeholder: "+91 98765 43210",
								className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-foreground",
								children: "Current Background"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: learnerType,
								onChange: (e) => setLearnerType(e.target.value),
								className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "College Student / Graduate",
										children: "College Student / Graduate"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Working IT Professional",
										children: "Working IT Professional"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Non-IT / Career Switcher",
										children: "Non-IT / Career Switcher"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Corporate Team Batch",
										children: "Corporate Team Batch"
									})
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-semibold text-foreground",
							children: "Preferred Batch Mode"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 grid grid-cols-2 gap-2 text-xs",
							children: [
								"Online Live Interactive",
								"Weekend Fast-Track",
								"Classroom (Mumbai)",
								"Self-Paced with Mentor"
							].map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setLearningMode(mode),
								className: `flex items-center justify-between rounded-lg border p-2 text-left font-medium transition-all ${learningMode === mode ? "border-primary bg-primary/10 text-primary" : "border-border bg-background text-muted-foreground hover:bg-secondary"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: mode }), learningMode === mode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })]
							}, mode))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-semibold text-foreground",
							children: "Questions / Specific Requirements (Optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 2,
							value: message,
							onChange: (e) => setMessage(e.target.value),
							placeholder: "Ask about placement assistance, installment fees, prerequisite topics...",
							className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary resize-none"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between gap-3 border-t border-border pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/917738737922?text=${whatsappMessage}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:underline dark:text-emerald-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-3.5" }), "Ask on WhatsApp"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handleReset,
									className: "rounded-xl border border-border px-3.5 py-2 text-xs font-semibold text-foreground hover:bg-secondary",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: isSubmitting,
									className: "inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-md hover:bg-primary/90 disabled:opacity-50",
									children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }), "Submitting..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3.5" }), "Submit Enquiry"] })
								})]
							})]
						})
					]
				})
			] })]
		})
	});
}
function CoursesPage() {
	const [selectedCourse, setSelectedCourse] = (0, import_react.useState)(null);
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const handleOpenEnquiry = (course) => {
		setSelectedCourse(course);
		setIsModalOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "surface-dark relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid-lines-dark opacity-50",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-gis relative py-8 md:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-cyan",
						children: "Technology Domains"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl",
						children: "Certification Programs Built for the Digital Economy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-navy-foreground/75 text-sm sm:text-base",
						children: "Choose a domain and explore hands-on, industry-aligned modules. Click any course below to open the curriculum enquiry form and get batch details."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2.5",
						children: domains.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${d.id}`,
							className: "rounded-lg border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-navy-foreground transition-all hover:border-cyan hover:bg-cyan/10 hover:text-cyan",
							children: d.title
						}, d.id))
					})
				] })
			})]
		}),
		domains.map((d, di) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: d.id,
			className: di % 2 === 1 ? "py-8 md:py-12 bg-secondary/40 border-b border-border/40 scroll-mt-20" : "py-8 md:py-12 bg-background border-b border-border/40 scroll-mt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-gis",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary",
						children: d.subtitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl sm:text-3xl font-semibold text-foreground",
						children: d.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium text-muted-foreground",
						children: "Click any card to enquire"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted-foreground",
					children: d.description
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:gap-6 md:grid-cols-2",
					children: courses.filter((c) => c.domain === d.id).map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * .05,
						className: "card-lift group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => handleOpenEnquiry(c),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-semibold text-accent",
										children: c.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-[11px] font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100",
										children: ["Enquire Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2.5 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed",
									children: c.description
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between border-t border-border/60 pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleOpenEnquiry(c),
								className: "inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-3.5" }), "Enquire & Get Syllabus"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => handleOpenEnquiry(c),
								className: "text-xs font-semibold text-muted-foreground hover:text-foreground",
								children: "View Details →"
							})]
						})]
					}, c.id))
				})]
			})
		}, d.id)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-gis py-8 md:py-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl sm:text-3xl font-semibold",
						children: "Ready to Accelerate Your Career?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-2 max-w-xl text-xs sm:text-sm text-navy-foreground/75",
						children: "Register for an upcoming batch or talk directly with our expert technology mentors."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => handleOpenEnquiry(courses[0]),
							className: "rounded-xl bg-cyan px-6 py-2.5 text-xs sm:text-sm font-bold text-navy shadow-md transition-transform hover:scale-105",
							children: "Enquire for Courses"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.whatsapp,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-6 py-2.5 text-xs sm:text-sm font-bold text-navy-foreground hover:bg-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), "Chat on WhatsApp"]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseEnquiryModal, {
			course: selectedCourse,
			isOpen: isModalOpen,
			onClose: () => setIsModalOpen(false)
		})
	] });
}
//#endregion
export { CoursesPage as component };
