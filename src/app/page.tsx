import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutIntroSection from "./components/AboutIntroSection";
import AboutSection from "./components/AboutSection";
import FullBleedPhotoSection from "./components/FullBleedPhotoSection";
import ServicesSection from "./components/ServicesSection";
import SelectedWorkSection from "./components/SelectedWorkSection";
import TestimonialsSection from "./components/TestimonialsSection";
import LatestNewsSection from "./components/LatestNewsSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="bg-[#fafafa]">
      {/* z-10 wrapper ensures content slides above the sticky footer as you scroll */}
      <div className="relative z-10 bg-[#fafafa]">
        <Navbar />
        <HeroSection />
        <AboutIntroSection />
        <AboutSection />
        <FullBleedPhotoSection />
        <ServicesSection />
        <SelectedWorkSection />
        <TestimonialsSection />
        <LatestNewsSection />
      </div>
      {/* Footer sticks to the bottom of the viewport at z-0; content above reveals it */}
      <div className="sticky bottom-0 z-0">
        <FooterSection />
      </div>
    </main>
  );
}
