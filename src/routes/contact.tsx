import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Global IoT School — Mumbai & Navi Mumbai" },
      {
        name: "description",
        content:
          "Reach Global IoT School at +91 8082060006 or admin@globaliotschool.com. Head office in Andheri West, Mumbai; corporate office in CBD Belapur, Navi Mumbai.",
      },
      { property: "og:title", content: "Contact Global IoT School" },
      {
        property: "og:description",
        content: "Phone, email and office addresses for Global IoT School.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <section className="surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-50" aria-hidden />
        <div className="container-gis relative py-20 md:py-28">
          <Reveal>
            <p className="eyebrow text-cyan">Contact</p>
            <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Let&apos;s talk about your future skills
            </h1>
            <p className="mt-6 max-w-2xl text-navy-foreground/75">
              Our team is available for program enquiries, institutional collaborations
              and corporate training.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-gis grid gap-8 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <MapPin className="size-5 text-cyan" aria-hidden />
              <h2 className="mt-4 font-display text-lg font-semibold">Head Office</h2>
              <p className="mt-2 text-sm text-muted-foreground">{site.headOffice}</p>
              <h2 className="mt-6 font-display text-lg font-semibold">
                Corporate Office
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {site.corporateOffice}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <Phone className="size-5 text-cyan" aria-hidden />
                <h2 className="mt-4 font-display text-lg font-semibold">Phone</h2>
                {site.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="mt-2 block text-sm text-muted-foreground hover:text-primary"
                  >
                    {p}
                  </a>
                ))}
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <Mail className="size-5 text-cyan" aria-hidden />
                <h2 className="mt-4 font-display text-lg font-semibold">Email</h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block break-all text-sm text-muted-foreground hover:text-primary"
                >
                  {site.email}
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <Globe className="size-5 text-cyan" aria-hidden />
              <h2 className="mt-4 font-display text-lg font-semibold">Website</h2>
              <a
                href="https://www.globaliotschool.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm text-muted-foreground hover:text-primary"
              >
                {site.website}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Global IoT School location map"
                src="https://www.google.com/maps?q=Crystal+Plaza+Andheri+West+Mumbai&output=embed"
                loading="lazy"
                className="h-[380px] w-full border-0"
              />
            </div>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="size-4" aria-hidden />
              Chat with us on WhatsApp
            </a>
            <a
              href={site.external.register}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md border border-border px-6 py-4 text-sm font-semibold text-foreground"
            >
              Register for a program
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
