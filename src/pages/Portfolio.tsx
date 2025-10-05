import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { portfolioImages } from "@/assets/portfolio";
import { X } from "lucide-react";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
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
      {selectedImage && (

        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="Fullscreen"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
            />
            <a
              href={selectedImage}
              download
              className="absolute bottom-4 right-4 bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary/80 transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Portfolio;
