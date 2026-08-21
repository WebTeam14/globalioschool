import { useState } from "react";
import { X, CheckCircle2, Building2, Send, Loader2, Phone, Mail, Sparkles, Check, FileText } from "lucide-react";
import { site } from "@/data/site";

export interface ConsultancyService {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
}

interface ConsultancyEnquiryModalProps {
  service: ConsultancyService | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultancyEnquiryModal({ service, isOpen, onClose }: ConsultancyEnquiryModalProps) {
  const [institutionName, setInstitutionName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [designation, setDesignation] = useState("Principal / Dean");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [timeline, setTimeline] = useState("Immediate (Within 1 Month)");
  const [requirements, setRequirements] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [consultancyId, setConsultancyId] = useState("");

  if (!isOpen || !service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate real-time institutional advisory ticket generation
    setTimeout(() => {
      const id = "GIS-CNS-" + Math.floor(100000 + Math.random() * 900000);
      setConsultancyId(id);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setInstitutionName("");
    setContactPerson("");
    setEmail("");
    setPhone("");
    setLocation("");
    setRequirements("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-200 sm:p-7">
        <button
          type="button"
          onClick={handleReset}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-8" />
            </div>
            <span className="mt-3 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Advisory Case ID: {consultancyId}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
              Consultancy Request Logged!
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Thank you, <strong>{contactPerson}</strong> ({institutionName}). Our Strategic Advisory Cell for{" "}
              <strong className="text-primary">{service.title}</strong> will review your institutional details and schedule a strategic consultation.
            </p>
            <div className="mt-4 rounded-xl border border-border bg-secondary/40 p-3 text-left text-xs text-muted-foreground">
              <p className="font-semibold text-foreground">Direct Institutional Desk:</p>
              <p className="mt-1">
                Call: <a href="tel:+918082060006" className="text-primary font-semibold">+91 8082060006</a> / <a href="tel:+917738860387" className="text-primary font-semibold">+91 7738860387</a>
              </p>
              <p>Email: <a href="mailto:admin@globaliotschool.com" className="text-primary underline">admin@globaliotschool.com</a></p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="mt-6 inline-flex w-full justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90"
            >
              Done &amp; Close
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Building2 className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    College Consultancy Advisory Form
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-orange/15 px-2 py-0.5 text-[10px] font-semibold text-brand-orange">
                    <Sparkles className="size-3" /> Institutional
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Strategic guidance for universities, autonomous colleges &amp; institutions
                </p>
              </div>
            </div>

            {/* Service Box */}
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-orange">
                {service.subtitle}
              </span>
              <h4 className="font-display text-base font-bold text-foreground">
                {service.title}
              </h4>
              {service.description && (
                <p className="mt-1 text-xs text-muted-foreground">
                  {service.description}
                </p>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-foreground">
                    College / University Name <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                    placeholder="e.g. St. Xavier's Institute of Tech"
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground">
                    Representative Name <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g. Dr. Rajesh Kulkarni"
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-foreground">
                    Designation / Role
                  </label>
                  <select
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option value="Principal / Director">Principal / Director</option>
                    <option value="Vice Chancellor / Dean">Vice Chancellor / Dean</option>
                    <option value="Trustee / Management Board">Trustee / Management Board</option>
                    <option value="HOD / Academic Coordinator">HOD / Academic Coordinator</option>
                    <option value="NAAC / IQAC Coordinator">NAAC / IQAC Coordinator</option>
                    <option value="Other Representative">Other Official</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground">
                    Institution Location / State <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, State (e.g. Mumbai, Maharashtra)"
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-foreground">
                    Official Email Address <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="principal@college.edu.in"
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground">
                    Official Contact Number <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground">
                  Expected Timeline / Implementation
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                >
                  <option value="Immediate (Within 1 Month)">Immediate (Within 1 Month)</option>
                  <option value="Upcoming Academic Session (1-3 Months)">Upcoming Academic Session (1–3 Months)</option>
                  <option value="Long Term Strategic (3-6 Months)">Long Term Strategic (3–6 Months)</option>
                  <option value="General Exploration & Discussion">General Exploration &amp; Discussion</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground">
                  Scope &amp; Institutional Objectives (Optional)
                </label>
                <textarea
                  rows={2}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Outline key requirements, current accreditation status, or specific DPR / Autonomous goals..."
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary resize-none"
                />
              </div>

              <div className="mt-5 flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-md hover:bg-primary/90 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-3.5 animate-spin" />
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <Send className="size-3.5" />
                      Submit Consultation Request
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
