import { useEffect, useState } from "react";
import {
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { degreePrograms, type DegreeProgram } from "@/data/site";
import { cn } from "@/lib/utils";
import { DegreeEnquiryModal } from "./DegreeEnquiryModal";

export function DegreeSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(1);
  const [selectedDegree, setSelectedDegree] = useState<DegreeProgram | null>(null);

  const total = degreePrograms.length;
  const maxIndex = Math.max(0, total - perView);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused || selectedDegree !== null) return;
    const id = window.setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 3500);
    return () => window.clearInterval(id);
  }, [paused, maxIndex, selectedDegree]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1 text-brand-orange">
            Degree Programs
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Industry-integrated graduate degrees
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Click on any degree container to view full syllabus details, eligibility, and submit an
            admission enquiry.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setIndex((i) => (i <= 0 ? maxIndex : i - 1))}
            aria-label="Previous program"
            className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-primary/20 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i >= maxIndex ? 0 : i + 1))}
            aria-label="Next program"
            className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-primary/20 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>

      <div className="mt-8 overflow-hidden">
        <ul
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {degreePrograms.map((p, i) => (
            <li key={p.title} className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/3">
              <article
                role="button"
                tabIndex={0}
                onClick={() => setSelectedDegree(p)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedDegree(p);
                  }
                }}
                aria-label={`View details and enquire for ${p.title}`}
                className={cn(
                  "group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl",
                  "border-2 border-primary/15 bg-white p-7",
                  "shadow-[0_20px_50px_-30px_rgba(30,58,95,0.4)] transition-all duration-300",
                  "hover:-translate-y-2 hover:border-accent hover:shadow-[0_24px_55px_-20px_rgba(15,118,110,0.35)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                )}
              >
                {/* Top Highlight Accent Strip */}
                <span
                  className={cn(
                    "absolute inset-x-0 top-0 h-2 transition-all duration-300 group-hover:h-2.5",
                    i % 2 === 0
                      ? "bg-gradient-to-r from-primary via-accent to-teal-400"
                      : "bg-gradient-to-r from-brand-orange via-accent to-primary",
                  )}
                  aria-hidden
                />

                {/* Subtle Glow Orb */}
                <span
                  className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-accent/15 blur-2xl transition-all duration-300 group-hover:scale-125 group-hover:bg-accent/30"
                  aria-hidden
                />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-sm">
                      <GraduationCap className="size-3.5" aria-hidden />
                      {p.code}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent transition-colors group-hover:bg-accent/20">
                      <Sparkles className="size-3" aria-hidden />
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold leading-snug text-primary transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/75 line-clamp-3">
                    {p.note}
                  </p>
                </div>

                {/* Bottom Call to Action Footer */}
                <div className="mt-6 border-t border-primary/10 pt-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-accent group-hover:text-primary">
                    <span className="inline-flex items-center gap-1.5 font-bold">
                      <BookOpen className="size-3.5" />
                      View Details &amp; Enquire
                    </span>
                    <span className="grid size-7 place-items-center rounded-full bg-primary/10 text-primary transition-all duration-200 group-hover:translate-x-1 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {degreePrograms.slice(0, maxIndex + 1).map((p, i) => (
          <button
            key={p.title}
            type="button"
            aria-label={`Show ${p.title}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-8 bg-primary" : "w-3 bg-foreground/20",
            )}
          />
        ))}
      </div>

      {/* Interactive Degree Details & Enquiry Modal */}
      <DegreeEnquiryModal
        degree={selectedDegree}
        isOpen={!!selectedDegree}
        onClose={() => setSelectedDegree(null)}
      />
    </div>
  );
}
