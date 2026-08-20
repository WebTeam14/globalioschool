import { gallery } from "@/data/site";

const events = gallery.slice(0, 10);

export function EventMarquee() {
  return (
    <section className="section-y overflow-hidden bg-secondary/50">
      <div className="container-gis">
        <p className="eyebrow text-brand-orange">Campus Life</p>
        <h2 className="mt-2 font-display text-3xl font-semibold">
          Events, seminars &amp; college engagements
        </h2>
      </div>

      <div className="relative mt-10">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28"
          aria-hidden
        />
        <ul className="marquee-track-rev items-stretch gap-6 px-6">
          {[...events, ...events].map((e, i) => (
            <li
              key={e.title + i}
              className="card-lift w-[16rem] shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:w-[20rem]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={e.src}
                  alt={e.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="eyebrow text-[0.65rem] text-primary">{e.category}</span>
                <h3 className="mt-1 font-display text-sm font-semibold leading-snug">
                  {e.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
