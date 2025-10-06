import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import LatestStoriesSection from "@/components/LatestStoriesSection";
import InstagramGallery from "@/components/InstagramGallery";
import Footer from "@/components/Footer";
import InstagramEmbed from "@/components/InstagramEmbed";
import AboutSection from "@/components/AboutSection";
import ElegantQuote from "@/components/ElegantQuote";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroCarousel />
        <AboutSection />
        <TestimonialsSection />
        <ElegantQuote/>
        <LatestStoriesSection />
        <InstagramEmbed/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;