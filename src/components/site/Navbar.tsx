import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { site, navItems, domains, placementMenu, consultancyMenu } from "@/data/site";
import { cn } from "@/lib/utils";

type MenuGroup = { to: string; items: { id: string; title: string; subtitle: string }[] };

const megaMenus: Record<string, MenuGroup> = {
  Course: {
    to: "/courses",
    items: domains.map((d) => ({ id: d.id, title: d.title, subtitle: d.subtitle })),
  },
  Placement: { to: "/placement", items: placementMenu },
  "College Consultancy": { to: "/consultancy", items: consultancyMenu },
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/85 shadow-[0_10px_40px_-32px_rgba(10,25,60,0.9)] backdrop-blur-xl"
            : "border-b border-transparent bg-background",
        )}
      >
        {/* Brand accent line */}
      <div
        className="h-1 w-full bg-[linear-gradient(90deg,var(--navy),var(--brand-teal),var(--brand-orange),var(--cyan))]"
        aria-hidden
      />

      <div
        className={cn(
          "container-gis grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-all duration-300",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Global IoT School home"
        >
          <img
            src={site.logo}
            alt="Global IoT School logo"
            className={cn(
              "w-auto shrink-0 rounded-lg transition-all duration-300",
              scrolled ? "h-10" : "h-12",
            )}
          />
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="truncate font-display text-base font-bold tracking-tight text-foreground">
              Global IoT School
            </span>
            <span className="hidden truncate text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-brand-orange md:block">
              Technology · Innovation · Opportunity
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {navItems.map((item) => {
            const mega = megaMenus[item.label];
            if (!mega) {
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                    pathname === item.to
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  to={item.to}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                    pathname === item.to
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform",
                      openMenu === item.label && "rotate-180",
                    )}
                    aria-hidden
                  />
                </Link>
                {openMenu === item.label && (
                  <div className="absolute left-1/2 top-full w-[30rem] -translate-x-1/2 pt-2">
                    <div className="animate-fade-in grid grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-2 shadow-2xl">
                      {mega.items.map((d) => (
                        <Link
                          key={d.id}
                          to={mega.to}
                          hash={d.id}
                          className="group rounded-xl p-3 transition-colors hover:bg-secondary"
                        >
                          <span className="block text-sm font-semibold text-foreground">
                            {d.title}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {d.subtitle}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <a
            href={site.external.erp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            ERP
          </a>
          <Link
            to="/courses"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-18px_var(--primary)] transition-transform hover:-translate-y-0.5"
          >
            Explore Programs
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-border text-foreground xl:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="size-5" aria-hidden />
        </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[100] xl:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-navy-deep/60 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-20 items-center justify-between border-b border-border px-5">
            <img
              src={site.logo}
              alt="Global IoT School logo"
              className="h-10 w-auto rounded-lg"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-md border border-border"
              aria-label="Close menu"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const mega = megaMenus[item.label];
                if (!mega) {
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className={cn(
                          "block rounded-lg px-3 py-3 text-base font-semibold",
                          pathname === item.to
                            ? "bg-secondary text-primary"
                            : "text-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={item.to}>
                    <details className="rounded-lg border border-border px-3 py-2">
                      <summary className="cursor-pointer list-none py-1 text-base font-semibold text-foreground">
                        {item.label}
                      </summary>
                      <ul className="mt-2 space-y-1 pb-2">
                        <li>
                          <Link
                            to={mega.to}
                            className="block rounded-md px-2 py-2 text-sm font-semibold text-primary"
                          >
                            View all
                          </Link>
                        </li>
                        {mega.items.map((d) => (
                          <li key={d.id}>
                            <Link
                              to={mega.to}
                              hash={d.id}
                              className="block rounded-md px-2 py-2 text-sm text-muted-foreground"
                            >
                              {d.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                );
              })}
            </ul>
            <a
              href={site.external.erp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-lg px-3 py-3 text-base font-semibold text-foreground"
            >
              ERP
            </a>
            <div className="mt-6 space-y-3">
              <Link
                to="/courses"
                className="flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                Explore Programs
              </Link>
              <Link
                to="/contact"
                className="flex w-full items-center justify-center rounded-full border border-border px-4 py-3 text-sm font-semibold text-foreground"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
