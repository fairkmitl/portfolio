import { siteContent } from "@/data/site-content";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  const { personal } = siteContent;

  return (
    <Section id="contact" className="bg-gray-50/50">
      <SectionHeading
        title="Contact"
        subtitle="Let's connect"
      />

      <div className="grid gap-6 sm:grid-cols-3">
        <a
          href={`mailto:${personal.email}`}
          className="group rounded-lg border border-gray-100 bg-white p-6 transition-colors hover:border-gray-200"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 group-hover:text-gray-600">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase">Email</p>
          <p className="mt-1 text-sm text-gray-700">{personal.email}</p>
        </a>

        <a
          href={personal.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-gray-100 bg-white p-6 transition-colors hover:border-gray-200"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 group-hover:text-gray-600">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase">LinkedIn</p>
          <p className="mt-1 text-sm text-gray-700">{personal.linkedIn}</p>
        </a>

        <div className="rounded-lg border border-gray-100 bg-white p-6">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase">Location</p>
          <p className="mt-1 text-sm text-gray-700">{personal.location}</p>
        </div>
      </div>
    </Section>
  );
}
