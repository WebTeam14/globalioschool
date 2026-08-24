// Content sourced from globaliotschool.com — preserved verbatim where possible.

import gisLogo from "@/assets/logo.jpeg";

const gisImages = import.meta.glob<string>("/src/assets/images/GIS/**/*", {
  eager: true,
  import: "default",
});

export function getGisImage(pathOrFilename: string): string {
  const decoded = decodeURIComponent(pathOrFilename)
    .replace(/^(\/)?(images\/GIS\/)?/, "")
    .replace(/^(\/)?(src\/assets\/images\/GIS\/)?/, "");

  for (const [key, value] of Object.entries(gisImages)) {
    if (key.endsWith(`/${decoded}`) || decodeURIComponent(key).endsWith(`/${decoded}`) || key.endsWith(decoded)) {
      return value;
    }
  }
  return `/images/GIS/${decoded}`;
}

const BASE = "https://globaliotschool.com";

export const site = {
  name: "Global IoT School",
  short: "GIS",
  logo: gisLogo,
  tagline: "Shaping Your Digital Future with AI Innovation",
  eyebrow: "WELCOME TO GLOBAL IOT SCHOOL",
  heroText:
    "Empower your career with world-class education in Artificial Intelligence, Internet of Things, Cybersecurity, and Data Analytics.",
  phones: ["+91 8082060006", "+91 7738860387"],
  email: "admin@globaliotschool.com",
  adminEmail: "webadmin@technoriya.com",
  website: "www.globaliotschool.com",
  headOffice: "108B, Crystal Plaza, Andheri West, Mumbai",
  corporateOffice: "219, NBC Complex, CBD Belapur, Navi Mumbai",
  whatsapp:
    "https://wa.me/917738737922?text=Hello!%20I%20would%20like%20to%20know%20more.",
  social: {
    linkedin: "https://www.linkedin.com/in/global-iot-school",
    instagram: "https://www.instagram.com/globaliotschool/",
  },
  external: {
    erp: "https://www.globaliotschool.com/invoice/auth/login.php",
    register: `${BASE}/course-enroll-popup/index.php`,
    iotProjects: `${BASE}/iot_project/IOT-projects.php`,
    tradeAnalytics: `${BASE}/TradeView%20(1)/index.html`,
    wokwi: `${BASE}/WokWiSimulator/login.html`,
  },
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Course", to: "/courses" },
  { label: "Placement", to: "/placement" },
  { label: "College Consultancy", to: "/consultancy" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const placementMenu = [
  { id: "associate-companies", title: "Associate Company", subtitle: "Hiring partners network" },
  { id: "placed-students", title: "Placed Student", subtitle: "Our learner outcomes" },
];

export const consultancyMenu = [
  { id: "dpr", title: "University/College DPR Consultancy", subtitle: "Detailed project reports" },
  { id: "autonomous", title: "Autonomous College Compliance", subtitle: "Governance & documentation" },
  { id: "ranking", title: "NAAC/UGC/NIRF/QS Ranking", subtitle: "Accreditation & rankings" },
  { id: "international", title: "International Collaboration", subtitle: "Global academic tie-ups" },
];

export const heroTech = [
  "IOT",
  "Quantum",
  "Semi-conductor",
  "Cyber Security",
  "ERP",
  "Hydrogen",
  "AI",
];

export const degreePrograms = [
  { code: "BSc", title: "BSC IOT", note: "Internet of Things" },
  { code: "BSc", title: "BSC OT Cyber Security", note: "Operational Technology Security" },
  { code: "BCom", title: "BCOM With AI", note: "Artificial Intelligence" },
  { code: "BCom", title: "BCOM with Supply Chain Management", note: "Logistics & Operations" },
  { code: "BSc", title: "BSC with Digital Marketing", note: "Growth & Analytics" },
  { code: "BSc", title: "BSC in School Media Management", note: "Media & Communication" },
];

export const domains = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    subtitle: "AI-Integrated Courses",
    description:
      "Predictive analytics, automation and intelligent decision systems applied across industries.",
  },
  {
    id: "iot",
    title: "Internet of Things",
    subtitle: "IoT & IIoT Modules",
    description:
      "Embedded systems, connected devices, edge-to-cloud integration and industrial automation.",
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    subtitle: "Security & Compliance",
    description:
      "Ethical hacking, cloud and network defence, governance, privacy and digital forensics.",
  },
  {
    id: "sap",
    title: "SAP",
    subtitle: "Functional & Technical",
    description:
      "Enterprise finance, HR, supply chain and technical SAP modules including S/4HANA.",
  },
] as const;

