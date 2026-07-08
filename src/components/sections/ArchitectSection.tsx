import Image from "next/image";
import { siteContent } from "@/content";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";

const { architect } = siteContent;

export default function ArchitectSection() {
  return (
    <section className="bg-brown-dark py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl shadow-black/30 max-w-sm">
              <Image
                src={architect.image}
                alt={architect.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/60 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="text-white">
              <SectionLabel light className="text-lg lg:text-xl">{architect.label}</SectionLabel>
              <blockquote className="mt-5 space-y-4">
                <span className="text-4xl lg:text-5xl text-amber/30 leading-none block -mb-4">"</span>
                {architect.quote.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-white/80 text-base lg:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <span className="text-4xl lg:text-5xl text-amber/30 leading-none block -mt-8 text-right">"</span>
              </blockquote>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-amber font-bold text-base">
                  {architect.name}
                </p>
                <p className="text-white/60 text-sm mt-1">
                  {architect.role}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
