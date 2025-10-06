import { useState } from "react";
import { X, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { youtubeVideos } from "@/data";

const Films = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in">
              Timeless Love Captured on Film
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="  text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Cinematic love stories that capture the emotion, joy, and beauty of your special day.
              Each film is crafted with care to preserve your precious moments forever.
            </p>
          </div>
        </section>

        {/* Video Grid */}
        <section className="py-2 px-4">
          <div className="md:container mx-auto max-w-8xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              {youtubeVideos.map((video, index) => (
                <Card
                  key={video.id + index}
                  className="group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2"
                  onClick={() => openVideo(video.id)}
                >
                  <div className="relative w-full aspect-video"> {/* Maintain 16:9 rectangle */}
                    <img
                      src={video.thumbnail}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                      alt={video.thumbnail}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-primary/90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play className="h-6 w-6 text-primary-foreground fill-current" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

          </div>
        </section>
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/10 hover:text-white"
              onClick={closeVideo}
            >
              <X className="h-6 w-6" />
            </Button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Wedding Film"
              className="w-full h-full rounded-lg"
              allowFullScreen
              allow="autoplay; encrypted-media"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Films;