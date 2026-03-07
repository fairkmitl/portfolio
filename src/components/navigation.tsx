"use client";

import { useState, useEffect } from "react";
import { siteContent } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-gray-100 bg-white/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-gray-900"
        >
          {siteContent.personal.name.split(" ")[0]}
          <span className="text-gray-400">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {siteContent.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-8 w-8 items-center justify-center md:hidden"
          aria-label="Toggle navigation"
        >
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-px w-5 bg-gray-900 transition-all duration-200",
                mobileOpen && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-gray-900 transition-all duration-200",
                mobileOpen && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-gray-100 bg-white/95 backdrop-blur-lg md:hidden">
          <ul className="mx-auto max-w-4xl space-y-1 px-6 pb-6">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block py-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
