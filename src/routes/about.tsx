import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Globe, Linkedin, Mail, Target, Eye, Award, CheckCircle, Sparkles, Building2, Send } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TypewriterHeading } from "@/components/site/TypewriterHeading";
import { HeroJobOpenings } from "@/components/site/HeroJobOpenings";
import { JobApplicationModal } from "@/components/site/JobApplicationModal";
import aboutContentBg from "@/assets/about-content-bg.jpg";
import visionAiImg from "@/assets/vision-ai.jpg";
import missionAiImg from "@/assets/mission-ai.jpg";
import aboutVideo from "@/assets/images/about.mp4";
import aboutImg from "@/assets/images/about.png";
import {
  vision,
  mission,
  objectives,
  pillars,
  team,
  credibility,
  globalLocations,
  jobOpenings,
} from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Global IoT School — Vision, Mission, Careers & Team" },
      {
        name: "description",
        content:
          "Established in 2017, Global IoT School is a Mumbai-based EdTech institution bridging academics and industry through AI, IoT, Cybersecurity and SAP programs.",
      },
      { property: "og:title", content: "About Global IoT School" },
      {
        property: "og:description",
        content:
          "Our vision, mission, live admin career openings, objectives, leadership team and global presence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [isGeneralApplyOpen, setIsGeneralApplyOpen] = useState(false);

  return (
    <main className="divide-y divide-border/40">
      {/* 1. Hero Section with Right-Side Job Openings Box */}
      <section className="relative overflow-hidden bg-background">
        <img
          src={aboutContentBg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50"
          aria-hidden
        />
        <div className="container-gis relative py-6 md:py-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <p className="eyebrow text-brand-orange inline-flex items-center gap-1.5">
                <Sparkles className="size-3.5" />
                About GIS
              </p>
              <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
                Bridging Academics &amp; Industry Since 2017
              </h1>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                Global IoT School (GIS) is a premier Mumbai-based EdTech institution delivering
                industry-aligned certification programs in AI, IoT, Cybersecurity, and SAP.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {credibility.slice(0, 5).map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/80 px-2.5 py-1 text-xs font-medium text-foreground/85"
                  >
                    <CheckCircle className="size-3 text-accent" />
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Right side aligned job opening list box posted from admin panel */}
            <Reveal delay={0.1}>
              <HeroJobOpenings />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Welcome & About Content with about.mp4 video and small about.png */}
      <section className="relative overflow-hidden py-6 md:py-8 bg-background">
        <div className="container-gis relative grid items-center gap-6 lg:grid-cols-2">
          <Reveal>
            <TypewriterHeading text="Welcome to Global IoT School" />
            <h3 className="mt-2 font-display text-xl font-semibold text-brand-orange sm:text-2xl">
              Shaping Your Digital Future with AI Innovation
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Global IoT School (GIS) offers hands-on, industry-aligned certification programs in Artificial Intelligence, Internet of Things (IoT), Cybersecurity, and SAP. Established in 2017, GIS bridges the gap between academics and industry through practical skill-based learning and international collaborations.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              With expert instructors from IITs, IISc, and leading tech enterprises, we empower learners to gain real-world exposure and globally recognized credentials that accelerate tech careers in the modern digital economy.
            </p>
            <div className="mt-5">
              <button
                type="button"
                onClick={() => setIsGeneralApplyOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-md transition-transform hover:scale-105"
              >
                <Send className="size-3.5" />
                Apply for Roles &amp; Mentorship
              </button>
            </div>
          </Reveal>

          <Reveal className="relative" delay={0.08}>
            <div className="relative pb-10 pr-10 sm:pb-12 sm:pr-14">
              <div
                className="absolute -left-4 -top-4 size-32 rounded-full bg-accent/20 blur-2xl"
                aria-hidden
              />
              {/* Main about.mp4 video container */}
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-[0_20px_40px_-20px_var(--navy)] bg-black">
                <video
                  src={aboutVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[18rem] sm:h-[21rem] w-full object-cover"
                />
              </div>

              {/* Overlapping small about.png image */}
              <img
                src={aboutImg}
                alt="Global IoT School Campus and Classroom Experience"
                loading="lazy"
                className="absolute bottom-0 right-0 w-36 sm:w-48 rounded-xl border-4 border-background object-cover shadow-[0_16px_32px_-16px_var(--navy)]"
              />
              <span className="absolute -left-2 bottom-4 hidden rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground sm:inline-block shadow-md">
                Since 2017
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Features Grid */}
      <section className="py-6 md:py-8 bg-background">
        <div className="container-gis">
          <Reveal className="text-center">
            <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Explore GIS Programs – Learn, Innovate, and Lead
            </h3>
          </Reveal>

          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Industry-Relevant Curriculum",
                desc: "Designed in collaboration with IITs, IISc, and industry leaders for real-world application."
              },
              {
                title: "Expert Instructors",
                desc: "Learn from distinguished faculty and professionals from IITs, NITs, and top tech firms."
              },
              {
                title: "Practical Learning & Labs",
                desc: "Gain hands-on experience through live simulations, hardware testbeds, and industrial projects."
              },
              {
                title: "Global Certification",
                desc: "Earn joint certifications from Global IoT School and partner institutions to validate your skills."
              }
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05} className="rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                <h4 className="font-display text-base font-semibold text-primary">{f.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission with AI Generated Visuals */}
      <section className="py-6 md:py-8 bg-background">
        <div className="container-gis">
          <Reveal className="text-center">
            <p className="eyebrow text-brand-orange inline-flex items-center gap-1.5 justify-center">
              <Sparkles className="size-3.5" />
              Strategic Direction
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
              Our Vision &amp; Mission
            </h2>
          </Reveal>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {/* Vision Card with AI Image */}
            <Reveal delay={0.08} className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-md transition-all hover:border-primary/40 hover:shadow-xl">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-navy">
                <img
                  src={visionAiImg}
                  alt="GIS Vision - Global Center of Excellence in Future Technology"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-primary/85 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-md">
                  <Eye className="size-3.5" />
                  Vision Statement
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-display text-xl font-bold text-white tracking-wide drop-shadow-md">
                    Our Vision
                  </h3>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Eye className="size-4" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground">Future Technology Excellence</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {vision}
                </p>
              </div>
            </Reveal>

            {/* Mission Card with AI Image */}
            <Reveal delay={0.12} className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-md transition-all hover:border-emerald-500/40 hover:shadow-xl">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-navy">
                <img
                  src={missionAiImg}
                  alt="GIS Mission - Industry Aligned Hands-on Technology Learning"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-600/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  <Target className="size-3.5" />
                  Mission Statement
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-display text-xl font-bold text-white tracking-wide drop-shadow-md">
                    Our Mission
                  </h3>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Target className="size-4" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground">Core Pillars of Action</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {mission.map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Objectives */}
      <section className="bg-background py-6 md:py-8">
        <div className="container-gis">
          <Reveal>
            <p className="eyebrow text-brand-orange">What drives us</p>
            <h2 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
              Strategic Objectives
            </h2>
          </Reveal>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {objectives.map((o, i) => (
              <Reveal
                key={o}
                delay={i * 0.05}
                className="card-lift rounded-xl border border-border bg-card p-4"
              >
                <span className="font-display text-xl font-bold text-accent">
                  0{i + 1}
                </span>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{o}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why choose GIS */}
      <section className="bg-background py-6 md:py-8">
        <div className="container-gis">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Why Choose GIS
            </h2>
          </Reveal>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.04}
                className="card-lift rounded-xl border border-border bg-card p-4"
              >
                <div className="flex items-center gap-2">
                  <Award className="size-4 text-primary shrink-0" />
                  <h3 className="font-display text-sm sm:text-base font-semibold">{p.title}</h3>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Leadership & Advisors Team */}
      <section className="bg-background py-6 md:py-8">
        <div className="container-gis">
          <Reveal>
            <p className="eyebrow text-brand-orange">The People</p>
            <h2 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
              Leadership &amp; Advisors
            </h2>
          </Reveal>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal
                key={m.name}
                delay={i * 0.03}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={m.image}
                    alt={`${m.name} — ${m.role}`}
                    loading="lazy"
                    className="h-52 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {m.tag ? (
                    <span className="absolute left-2.5 top-2.5 rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-medium text-foreground shadow-sm">
                      {m.tag}
                    </span>
                  ) : null}
                </div>
                <div className="relative flex flex-1 flex-col p-3.5">
                  <span
                    className="absolute -top-px left-4 h-0.5 w-6 bg-accent transition-all duration-300 group-hover:w-12"
                    aria-hidden
                  />
                  <h3 className="font-display text-xs sm:text-sm font-semibold">{m.name}</h3>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{m.role}</p>
                  <div className="mt-2.5 flex items-center gap-1.5 border-t border-border pt-2">
                    {[
                      { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/global-iot-school/" },
                      { Icon: Mail, label: "Email", href: "mailto:info@globaliotschool.com" },
                      { Icon: Globe, label: "Website", href: "https://globaliotschool.com" },
                    ].map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${m.name} on ${label}`}
                        className="flex size-7 items-center justify-center rounded-full border border-border bg-secondary/60 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <Icon className="size-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Global Presence */}
      <section className="bg-background py-6 md:py-8">
        <div className="container-gis">
          <Reveal>
            <div className="flex items-center gap-2">
              <Building2 className="size-5 text-primary" />
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Global Presence
              </h2>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Empowering learners and delivering education across international technology hubs
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {globalLocations.map((l) => (
                <span
                  key={l}
                  className="rounded-md border border-border/80 bg-secondary/70 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  {l}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Standalone General Application Modal */}
      <JobApplicationModal
        job={jobOpenings[0]!}
        isOpen={isGeneralApplyOpen}
        onClose={() => setIsGeneralApplyOpen(false)}
      />
    </main>
  );
}
