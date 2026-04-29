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
      <HeroSection />
      <AboutIntroSection />
      <AboutSection />
      <FullBleedPhotoSection />
      <ServicesSection />
      <SelectedWorkSection />
      <TestimonialsSection />
      <LatestNewsSection />
      <FooterSection />
    </main>
  );
}
