
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found | HALO Architects";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="font-display text-7xl md:text-9xl font-medium mb-6">404</h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button asChild size="lg" className="rounded-md font-medium">
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
