import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Globe, MessageCircle, Send, Loader2, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";
import { sendEnquiryEmail } from "@/lib/emailService";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Global IoT School — Mumbai & Navi Mumbai" },
      {
        name: "description",
        content:
          "Reach Global IoT School at +91 8082060006 or admission@globaliotschool.com. Head office in Andheri West, Mumbai; corporate office in CBD Belapur, Navi Mumbai.",
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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Course Enquiry");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = "GIS-GEN-" + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(generatedId);

    try {
      await sendEnquiryEmail({
        enquiryType: "Contact General Enquiry",
        subject: `[Website Enquiry] ${category} - ${fullName} [Ref: ${generatedId}]`,
        senderName: fullName,
        senderEmail: email,
        senderPhone: phone,
        referenceId: generatedId,
        fields: {
          "Enquiry Category": category,
          "Message / Query": message || "None provided",
        },
      });
    } catch (err) {
      console.error("General contact enquiry email failed:", err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <main>
      <section className="surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-50" aria-hidden />
        <div className="container-gis relative py-12 md:py-16">
          <Reveal>
            <p className="eyebrow text-cyan">Contact Desk</p>
            <h1 className="mt-4 font-display text-3xl font-bold md:text-5xl">
              Let&apos;s talk about your future skills &amp; collaborations
            </h1>
            <p className="mt-4 max-w-2xl text-base text-navy-foreground/75 md:text-lg">
              Our academic &amp; advisory team is available for course admissions, institutional collaborations, corporate training, and career queries.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-gis grid gap-8 lg:grid-cols-12">
          {/* Contact Details & Map */}
          <Reveal className="space-y-6 lg:col-span-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
              <h2 className="font-display text-xl font-bold text-foreground">
                Administrative &amp; Campus Locations
              </h2>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <strong className="block text-foreground">Head Office (Mumbai):</strong>
                    {site.headOffice}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 size-5 shrink-0 text-brand-orange" />
                  <div>
                    <strong className="block text-foreground">Corporate Office (Navi Mumbai):</strong>
                    {site.corporateOffice}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <Phone className="size-5 text-primary" />
                <h3 className="mt-3 font-display text-base font-bold text-foreground">Call Desks</h3>
                {site.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="mt-1.5 block text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {p}
                  </a>
                ))}
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <Mail className="size-5 text-brand-orange" />
                <h3 className="mt-3 font-display text-base font-bold text-foreground">Official Email</h3>
                <a
                  href={`mailto:admission@globaliotschool.com`}
                  className="mt-1.5 block text-xs font-semibold text-primary hover:underline break-all"
                >
                  admission@globaliotschool.com
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-0.5 block text-xs text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Global IoT School location map"
                src="https://www.google.com/maps?q=Crystal+Plaza+Andheri+West+Mumbai&output=embed"
                loading="lazy"
                className="h-[260px] w-full border-0"
              />
            </div>
          </Reveal>

          {/* Interactive Enquiry Form */}
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
              <div className="flex items-center gap-2.5 border-b border-border pb-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Send className="size-5" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground sm:text-xl">
                    Send Us an Direct Enquiry
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Sent directly to <span className="font-semibold text-primary">admission@globaliotschool.com</span>
                  </p>
                </div>
              </div>

              {isSuccess ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <span className="mt-3 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Enquiry Reference: {referenceId}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Thank you, <strong>{fullName}</strong>. Your enquiry has been routed to our administration team at{" "}
                    <strong>admission@globaliotschool.com</strong>. We will get back to you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 inline-flex rounded-xl bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-md hover:bg-primary/90"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-foreground">
                        Your Full Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rahul Patil"
                        className="mt-1 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground">
                        Email Address <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@example.com"
                        className="mt-1 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-foreground">
                        Contact / WhatsApp Number <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="mt-1 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground">
                        Enquiry Type
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      >
                        <option value="Course Enquiry">Course Enquiry / Admissions</option>
                        <option value="College Consultancy">College &amp; University Consultancy</option>
                        <option value="Placement & Corporate">Placement &amp; Corporate Training</option>
                        <option value="Career & Faculty">Career / Faculty Opening</option>
                        <option value="General Query">General Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground">
                      Message / Requirement Details <span className="text-brand-orange">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please let us know your specific queries, required programs, batch timings, or institutional requirements..."
                      className="mt-1 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Sending Enquiry to admission@globaliotschool.com...
                        </>
                      ) : (
                        <>
                          <Send className="size-4" />
                          Submit Enquiry Directly
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4 text-xs text-muted-foreground">
                    <a
                      href={site.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
                    >
                      <MessageCircle className="size-4" />
                      Chat on WhatsApp (+91 77387 37922)
                    </a>
                    <span>Direct: <a href="mailto:admission@globaliotschool.com" className="font-semibold text-primary hover:underline">admission@globaliotschool.com</a></span>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

