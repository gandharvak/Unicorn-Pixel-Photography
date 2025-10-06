import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { photoGallery } from "@/data";
import StoryModal from "@/components/StoryModal";

const PhotoGallery = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center mb-20">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-8 animate-fade-in">
              Stories
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
              A Love Story Worth Capturing
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-2 animate-fade-in">
              A wedding is more than a celebration—it’s a beautiful story of love, connection, and new beginnings.
              We capture not just how it looks, but how it feels—timeless moments made eternal.
            </p>
          </div>

          <div className="md:container mx-auto max-w-8xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoGallery.map((story) => (
                <Card key={story.id} className="hover-lift overflow-hidden hover:shadow-none">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={story.photo}
                      alt={story.coupleName}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                      {story.coupleName}
                    </h3>
                    <p className="  text-primary font-semibold mb-3">
                      {story.location}
                    </p>
                    <p className="  text-muted-foreground text-sm leading-relaxed mb-4">
                      {story.description}
                    </p>
                    <Button
                      onClick={() => setSelectedStory(story)}
                      variant="outline"
                      size="sm"
                      className="  font-semibold"
                    >
                      View Story
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modal for detailed view */}
      {selectedStory && (
        <StoryModal selectedStory={selectedStory} setSelectedStory={setSelectedStory} />
      )}

      <Footer />
    </div>
  );
};

export default PhotoGallery;