import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import FeaturesBar from "@/components/sections/FeaturesBar";
import Lifestyle from "@/components/sections/Lifestyle";
import Masterplan from "@/components/sections/Masterplan";
import Gallery from "@/components/sections/Gallery";
import ArchitectSection from "@/components/sections/ArchitectSection";
import Investment from "@/components/sections/Investment";
import Location from "@/components/sections/Location";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesBar />
        <Lifestyle />
        <Masterplan />
        <Gallery />
        <ArchitectSection />
        <Investment />
        <Location />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
