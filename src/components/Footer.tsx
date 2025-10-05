import { Instagram, Youtube, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { instagramLink, youtubeLink, whatsappLink, email, phone1, phone2, address } from "@/data"
import logo from "@/assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(44_33%_95%)] border-t border-border mt-10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Brand Section */}
          <div>
            <img src={logo} width={160} className="mb-6" />

            <p className="font-playfair italic text-lg text-muted-foreground mb-6 leading-relaxed">
              "Where dreams meet reality. We turn your most cherished moments into lasting memories."
            </p>
            <div className="flex space-x-4">
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
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-xl text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Photo Gallery", path: "/gallery" },
                { name: "Films", path: "/films" },
              ].map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="  text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-semibold text-xl text-foreground mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="  text-muted-foreground">{email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <a
                    href={`tel:${phone1}`}
                    className="  text-muted-foreground hover:text-primary transition-colors block"
                  >
                    {phone1}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <a
                    href={`tel:${phone2}`}
                    className="  text-muted-foreground hover:text-primary transition-colors block"
                  >
                    {phone2}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground">
                    {address}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
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