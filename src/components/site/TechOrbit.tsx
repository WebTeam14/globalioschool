import { heroTech } from "@/data/site";

/**
 * Circular orbit of technology domains.
 * The ring rotates while each chip counter-rotates so labels stay upright.
 */
export function TechOrbit() {
  const n = heroTech.length;
  const duration = 32;

  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-[26rem] place-items-center sm:max-w-[30rem]">
      <div
        className="pointer-events-none absolute inset-[10%] rounded-full bg-gradient-to-br from-primary/25 via-accent/20 to-brand-orange/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-[4%] rounded-full border-2 border-primary/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-[20%] rounded-full border-2 border-dashed border-brand-orange/60"
        style={{ animation: "gis-spin-slow 40s linear infinite" }}
        aria-hidden
      />

      {/* core */}
      <div className="absolute z-10 grid size-28 place-items-center rounded-full bg-gradient-to-br from-primary to-navy text-center shadow-xl shadow-primary/30 sm:size-32">
        <span className="px-2 font-display text-sm font-extrabold uppercase tracking-[0.18em] text-primary-foreground">
          Future
          <br />
          Tech
        </span>
      </div>

      <div
        className="absolute inset-0"
        style={{ animation: `gis-spin-slow ${duration}s linear infinite` }}
      >
        {heroTech.map((label, i) => {
          const angle = (i * 360) / n;
          const accentChip = i % 2 === 0;
          return (
            <div
              key={label}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translateY(clamp(-11.5rem, -30vw, -8rem)) rotate(${-angle}deg)`,
              }}
            >
              <span
                className={
                  "-ml-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold tracking-wide shadow-lg backdrop-blur-md sm:text-base " +
                  (accentChip
                    ? "bg-primary text-primary-foreground shadow-primary/30"
                    : "border-2 border-brand-orange/50 bg-white text-brand-orange shadow-brand-orange/20")
                }
                style={{ animation: `gis-spin-rev ${duration}s linear infinite` }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>

  );
}
