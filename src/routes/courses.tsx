import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sparkles, MessageSquare, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CourseEnquiryModal, type CourseData } from "@/components/site/CourseEnquiryModal";
import { domains, courses, site } from "@/data/site";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses & Certifications — AI, IoT, Cybersecurity & SAP | Global IoT School" },
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
  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenEnquiry = (course: CourseData) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <main>
      {/* Hero Header */}
      <section className="surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-50" aria-hidden />
        <div className="container-gis relative py-8 md:py-16">
          <Reveal>
            <p className="eyebrow text-cyan">Technology Domains</p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">
              Certification Programs Built for the Digital Economy
            </h1>
            <p className="mt-4 max-w-2xl text-navy-foreground/75 text-sm sm:text-base">
              Choose a domain and explore hands-on, industry-aligned modules. Click any course below to open the curriculum enquiry form and get batch details.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {domains.map((d) => (
                <a
                  key={d.id}
                  href={`#${d.id}`}
                  className="rounded-lg border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-navy-foreground transition-all hover:border-cyan hover:bg-cyan/10 hover:text-cyan"
                >
                  {d.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Courses Domain Sections */}
      {domains.map((d, di) => (
        <section
          key={d.id}
          id={d.id}
          className={di % 2 === 1 ? "py-8 md:py-12 bg-secondary/40 border-b border-border/40 scroll-mt-20" : "py-8 md:py-12 bg-background border-b border-border/40 scroll-mt-20"}
        >
          <div className="container-gis">
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="eyebrow text-primary">{d.subtitle}</p>
                  <h2 className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-foreground">{d.title}</h2>
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  Click any card to enquire
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{d.description}</p>
            </Reveal>

            <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-2">
              {courses
                .filter((c) => c.domain === d.id)
                .map((c, i) => (
                  <Reveal
                    key={c.id}
                    delay={i * 0.05}
                    className="card-lift group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg cursor-pointer"
                  >
                    <div onClick={() => handleOpenEnquiry(c)}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                          {c.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          Enquire Now <ArrowRight className="size-3" />
                        </span>
                      </div>
                      <h3 className="mt-2.5 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {c.description}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3">
                      <button
                        type="button"
                        onClick={() => handleOpenEnquiry(c)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <BookOpen className="size-3.5" />
                        Enquire &amp; Get Syllabus
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenEnquiry(c)}
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground"
                      >
                        View Details &rarr;
                      </button>
                    </div>
                  </Reveal>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="surface-dark">
        <div className="container-gis py-8 md:py-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold">Ready to Accelerate Your Career?</h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-navy-foreground/75">
            Register for an upcoming batch or talk directly with our expert technology mentors.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => handleOpenEnquiry(courses[0]!)}
              className="rounded-xl bg-cyan px-6 py-2.5 text-xs sm:text-sm font-bold text-navy shadow-md transition-transform hover:scale-105"
            >
              Enquire for Courses
            </button>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-6 py-2.5 text-xs sm:text-sm font-bold text-navy-foreground hover:bg-white/10"
            >
              <MessageSquare className="size-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Course Enquiry Modal */}
      <CourseEnquiryModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