export type DomainId = (typeof domains)[number]["id"];

export const courses: {
  id: string;
  domain: DomainId;
  category: string;
  title: string;
  description: string;
}[] = [
  {
    id: "ai-finance",
    domain: "ai",
    category: "Artificial Intelligence",
    title: "AI in Finance & Automation",
    description:
      "Gain expertise in predictive analytics and automation for financial systems.",
  },
  {
    id: "ai-analytics",
    domain: "ai",
    category: "Artificial Intelligence",
    title: "Smart Business Analytics & Predictive Insights",
    description:
      "Learn to analyze business data intelligently and derive actionable insights using AI.",
  },
  {
    id: "ai-trade",
    domain: "ai",
    category: "Artificial Intelligence",
    title: "Trade Analytics with Predictive Modeling",
    description:
      "Analyze trading strategies, forecast financial trends, and apply AI-driven predictive models to enhance decision-making in stock and forex markets.",
  },
  {
    id: "ai-supply",
    domain: "ai",
    category: "Artificial Intelligence",
    title: "AI in Supply Chain & Logistics",
    description:
      "Optimize operations, demand forecasting, and delivery efficiency through AI-driven solutions.",
  },
  {
    id: "sap-fico",
    domain: "sap",
    category: "SAP",
    title: "SAP FICO – Finance & Control",
    description:
      "Manage enterprise financial operations and reporting efficiently.",
  },
  {
    id: "sap-hcm",
    domain: "sap",
    category: "SAP",
    title: "SAP HCM / EHS",
    description:
      "Automate HR and Environmental Health & Safety processes with SAP modules.",
  },
  {
    id: "sap-logistics",
    domain: "sap",
    category: "SAP",
    title: "SAP MM / SD / PP / PM / PS / WM",
    description:
      "Optimize supply chain, logistics, and manufacturing operations with SAP.",
  },
  {
    id: "sap-tech",
    domain: "sap",
    category: "SAP",
    title: "SAP ABAP / BASIS / S/4HANA / FIORI",
    description:
      "Develop, customize, and manage enterprise SAP applications efficiently.",
  },
  {
    id: "cy-ethical",
    domain: "cyber",
    category: "Cybersecurity",
    title: "Cyber Threats & Ethical Hacking",
    description:
      "Learn penetration testing and secure systems against cyberattacks.",
  },
  {
    id: "cy-network",
    domain: "cyber",
    category: "Cybersecurity",
    title: "Network & Cloud Security (GRC)",
    description:
      "Protect cloud infrastructures and ensure governance, risk, and compliance.",
  },
  {
    id: "cy-privacy",
    domain: "cyber",
    category: "Cybersecurity",
    title: "Data Privacy & Risk Management",
    description:
      "Implement data protection, governance, and cybersecurity frameworks.",
  },
  {
    id: "cy-forensics",
    domain: "cyber",
    category: "Cybersecurity",
    title: "Digital Forensics",
    description:
      "Investigate and analyze digital evidence to detect and resolve incidents.",
  },
  {
    id: "iot-fundamentals",
    domain: "iot",
    category: "Internet of Things",
    title: "IoT Fundamentals & Embedded Systems",
    description:
      "Understand IoT architecture, microcontrollers, and communication protocols.",
  },
  {
    id: "iot-cloud",
    domain: "iot",
    category: "Internet of Things",
    title: "Cloud & Edge Integration",
    description:
      "Integrate IoT devices with cloud and edge computing platforms.",
  },
  {
    id: "iot-industrial",
    domain: "iot",
    category: "Internet of Things",
    title: "Industrial IoT (IIoT)",
    description:
      "Implement smart manufacturing and industrial automation solutions.",
  },
  {
    id: "iot-analytics",
    domain: "iot",
    category: "Internet of Things",
    title: "IoT Data Analytics & Security",
    description:
      "Analyze IoT data and secure communication networks effectively.",
  },
];

