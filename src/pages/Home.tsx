import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import LatestStoriesSection from "@/components/LatestStoriesSection";
import Footer from "@/components/Footer";
import InstagramEmbed from "@/components/InstagramEmbed";
import AboutSection from "@/components/AboutSection";
import ElegantQuote from "@/components/ElegantQuote";
import { motion } from "framer-motion";
import { useState } from "react";
import LogoIntro from "@/components/LogoIntro";

const Home = () => {
    const [showSite, setShowSite] = useState(false);

  return (
    <div className="min-h-screen">
        {!showSite && <LogoIntro onAnimationComplete={() => setShowSite(true)} />}

          {
        showSite && (
          <>
          
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
          </>
        )
          }

    </div>
  );
};

export default Home;