import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";


const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://blogger.googleusercontent.com/img/a/AVvXsEhIgBRNbxNZ5kh8Ecbn7zFxppciC5xUK7H5tTKwnWqBr7301d4VLSPKc6xXh5E3BjwPUwCYauLBM8r5pKRAREvX-6XowncxF6vN46dKRSnnZicoYuSVUummyKnErAstMtAcr1Qc0W9jSrNJcvb9r_291pwiHhTx-7dRiHI19bQ1-KaVY35zWjHKhCJ8sKNW",
      title: "Where Dreams Meet Reality",
      subtitle: "Capturing your most precious moments with elegance and grace."
    },
    {
      image: "https://blogger.googleusercontent.com/img/a/AVvXsEg133Nvr3lXZQUIKlTKCob4fYMLvyzJznhiwJtNNwyW7ACs6-mRATFHtc-s0JtmsDyGgdAiuVEDGWJ4mEecgDZ-RpqRkLJAcRsjDcimerxtOJW-EXU5521JmiZypT3VAIMubamKS5BJVEId2jPjdrNEJJkNI3tWZCtS1kNl1r5aD9MZK7wcZE0iGjcxJmRy",
      title: "Love Stories Unfold",
      subtitle: "Every couple has a unique story worth telling beautifully."
    },
    {
      image: "https://blogger.googleusercontent.com/img/a/AVvXsEgJcHFSTzGhvHh2CYd6KuQO34Rg0UvvPHqMJoZYZM2eFKluPfzDOiQvRJ6c7mpHoyVTdjnCpJsLzSHAh70dTuvgBrKAEydG9YBp3V66S1wic8A0tFoC7SSE7S9hwG5nR7hxDP0MJw2gh8peTorHSb364rkTDCLjX-YUxwQ0WopvoN3ibDSmXIz9vQmMKwp_",
      title: "Moments That Last Forever",
      subtitle: "Professional photography that preserves your cherished memories."
    },
    {
      image: "https://blogger.googleusercontent.com/img/a/AVvXsEjZTziWwEQJJ-NSFcC_jZy7EczIszv9kLCALWjPZJz_S6JMmZHTekSqNjdG0Zx9YnG22e6lPFKYarx7uMGNK5AjILo5LG2bYkeUeynhYTl81XAWaBnPIaErOi_dLeI8NspZ5rQDfgXh2WF5sdv8qPQvOD6VZGbCSe0iFVQVU_-Ve1n81BcN4S__WXQLgrN4",
      title: "In Every Glance, a Memory",
      subtitle: "Turning fleeting emotions into timeless keepsakes."
    },
    {
      image: "https://blogger.googleusercontent.com/img/a/AVvXsEil3GmG3TNk11F--fC37E4Wh9bAGajX59BuCBVokKPuDSErkw0loYPaRyRr3LzQiMJB_qcLaVQqZF-yZ84voNRnwGly8aWZVtfUpEpiiMGgNuQe1zlzb-nlxdStw8ACs8M2O0v26oZ_xIWUQjI-4LAIfrIUZV8NYzKHPQLdAOIn9t9pFhKuFAaRBzjC8ZPc",
      title: "Grace in Every Frame",
      subtitle: "Delicate details, captured with a photographer’s soul."
    },
    {
      image: "https://blogger.googleusercontent.com/img/a/AVvXsEh3SpaSiTQ19uR-Sx2xQlgkOwwjJbqB5wnfl1Pote86a5EwG_jVf-DSWWmj5Kfo-Fjp5gyhJ9ITD6omDM3m2kZtkGOQRRCnx3ppVN7pGKGfHI6l2Xt3BSSgQAWc-Ejb9VI-K9j47wiewvhPxR0kFMh6BSunANcxvZVsl8g2vSyrvH4BnCe_XCEWzTKT1eV7",
      title: "Timeless Embrace",
      subtitle: "Because your love deserves to be remembered forever."
    },
    {
      image: "https://blogger.googleusercontent.com/img/a/AVvXsEhdLuqfZu2gvkAzz6KNM81HeLQB2m6mDXq0RwOYcR_ktAI0hcu-8qB6ZXMrEB4RjV4UYJsrfpISQhRL4TPYjdS_3AuE5_fVQ_DHGIVuHlllqFfWjZovF0t2MMawpn2ilqAm4SM1BjDnpoWiC3HIwGK-60kTY7KhhsO6DXtrhvi4t7vG2ycE1UeiOiB3GeqS",
      title: "Cherish the Journey",
      subtitle: "From candid smiles to heartfelt vows — we capture it all."
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-dvh overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

          {/* Content */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center px-4 w-full">
            <div className="max-w-4xl text-white mx-auto">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 animate-fade-in">
                {slide.subtitle}
              </p>
            </div>
          </div>

        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;