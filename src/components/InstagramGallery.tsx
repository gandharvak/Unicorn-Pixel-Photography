import { Instagram } from "lucide-react";

const InstagramGallery = () => {
  // These would be fetched from Instagram API in production
  const images = [
    { id: 1, url: "/placeholder.svg", alt: "Wedding moment 1" },
    { id: 2, url: "/placeholder.svg", alt: "Wedding moment 2" },
    { id: 3, url: "/placeholder.svg", alt: "Wedding moment 3" },
    { id: 4, url: "/placeholder.svg", alt: "Wedding moment 4" },
    { id: 5, url: "/placeholder.svg", alt: "Wedding moment 5" },
    { id: 6, url: "/placeholder.svg", alt: "Wedding moment 6" },
    { id: 7, url: "/placeholder.svg", alt: "Wedding moment 7" },
    { id: 8, url: "/placeholder.svg", alt: "Wedding moment 8" },
    { id: 9, url: "/placeholder.svg", alt: "Wedding moment 9" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-playfair text-foreground">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            @unicornpixelphotography
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="aspect-square overflow-hidden rounded-md group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/unicornpixelphotography"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
