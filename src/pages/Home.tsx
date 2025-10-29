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
  const [animationDone, setAnimationDone] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: animationDone ? 1 : 0 }}
        transition={{ duration: 1 }}
      >

        <main>
          <HeroCarousel />
          <AboutSection />
          <TestimonialsSection />
          <ElegantQuote />
          <LatestStoriesSection />
          <InstagramEmbed />
        </main>
        <Footer />
      </motion.main>
      <LogoIntro onComplete={() => setAnimationDone(true)} />

    </div>
  );
};

export default Home;