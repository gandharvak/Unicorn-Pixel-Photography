import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { team } from "@/data";
import AwardSection from "@/components/AwardSection";
import Navin from "@/assets/team/navin-director-storytelling-photographer.jpg";
import ElegantLine from "@/components/ElegantLine";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Founder Section */}
        {/* Founder Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-scale-in">
                <img 
                  src={Navin}
                  alt="Mr. Navin Sawant - Founder"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
                <h3 className="font-playfair text-2xl font-bold text-foreground text-center mt-6">
                  MR. NAVIN SAWANT
                </h3>
                <p className="text-center">
                  FOUNDER, Unicorn Pixel Photography
                </p>
              </div>
              
              <div className="animate-fade-in">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 text-center sm:text-center lg:text-left">
                  Meet Our Founder
                </h2>
                <ElegantLine/>
                <p className="  text-lg text-muted-foreground mb-4 leading-relaxed">
                  At the heart of our venture is Mr. Navin Sawant, a visionary with a keen eye for detail and an unwavering passion for storytelling through the lens. With every click, he aims not just to capture an image, but to freeze a moment in time — a moment filled with emotion, love, joy, or quiet beauty.
                </p>
                <p className="  text-lg text-muted-foreground leading-relaxed">
                  Founded in 2017, our photography journey began with a simple yet powerful vision: to create timeless, artistic memories that last a lifetime. We are passionate about turning life's most meaningful moments into beautifully captured and filmed stories, stories that evoke emotion, preserve beauty, and exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Award Section */}
        <AwardSection />

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Unicorn Pixel Family
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {team.map((member, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="hover-lift hover:shadow-none">
                      <CardContent className="p-6">
                        <img 
                          src={member.photo}
                          alt={member.name}
                          className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-md"
                        />
                        <h3 className="font-playfair text-xl font-bold text-foreground text-center mb-2">
                          {member.name}
                        </h3>
                        <p className="  text-primary font-semibold text-center">
                          {member.role}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className="mt-16 text-center max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unicorn Pixel team believes that everyone deserves to relive their most cherished memories, and that a photograph and each film we captured has the rare ability to take you back to that very second where the light was just right, the smile was real, and the feeling unforgettable.
              </p>
              <p className="text-lg text-muted-foreground font-bold leading-relaxed mt-4">
                With creativity, professionalism, and a deep respect for our clients' stories, we continue to strive for excellence in every frame we take.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;