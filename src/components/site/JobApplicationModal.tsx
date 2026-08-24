import { useState } from "react";
import { X, CheckCircle2, Briefcase, Sparkles, Send, Loader2, Phone, Mail, MapPin, GraduationCap } from "lucide-react";
import { type JobOpening, jobOpenings } from "@/data/site";
import { sendEnquiryEmail } from "@/lib/emailService";

interface JobApplicationModalProps {
  job: JobOpening | null;
  isOpen: boolean;
  onClose: () => void;
}

export function JobApplicationModal({ job, isOpen, onClose }: JobApplicationModalProps) {
  const [selectedJobId, setSelectedJobId] = useState<string>(job?.id || jobOpenings[0]?.id || "");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("1-3 Years");
  const [qualification, setQualification] = useState("B.Tech / B.E");
  const [city, setCity] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  if (!isOpen) return null;

  const currentJob = jobOpenings.find((j) => j.id === (job ? job.id : selectedJobId)) || job || jobOpenings[0]!;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = "GIS-APP-" + Math.floor(100000 + Math.random() * 900000);
    setApplicationId(generatedId);

    try {
      await sendEnquiryEmail({
        enquiryType: "Job Application",
        subject: `[Job Application] ${currentJob.title} (${currentJob.department}) - ${fullName} [Ref: ${generatedId}]`,
        senderName: fullName,
        senderEmail: email,
        senderPhone: phone,
        referenceId: generatedId,
        fields: {
          "Applied Position": currentJob.title,
          "Department": currentJob.department,
          "Job Location": currentJob.location,
          "Candidate Location / City": city,
          "Total Experience": experience,
          "Highest Qualification": qualification,
          "Resume / Portfolio Link": portfolio || "Not provided",
          "Applicant Note": coverNote || "None provided",
        },
      });
    } catch (err) {
      console.error("Job application email dispatch failed:", err);
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
    setCity("");
    setPortfolio("");
    setCoverNote("");
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
              Application ID: {applicationId}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
              Application Successfully Submitted!
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Thank you, <strong>{fullName}</strong>. Your profile for{" "}
              <strong className="text-primary">{currentJob.title}</strong> has been logged in our HR recruitment database.
            </p>
            <div className="mt-5 rounded-xl border border-border bg-secondary/40 p-4 text-left text-xs text-muted-foreground">
              <p className="font-semibold text-foreground">What happens next?</p>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Our academic and recruitment panel will review your resume and credentials.</li>
                <li>Shortlisted candidates will receive an interview call / email within 2–3 business days.</li>
                <li>For urgent queries, email <a href="mailto:careers@globaliotschool.com" className="text-primary underline">careers@globaliotschool.com</a>.</li>
              </ul>
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
            <div className="flex items-center gap-2.5 border-b border-border pb-4">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Briefcase className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Job Application Form
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-orange/15 px-2 py-0.5 text-[10px] font-semibold text-brand-orange">
                    <Sparkles className="size-3" /> Real-time
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Apply for verified positions at Global IoT School
                </p>
              </div>
            </div>

            {/* Position Information Callout */}
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-medium text-primary">Applying for Position:</span>
                  <h4 className="font-display text-sm font-bold text-foreground sm:text-base">
                    {currentJob.title}
                  </h4>
                </div>
                <span className="rounded-md bg-accent/20 px-2 py-0.5 text-xs font-semibold text-accent">
                  {currentJob.department}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3 text-primary" /> {currentJob.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Briefcase className="size-3 text-primary" /> {currentJob.experience}
                </span>
              </div>
            </div>

            {/* Application Form */}
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
                    placeholder="e.g. Aditi Sharma"
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
                    placeholder="aditi@example.com"
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-foreground">
                    Phone / Mobile Number <span className="text-brand-orange">*</span>
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
                    Current Location / City <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Mumbai / Navi Mumbai / Pune"
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-foreground">
                    Relevant Experience
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option value="Fresher / 0-1 Year">Fresher / 0–1 Year</option>
                    <option value="1-3 Years">1–3 Years</option>
                    <option value="3-5 Years">3–5 Years</option>
                    <option value="5-8 Years">5–8 Years</option>
                    <option value="8+ Years">8+ Years Senior/Lead</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground">
                    Highest Qualification
                  </label>
                  <select
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option value="B.Tech / B.E / B.Sc (IT/CS)">B.Tech / B.E / B.Sc (IT/CS)</option>
                    <option value="M.Tech / M.Sc / MCA">M.Tech / M.Sc / MCA</option>
                    <option value="MBA / Post Graduate">MBA / Post Graduate</option>
                    <option value="Ph.D / Research Scholar">Ph.D / Research Scholar</option>
                    <option value="Other Degree">Other Specialization</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground">
                  LinkedIn Profile / Portfolio / Resume Link
                </label>
                <input
                  type="url"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  placeholder="https://linkedin.com/in/yourprofile or Google Drive resume link"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground">
                  Brief Note / Why are you a good fit?
                </label>
                <textarea
                  rows={2}
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  placeholder="Briefly highlight your key technical skills, certifications, and teaching/industry experience..."
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                />
              </div>

              <div className="mt-5 flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-3.5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="size-3.5" />
                      Submit Application
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
