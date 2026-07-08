import Image from "next/image";
import { siteContent } from "@/content";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const { lifestyle } = siteContent;

export default function Lifestyle() {
  return (
    <section id="lazer" className="bg-warm-white py-14 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-8 lg:gap-12 items-center">
          <div>
            <ScrollReveal direction="left">
              <SectionLabel>{lifestyle.label}</SectionLabel>
              <SectionHeading className="mt-3">
                {lifestyle.title[0]} {lifestyle.title[1]}{" "}
                <span className="font-cursive italic text-amber font-normal">{lifestyle.highlight}</span>
              </SectionHeading>
              <p className="mt-3 text-brown-medium/70 leading-relaxed max-w-md text-[14px]">
                {lifestyle.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {lifestyle.cards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 100} direction="up">
                <div className="relative group overflow-hidden rounded-2xl aspect-[3/5] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 639px) 50vw, (max-width: 768px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                    <span className="text-white text-[10px] md:text-xs font-semibold tracking-wide uppercase leading-tight">
                      {card.label}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
