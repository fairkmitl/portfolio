interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base text-gray-500">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-12 bg-gray-900" />
    </div>
  );
}
