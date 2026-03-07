import { siteContent } from "@/data/site-content";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Awards() {
  return (
    <Section id="awards">
      <SectionHeading title="Honors & Awards" />

      <div className="space-y-6">
        {siteContent.awards.map((award, i) => (
          <div
            key={i}
            className="rounded-lg border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/40 p-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold text-gray-900">
                {award.title}
              </h3>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">{award.year}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
