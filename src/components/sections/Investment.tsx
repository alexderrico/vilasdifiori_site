import { siteContent } from "@/content";
import SectionLabel from "../ui/SectionLabel";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const { investment } = siteContent;

const investmentIcons: Record<string, React.ReactNode> = {
  "trending-up": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  dollar: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  document: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
    </svg>
  ),
};

export default function Investment() {
  return (
    <section id="investimento" className="bg-warm-white py-14 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_3fr] gap-8 lg:gap-12 items-start">
          <div>
            <ScrollReveal direction="left">
              <SectionLabel>{investment.label}</SectionLabel>
              <SectionHeading className="mt-3">
                Guaratinguetá cresce. Seu <span className="font-cursive italic text-amber font-normal">patrimônio</span> também.
              </SectionHeading>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {investment.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} direction="up">
                <div className="bg-white rounded-2xl p-4 sm:p-6 text-center group cursor-default shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col items-center justify-center min-h-[140px] sm:min-h-[200px]">
                  <div className="text-amber flex justify-center transition-transform duration-300 group-hover:scale-110">
                    {investmentIcons[item.icon]}
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-brown-dark">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-brown-medium/70 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
