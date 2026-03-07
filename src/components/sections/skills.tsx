import { siteContent } from "@/data/site-content";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import type { SkillCategory } from "@/data/types";

function SkillGroup({ group }: { group: SkillCategory }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-gray-900">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Technical Competencies"
        subtitle="Technologies & practices"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.skills.map((group, i) => (
          <SkillGroup key={i} group={group} />
        ))}
      </div>
    </Section>
  );
}
