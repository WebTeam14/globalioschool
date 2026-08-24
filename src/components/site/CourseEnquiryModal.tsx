import { useState } from "react";
import { X, CheckCircle2, BookOpen, Send, Loader2, MessageSquare, Phone, Mail, User, Sparkles, Clock, Check } from "lucide-react";
import { site } from "@/data/site";
import { sendEnquiryEmail } from "@/lib/emailService";

export interface CourseData {
  id: string;
  domain: string;
  category: string;
  title: string;
  description: string;
}

interface CourseEnquiryModalProps {
  course: CourseData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CourseEnquiryModal({ course, isOpen, onClose }: CourseEnquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [learnerType, setLearnerType] = useState("College Student / Graduate");
  const [learningMode, setLearningMode] = useState("Online Live Interactive");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [enquiryId, setEnquiryId] = useState("");

  if (!isOpen || !course) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = "GIS-CRS-" + Math.floor(100000 + Math.random() * 900000);
    setEnquiryId(generatedId);

    try {
      await sendEnquiryEmail({
        enquiryType: "Course Enquiry",
        subject: `[Course Enquiry] ${course.title} - ${fullName} (Ref: ${generatedId})`,
        senderName: fullName,
        senderEmail: email,
        senderPhone: phone,
        referenceId: generatedId,
        fields: {
          "Interested Program": course.title,
          "Program Category": course.category,
          "Domain": domainLabels[course.domain] || course.domain,
          "Current Background": learnerType,
          "Preferred Batch Mode": learningMode,
          "Questions / Notes": message || "None provided",
        },
      });
    } catch (err) {
      console.error("Course enquiry email dispatch failed:", err);
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

  const domainLabels: Record<string, string> = {
    ai: "Artificial Intelligence",
    iot: "Internet of Things",
    cyber: "Cybersecurity",
    sap: "SAP Enterprise",
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Global IoT School, I would like more information and syllabus details for "${course.title}".`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-200 sm:p-7">
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
              Enquiry Reference: {enquiryId}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
              Course Enquiry Received!
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Thank you, <strong>{fullName}</strong>! Our academic counselors for{" "}
              <strong className="text-primary">{course.title}</strong> will share the complete curriculum, batch schedules, and fee details with you shortly.
            </p>

            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/917738737922?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-[1.02]"
              >
                <MessageSquare className="size-4" />
                Connect Instantly on WhatsApp
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BookOpen className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Course Enquiry &amp; Syllabus Request
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-orange/15 px-2 py-0.5 text-[10px] font-semibold text-brand-orange">
                    <Sparkles className="size-3" /> Live
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Get full brochure, live project list &amp; batch schedule
                </p>
              </div>
            </div>

            {/* Course Summary Box */}
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded bg-accent/20 px-2 py-0.5 text-[10px] font-semibold text-accent">
                  {domainLabels[course.domain] || course.category}
                </span>
                <span className="text-[11px] font-medium text-muted-foreground">
                  Certification Program
                </span>
              </div>
              <h4 className="mt-1 font-display text-sm font-bold text-foreground sm:text-base">
                {course.title}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                {course.description}
              </p>
            </div>

            {/* Enquiry Form */}
            <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-foreground">
                    Full Name <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Priyanshu Mehta"
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
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
                    placeholder="priyanshu@example.com"
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-foreground">
                    Phone / WhatsApp Number <span className="text-brand-orange">*</span>
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
                <div>
                  <label className="block text-xs font-semibold text-foreground">
                    Current Background
                  </label>
                  <select
                    value={learnerType}
                    onChange={(e) => setLearnerType(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option value="College Student / Graduate">College Student / Graduate</option>
                    <option value="Working IT Professional">Working IT Professional</option>
                    <option value="Non-IT / Career Switcher">Non-IT / Career Switcher</option>
                    <option value="Corporate Team Batch">Corporate Team Batch</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground">
                  Preferred Batch Mode
                </label>
                <div className="mt-1.5 grid grid-cols-2 gap-2 text-xs">
                  {["Online Live Interactive", "Weekend Fast-Track", "Classroom (Mumbai)", "Self-Paced with Mentor"].map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setLearningMode(mode)}
                      className={`flex items-center justify-between rounded-lg border p-2 text-left font-medium transition-all ${
                        learningMode === mode
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-background text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <span>{mode}</span>
                      {learningMode === mode && <Check className="size-3.5" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground">
                  Questions / Specific Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about placement assistance, installment fees, prerequisite topics..."
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary resize-none"
                />
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-3">
                <a
                  href={`https://wa.me/917738737922?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
                >
                  <MessageSquare className="size-3.5" />
                  Ask on WhatsApp
                </a>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-xl border border-border px-3.5 py-2 text-xs font-semibold text-foreground hover:bg-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-md hover:bg-primary/90 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-3.5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="size-3.5" />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
