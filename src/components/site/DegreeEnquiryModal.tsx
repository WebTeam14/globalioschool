import { useState } from "react";
import {
  X,
  CheckCircle2,
  GraduationCap,
  Clock,
  BookOpen,
  Briefcase,
  MapPin,
  Sparkles,
  Send,
  Loader2,
  Check,
  MessageSquare,
  Building2,
  Award,
} from "lucide-react";
import type { DegreeProgram } from "@/data/site";
import { sendEnquiryEmail } from "@/lib/emailService";

interface DegreeEnquiryModalProps {
  degree: DegreeProgram | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DegreeEnquiryModal({ degree, isOpen, onClose }: DegreeEnquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredCampus, setPreferredCampus] = useState("CBD Belapur Campus");
  const [academicBackground, setAcademicBackground] = useState("12th / HSC Science");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [enquiryId, setEnquiryId] = useState("");

  if (!isOpen || !degree) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = "GIS-DEG-" + Math.floor(100000 + Math.random() * 900000);
    setEnquiryId(generatedId);

    try {
      await sendEnquiryEmail({
        enquiryType: "Course Enquiry",
        subject: `[Degree Admission Enquiry] ${degree.title} - ${fullName} (Ref: ${generatedId})`,
        senderName: fullName,
        senderEmail: email,
        senderPhone: phone,
        referenceId: generatedId,
        fields: {
          "Program Category": "Industry Degree Program",
          "Degree Program": degree.title,
          "Degree Code": degree.code,
          "Preferred Campus": preferredCampus,
          "Current Academic Background": academicBackground,
          Duration: degree.duration,
          Eligibility: degree.eligibility,
          "Applicant Message / Queries":
            message || "Interested in admission counseling and syllabus copy.",
        },
      });
    } catch (err) {
      console.error("Degree enquiry email dispatch failed:", err);
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
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Global IoT School, I am interested in the "${degree.title}" degree program. Please share syllabus and admission details.`,
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="degree-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-navy/80 p-3 sm:p-5 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative my-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Top Decorative Gradient Line */}
        <div className="h-2 w-full bg-gradient-to-r from-primary via-accent to-brand-orange" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute right-4 top-5 z-20 grid size-9 place-items-center rounded-full bg-secondary/80 text-foreground/70 transition-colors hover:bg-primary hover:text-white"
          aria-label="Close dialog"
        >
          <X className="size-5" />
        </button>

        {isSuccess ? (
          <div className="p-8 text-center sm:p-12">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-10" />
            </div>

            <span className="mt-4 inline-block rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Enquiry Reference: {enquiryId}
            </span>

            <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Degree Enquiry Submitted Successfully!
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Thank you, <strong className="text-foreground">{fullName}</strong>! Our academic
              counselor for <strong className="text-primary">{degree.title}</strong> has received
              your admission inquiry. We will contact you at{" "}
              <strong className="text-foreground">{phone || email}</strong> with the full
              curriculum, eligibility assessment, and batch schedule.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`https://wa.me/917738737922?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02] sm:w-auto"
              >
                <MessageSquare className="size-4" />
                Connect on WhatsApp Instantly
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="w-full rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:w-auto"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="max-h-[88vh] overflow-y-auto p-5 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Left Column: Course Details */}
              <div className="flex flex-col space-y-6 lg:col-span-7">
                {/* Header Badge & Title */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                      <GraduationCap className="size-3.5" />
                      {degree.code}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
                      <Sparkles className="size-3" />
                      {degree.badge}
                    </span>
                    <span className="rounded-full bg-brand-orange/10 px-2.5 py-1 text-xs font-medium text-brand-orange">
                      Industry-Integrated
                    </span>
                  </div>

                  <h2
                    id="degree-modal-title"
                    className="mt-3 font-display text-2xl font-extrabold leading-tight text-foreground sm:text-3xl"
                  >
                    {degree.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-primary sm:text-base">
                    {degree.note}
                  </p>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 gap-3 rounded-2xl border border-border/80 bg-secondary/40 p-4 sm:grid-cols-2">
                  <div className="flex items-start gap-2.5">
                    <Clock className="mt-0.5 size-4 text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Duration</p>
                      <p className="text-xs sm:text-sm font-semibold text-foreground">
                        {degree.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Award className="mt-0.5 size-4 text-accent shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Eligibility</p>
                      <p className="text-xs sm:text-sm font-semibold text-foreground">
                        {degree.eligibility}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Building2 className="mt-0.5 size-4 text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Campus Training</p>
                      <p className="text-xs sm:text-sm font-semibold text-foreground">
                        CBD Belapur &amp; Kandivali West
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 size-4 text-brand-orange shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Assistance</p>
                      <p className="text-xs sm:text-sm font-semibold text-foreground">
                        100% Placement Cell Support
                      </p>
                    </div>
                  </div>
                </div>

                {/* Course Overview */}
                <div>
                  <h3 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                    <BookOpen className="size-4 text-primary" />
                    Program Overview &amp; Curriculum Focus
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {degree.overview}
                  </p>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                    <Sparkles className="size-4 text-accent" />
                    Key Practical Highlights
                  </h3>
                  <ul className="mt-2.5 space-y-2">
                    {degree.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85"
                      >
                        <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-3 stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career Opportunities */}
                <div>
                  <h3 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                    <Briefcase className="size-4 text-brand-orange" />
                    Target Job Roles &amp; Careers
                  </h3>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {degree.careerOpportunities.map((career, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-semibold text-foreground/90"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Admission Enquiry Form */}
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-b from-card to-secondary/30 p-5 shadow-sm lg:col-span-5">
                <div className="border-b border-border pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Apply / Enquire Now
                    </h3>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      Admissions Open
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Receive counseling, fees structure &amp; syllabus brochure
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-foreground">
                      Full Name <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-xs sm:text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <div>
                      <label className="block text-xs font-semibold text-foreground">
                        Mobile / WhatsApp <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-xs sm:text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground">
                        Email Address <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-xs sm:text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground">
                      Preferred Campus
                    </label>
                    <select
                      value={preferredCampus}
                      onChange={(e) => setPreferredCampus(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-xs sm:text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="CBD Belapur Campus">CBD Belapur Campus (Navi Mumbai)</option>
                      <option value="Kandivali West Campus">Kandivali West Campus (Mumbai)</option>
                      <option value="Either Campus / Open">Either Campus / Flexible</option>
                      <option value="Online / Hybrid Mode">Online / Hybrid Mode</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground">
                      Current Academic Status
                    </label>
                    <select
                      value={academicBackground}
                      onChange={(e) => setAcademicBackground(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-xs sm:text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="12th / HSC Science">
                        12th / HSC Science (PCM / PCB / IT)
                      </option>
                      <option value="12th / HSC Commerce">12th / HSC Commerce</option>
                      <option value="12th / HSC Arts">12th / HSC Arts</option>
                      <option value="Diploma in Engineering / IT">
                        Diploma in Engineering / IT
                      </option>
                      <option value="Undergraduate Student">
                        Currently in Undergraduate Degree
                      </option>
                      <option value="Graduate / Working Professional">
                        Graduate / Working Professional
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground">
                      Questions or Comments (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific questions regarding batch dates, fees, scholarships..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1 w-full resize-none rounded-xl border border-input bg-background px-3 py-2 text-xs sm:text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/95 hover:shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Submitting Enquiry...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Submit Degree Enquiry
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] text-muted-foreground">
                    By submitting, you agree to receive academic counseling updates from Global IoT
                    School.
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
