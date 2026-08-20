import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { vision, gallery, credibility } from "@/data/site";

const imgA = gallery[0]!;
const imgB = (gallery[5] ?? gallery[1])!;

export function AboutIntro() {
  return (
    <section className="section-y">
      <div className="container-gis grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative pb-16 pr-16 sm:pb-20 sm:pr-24">
            <div
              className="absolute -left-6 -top-6 size-40 rounded-full bg-accent/25 blur-2xl"
              aria-hidden
            />
            <img
              src={imgA.src}
              alt={imgA.title}
              loading="lazy"
              className="relative w-full rounded-[1.75rem] border border-border object-cover shadow-[0_30px_60px_-30px_var(--navy)] sm:h-[24rem]"
            />
            <img
              src={imgB.src}
              alt={imgB.title}
              loading="lazy"
              className="absolute bottom-0 right-0 w-40 rounded-2xl border-4 border-background object-cover shadow-[0_24px_50px_-24px_var(--navy)] sm:w-56"
            />
            <span className="absolute -left-2 bottom-6 hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground sm:inline-block">
              Since 2017
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="eyebrow text-brand-orange">About Us</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Learning that connects classrooms with industry
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{vision}</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {credibility.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm"
              >
                <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Know more about GIS
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
