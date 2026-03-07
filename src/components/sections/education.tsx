import { siteContent } from "@/data/site-content";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <Section id="education" className="bg-gray-50/50">
      <SectionHeading title="Education" />

      <div className="space-y-10">
        {siteContent.education.map((edu, i) => (
          <div key={i}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {edu.degree}
              </h3>
              <span className="text-sm text-gray-400 whitespace-nowrap">
                {edu.period}
              </span>
            </div>

            <p className="mt-1 text-sm font-medium text-gray-500">
              {edu.institution}
            </p>

            {edu.details && (
              <ul className="mt-3 space-y-1.5">
                {edu.details.map((detail, j) => (
                  <li key={j} className="flex gap-3 text-sm text-gray-600">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-300" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
