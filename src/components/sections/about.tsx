import { siteContent } from "@/data/site-content";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  const { about } = siteContent;

  return (
    <Section id="about">
      <SectionHeading title="About" subtitle="Background & approach" />

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Summary
          </h3>
          <p className="text-base leading-relaxed text-gray-600">
            {about.summary}
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Engineering Philosophy
          </h3>
          <ul className="space-y-3">
            {about.philosophy.map((item, i) => (
              <li key={i} className="flex gap-3 text-base text-gray-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
