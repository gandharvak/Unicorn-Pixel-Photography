import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { portfolioImages } from "@/assets/portfolio";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % portfolioImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + portfolioImages.length) % portfolioImages.length
      );
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-8 animate-fade-in">
              Experience Our Art
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
              With an unwavering passion for storytelling and a keen eye for detail, we've curated a portfolio that beautifully embodies our creative vision...
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6 animate-fade-in">
              Our work spans diverse cultures, stunning destinations, and unique traditions...
            </p>
          </div>
        </section>

        {/* Masonry Photo Grid */}
        <section className="py-12 px-4 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto max-w-7xl">
            <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-4 space-y-2 md:space-y-4">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedIndex(index)}
                >
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modal for full image */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-0 md:-left-20 bg-primary rounded-full p-2 m-4 transition"
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-10 bg-primary rounded-full p-2 text-white transition-colors"
            >
              <X className="h-3 w-3" />
            </button>

            {/* Image */}
            <img
              src={portfolioImages[selectedIndex]}
              alt={`Fullscreen ${selectedIndex + 1}`}
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
            />

            {/* Download Button */}
            <a
              href={portfolioImages[selectedIndex]}
              download
              className="absolute bottom-4 right-4 bg-primary text-white px-2 py-1 rounded shadow hover:bg-primary/80 transition-colors"
            >
              Download
            </a>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 md:-right-20 bg-primary rounded-full p-2 m-4 transition"
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Portfolio;
