import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data";

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hear From Our Couples
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="bg-gradient-to-br from-background to-secondary/30 border-border/50 transition-all duration-300 h-full"
                >
                  <CardContent className="p-8 flex flex-col h-[400px]">
                    {/* Stars */}
                    {/* <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div> */}
                    
                    {/* Testimonial Text - Scrollable */}
                    <ScrollArea className="flex-1 mb-6 pr-4">
                      <blockquote className="font-inter text-muted-foreground leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                    </ScrollArea>
                    
                    {/* Author with Avatar */}
                    <div className="border-t border-border/30 pt-4 flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <p className="font-playfair font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;