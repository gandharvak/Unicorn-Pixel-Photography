import { Instagram, Youtube, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { instagramLink, youtubeLink, whatsappLink, email, phone1, phone2, address, maps } from "@/data"


const Footer = () => {
  return (
    <footer className="bg-[hsl(44_33%_95%)] border-t border-border mt-10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-6 pb-2">
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
              <Youtube className="h-5 w-5" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href={`tel:${phone1}`} target="_blank" rel="noopener noreferrer">
              <Phone className="h-5 w-5" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href={`mailto:${email}`}
              target="_blank" rel="noopener noreferrer">
              <Mail className="h-5 w-5" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href={maps} target="_blank" rel="noopener noreferrer">
              <MapPin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pb-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            Copyright © 2025 Unicorn Pixel Photography
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;