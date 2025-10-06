import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo/logo.png";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Inside your component
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 700);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Stories", path: "/stories" },
    { name: "Films", path: "/films" },
    { name: "Book Us", path: "/book" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${location.pathname === "/"
      ? (isScrolled ? "bg-background/95" : "bg-transparent")
      : "bg-background/95"
      }`}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-playfair font-bold text-2xl text-primary hover:text-primary/80 transition-colors">
            <img src={logo} width={100} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-primary ${location.pathname === item.path ? "text-primary border-b-2 border-primary pb-1" : location.pathname === "/" ? (isScrolled ? "text-black" : "text-white") : "text-black"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          {!isOpen && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white bg-primary/70"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-black/85 backdrop-blur transition-all duration-300
      ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
    `}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-8 w-8" />
            </Button>
            <div className="flex flex-col space-y-8 w-full max-w-md mx-auto">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-bold text-2xl transition-colors hover:text-primary text-center ${location.pathname === item.path ? "text-primary" : "text-white"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navigation;