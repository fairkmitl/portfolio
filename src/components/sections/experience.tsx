import { siteContent } from "@/data/site-content";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { WorkExperience } from "@/data/types";

function ExperienceCard({ job }: { job: WorkExperience }) {
  return (
    <div className="relative border-l border-emerald-200 pl-8 pb-12 last:pb-0">
      <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-emerald-400 bg-white" />

      <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{job.company}</h3>
        <span className="text-sm text-gray-400 whitespace-nowrap">
          {job.period}
        </span>
      </div>

      <p className="text-sm font-medium text-gray-500">{job.role}</p>

      {job.note && (
        <p className="mt-1 text-sm italic text-gray-400">{job.note}</p>
      )}

      <ul className="mt-4 space-y-2">
        {job.highlights.map((highlight, i) => (
          <li key={i} className="flex gap-3 text-sm text-gray-600">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-300" />
            <span className="leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience" className="bg-gray-50/50">
      <SectionHeading
        title="Experience"
        subtitle="Professional career timeline"
      />

      <div className="ml-1">
        {siteContent.experience.map((job, i) => (
          <ExperienceCard key={i} job={job} />
        ))}
      </div>
    </Section>
  );
}
