import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { O as ChevronDown, P as ArrowUpRight, d as Menu, f as MapPin, g as Instagram, h as Linkedin, p as Mail, s as Phone, t as X, v as Globe, x as CreditCard } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as __exportAll } from "./server-C7ZBbb4-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BCjNVk8M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C5FL2rHU.css";
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
var logo_default = "/assets/logo-C9isAM7k.jpeg";
var acpatil_default = "/assets/acpatil-CHSn5C-I.jpeg";
var bv_default = "/assets/bv-C7VPcnmJ.jpeg";
var ckt_default = "/assets/ckt-Dff0c5Mv.jpeg";
var DYPCET_Logo_default = "/assets/DYPCET_Logo-Ca0Don5W.jpg";
var itm_default = "/assets/itm-BZ8bU0GY.jpeg";
var kle_default = "/assets/kle-D4zEvBu5.png";
var MGM_Institute_of_Health_Sciences_Logo_default = "/assets/MGM_Institute_of_Health_Sciences_Logo-BO8dR5aY.png";
var ncrd_default = "/assets/ncrd-xdSXfNW4.jpeg";
var patkar_default = "/assets/patkar-BanZqKTd.png";
var sies_default = "/assets/sies-D-gbPag9.jpeg";
var somya_default = "/assets/somya-DWyg1b6j.png";
var st_default = "/assets/st-D6z7qW_N.jpeg";
var abb_default = "/assets/abb-CJxPaX9-.png";
var Alkem_Laboratories_default = "/assets/Alkem_Laboratories-C12XxKi2.svg";
var AT_S_Logo_svg_default = "/assets/AT_S_Logo.svg-C1Xs4iIR.png";
var bhoruka_default = "/assets/bhoruka-D-KxncfB.jpeg";
var Cox_and_Kings_logo_svg_default = "/assets/Cox_and_Kings_logo.svg-oB-WLRly.png";
var dmart_default = "/assets/dmart-IsElBsZ5.png";
var ITC_Logo_default = "/assets/ITC_Logo-BhAIPK51.jpg";
var jamna_default = "/assets/jamna-B7DHyr85.png";
var KPIT_Cummins_logo_svg_default = "/assets/KPIT_Cummins_logo.svg-DG0RUK-o.png";
var kurlon_vector_logo_default = "/assets/kurlon-vector-logo-DoSA0TYE.png";
var Liberty_General_Insurance_default = "/assets/Liberty_General_Insurance-axk-oMZO.jpg";
var Logo_Bayer_svg_default = "/assets/Logo_Bayer.svg-FTYTzHBF.png";
var manipal_default = "/assets/manipal-CCPJZ7Ov.png";
var metro_cash_carry_logo_png_seeklogo_239721_default = "/assets/metro-cash-carry-logo-png_seeklogo-239721-DNjUvWJR.png";
var sasken_default = "/assets/sasken-BkTKxH3q.png";
var tata_default = "/assets/tata-EediMb6X.png";
var titan_default = "/assets/titan-CCz8d1hJ.png";
var unnamed_default = "/assets/unnamed-DLVI8Kb9.webp";
var USHA_Logo_pdf_default = "/assets/USHA_Logo.pdf-DEoydzqP.jpg";
var Wipro_Primary_Logo_Color_RGB_svg_default = "/assets/Wipro_Primary_Logo_Color_RGB.svg-C1EhNplL.png";
var AmitShah_default = "/assets/AmitShah-B3FJsqJV.jpg";
var Behara_default = "/assets/Behara-DdTeS6E-.png";
var Prajkta_default = "/assets/Prajkta-B5Klr3Qx.jpg";
var Sandip_default = "/assets/Sandip-B6dCEtQy.jpeg";
var Verma_default = "/assets/Verma-CJo9Wx_E.jpg";
var anandi_default = "/assets/anandi-BM6qYie5.png";
var Devanand_shinde_default = "/assets/Devanand%20shinde-CzxF_65U.jpeg";
var Ohja_default = "/assets/Ohja-IdNhwKpg.jpeg";
var Dr_Jayant_default = "/assets/Dr.Jayant-CFbFZB_l.jpg";
var mookwang_kim_default = "/assets/mookwang%20kim-BnkptyBe.jpeg";
var Mr_NeerajKumar_default = "/assets/Mr.NeerajKumar-FVd0YRum.jpeg";
var mr_saud_default = "/assets/mr.saud-CyoaPpzq.jpeg";
var saziya_default = "/assets/saziya-CS9y7q5u.png";
var _1_default = "/assets/1--zqKjdUw.jpeg";
var _3_default = "/assets/3-Burzacbq.jpeg";
var _7_default = "/assets/7-DngXVvCb.jpeg";
var _8_default = "/assets/8-D9P4Gf--.jpeg";
var bhartee_default = "/assets/bhartee-DQCsoZzg.jpeg";
var ckt_visit_default = "/assets/ckt%20visit-302_zc5K.jpeg";
var csmu_meeting_default = "/assets/csmu%20meeting-DutVMgqX.jpeg";
var dy_patil_default = "/assets/dy%20patil-XnW-rTTR.jpeg";
var morden_default = "/assets/morden-CbTt-nzl.jpeg";
var police_default = "/assets/police-DNo0U4QH.jpeg";
var qtar_meeting_default = "/assets/qtar%20meeting-DgUPXroQ.jpg";
var south_korea_visit_default = "/assets/south%20korea%20visit-BoaQ1jo1.jpeg";
var vidyalankar_default = "/assets/vidyalankar-SCsA7IHK.jpeg";
var wilfred_default = "/assets/wilfred-XtH03e9F.jpg";
var recruiterImages = {
	"tata.png": tata_default,
	"KPIT_Cummins_logo.svg.png": KPIT_Cummins_logo_svg_default,
	"abb.png": abb_default,
	"Wipro_Primary_Logo_Color_RGB.svg.png": Wipro_Primary_Logo_Color_RGB_svg_default,
	"Cox_and_Kings_logo.svg.png": Cox_and_Kings_logo_svg_default,
	"AT&S_Logo.svg.png": AT_S_Logo_svg_default,
	"kurlon-vector-logo.png": kurlon_vector_logo_default,
	"USHA_Logo.pdf.jpg": USHA_Logo_pdf_default,
	"Logo_Bayer.svg.png": Logo_Bayer_svg_default,
	"dmart.png": dmart_default,
	"ITC_Logo.jpg": ITC_Logo_default,
	"Alkem_Laboratories.svg": Alkem_Laboratories_default,
	"titan.png": titan_default,
	"manipal.png": manipal_default,
	"metro-cash-carry-logo-png_seeklogo-239721.png": metro_cash_carry_logo_png_seeklogo_239721_default,
	"bhoruka.jpeg": bhoruka_default,
	"sasken.png": sasken_default,
	"Liberty_General_Insurance.jpg": Liberty_General_Insurance_default,
	"unnamed.webp": unnamed_default,
	"jamna.png": jamna_default
};
var partnerImages = {
	"kle.png": kle_default,
	"ckt.jpeg": ckt_default,
	"itm.jpeg": itm_default,
	"acpatil.jpeg": acpatil_default,
	"DYPCET_Logo.jpg": DYPCET_Logo_default,
	"somya.png": somya_default,
	"sies.jpeg": sies_default,
	"patkar.png": patkar_default,
	"st.jpeg": st_default,
	"bv.jpeg": bv_default,
	"MGM_Institute_of_Health_Sciences_Logo.png": MGM_Institute_of_Health_Sciences_Logo_default,
	"ncrd.jpeg": ncrd_default
};
var testimonialImages = {
	behara: Behara_default,
	amitShah: AmitShah_default,
	prajkta: Prajkta_default,
	sandip: Sandip_default,
	verma: Verma_default
};
var teamImages = {
	neeraj: Mr_NeerajKumar_default,
	devanand: Devanand_shinde_default,
	ohja: Ohja_default,
	anandi: anandi_default,
	saud: mr_saud_default,
	saziya: saziya_default,
	jayant: Dr_Jayant_default,
	mookwang: mookwang_kim_default
};
var galleryImages = {
	police: police_default,
	qtar: qtar_meeting_default,
	dyPatil: dy_patil_default,
	csmu: csmu_meeting_default,
	ckt: ckt_visit_default,
	morden: morden_default,
	wilfred: wilfred_default,
	vidyalankar: vidyalankar_default,
	bhartee: bhartee_default,
	esds: _3_default,
	homiBhabha: _7_default,
	wilfredOrientation: _8_default,
	southKorea: south_korea_visit_default,
	institutional: _1_default,
	somya: somya_default
};
var BASE = "https://globaliotschool.com";
var site = {
	name: "Global IoT School",
	short: "GIS",
	logo: logo_default,
	tagline: "Shaping Your Digital Future with AI Innovation",
	eyebrow: "WELCOME TO GLOBAL IOT SCHOOL",
	heroText: "Empower your career with world-class education in Artificial Intelligence, Internet of Things, Cybersecurity, and Data Analytics.",
	phones: ["+91 8082060006", "+91 7738860387"],
	email: "admin@globaliotschool.com",
	adminEmail: "webadmin@technoriya.com",
	website: "www.globaliotschool.com",
	headOffice: "108B, Crystal Plaza, Andheri West, Mumbai",
	corporateOffice: "219, NBC Complex, CBD Belapur, Navi Mumbai",
	whatsapp: "https://wa.me/917738737922?text=Hello!%20I%20would%20like%20to%20know%20more.",
	social: {
		linkedin: "https://www.linkedin.com/in/global-iot-school",
		instagram: "https://www.instagram.com/globaliotschool/"
	},
	external: {
		erp: "https://www.globaliotschool.com/invoice/auth/login.php",
		register: `${BASE}/course-enroll-popup/index.php`,
		iotProjects: `${BASE}/iot_project/IOT-projects.php`,
		tradeAnalytics: `${BASE}/TradeView%20(1)/index.html`,
		wokwi: `${BASE}/WokWiSimulator/login.html`
	}
};
var navItems = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Course",
		to: "/courses"
	},
	{
		label: "Placement",
		to: "/placement"
	},
	{
		label: "College Consultancy",
		to: "/consultancy"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var placementMenu = [{
	id: "associate-companies",
	title: "Associate Company",
	subtitle: "Hiring partners network"
}, {
	id: "placed-students",
	title: "Placed Student",
	subtitle: "Our learner outcomes"
}];
var consultancyMenu = [
	{
		id: "dpr",
		title: "University/College DPR Consultancy",
		subtitle: "Detailed project reports"
	},
	{
		id: "autonomous",
		title: "Autonomous College Compliance",
		subtitle: "Governance & documentation"
	},
	{
		id: "ranking",
		title: "NAAC/UGC/NIRF/QS Ranking",
		subtitle: "Accreditation & rankings"
	},
	{
		id: "international",
		title: "International Collaboration",
		subtitle: "Global academic tie-ups"
	}
];
var heroTech = [
	"IOT",
	"Quantum",
	"Semi-conductor",
	"Cyber Security",
	"ERP",
	"Hydrogen",
	"AI"
];
var degreePrograms = [
	{
		code: "BSc",
		title: "BSC IOT",
		note: "Internet of Things"
	},
	{
		code: "BSc",
		title: "BSC OT Cyber Security",
		note: "Operational Technology Security"
	},
	{
		code: "BCom",
		title: "BCOM With AI",
		note: "Artificial Intelligence"
	},
	{
		code: "BCom",
		title: "BCOM with Supply Chain Management",
		note: "Logistics & Operations"
	},
	{
		code: "BSc",
		title: "BSC with Digital Marketing",
		note: "Growth & Analytics"
	},
	{
		code: "BSc",
		title: "BSC in School Media Management",
		note: "Media & Communication"
	}
];
var domains = [
	{
		id: "ai",
		title: "Artificial Intelligence",
		subtitle: "AI-Integrated Courses",
		description: "Predictive analytics, automation and intelligent decision systems applied across industries."
	},
	{
		id: "iot",
		title: "Internet of Things",
		subtitle: "IoT & IIoT Modules",
		description: "Embedded systems, connected devices, edge-to-cloud integration and industrial automation."
	},
	{
		id: "cyber",
		title: "Cybersecurity",
		subtitle: "Security & Compliance",
		description: "Ethical hacking, cloud and network defence, governance, privacy and digital forensics."
	},
	{
		id: "sap",
		title: "SAP",
		subtitle: "Functional & Technical",
		description: "Enterprise finance, HR, supply chain and technical SAP modules including S/4HANA."
	}
];
var courses = [
	{
		id: "ai-finance",
		domain: "ai",
		category: "Artificial Intelligence",
		title: "AI in Finance & Automation",
		description: "Gain expertise in predictive analytics and automation for financial systems."
	},
	{
		id: "ai-analytics",
		domain: "ai",
		category: "Artificial Intelligence",
		title: "Smart Business Analytics & Predictive Insights",
		description: "Learn to analyze business data intelligently and derive actionable insights using AI."
	},
	{
		id: "ai-trade",
		domain: "ai",
		category: "Artificial Intelligence",
		title: "Trade Analytics with Predictive Modeling",
		description: "Analyze trading strategies, forecast financial trends, and apply AI-driven predictive models to enhance decision-making in stock and forex markets."
	},
	{
		id: "ai-supply",
		domain: "ai",
		category: "Artificial Intelligence",
		title: "AI in Supply Chain & Logistics",
		description: "Optimize operations, demand forecasting, and delivery efficiency through AI-driven solutions."
	},
	{
		id: "sap-fico",
		domain: "sap",
		category: "SAP",
		title: "SAP FICO – Finance & Control",
		description: "Manage enterprise financial operations and reporting efficiently."
	},
	{
		id: "sap-hcm",
		domain: "sap",
		category: "SAP",
		title: "SAP HCM / EHS",
		description: "Automate HR and Environmental Health & Safety processes with SAP modules."
	},
	{
		id: "sap-logistics",
		domain: "sap",
		category: "SAP",
		title: "SAP MM / SD / PP / PM / PS / WM",
		description: "Optimize supply chain, logistics, and manufacturing operations with SAP."
	},
	{
		id: "sap-tech",
		domain: "sap",
		category: "SAP",
		title: "SAP ABAP / BASIS / S/4HANA / FIORI",
		description: "Develop, customize, and manage enterprise SAP applications efficiently."
	},
	{
		id: "cy-ethical",
		domain: "cyber",
		category: "Cybersecurity",
		title: "Cyber Threats & Ethical Hacking",
		description: "Learn penetration testing and secure systems against cyberattacks."
	},
	{
		id: "cy-network",
		domain: "cyber",
		category: "Cybersecurity",
		title: "Network & Cloud Security (GRC)",
		description: "Protect cloud infrastructures and ensure governance, risk, and compliance."
	},
	{
		id: "cy-privacy",
		domain: "cyber",
		category: "Cybersecurity",
		title: "Data Privacy & Risk Management",
		description: "Implement data protection, governance, and cybersecurity frameworks."
	},
	{
		id: "cy-forensics",
		domain: "cyber",
		category: "Cybersecurity",
		title: "Digital Forensics",
		description: "Investigate and analyze digital evidence to detect and resolve incidents."
	},
	{
		id: "iot-fundamentals",
		domain: "iot",
		category: "Internet of Things",
		title: "IoT Fundamentals & Embedded Systems",
		description: "Understand IoT architecture, microcontrollers, and communication protocols."
	},
	{
		id: "iot-cloud",
		domain: "iot",
		category: "Internet of Things",
		title: "Cloud & Edge Integration",
		description: "Integrate IoT devices with cloud and edge computing platforms."
	},
	{
		id: "iot-industrial",
		domain: "iot",
		category: "Internet of Things",
		title: "Industrial IoT (IIoT)",
		description: "Implement smart manufacturing and industrial automation solutions."
	},
	{
		id: "iot-analytics",
		domain: "iot",
		category: "Internet of Things",
		title: "IoT Data Analytics & Security",
		description: "Analyze IoT data and secure communication networks effectively."
	}
];
var objectives = [
	"Build capacity in emerging technologies and enable participants to manage digital solutions across industries.",
	"Enhance institutional capability in future-tech education.",
	"Develop skilled, potential job seekers ready for the evolving digital economy."
];
var vision = "To become a global center of excellence in future technology education, empowering learners with advanced digital skills and fostering innovation, employability, and entrepreneurship in the digital age.";
var mission = [
	"Deliver industry-aligned programs integrating AI, IoT, Cybersecurity, and SAP.",
	"Offer hands-on learning experiences through projects, mentorship, and innovation labs.",
	"Bridge the academic–industry gap and nurture future-ready professionals."
];
var pillars = [
	{
		title: "Industry-Relevant Curriculum",
		description: "Designed in collaboration with IITs, IISc, and industry experts for real-world impact."
	},
	{
		title: "Expert Instructors",
		description: "Learn from faculty and professionals from IITs, NITs, and leading tech industries."
	},
	{
		title: "Practical Learning & Projects",
		description: "Gain hands-on experience through live labs, simulations, and industry projects."
	},
	{
		title: "Globally Recognized Certification",
		description: "Earn joint certification from Global IoT School and collaborating institutes."
	}
];
var testimonials = [
	{
		quote: "An excellent platform that bridges the gap between academic learning and real-world technology. A true enabler of future-ready professionals.",
		name: "Dr. Jayanta K. Behera",
		role: "Principal, St. Wilfred’s College",
		image: testimonialImages.behara
	},
	{
		quote: "This training centre is an excellent choice for individuals looking to build their careers in SAP. The team offers constant support and career guidance, making it an amazing experience.",
		name: "Amit Shah",
		role: "Capgemini",
		image: testimonialImages.amitShah
	},
	{
		quote: "Global IoT School provided exceptional SAP training with experienced instructors and fast placement support. A great partner in our students’ professional journey.",
		name: "Prajkata",
		role: "Reliance",
		image: testimonialImages.prajkta
	},
	{
		quote: "Exceptional SAP training and swift placement support — Global IoT School truly empowers our students’ careers.",
		name: "Sandip Mishra",
		role: "HCLTech",
		image: testimonialImages.sandip
	},
	{
		quote: "Global IoT School is doing remarkable work in equipping students with cutting-edge, industry-relevant skills. Their practical approach is commendable.",
		name: "Dr. K. L. Verma",
		role: "Vice Chancellor, CSMU University",
		image: testimonialImages.verma
	}
];
var recruiters = [
	["Tata Consultancy Services", "tata.png"],
	["KPIT Cummins", "KPIT_Cummins_logo.svg.png"],
	["ABB", "abb.png"],
	["Wipro", "Wipro_Primary_Logo_Color_RGB.svg.png"],
	["Cox & Kings", "Cox_and_Kings_logo.svg.png"],
	["AT&S", "AT&S_Logo.svg.png"],
	["Kurl-on", "kurlon-vector-logo.png"],
	["Usha", "USHA_Logo.pdf.jpg"],
	["Bayer", "Logo_Bayer.svg.png"],
	["Dmart", "dmart.png"],
	["ITC Infotech", "ITC_Logo.jpg"],
	["Alkem", "Alkem_Laboratories.svg"],
	["Titan", "titan.png"],
	["Manipal Global", "manipal.png"],
	["Metro Cash & Carry", "metro-cash-carry-logo-png_seeklogo-239721.png"],
	["Bhoruka", "bhoruka.jpeg"],
	["Sasken", "sasken.png"],
	["Liberty Videocon Insurance", "Liberty_General_Insurance.jpg"],
	["The American University in Cairo", "unnamed.webp"],
	["Jamna Auto Industries Ltd", "jamna.png"]
].map(([name, file]) => ({
	name,
	src: recruiterImages[file] || ""
}));
var partners = [
	["Karnatak Lingayat Education Society", "kle.png"],
	["Changu Kana Thakur College", "ckt.jpeg"],
	["ITM Skills University", "itm.jpeg"],
	["A. C. Patil College of Engineering", "acpatil.jpeg"],
	["Padmashree Dr DY Patil University", "DYPCET_Logo.jpg"],
	["KJ Somaya College", "somya.png"],
	["SIES College", "sies.jpeg"],
	["Patkar College", "patkar.png"],
	["St Wilfred College", "st.jpeg"],
	["Bhartee Vidyapheet", "bv.jpeg"],
	["MGM College", "MGM_Institute_of_Health_Sciences_Logo.png"],
	["NCRD Sterling College", "ncrd.jpeg"]
].map(([name, file]) => ({
	name,
	src: partnerImages[file] || ""
}));
var team = [
	{
		name: "Mr. Neeraj Kumar",
		role: "Founder & CEO",
		tag: "Founder & CEO",
		image: teamImages.neeraj
	},
	{
		name: "Dr. Devanand Shinde",
		role: "Chief Strategic Advisor",
		tag: "Chief Advisor",
		image: teamImages.devanand
	},
	{
		name: "Dr. Nisha Kant Ohja",
		role: "Strategic Advisor",
		tag: "Advisor",
		image: teamImages.ohja
	},
	{
		name: "Dr. Anandi G",
		role: "Strategic Advisor",
		tag: "Advisor",
		image: teamImages.anandi
	},
	{
		name: "Mr. Saud Al Jarah",
		role: "Strategic Advisor",
		tag: "Advisor",
		image: teamImages.saud
	},
	{
		name: "Dr. Saziya Khan",
		role: "Strategic Advisor",
		tag: "Advisor",
		image: teamImages.saziya
	},
	{
		name: "Dr. Jayanta K Behera",
		role: "Strategic Advisor",
		tag: "Advisor",
		image: teamImages.jayant
	},
	{
		name: "Mr. Mookwang Kim",
		role: "Strategic Advisor",
		tag: "Advisor",
		image: teamImages.mookwang
	}
];
var gallery = [
	{
		title: "AI Workshop - Police Department",
		category: "Workshops",
		src: galleryImages.police
	},
	{
		title: "Qatar Chamber of Commerce Meeting",
		category: "Meetings",
		src: galleryImages.qtar
	},
	{
		title: "DY Patil Management College",
		category: "Institutions",
		src: galleryImages.dyPatil
	},
	{
		title: "Vice-Chancellor CSMU & Ex Vice-Chancellor CSMU",
		category: "Meetings",
		src: galleryImages.csmu
	},
	{
		title: "CKT College",
		category: "Institutions",
		src: galleryImages.ckt
	},
	{
		title: "Orientation Session - Modern College",
		category: "Orientation",
		src: galleryImages.morden
	},
	{
		title: "Orientation Session - St Wilfred College",
		category: "Orientation",
		src: galleryImages.wilfred
	},
	{
		title: "Cybersecurity Seminar - Vidyalankar Institute",
		category: "Seminars",
		src: galleryImages.vidyalankar
	},
	{
		title: "Cybersecurity Seminar - Bharti Vidyapeeth College",
		category: "Seminars",
		src: galleryImages.bhartee
	},
	{
		title: "Productive meeting with ESDS Software Solution Pvt. Ltd.",
		category: "Meetings",
		src: galleryImages.esds
	},
	{
		title: "Meeting with Dr. Homi Bhabha University",
		category: "Meetings",
		src: galleryImages.homiBhabha
	},
	{
		title: "Orientation Session at St. Wilfred’s College",
		category: "Orientation",
		src: galleryImages.wilfredOrientation
	},
	{
		title: "K J Somaiya College Visit",
		category: "Institutions",
		src: galleryImages.somya
	},
	{
		title: "South Korea Visit",
		category: "Meetings",
		src: galleryImages.southKorea
	},
	{
		title: "Institutional Engagement",
		category: "Institutions",
		src: galleryImages.institutional
	}
];
var globalLocations = [
	"India",
	"Saudi Arabia",
	"Canada",
	"UK",
	"USA",
	"UAE",
	"Australia",
	"Sri Lanka",
	"Nepal",
	"Singapore"
];
var credibility = [
	"Established in 2017",
	"Industry-aligned programs",
	"Expert instructors",
	"IIT / IISc & industry expertise",
	"Practical learning",
	"Global certifications",
	"Industry collaborations"
];
var jobOpenings = [
	{
		id: "job-ai-faculty",
		title: "AI & Deep Learning Lead Trainer",
		department: "Artificial Intelligence",
		type: "Full-Time",
		location: "Mumbai (Andheri)",
		experience: "3-6 Years",
		openingsCount: 2,
		postedDate: "Today",
		tag: "Urgent Hiring",
		description: "Deliver hands-on sessions in Generative AI, PyTorch, computer vision, and neural network project mentoring.",
		skills: [
			"Python",
			"PyTorch",
			"GenAI",
			"LLMs"
		]
	},
	{
		id: "job-iot-engineer",
		title: "IoT & Embedded Systems Lead",
		department: "Internet of Things",
		type: "Full-Time / Hybrid",
		location: "Navi Mumbai",
		experience: "2-5 Years",
		openingsCount: 3,
		postedDate: "1d ago",
		tag: "Admin Featured",
		description: "Design lab simulations, hardware testbeds (ESP32/STM32), and edge-to-cloud industrial protocols.",
		skills: [
			"ESP32",
			"MQTT",
			"MicroPython",
			"Edge AI"
		]
	},
	{
		id: "job-cyber-instructor",
		title: "Cybersecurity Analyst & Lab Faculty",
		department: "Cybersecurity",
		type: "Full-Time",
		location: "Mumbai",
		experience: "3-5 Years",
		openingsCount: 1,
		postedDate: "2d ago",
		tag: "New Opening",
		description: "Lead live ethical hacking labs, network penetration exercises, and industry SOC compliance workshops.",
		skills: [
			"SOC",
			"Penetration Testing",
			"Wireshark",
			"GRC"
		]
	},
	{
		id: "job-sap-senior",
		title: "SAP S/4HANA & FICO Senior Mentor",
		department: "SAP Enterprise",
		type: "Visiting / Hybrid",
		location: "Remote / Mumbai",
		experience: "5+ Years",
		openingsCount: 2,
		postedDate: "3d ago",
		tag: "Admin Pick",
		description: "Mentor learners on SAP FICO / MM implementation, business process workflows, and ERP configurations.",
		skills: [
			"SAP FICO",
			"S/4HANA",
			"ERP Implementation"
		]
	},
	{
		id: "job-academic-coordinator",
		title: "EdTech Academic & Placement Coordinator",
		department: "Operations",
		type: "Full-Time",
		location: "Mumbai (Andheri)",
		experience: "1-3 Years",
		openingsCount: 2,
		postedDate: "4d ago",
		tag: "Active",
		description: "Coordinate student certifications, associate company hiring drives, and daily academic schedules.",
		skills: [
			"Student Support",
			"Hiring Drives",
			"CRM",
			"Coordination"
		]
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var megaMenus = {
	Course: {
		to: "/courses",
		items: domains.map((d) => ({
			id: d.id,
			title: d.title,
			subtitle: d.subtitle
		}))
	},
	Placement: {
		to: "/placement",
		items: placementMenu
	},
	"College Consultancy": {
		to: "/consultancy",
		items: consultancyMenu
	}
};
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [openMenu, setOpenMenu] = (0, import_react.useState)(null);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setOpenMenu(null);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 w-full transition-all duration-300", scrolled ? "border-b border-border bg-background/85 shadow-[0_10px_40px_-32px_rgba(10,25,60,0.9)] backdrop-blur-xl" : "border-b border-transparent bg-background"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-1 w-full bg-[linear-gradient(90deg,var(--navy),var(--brand-teal),var(--brand-orange),var(--cyan))]",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("container-gis grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-all duration-300", scrolled ? "h-16" : "h-20"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-3",
					"aria-label": "Global IoT School home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: site.logo,
						alt: "Global IoT School logo",
						className: cn("w-auto shrink-0 rounded-lg transition-all duration-300", scrolled ? "h-10" : "h-12")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden min-w-0 flex-col leading-tight sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate font-display text-base font-bold tracking-tight text-primary",
							children: "Global IoT School"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden truncate text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-brand-orange md:block",
							children: "Technology · Innovation · Opportunity"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-0.5 xl:flex",
					"aria-label": "Main",
					children: [
						navItems.map((item) => {
							const mega = megaMenus[item.label];
							if (!mega) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("rounded-md px-3 py-2 text-sm font-semibold transition-colors", pathname === item.to ? "text-primary" : "text-muted-foreground hover:text-foreground"),
								children: item.label
							}, item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								onMouseEnter: () => setOpenMenu(item.label),
								onMouseLeave: () => setOpenMenu(null),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.to,
									className: cn("flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors", pathname === item.to ? "text-primary" : "text-muted-foreground hover:text-foreground"),
									children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
										className: cn("size-3.5 transition-transform", openMenu === item.label && "rotate-180"),
										"aria-hidden": true
									})]
								}), openMenu === item.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-1/2 top-full w-[30rem] -translate-x-1/2 pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "animate-fade-in grid grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-2 shadow-2xl",
										children: mega.items.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: mega.to,
											hash: d.id,
											className: "group rounded-xl p-3 transition-colors hover:bg-secondary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-sm font-semibold text-foreground",
												children: d.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs text-muted-foreground",
												children: d.subtitle
											})]
										}, d.id))
									})
								})]
							}, item.to);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.external.erp,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground",
							children: "ERP"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/courses",
							className: "ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-18px_var(--primary)] transition-transform hover:-translate-y-0.5",
							children: ["Explore Programs", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-4",
								"aria-hidden": true
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(true),
					className: "inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-border text-foreground xl:hidden",
					"aria-label": "Open menu",
					"aria-expanded": open,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
						className: "size-5",
						"aria-hidden": true
					})
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("fixed inset-0 z-[100] xl:hidden", open ? "pointer-events-auto" : "pointer-events-none"),
		"aria-hidden": !open,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("absolute inset-0 bg-navy-deep/60 transition-opacity duration-300", open ? "opacity-100" : "opacity-0"),
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300", open ? "translate-x-0" : "translate-x-full"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-20 items-center justify-between border-b border-border px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: site.logo,
					alt: "Global IoT School logo",
					className: "h-10 w-auto rounded-lg"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(false),
					className: "inline-flex size-10 items-center justify-center rounded-md border border-border",
					"aria-label": "Close menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-5",
						"aria-hidden": true
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex-1 overflow-y-auto px-5 py-6",
				"aria-label": "Mobile",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: navItems.map((item) => {
							const mega = megaMenus[item.label];
							if (!mega) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("block rounded-lg px-3 py-3 text-base font-semibold", pathname === item.to ? "bg-secondary text-primary" : "text-foreground"),
								children: item.label
							}) }, item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "rounded-lg border border-border px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
									className: "cursor-pointer list-none py-1 text-base font-semibold text-foreground",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-2 space-y-1 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: mega.to,
										className: "block rounded-md px-2 py-2 text-sm font-semibold text-primary",
										children: "View all"
									}) }), mega.items.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: mega.to,
										hash: d.id,
										className: "block rounded-md px-2 py-2 text-sm text-muted-foreground",
										children: d.title
									}) }, d.id))]
								})]
							}) }, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.external.erp,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-3 block rounded-lg px-3 py-3 text-base font-semibold text-foreground",
						children: "ERP"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/courses",
							className: "flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground",
							children: "Explore Programs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "flex w-full items-center justify-center rounded-full border border-border px-4 py-3 text-sm font-semibold text-foreground",
							children: "Contact Us"
						})]
					})
				]
			})]
		})]
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "surface-dark relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid-lines-dark opacity-50",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-gis relative py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: site.logo,
								alt: "Global IoT School logo",
								className: "h-11 w-auto rounded bg-white/95 p-1",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-semibold",
								children: "Global IoT School"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/70",
							children: "Global IoT School (GIS), established in 2017, is a Mumbai-based EdTech institution bridging the gap between academics and industry through skill-based certification programs in AI, IoT, Cybersecurity, and SAP."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.social.linkedin,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "LinkedIn",
								className: "inline-flex size-10 items-center justify-center rounded-md border border-white/15 text-navy-foreground transition-colors hover:border-cyan hover:text-cyan",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
									className: "size-4",
									"aria-hidden": true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.social.instagram,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "Instagram",
								className: "inline-flex size-10 items-center justify-center rounded-md border border-white/15 text-navy-foreground transition-colors hover:border-cyan hover:text-cyan",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
									className: "size-4",
									"aria-hidden": true
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://rzp.io/l/7j2TrkC",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-teal to-primary px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
								className: "size-3.5",
								"aria-hidden": true
							}), "Pay via Razorpay"]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Footer navigation",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-sm font-semibold uppercase tracking-widest text-cyan",
							children: "Navigation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-sm text-navy-foreground/75",
							children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "transition-colors hover:text-cyan",
								children: item.label
							}) }, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.external.erp,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "transition-colors hover:text-cyan",
								children: "ERP"
							}) })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-sm font-semibold uppercase tracking-widest text-cyan",
						children: "Courses"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 text-sm text-navy-foreground/75",
						children: [
							domains.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/courses",
								hash: d.id,
								className: "transition-colors hover:text-cyan",
								children: d.title
							}) }, d.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.external.iotProjects,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "transition-colors hover:text-cyan",
								children: "IoT Projects"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.external.tradeAnalytics,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "transition-colors hover:text-cyan",
								children: "Trade Analytics With AI"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-sm font-semibold uppercase tracking-widest text-cyan",
						children: "Contact Us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-4 text-sm text-navy-foreground/75",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "mt-0.5 size-4 shrink-0 text-cyan",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-semibold text-navy-foreground",
										children: "Head Office:"
									}),
									" ",
									site.headOffice,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-semibold text-navy-foreground",
										children: "Corporate Office:"
									}),
									" ",
									site.corporateOffice
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "mt-0.5 size-4 shrink-0 text-cyan",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+918082060006",
									className: "hover:text-cyan",
									children: site.phones.join(" / ")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "mt-0.5 size-4 shrink-0 text-cyan",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${site.email}`,
									className: "hover:text-cyan",
									children: site.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
									className: "mt-0.5 size-4 shrink-0 text-cyan",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.globaliotschool.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-cyan",
									children: site.website
								})]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Global IoT School. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mumbai · Navi Mumbai · Global" })]
			})]
		})]
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
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
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
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
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
				href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var $$splitComponentImporter$6 = () => import("./routes-D4cPMmry.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Global IoT School — AI, IoT, Cybersecurity & SAP Training" },
		{
			name: "description",
			content: "Global IoT School is a Mumbai-based EdTech institution offering industry-aligned certification programs in Artificial Intelligence, IoT, Cybersecurity and SAP."
		},
		{
			property: "og:title",
			content: "Global IoT School"
		},
		{
			property: "og:description",
			content: "Shaping your digital future with AI innovation — certification programs in AI, IoT, Cybersecurity and SAP."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-C6gavzrQ.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Global IoT School — Vision, Mission, Careers & Team" },
		{
			name: "description",
			content: "Established in 2017, Global IoT School is a Mumbai-based EdTech institution bridging academics and industry through AI, IoT, Cybersecurity and SAP programs."
		},
		{
			property: "og:title",
			content: "About Global IoT School"
		},
		{
			property: "og:description",
			content: "Our vision, mission, live admin career openings, objectives, leadership team and global presence."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./consultancy-DFxSedlU.mjs");
var Route$4 = createFileRoute("/consultancy")({
	head: () => ({ meta: [
		{ title: "College Consultancy — DPR, Compliance & Rankings | Global IoT School" },
		{
			name: "description",
			content: "Global IoT School college consultancy: university DPR consultancy, autonomous college compliance, NAAC/UGC/NIRF/QS ranking support and international collaboration."
		},
		{
			property: "og:title",
			content: "College Consultancy | Global IoT School"
		},
		{
			property: "og:description",
			content: "Advisory for higher-education institutions: DPR, compliance, accreditation rankings and global collaboration."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-BO8WBrhp.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Global IoT School — Mumbai & Navi Mumbai" },
		{
			name: "description",
			content: "Reach Global IoT School at +91 8082060006 or webadmin@technoriya.com. Head office in Andheri West, Mumbai; corporate office in CBD Belapur, Navi Mumbai."
		},
		{
			property: "og:title",
			content: "Contact Global IoT School"
		},
		{
			property: "og:description",
			content: "Phone, email and office addresses for Global IoT School."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./courses-CZwt2z6Z.mjs");
var Route$2 = createFileRoute("/courses")({
	head: () => ({ meta: [
		{ title: "Courses & Certifications — AI, IoT, Cybersecurity & SAP | Global IoT School" },
		{
			name: "description",
			content: "Explore certification programs across Artificial Intelligence, Internet of Things, Cybersecurity and SAP, designed with industry and academic experts."
		},
		{
			property: "og:title",
			content: "Courses at Global IoT School"
		},
		{
			property: "og:description",
			content: "Industry-aligned certification programs in AI, IoT, Cybersecurity and SAP."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./gallery-DtNgDCNM.mjs");
var Route$1 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Workshops, Seminars & Institutional Visits | GIS" },
		{
			name: "description",
			content: "Moments from Global IoT School workshops, cybersecurity seminars, orientation sessions and institutional meetings across India and abroad."
		},
		{
			property: "og:title",
			content: "Global IoT School Gallery"
		},
		{
			property: "og:description",
			content: "Workshops, seminars, orientations and institutional visits by Global IoT School."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./placement-C5uFBvzS.mjs");
var Route = createFileRoute("/placement")({
	head: () => ({ meta: [
		{ title: "Placement — Associate Companies & Placed Students | Global IoT School" },
		{
			name: "description",
			content: "Explore Global IoT School placement support: associate hiring companies and placed students across AI, IoT, Cybersecurity and SAP programs."
		},
		{
			property: "og:title",
			content: "Placement | Global IoT School"
		},
		{
			property: "og:description",
			content: "Associate companies and placed students of Global IoT School's technology programs."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	ConsultancyRoute: Route$4.update({
		id: "/consultancy",
		path: "/consultancy",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	CoursesRoute: Route$2.update({
		id: "/courses",
		path: "/courses",
		getParentRoute: () => Route$7
	}),
	GalleryRoute: Route$1.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$7
	}),
	PlacementRoute: Route.update({
		id: "/placement",
		path: "/placement",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
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
export { recruiters as _, credibility as a, testimonials as b, gallery as c, jobOpenings as d, mission as f, placementMenu as g, pillars as h, courses as i, globalLocations as l, partners as m, cn as n, degreePrograms as o, objectives as p, consultancyMenu as r, domains as s, router_exports as t, heroTech as u, site as v, vision as x, team as y };
