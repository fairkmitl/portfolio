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
            className="rounded-lg border border-gray-100 bg-white p-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold text-gray-900">
                {award.title}
              </h3>
              <span className="text-sm text-gray-400">{award.year}</span>
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