export const objectives = [
  "Build capacity in emerging technologies and enable participants to manage digital solutions across industries.",
  "Enhance institutional capability in future-tech education.",
  "Develop skilled, potential job seekers ready for the evolving digital economy.",
];

export const vision =
  "To become a global center of excellence in future technology education, empowering learners with advanced digital skills and fostering innovation, employability, and entrepreneurship in the digital age.";

export const mission = [
  "Deliver industry-aligned programs integrating AI, IoT, Cybersecurity, and SAP.",
  "Offer hands-on learning experiences through projects, mentorship, and innovation labs.",
  "Bridge the academic–industry gap and nurture future-ready professionals.",
];

export const pillars = [
  {
    title: "Industry-Relevant Curriculum",
    description:
      "Designed in collaboration with IITs, IISc, and industry experts for real-world impact.",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from faculty and professionals from IITs, NITs, and leading tech industries.",
  },
  {
    title: "Practical Learning & Projects",
    description:
      "Gain hands-on experience through live labs, simulations, and industry projects.",
  },
  {
    title: "Globally Recognized Certification",
    description:
      "Earn joint certification from Global IoT School and collaborating institutes.",
  },
];

export const stats = [
  { label: "Certification Programs", value: 0 },
  { label: "Students Trained", value: 0 },
  { label: "Expert Mentors", value: 0 },
  { label: "Industry Projects", value: 0 },
];

export const testimonials = [
  {
    quote:
      "An excellent platform that bridges the gap between academic learning and real-world technology. A true enabler of future-ready professionals.",
    name: "Dr. Jayanta K. Behera",
    role: "Principal, St. Wilfred’s College",
    image: getGisImage("image (18).png"),
  },
  {
    quote:
      "This training centre is an excellent choice for individuals looking to build their careers in SAP. The team offers constant support and career guidance, making it an amazing experience.",
    name: "Amit Shah",
    role: "Capgemini",
    image: getGisImage("t1.jpg"),
  },
  {
    quote:
      "Global IoT School provided exceptional SAP training with experienced instructors and fast placement support. A great partner in our students’ professional journey.",
    name: "Prajkata",
    role: "Reliance",
    image: getGisImage("t2.jpg"),
  },
  {
    quote:
      "Exceptional SAP training and swift placement support — Global IoT School truly empowers our students’ careers.",
    name: "Sandip Mishra",
    role: "HCLTech",
    image: getGisImage("WhatsApp Image 2025-11-06 at 10.46.24 AM.jpeg"),
  },
  {
    quote:
      "Global IoT School is doing remarkable work in equipping students with cutting-edge, industry-relevant skills. Their practical approach is commendable.",
    name: "Dr. K. L. Verma",
    role: "Vice Chancellor, CSMU University",
    image: getGisImage("WhatsApp Image 2025-06-24 at 3.51.06 PM.jpg"),
  },
];

export const recruiters = [
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
  ["Jamna Auto Industries Ltd", "jamna.png"],
].map(([name, file]) => ({ name: name as string, src: getGisImage(file as string) }));

export const partners = [
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
  ["NCRD Sterling College", "ncrd.jpeg"],
].map(([name, file]) => ({ name: name as string, src: getGisImage(file as string) }));

