import { siteContent } from "@/data/site-content";

export function Hero() {
  const { personal } = siteContent;

  return (
    <section className="flex min-h-[100dvh] items-center">
      <div className="mx-auto max-w-4xl px-6 py-32 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-gray-400 uppercase">
            {personal.location}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            {personal.name}
          </h1>

          <p className="mt-3 text-lg font-medium text-gray-500 md:text-xl">
            {personal.title}
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-500">
            {siteContent.about.summary.split(".").slice(0, 2).join(".") + "."}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Download Resume
              <svg
                className="ml-2 h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
