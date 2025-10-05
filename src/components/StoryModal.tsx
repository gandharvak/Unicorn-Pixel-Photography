import { useState } from "react";
import { X } from "lucide-react";

const StoryModal = ({ selectedStory, setSelectedStory }) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg max-w-7xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={() => setSelectedStory(null)}
          className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-2">
            {selectedStory.coupleName}
          </h2>
          <p className="  text-primary font-semibold mb-6">
            {selectedStory.location}
          </p>
          <p className="  text-muted-foreground leading-relaxed mb-8">
            {selectedStory.fullDescription}
          </p>

          <hr className="border-border mb-8" />

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {selectedStory.galleryImages.map((image, index) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setFullscreenImage(image)}
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
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center"
          onClick={() => setFullscreenImage(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
            />
            <a
              href={fullscreenImage}
              download
              className="absolute bottom-4 right-4 bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary/80 transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryModal;