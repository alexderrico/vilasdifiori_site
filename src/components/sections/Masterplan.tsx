"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { siteContent } from "@/content";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const { masterplan } = siteContent;

function MasterplanModal({ onClose }: { onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    setIsOpen(true);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleClose = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(false);
    timeoutRef.current = setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <button
        onClick={handleClose}
        className={`absolute top-6 right-6 text-white/70 hover:text-white transition-all duration-300 z-30 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
        aria-label="Fechar"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className={`relative w-full max-w-5xl mx-4 transition-all duration-500 ease-out ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={masterplan.image}
            alt="Projeto Vilas Di Fiori"
            width={1200}
            height={674}
            priority
            className="w-full h-auto"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
        </div>
      </div>
    </div>
  );
}

export default function Masterplan() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="masterplan" className="bg-brown-dark py-14 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-6 lg:gap-10 items-center">
          <div className="text-white">
            <ScrollReveal direction="left">
              <SectionLabel light>{masterplan.label}</SectionLabel>
              <SectionHeading className="mt-3 text-white">
                Seu <span className="font-cursive italic text-amber font-normal">futuro</span> anotado em cada detalhe.
              </SectionHeading>
              <p className="mt-3 text-white/60 leading-relaxed text-[14px]">
                {masterplan.description}
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                {masterplan.cta.label}
              </button>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
              <Image
                src={masterplan.image}
                alt="Projeto Vilas Di Fiori"
                width={1200}
                height={674}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <div className="text-white">
            <ScrollReveal direction="right" delay={300}>
              <div className="space-y-2">
                {masterplan.legend.map((item) => (
                  <div key={item.num} className="flex items-center gap-2 group cursor-default">
                    <div className="w-7 h-7 bg-amber/20 border border-amber/40 rounded-full flex items-center justify-center text-amber text-xs font-bold shrink-0 transition-all duration-300 group-hover:bg-amber group-hover:text-brown-dark group-hover:scale-110">
                      {item.num}
                    </div>
                    <span className="text-sm text-white/70 transition-colors duration-300 group-hover:text-white">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {modalOpen && <MasterplanModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
