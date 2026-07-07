import Image from "next/image";
import { siteContent } from "@/content";
import CTAButton from "../ui/CTAButton";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import ScrollReveal from "../ui/ScrollReveal";

const { hero } = siteContent;

function StatIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    lotus: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path d="M12 21c-4-4-8-7.5-8-12a8 8 0 0116 0c0 4.5-4 8-8 12z" />
        <path d="M12 21c2-2 4-4 4-7a4 4 0 00-8 0c0 3 2 5 4 7z" />
      </svg>
    ),
    leaf: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
      </svg>
    ),
    check: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    building: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  };
  return icons[icon] || null;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src={hero.image}
        alt="Vilas Di Fiori aerial view"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/95 via-brown-dark/80 to-brown-dark/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                {hero.title[0]}
                <br />
                {hero.title[1]}
                <br />
                <span className="font-cursive italic text-amber font-normal">{hero.highlight}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300}>
              <p className="mt-6 text-white/70 text-lg max-w-md leading-relaxed">
                {hero.subtitle}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={500}>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton variant="outline-white" href={hero.ctaPrimary.href} icon={<WhatsAppIcon className="w-4 h-4" />}>
                  {hero.ctaPrimary.label}
                </CTAButton>
                <CTAButton variant="dark" href={hero.ctaSecondary.href}>
                  {hero.ctaSecondary.label}
                </CTAButton>
              </div>
            </ScrollReveal>
          </div>

          <div className="hidden lg:block">
            <ScrollReveal direction="right" delay={400}>
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-8 max-w-md ml-auto shadow-2xl shadow-black/30">
                <div className="space-y-5">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-4 text-white">
                      <div className="w-14 h-14 rounded-2xl bg-amber/20 border border-amber/30 flex items-center justify-center text-amber shrink-0">
                        <StatIcon icon={stat.icon} />
                      </div>
                      <div>
                        <div className="text-xl font-bold tracking-tight">{stat.value}</div>
                        <div className="text-xs tracking-wider text-white/70">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
