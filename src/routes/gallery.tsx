import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { gallery } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Workshops, Seminars & Institutional Visits | GIS" },
      {
        name: "description",
        content:
          "Moments from Global IoT School workshops, cybersecurity seminars, orientation sessions and institutional meetings across India and abroad.",
      },
      { property: "og:title", content: "Global IoT School Gallery" },
      {
        property: "og:description",
        content:
          "Workshops, seminars, orientations and institutional visits by Global IoT School.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(gallery.map((g) => g.category)))],
    [],
  );
  const [active, setActive] = useState("All");
  const items = active === "All" ? gallery : gallery.filter((g) => g.category === active);

  return (
    <main>
      <section className="surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-50" aria-hidden />
        <div className="container-gis relative py-5 md:py-15">
          {/* <Reveal>
            <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Let&apos;s talk about your future skills
            </h1>
            <p className="mt-6 max-w-2xl text-navy-foreground/75">
              Our team is available for program enquiries, institutional collaborations
              and corporate training.
            </p>
          </Reveal> */}
          <p className="eyebrow text-cyan text-center">Gallery</p>

        </div>
      </section>

      <section className="section-y">
        <div className="container-gis">
          {/* <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div> */}

          <div className="mt-2 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {items.map((g, i) => (
              <Reveal
                key={g.src + g.title}
                delay={(i % 6) * 0.05}
                className="card-lift break-inside-avoid overflow-hidden rounded-xl border border-border bg-card"
              >
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {g.category}
                  </p>
                  <h2 className="mt-1 text-sm font-medium text-foreground">{g.title}</h2>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main >
  );
}
