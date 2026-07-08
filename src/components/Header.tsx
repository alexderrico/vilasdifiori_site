"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteContent } from "@/content";
import WhatsAppIcon from "./ui/WhatsAppIcon";

const { nav, whatsapp } = siteContent;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-brown-dark/97 backdrop-blur-md shadow-2xl shadow-black/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="Vilas Di Fiori Residence Club"
              width={360}
              height={126}
              className="h-24 sm:h-36 lg:h-48 w-auto"
              priority
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-white/70 hover:text-white text-sm font-medium tracking-wide px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-whatsapp/25 hover:shadow-xl hover:shadow-whatsapp/30 hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5" />
            {whatsapp.ctaText}
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-brown-dark/98 backdrop-blur-md border-t border-white/10 px-6 py-4">
          <nav className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/70 hover:text-white hover:bg-white/5 text-base font-medium tracking-wide py-3 px-4 rounded-xl transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white px-5 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 mt-3 shadow-lg shadow-whatsapp/25"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {whatsapp.ctaText}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
