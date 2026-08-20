import { createFileRoute } from "@tanstack/react-router";
import { Globe, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TypewriterHeading } from "@/components/site/TypewriterHeading";
import aboutHeroAsset from "@/assets/about-hero-bg.jpg.asset.json";
import aboutContentBg from "@/assets/about-content-bg.jpg";
import {
  vision,
  mission,
  objectives,
  pillars,
  team,
  credibility,
  globalLocations,
  gallery,
} from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Global IoT School — Vision, Mission & Team" },
      {
        name: "description",
        content:
          "Established in 2017, Global IoT School is a Mumbai-based EdTech institution bridging academics and industry through AI, IoT, Cybersecurity and SAP programs.",
      },
      { property: "og:title", content: "About Global IoT School" },
      {
        property: "og:description",
        content:
          "Our vision, mission, objectives, leadership team and global presence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const imgA = gallery[1] ?? gallery[0]!;
const imgB = gallery[3] ?? gallery[0]!;

function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <img
          src={aboutContentBg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"
          aria-hidden
        />
        <div className="container-gis relative py-10 md:py-10">
          <Reveal>
            <p className="eyebrow text-brand-orange">About GIS</p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              Bridging the gap between academics and industry since 2017
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Global IoT School (GIS) is a Mumbai-based EdTech institution delivering
              skill-based certification programs in AI, IoT, Cybersecurity and SAP.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {credibility.slice(0, 4).map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      {/* About content */}
      <section className="relative overflow-hidden py-10 md:py-10 bg-background">
        <div className="container-gis relative grid items-center gap-6 lg:grid-cols-2">
          <Reveal>
            <TypewriterHeading text="Welcome to Global IoT School" />
            <h3 className="mt-4 font-display text-xl font-medium text-brand-orange sm:text-2xl">
              Shaping Your Digital Future with AI Innovation
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Global IoT School (GIS) is a leading EdTech institution offering hands-on, industry-aligned certification programs in Artificial Intelligence, Internet of Things (IoT), Cybersecurity, and SAP. Established in 2017, GIS bridges the gap between academics and industry through skill-based learning and global collaborations.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              With expert instructors from IITs, IISc, and industry leaders, we empower learners to gain practical expertise, real-world exposure, and globally recognized certifications that prepare them for leadership in the digital economy.
            </p>
          </Reveal>

          <Reveal className="relative">
            <div className="relative pb-14 pr-14 sm:pb-16 sm:pr-20">
              <div
                className="absolute -left-6 -top-6 size-36 rounded-full bg-accent/25 blur-2xl"
                aria-hidden
              />
              <img
                src={imgA.src}
                alt={imgA.title}
                loading="lazy"
                className="relative w-full rounded-[1.5rem] border border-border object-cover shadow-[0_30px_60px_-30px_var(--navy)] sm:h-[21rem]"
              />
              <img
                src={imgB.src}
                alt={imgB.title}
                loading="lazy"
                className="absolute bottom-0 right-0 w-36 rounded-2xl border-4 border-background object-cover shadow-[0_24px_50px_-24px_var(--navy)] sm:w-48"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-background border-t border-border/50">
        <div className="container-gis">
          <Reveal className="text-center">
            <h3 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
              Explore GIS Programs – Learn, Innovate, and Lead
            </h3>
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Industry-Relevant Curriculum",
                desc: "Designed in collaboration with IITs, IISc, and industry experts for real-world impact."
              },
              {
                title: "Expert Instructors",
                desc: "Learn from faculty and professionals from IITs, NITs, and leading tech industries."
              },
              {
                title: "Practical Learning & Projects",
                desc: "Gain hands-on experience through live labs, simulations, and industry projects."
              },
              {
                title: "Globally Recognized Certification",
                desc: "Earn joint certification from Global IoT School and collaborating institutes."
              }
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <h4 className="font-display text-lg font-semibold text-primary">{f.title}</h4>
                <p className="mt-3 text-sm text-muted-foreground">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-10 bg-background">
        <div className="container-gis">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Our Vision & Mission
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Reveal delay={0.1} className="overflow-hidden rounded-xl border border-border/50 bg-card shadow-md">
              <div className="relative h-[18rem] w-full bg-[#121b33]">
                <img src={imgA.src} className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-40" alt="Vision Background" />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-display text-4xl font-extrabold text-white tracking-widest uppercase drop-shadow-xl">
                    Our Vision
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  </div>
                  <h4 className="font-display text-2xl font-bold text-navy">Our Vision</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {vision}
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={0.2} className="overflow-hidden rounded-xl border border-border/50 bg-card shadow-md">
              <div className="relative h-[18rem] w-full bg-[#0a192f]">
                <img src={imgB.src} className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-40" alt="Mission Background" />
                <div className="absolute inset-0 bg-teal-900/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-display text-4xl font-extrabold text-white tracking-widest uppercase drop-shadow-xl">
                    Our Mission
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  </div>
                  <h4 className="font-display text-2xl font-bold text-navy">Our Mission</h4>
                </div>
                <ul className="space-y-3 text-muted-foreground leading-relaxed text-base list-disc pl-5 marker:text-green-600">
                  {mission.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-background py-8 md:py-10">
        <div className="container-gis">
          <Reveal>
            <p className="eyebrow text-brand-orange">What drives us</p>
            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
              Objectives
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {objectives.map((o, i) => (
              <Reveal
                key={o}
                delay={i * 0.06}
                className="card-lift rounded-xl border border-border bg-card p-5"
              >
                <span className="font-display text-2xl font-semibold text-accent">
                  0{i + 1}
                </span>
                <p className="mt-3 text-sm text-muted-foreground">{o}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-background py-8 md:py-10">
        <div className="container-gis">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Why choose GIS
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.05}
                className="card-lift rounded-xl border border-border bg-card p-5"
              >
                <h3 className="font-display text-base font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-8 md:py-10">
        <div className="container-gis">
          <Reveal>
            <p className="eyebrow text-brand-orange">The people</p>
            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
              Leadership &amp; Advisors
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal
                key={m.name}
                delay={i * 0.04}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-[0_28px_60px_-32px_var(--navy)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={m.image}
                    alt={`${m.name} — ${m.role}`}
                    loading="lazy"
                    className="h-60 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {m.tag ? (
                    <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground shadow-sm">
                      {m.tag}
                    </span>
                  ) : null}
                </div>
                <div className="relative flex flex-1 flex-col p-4">
                  <span
                    className="absolute -top-px left-4 h-0.5 w-8 bg-accent transition-all duration-300 group-hover:w-16"
                    aria-hidden
                  />
                  <h3 className="font-display text-sm font-semibold">{m.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{m.role}</p>
                  <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
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
                        className="flex size-8 items-center justify-center rounded-full border border-border bg-secondary/60 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <Icon className="size-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="bg-background py-8 md:py-10">
        <div className="container-gis">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Global presence
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {globalLocations.map((l) => (
                <span
                  key={l}
                  className="rounded-md bg-secondary px-3.5 py-1.5 text-sm font-medium text-foreground"
                >
                  {l}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
