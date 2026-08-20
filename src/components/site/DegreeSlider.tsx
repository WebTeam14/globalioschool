import { useEffect, useState } from "react";
import { GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { degreePrograms } from "@/data/site";
import { cn } from "@/lib/utils";

export function DegreeSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(1);
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
    if (paused) return;
    const id = window.setInterval(
      () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
      3500,
    );
    return () => window.clearInterval(id);
  }, [paused, maxIndex]);

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
              <article className="card-lift group relative h-full overflow-hidden rounded-3xl border border-primary/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(30,58,95,0.5)]">
                <span
                  className={cn(
                    "absolute inset-x-0 top-0 h-1.5",
                    i % 2 === 0
                      ? "bg-gradient-to-r from-primary to-accent"
                      : "bg-gradient-to-r from-brand-orange to-accent",
                  )}
                  aria-hidden
                />
                <span className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-accent/15 blur-2xl transition-all group-hover:bg-accent/25" aria-hidden />
                <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                  <GraduationCap className="size-3.5" aria-hidden />
                  {p.code}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold leading-snug text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{p.note}</p>
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
    </div>
  );
}
