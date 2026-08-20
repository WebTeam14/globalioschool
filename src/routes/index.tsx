import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TechOrbit } from "@/components/site/TechOrbit";
import { DegreeSlider } from "@/components/site/DegreeSlider";
import { EventMarquee } from "@/components/site/EventMarquee";
import { AboutIntro } from "@/components/site/AboutIntro";
import heroBg from "@/assets/hero-bg-new.jpg";
import {
  site,
  domains,
  pillars,
  vision,
  testimonials,
  recruiters,
  partners,
  globalLocations,
  credibility,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global IoT School — AI, IoT, Cybersecurity & SAP Training" },
      {
        name: "description",
        content:
          "Global IoT School is a Mumbai-based EdTech institution offering industry-aligned certification programs in Artificial Intelligence, IoT, Cybersecurity and SAP.",
      },
      { property: "og:title", content: "Global IoT School" },
      {
        property: "og:description",
        content:
          "Shaping your digital future with AI innovation — certification programs in AI, IoT, Cybersecurity and SAP.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background text-foreground">
        {/* Aesthetic tech background */}
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-right"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40"
          aria-hidden
        />
        <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
        <div
          className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-accent/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 bottom-0 size-[28rem] rounded-full bg-primary/15 blur-3xl"
          aria-hidden
        />
        <div className="container-gis relative grid gap-12 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-primary">
              <span className="size-1.5 rounded-full bg-brand-orange" aria-hidden />
              {site.eyebrow}
            </p>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-primary md:text-7xl">
              <span className="bg-gradient-to-r from-primary via-navy to-brand-orange bg-clip-text text-transparent">
                {site.tagline}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-foreground/80 md:text-xl">
              {site.heroText}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
              >
                Explore Programs
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
              <Link
                to="/contact"
                className="rounded-full border-2 border-brand-orange/50 bg-brand-orange/5 px-7 py-3.5 text-sm font-bold text-brand-orange transition-colors hover:bg-brand-orange/15"
              >
                Talk to Us
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2 text-xs font-semibold text-foreground/70">
              {credibility.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-foreground/10 bg-white/70 px-3 py-1.5 backdrop-blur"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="flex items-center justify-center">
            <TechOrbit />
          </Reveal>
        </div>


        {/* Degree programs auto slider */}
        <div className="container-gis relative border-t border-foreground/10 py-16">
          <DegreeSlider />
        </div>
      </section>

      {/* Events marquee */}
      <EventMarquee />

      {/* About us */}
      <AboutIntro />

      {/* Vision */}
      <section className="section-y">
        <div className="container-gis grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow text-primary">Our Vision</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              A global center of excellence in future technology education
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground">{vision}</p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              More about GIS
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Domains */}
      <section className="section-y bg-secondary/40">
        <div className="container-gis">
          <Reveal>
            <p className="eyebrow text-primary">Technology Domains</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Programs designed with industry
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {domains.map((d, i) => (
              <Reveal key={d.id} delay={i * 0.07}>
                <Link
                  to="/courses"
                  hash={d.id}
                  className="card-lift block h-full rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-display text-lg font-semibold">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View courses <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-y">
        <div className="container-gis">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">Why learners choose GIS</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.06}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-display text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-40" aria-hidden />
        <div className="container-gis relative py-20">
          <Reveal>
            <p className="eyebrow text-cyan">Testimonials</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              What partners and learners say
            </h2>
          </Reveal>
          <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="w-[19rem] shrink-0 snap-start rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <Quote className="size-6 text-cyan" aria-hidden />
                <blockquote className="mt-4 text-sm leading-relaxed text-navy-foreground/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="size-11 rounded-full object-cover"
                  />
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-navy-foreground/60">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters */}
      <section className="section-y">
        <div className="container-gis">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">Our Recruiters</h2>
          </Reveal>
        </div>
        <div className="mt-10 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-12 px-6">
            {[...recruiters, ...recruiters].map((r, i) => (
              <img
                key={r.name + i}
                src={r.src}
                alt={r.name}
                loading="lazy"
                className="h-12 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-y bg-secondary/40">
        <div className="container-gis">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">
              Collaborative Partners
            </h2>
          </Reveal>
        </div>
        <div className="mt-10 overflow-hidden">
          <div className="marquee-track-rev flex w-max items-center gap-12 px-6">
            {[...partners, ...partners].map((p, i) => (
              <img
                key={p.name + i}
                src={p.src}
                alt={p.name}
                loading="lazy"
                className="h-14 w-auto object-contain opacity-80 transition hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y">
        <div className="container-gis rounded-2xl border border-border bg-card p-10 text-center">
          <h2 className="font-display text-3xl font-semibold">
            Learners across {globalLocations.length} countries
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            {globalLocations.join(" · ")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/courses"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
