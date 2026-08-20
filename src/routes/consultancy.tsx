import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { consultancyMenu } from "@/data/site";

export const Route = createFileRoute("/consultancy")({
  head: () => ({
    meta: [
      { title: "College Consultancy — DPR, Compliance & Rankings | Global IoT School" },
      {
        name: "description",
        content:
          "Global IoT School college consultancy: university DPR consultancy, autonomous college compliance, NAAC/UGC/NIRF/QS ranking support and international collaboration.",
      },
      { property: "og:title", content: "College Consultancy | Global IoT School" },
      {
        property: "og:description",
        content:
          "Advisory for higher-education institutions: DPR, compliance, accreditation rankings and global collaboration.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConsultancyPage,
});

const details: Record<string, string> = {
  dpr: "End-to-end detailed project report support for new universities, colleges and technology centres of excellence.",
  autonomous:
    "Documentation, academic governance and process readiness for autonomous college status and periodic compliance.",
  ranking:
    "Preparation, data structuring and submission guidance for NAAC, UGC, NIRF and QS ranking frameworks.",
  international:
    "Facilitating academic partnerships, joint programs and global exchange collaborations with institutions abroad.",
};

function ConsultancyPage() {
  return (
    <main>
      <section className="surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-50" aria-hidden />
        <div className="container-gis relative py-20 md:py-24">
          <Reveal>
            <p className="eyebrow text-cyan">College Consultancy</p>
            <h1 className="mt-4 font-display text-3xl font-semibold md:text-5xl">
              Advisory for future-ready institutions
            </h1>
            <p className="mt-5 max-w-2xl text-navy-foreground/70">
              We work with universities and colleges on project reports, compliance,
              accreditation rankings and international academic collaboration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-gis grid gap-6 md:grid-cols-2">
          {consultancyMenu.map((c, i) => (
            <div key={c.id} id={c.id} className="scroll-mt-24">
              <Reveal
                delay={i * 0.06}
                className="card-lift h-full rounded-2xl border border-border bg-card p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
                  {c.subtitle}
                </p>
                <h2 className="mt-3 font-display text-xl font-semibold">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {details[c.id]}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
        <div className="container-gis mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Request a consultation
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
