import { createFileRoute } from "@tanstack/react-router";
import { Globe, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
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
          src={aboutHeroAsset.url}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/60"
          aria-hidden
        />
        <div className="container-gis relative py-16 md:py-24">
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
      <section className="relative overflow-hidden py-12 md:py-16">
        <img
          src={aboutContentBg}
          alt=""
          aria-hidden
          width={1536}
          height={1024}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80" aria-hidden />
        <div className="container-gis relative grid items-center gap-10 lg:grid-cols-2">
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

          <Reveal delay={0.1}>
            <p className="eyebrow text-brand-orange">Who we are</p>
            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
              Our Vision
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{vision}</p>
            <h2 className="mt-7 font-display text-2xl font-semibold sm:text-3xl">
              Our Mission
            </h2>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
              {mission.map((m) => (
                <li key={m} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-secondary/40 py-12 md:py-16">
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
      <section className="py-12 md:py-16">
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
      <section className="bg-secondary/40 py-12 md:py-16">
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
      <section className="py-12 md:py-16">
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
