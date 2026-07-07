import Image from "next/image";
import { siteContent } from "@/content";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import CTAButton from "../ui/CTAButton";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import ScrollReveal from "../ui/ScrollReveal";

const { cta } = siteContent;

export default function CTASection() {
  return (
    <section className="bg-brown-dark py-14 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <ScrollReveal direction="left">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/30">
              <Image
                src={cta.image}
                alt="Interior Vilas Di Fiori"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/30 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="text-white">
              <SectionLabel light>{cta.label}</SectionLabel>
              <SectionHeading className="mt-3 text-white">
                Agende uma visita e <span className="font-cursive italic text-amber font-normal">conheça</span> o Vilas Di Fiori pessoalmente.
              </SectionHeading>
              <p className="mt-3 text-white/60 leading-relaxed max-w-md text-[14px]">
                {cta.description}
              </p>
              <CTAButton
                variant="whatsapp"
                href={cta.cta.href}
                icon={<WhatsAppIcon className="w-5 h-5" />}
                className="mt-6"
              >
                {cta.cta.label}
              </CTAButton>
              <p className="mt-3 text-white/40 text-sm">{cta.hint}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