export const team = [
  {
    name: "Mr. Neeraj Kumar",
    role: "Founder & CEO",
    tag: "Founder & CEO",
    image: getGisImage("team/Mr.NeerajKumar.jpeg"),
  },
  {
    name: "Dr. Devanand Shinde",
    role: "Chief Strategic Advisor",
    tag: "Chief Advisor",
    image: getGisImage("team/Devanand shinde.jpeg"),
  },
  {
    name: "Dr. Anandi G",
    role: "Strategic Advisor",
    tag: "Advisor",
    image: getGisImage("team/anandi.png"),
  },
  {
    name: "Mr. Saud Al Jarah",
    role: "Strategic Advisor",
    tag: "Advisor",
    image: getGisImage("director.jpeg"),
  },
  {
    name: "Dr. Saziya Khan",
    role: "Strategic Advisor",
    tag: "Advisor",
    image: getGisImage("team/saziya.png"),
  },
  {
    name: "Dr. Jayanta K Behera",
    role: "Strategic Advisor",
    tag: "Advisor",
    image: getGisImage("team/Dr.Jayant.jpg"),
  },
  {
    name: "Mr. Mookwang Kim",
    role: "Strategic Advisor",
    tag: "Advisor",
    image: getGisImage("mookwang.jpeg"),
  },
];

export const gallery = [
  ["AI Workshop - Police Department", "police.jpeg", "Workshops"],
  ["Qatar Chamber of Commerce Meeting", "visits/qtar meeting.jpg", "Meetings"],
  ["DY Patil Management College", "visits/dy patil.jpeg", "Institutions"],
  [
    "Vice-Chancellor CSMU & Ex Vice-Chancellor CSMU",
    "visits/csmu meeting.jpeg",
    "Meetings",
  ],
  ["CKT College", "visits/ckt visit.jpeg", "Institutions"],
  ["Orientation Session - Modern College", "visits/morden.jpeg", "Orientation"],
  [
    "Orientation Session - St Wilfred College",
    "visits/wilfred.jpg",
    "Orientation",
  ],
  [
    "Cybersecurity Seminar - Vidyalankar Institute",
    "visits/vidyalankar.jpeg",
    "Seminars",
  ],
  [
    "Cybersecurity Seminar - Bharti Vidyapeeth College",
    "visits/bhartee.jpeg",
    "Seminars",
  ],
  [
    "Productive meeting with ESDS Software Solution Pvt. Ltd.",
    "visits/3.jpeg",
    "Meetings",
  ],
  ["Meeting with Dr. Homi Bhabha University", "visits/7.jpeg", "Meetings"],
  ["Orientation Session at St. Wilfred’s College", "visits/8.jpeg", "Orientation"],
  ["K J Somaiya College Visit", "k j somya visit.jpeg", "Institutions"],
  ["South Korea Visit", "south korea visit.jpeg", "Meetings"],
  ["Institutional Engagement", "visits/1.jpeg", "Institutions"],
].map(([title, file, category]) => ({
  title: title as string,
  category: category as string,
  src: getGisImage(file as string),
}));

export const globalLocations = [
  "India",
  "Saudi Arabia",
  "Canada",
  "UK",
  "USA",
  "UAE",
  "Australia",
  "Sri Lanka",
  "Nepal",
  "Singapore",
];

export const credibility = [
  "Established in 2017",
  "Industry-aligned programs",
  "Expert instructors",
  "IIT / IISc & industry expertise",
  "Practical learning",
  "Global certifications",
  "Industry collaborations",
];

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  openingsCount: number;
  postedDate: string;
  tag?: string;
  description: string;
  skills: string[];
}

export const jobOpenings: JobOpening[] = [
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
    skills: ["Python", "PyTorch", "GenAI", "LLMs"],
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
    skills: ["ESP32", "MQTT", "MicroPython", "Edge AI"],
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
    skills: ["SOC", "Penetration Testing", "Wireshark", "GRC"],
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
    skills: ["SAP FICO", "S/4HANA", "ERP Implementation"],
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
    skills: ["Student Support", "Hiring Drives", "CRM", "Coordination"],
  },
];

