import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Building2, PhoneCall, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ConsultancyEnquiryModal, type ConsultancyService } from "@/components/site/ConsultancyEnquiryModal";
import { consultancyMenu, site } from "@/data/site";

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
  dpr: "End-to-end detailed project report support for new universities, colleges, and state-of-the-art future technology centres of excellence.",
  autonomous:
    "Documentation, academic governance frameworks, and process readiness for UGC autonomous college status and periodic compliance reviews.",
  ranking:
    "Preparation, quantitative data structuring, and metric-based submission guidance for NAAC, UGC, NIRF, and QS world ranking frameworks.",
  international:
    "Facilitating bilateral academic partnerships, joint degree programs, faculty development, and global exchange tie-ups with overseas universities.",
};

function ConsultancyPage() {
  const [selectedService, setSelectedService] = useState<ConsultancyService | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConsultancy = (service: (typeof consultancyMenu)[number]) => {
    setSelectedService({
      id: service.id,
      title: service.title,
      subtitle: service.subtitle,
      description: details[service.id],
    });
    setIsModalOpen(true);
  };

  return (
    <main>
      {/* Hero Header */}
      <section className="surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-50" aria-hidden />
        <div className="container-gis relative py-8 md:py-16">
          <Reveal>
            <p className="eyebrow text-cyan inline-flex items-center gap-1.5">
              <Building2 className="size-3.5" />
              College &amp; University Advisory
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
              Strategic Advisory for Future-Ready Institutions
            </h1>
            <p className="mt-4 max-w-2xl text-navy-foreground/75 text-sm sm:text-base">
              We collaborate with universities and autonomous colleges on detailed project reports (DPR), regulatory compliance, accreditation rankings, and global institutional collaborations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => handleOpenConsultancy(consultancyMenu[0]!)}
                className="rounded-xl bg-cyan px-5 py-2.5 text-xs sm:text-sm font-bold text-navy shadow-md transition-transform hover:scale-105"
              >
                Request Strategic Consultation
              </button>
              <a
                href="tel:+918082060006"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-5 py-2.5 text-xs sm:text-sm font-bold text-navy-foreground hover:bg-white/10"
              >
                <PhoneCall className="size-3.5" />
                +91 8082060006
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Consultancy Services Grid */}
      <section className="py-8 md:py-14 bg-background">
        <div className="container-gis">
          <Reveal className="mb-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="eyebrow text-brand-orange">Consulting Pillars</p>
                <h2 className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-foreground">
                  Our Institutional Consultancy Services
                </h2>
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                Click any service card to open the enquiry form
              </span>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {consultancyMenu.map((c, i) => (
              <div key={c.id} id={c.id} className="scroll-mt-24">
                <Reveal
                  delay={i * 0.06}
                  className="card-lift group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg cursor-pointer"
                >
                  <div onClick={() => handleOpenConsultancy(c)}>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                        {c.subtitle}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Enquire Now &rarr;
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {details[c.id]}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                    <button
                      type="button"
                      onClick={() => handleOpenConsultancy(c)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-sm transition-transform hover:scale-105 active:scale-95"
                    >
                      Enquire for this Advisory
                      <ArrowUpRight className="size-3.5" />
                    </button>
                    <span className="text-xs font-medium text-muted-foreground">
                      Customized Roadmap
                    </span>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Need a Custom Advisory Proposal for Your University?
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground max-w-xl">
                Our senior academic advisory board offers comprehensive evaluations and strategic project roadmap sessions for institutional management.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleOpenConsultancy(consultancyMenu[0]!)}
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-md transition-transform hover:scale-105"
            >
              Request Institutional Consultation
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Consultancy Modal */}
      <ConsultancyEnquiryModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
