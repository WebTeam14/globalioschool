import { createFileRoute } from "@tanstack/react-router";
import { Building2, UserCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { placementMenu, recruiters } from "@/data/site";

export const Route = createFileRoute("/placement")({
  head: () => ({
    meta: [
      { title: "Placement — Associate Companies & Placed Students | Global IoT School" },
      {
        name: "description",
        content:
          "Explore Global IoT School placement support: associate hiring companies and placed students across AI, IoT, Cybersecurity and SAP programs.",
      },
      { property: "og:title", content: "Placement | Global IoT School" },
      {
        property: "og:description",
        content:
          "Associate companies and placed students of Global IoT School's technology programs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlacementPage,
});

function PlacementPage() {
  return (
    <main>
      <section className="surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-50" aria-hidden />
        <div className="container-gis relative py-20 md:py-24">
          <Reveal>
            <p className="eyebrow text-cyan">Placement</p>
            <h1 className="mt-4 font-display text-3xl font-semibold md:text-5xl">
              Careers built with industry partners
            </h1>
            <p className="mt-5 max-w-2xl text-navy-foreground/70">
              Our placement cell connects learners with associate companies hiring for
              Artificial Intelligence, IoT, Cybersecurity and SAP roles.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {placementMenu.map((m) => (
                <li key={m.id}>
                  <a
                    href={`#${m.id}`}
                    className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-navy-foreground/85 transition-colors hover:bg-white/10"
                  >
                    {m.title}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="associate-companies" className="section-y scroll-mt-24">
        <div className="container-gis">
          <Reveal>
            <p className="eyebrow text-primary">
              <Building2 className="size-4" aria-hidden /> Associate Company
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Companies that hire from Global IoT School
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {recruiters.map((r, i) => (
              <Reveal
                key={r.name}
                delay={i * 0.03}
                className="grid h-24 place-items-center rounded-xl border border-border bg-card p-4"
              >
                <img
                  src={r.src}
                  alt={r.name}
                  loading="lazy"
                  className="max-h-12 w-auto object-contain opacity-80"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="placed-students" className="section-y scroll-mt-24 bg-secondary/40">
        <div className="container-gis">
          <Reveal>
            <p className="eyebrow text-primary">
              <UserCheck className="size-4" aria-hidden /> Placed Student
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Learner placement outcomes
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Placed student profiles are shared by the Global IoT School placement cell.
              For the latest verified placement list and student details, please contact
              the placement team.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
