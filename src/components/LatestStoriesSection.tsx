import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { photoGallery } from "@/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import StoryModal from "./StoryModal";

const LatestStoriesSection = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="md:container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our Latest Love Stories
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

          <p className="  text-lg text-muted-foreground max-w-2xl mx-auto">
            Each couple brings their own unique story, and we're honored to capture these precious moments that will be treasured for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoGallery?.slice(0, 3).map((story, index) => (
            <Card
              key={index}
              className="group bg-card border-border/50 transition-all duration-500 overflow-hidden hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={story.photo}
                  alt={story.coupleName}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <CardContent className="p-6">
                <span className="text-primary text-lg font-semibold">{story.coupleName}</span>
                <div className="flex items-center mb-3">
                  <span className="text-muted-foreground text-sm font-normal">{story.location}</span>
                </div>
                <p className="  text-muted-foreground leading-relaxed line-clamp-2 mb-6">
                  {story.description}
                </p>


                <Button
                  variant="ghost"
                  className="group/btn pl-0 text-primary hover:text-primary font-semibold h-auto"
                  onClick={() => setSelectedStory(story)}
                >
                  View Story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for detailed view */}
        {selectedStory && (
          <StoryModal selectedStory={selectedStory} setSelectedStory={setSelectedStory} />
        )}

        <div className="text-center mt-12">
          <Link
            to="/stories"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-2 rounded-md"
          >
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestStoriesSection;