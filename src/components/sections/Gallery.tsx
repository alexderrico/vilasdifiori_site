"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { siteContent } from "@/content";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const { gallery } = siteContent;

function GalleryModal({
  items,
  initialIndex,
  onClose,
}: {
  items: typeof gallery.items;
  initialIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);
  const [prevImage, setPrevImage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState<Set<number>>(new Set([initialIndex]));
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    setIsOpen(true);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    const preload = [current - 1, current + 1]
      .map((i) => (i < 0 ? items.length - 1 : i >= items.length ? 0 : i))
      .filter((i) => !loaded.has(i));

    preload.forEach((i) => {
      const img = new window.Image();
      img.onload = () => setLoaded((prev) => new Set(prev).add(i));
      img.src = items[i].image;
    });
  }, [current, items, loaded]);

  const handleClose = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(false);
    timeoutRef.current = setTimeout(onClose, 300);
  };

  const goTo = (nextIndex: number) => {
    setPrevImage(items[current].image);
    setCurrent(nextIndex);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPrevImage(null), 300);
  };

  const prev = () => goTo(current === 0 ? items.length - 1 : current - 1);
  const next = () => goTo(current === items.length - 1 ? 0 : current + 1);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <button
        onClick={handleClose}
        className={`absolute top-6 right-6 text-white/70 hover:text-white transition-all duration-300 z-20 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
        aria-label="Fechar"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className={`relative w-full max-w-4xl mx-4 max-h-[85dvh] rounded-2xl overflow-hidden shadow-2xl transition-all duration-400 ease-out will-change-transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[50vh] sm:h-[65vh] md:h-[75vh] lg:h-[80vh] max-h-[80dvh]">
          {prevImage && (
            <Image
              src={prevImage}
              alt=""
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 768px) 100vw, 75vw"
              aria-hidden
            />
          )}

          <Image
            key={current}
            src={items[current].image}
            alt={items[current].title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
          <h3 className="text-sm sm:text-lg font-bold tracking-wide uppercase">{items[current].title}</h3>
          <p className="text-xs sm:text-sm text-white/60 mt-0.5 sm:mt-1">{items[current].description}</p>
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}
        aria-label="Anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
        aria-label="Próximo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 transition-all duration-500 delay-200 ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); goTo(i); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  return (
    <section id="galeria" className="bg-cream py-14 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-8 lg:gap-10 items-start">
          <div className="lg:sticky lg:top-24">
            <ScrollReveal direction="left">
              <SectionLabel>{gallery.label}</SectionLabel>
              <SectionHeading className="mt-3">
                <span className="font-cursive italic text-amber font-normal">Viva</span> cada momento.
              </SectionHeading>
              <p className="mt-3 text-brown-medium/70 leading-relaxed max-w-sm text-[14px]">
                {gallery.description}
              </p>
              <button
                onClick={() => openModal(0)}
                className="mt-6 inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] bg-amber text-white hover:bg-amber-light shadow-lg shadow-amber/20 hover:shadow-xl hover:shadow-amber/30"
              >
                {gallery.cta.label}
              </button>
            </ScrollReveal>
          </div>

          <div className="relative">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {gallery.items.slice(0, 4).map((item, i) => (
                <ScrollReveal key={i} delay={i * 120} direction="up">
                  <div
                    className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                    onClick={() => openModal(i)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform transition-all duration-500 group-hover:translate-y-[-4px]">
                      <h3 className="text-sm font-bold tracking-wide uppercase">{item.title}</h3>
                      <p className="text-xs text-white/60 mt-1.5 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <GalleryModal
          items={gallery.items}
          initialIndex={modalIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}
