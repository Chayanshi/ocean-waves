import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className=".hero-style1 relative min-h-screen flex items-center justify-center wave-animation overflow-hidden"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full float-animation" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/15 rounded-full float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/25 rounded-full float-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 float-animation">
          From Ocean to Plate
          <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 text-coral-light">
            Freshness You Can Taste
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Discover premium seafood sourced responsibly from trusted fishermen. 
          Freshness you can trust, quality you can savor.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            onClick={scrollToProducts}
            className="animate-pulse hover:animate-none"
          >
            Explore Our Products
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-ocean-deep backdrop-blur-sm"
            asChild
          >
            <Link to="/our-story" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Learn Our Story</Link>
          </Button>
        </div>

      </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;