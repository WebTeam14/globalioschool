import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, Phone, MapPin, Globe, CreditCard } from "lucide-react";
import { site, navItems, domains } from "@/data/site";

export function Footer() {
  return (
    <footer className="surface-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-lines-dark opacity-50" aria-hidden />
      <div className="container-gis relative py-10">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={site.logo}
                alt="Global IoT School logo"
                className="h-11 w-auto rounded bg-white/95 p-1"
                loading="lazy"
              />
              <span className="font-display text-lg font-semibold">Global IoT School</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              Global IoT School (GIS), established in 2017, is a Mumbai-based EdTech
              institution bridging the gap between academics and industry through
              skill-based certification programs in AI, IoT, Cybersecurity, and SAP.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-md border border-white/15 text-navy-foreground transition-colors hover:border-cyan hover:text-cyan"
              >
                <Linkedin className="size-4" aria-hidden />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-10 items-center justify-center rounded-md border border-white/15 text-navy-foreground transition-colors hover:border-cyan hover:text-cyan"
              >
                <Instagram className="size-4" aria-hidden />
              </a>
            </div>
            <a
              href="https://rzp.io/l/7j2TrkC"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-teal to-primary px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
            >
              <CreditCard className="size-3.5" aria-hidden />
              Pay via Razorpay
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-cyan">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-navy-foreground/75">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-cyan">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.external.erp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan"
                >
                  ERP
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-cyan">
              Courses
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-navy-foreground/75">
              {domains.map((d) => (
                <li key={d.id}>
                  <Link
                    to="/courses"
                    hash={d.id}
                    className="transition-colors hover:text-cyan"
                  >
                    {d.title}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.external.iotProjects}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan"
                >
                  IoT Projects
                </a>
              </li>
              <li>
                <a
                  href={site.external.tradeAnalytics}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan"
                >
                  Trade Analytics With AI
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-cyan">
              Contact Us
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-navy-foreground/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden />
                <span>
                  <strong className="font-semibold text-navy-foreground">Head Office:</strong>{" "}
                  {site.headOffice}
                  <br />
                  <strong className="font-semibold text-navy-foreground">
                    Corporate Office:
                  </strong>{" "}
                  {site.corporateOffice}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden />
                <a href="tel:+918082060006" className="hover:text-cyan">
                  {site.phones.join(" / ")}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden />
                <a href={`mailto:${site.email}`} className="hover:text-cyan">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Globe className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden />
                <a
                  href="https://www.globaliotschool.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan"
                >
                  {site.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Global IoT School. All rights reserved.</p>
          <p>Mumbai · Navi Mumbai · Global</p>
        </div>
      </div>
    </footer>
  );
}
