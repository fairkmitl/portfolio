import { siteContent } from "@/data/site-content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>
            &copy; {currentYear} {siteContent.personal.name}
          </p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
