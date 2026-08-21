import { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  Send,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { jobOpenings, type JobOpening } from "@/data/site";
import { JobApplicationModal } from "@/components/site/JobApplicationModal";

export function HeroJobOpenings() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [applyingJob, setApplyingJob] = useState<JobOpening | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const departments = ["All", "AI", "IoT", "Cyber", "SAP"];

  const filteredJobs = jobOpenings.filter((job) => {
    if (selectedDept === "All") return true;
    if (selectedDept === "AI") return job.department.includes("Artificial Intelligence");
    if (selectedDept === "IoT") return job.department.includes("Internet of Things");
    if (selectedDept === "Cyber") return job.department.includes("Cybersecurity");
    if (selectedDept === "SAP") return job.department.includes("SAP");
    return true;
  });

  const handleOpenApply = (job: JobOpening) => {
    setApplyingJob(job);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="relative flex flex-col rounded-2xl border border-primary/25 bg-card/95 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-primary/40 sm:p-5">
        {/* Header bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/70 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Briefcase className="size-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-sm font-bold text-foreground sm:text-base">
                  Career Openings
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  Admin Portal
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Posted &amp; verified by GIS Admin
              </p>
            </div>
          </div>

          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
            {filteredJobs.length} Active {filteredJobs.length === 1 ? "Role" : "Roles"}
          </span>
        </div>

        {/* Department Filter Chips */}
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {departments.map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setSelectedDept(dept)}
              className={`rounded-md px-2 py-0.5 text-[11px] font-medium transition-all ${
                selectedDept === dept
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job list items */}
        <div className="mt-3 flex max-h-[290px] flex-col gap-2.5 overflow-y-auto pr-1">
          {filteredJobs.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div
                key={job.id}
                className="group rounded-xl border border-border/80 bg-background/80 p-3 transition-all hover:border-primary/30 hover:bg-background"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="rounded bg-accent/15 px-1.5 py-0.5 text-[10px] font-semibold text-accent">
                        {job.department}
                      </span>
                      {job.tag && (
                        <span className="rounded bg-brand-orange/15 px-1.5 py-0.5 text-[10px] font-semibold text-brand-orange">
                          {job.tag}
                        </span>
                      )}
                    </div>
                    <h4 className="mt-1 font-display text-xs font-bold text-foreground group-hover:text-primary transition-colors sm:text-sm">
                      {job.title}
                    </h4>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenApply(job)}
                    className="inline-flex shrink-0 items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-sm transition-transform hover:scale-105 active:scale-95"
                  >
                    Apply
                    <Send className="size-3" />
                  </button>
                </div>

                {/* Meta details */}
                <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3 text-primary/70" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3 text-primary/70" />
                    {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Briefcase className="size-3 text-primary/70" />
                    {job.experience}
                  </span>
                </div>

                {/* Expand details button */}
                <div className="mt-2 flex items-center justify-between border-t border-border/50 pt-2 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  >
                    {isExpanded ? "Hide Overview" : "View Skills & Details"}
                    {isExpanded ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
                  </button>
                  <span className="text-[10px] text-muted-foreground">
                    Posted {job.postedDate}
                  </span>
                </div>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="mt-2 rounded-lg bg-secondary/40 p-2.5 text-xs animate-in fade-in duration-150">
                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-semibold text-foreground">Skills:</span>
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded border border-border bg-card px-1.5 py-0.5 text-[10px] font-medium text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-border/40 flex justify-end">
                      <button
                        type="button"
                        onClick={() => handleOpenApply(job)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                      >
                        Apply for this role &rarr;
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer link to admin career desk */}
        <div className="mt-3 flex items-center justify-between border-t border-border/70 pt-2.5 text-[11px] text-muted-foreground">
          <span>Direct: <a href="mailto:admin@globaliotschool.com" className="font-semibold text-primary hover:underline">admin@globaliotschool.com</a></span>
          <button
            type="button"
            onClick={() => handleOpenApply(jobOpenings[0]!)}
            className="inline-flex items-center gap-1 font-semibold text-brand-orange hover:underline"
          >
            Submit General CV
            <ExternalLink className="size-3" />
          </button>
        </div>
      </div>

      {/* Standard Realtime Application Modal */}
      <JobApplicationModal
        job={applyingJob}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
