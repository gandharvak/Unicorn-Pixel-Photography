import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollToTop from "./ScrollToTop";

const StoryModal = ({ selectedStory, setSelectedStory }) => {
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setFullscreenIndex(index);
  };

  const closeImage = () => {
    setFullscreenIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fullscreenIndex !== null) {
      setFullscreenIndex((fullscreenIndex + 1) % selectedStory.galleryImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fullscreenIndex !== null) {
      setFullscreenIndex(
        (fullscreenIndex - 1 + selectedStory.galleryImages.length) %
        selectedStory.galleryImages.length
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg max-w-7xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={() => setSelectedStory(null)}
          className="fixed top-12 sm:top-12 lg:top-4 right-6 z-10 bg-primary text-white rounded-full p-2 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-8">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-2">
            {selectedStory.coupleName}
          </h2>
          <p className="text-primary font-semibold mb-6">
            {selectedStory.location}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {selectedStory.fullDescription}
          </p>

          <hr className="border-border mb-8" />

          <div className="columns-2 md:columns-2 lg:columns-3 gap-2 md:gap-4 space-y-2 md:space-y-4">
            {selectedStory.galleryImages.map((image, index) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openImage(index)}
              >
                <img
                  src={image}
                  alt={`${selectedStory.coupleName} - Photo ${index + 1}`}
                  className="w-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center"
          onClick={closeImage}
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

            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-10 bg-primary rounded-full p-2 text-white transition-colors"
            >
              <X className="h-3 w-3" />
            </button>

            {/* Image */}
            <img
              src={selectedStory.galleryImages[fullscreenIndex]}
              alt={`Fullscreen ${fullscreenIndex + 1}`}
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
            />

            {/* Download Button */}
            <a
              href={selectedStory.galleryImages[fullscreenIndex]}

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
    </div>
  );
};

export default StoryModal;
