import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="mb-4 text-6xl font-playfair font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-playfair font-semibold text-foreground">Page Not Found</h2>
        <p className="mb-8 text-lg text-muted-foreground  ">
          Sorry, we couldn't find the page you're looking for. The page might have been moved or deleted.
        </p>
        <Button 
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground   font-semibold"
        >
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
