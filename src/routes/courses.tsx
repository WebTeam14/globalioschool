import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { domains, courses, site } from "@/data/site";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — AI, IoT, Cybersecurity & SAP | Global IoT School" },
      {
        name: "description",
        content:
          "Explore certification programs across Artificial Intelligence, Internet of Things, Cybersecurity and SAP, designed with industry and academic experts.",
      },
      { property: "og:title", content: "Courses at Global IoT School" },
      {
        property: "og:description",
        content:
          "Industry-aligned certification programs in AI, IoT, Cybersecurity and SAP.",
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <main>
      <section className="surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-50" aria-hidden />
        <div className="container-gis relative py-8 md:py-28">
          <Reveal>
            <p className="eyebrow text-cyan">Technology Domains</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
              Certification programs built for the digital economy
            </h1>
            <p className="mt-6 max-w-2xl text-navy-foreground/75">
              Choose a domain and explore hands-on, industry-aligned modules delivered
              with projects, mentorship and innovation labs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {domains.map((d) => (
                <a
                  key={d.id}
                  href={`#${d.id}`}
                  className="rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-navy-foreground transition-colors hover:border-cyan hover:text-cyan"
                >
                  {d.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {domains.map((d, di) => (
        <section
          key={d.id}
          id={d.id}
          className={di % 2 === 1 ? "section-y bg-secondary/40" : "section-y"}
        >
          <div className="container-gis">
            <Reveal>
              <p className="eyebrow text-primary">{d.subtitle}</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">{d.title}</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">{d.description}</p>
            </Reveal>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {courses
                .filter((c) => c.domain === d.id)
                .map((c, i) => (
                  <Reveal
                    key={c.id}
                    delay={i * 0.06}
                    className="card-lift rounded-xl border border-border bg-card p-6"
                  >
                    <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                  </Reveal>
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="surface-dark">
        <div className="container-gis py-10 text-center">
          <h2 className="font-display text-3xl font-semibold">Ready to enroll?</h2>
          <p className="mx-auto mt-3 max-w-xl text-navy-foreground/75">
            Register for an upcoming batch or talk to our team about the right program
            for you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={site.external.register}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-cyan px-6 py-3 text-sm font-semibold text-navy"
            >
              Register Now
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-navy-foreground"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
