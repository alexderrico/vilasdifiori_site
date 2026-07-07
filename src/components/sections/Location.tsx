import Image from "next/image";
import { siteContent } from "@/content";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const { location } = siteContent;

export default function Location() {
  return (
    <section id="localizacao" className="bg-cream py-14 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <ScrollReveal direction="left">
              <SectionLabel>{location.label}</SectionLabel>
              <SectionHeading className="mt-3">
                No coração do que mais <span className="font-cursive italic text-amber font-normal">valoriza</span>.
              </SectionHeading>
              <p className="mt-3 text-brown-medium/70 leading-relaxed max-w-md text-[14px]">
                {location.description}
              </p>
              <div className="mt-6 space-y-3">
                {location.distances.map((d, i) => (
                  <ScrollReveal key={i} delay={i * 80} direction="left">
                    <div className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-full bg-cream border border-cream-dark/30 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-amber group-hover:border-amber">
                        <svg className="w-4 h-4 text-amber group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-bold text-brown-dark">{d.time}</span>
                        <span className="text-brown-medium/40">—</span>
                        <span className="text-brown-medium/70 text-sm">{d.place}</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={200}>
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/10 max-w-lg ml-auto">
              <div className="relative" style={{ height: "min(80vw, 500px)" }}>
                <Image
                  src={location.image}
                  alt="Mapa de localização"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
