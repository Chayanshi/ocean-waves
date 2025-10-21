import { Link } from "react-router-dom";
import { ArrowRight, Fish, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-sand relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-6xl opacity-10 rotate-12">🐟</div>
        <div className="absolute top-20 right-20 text-4xl opacity-10 -rotate-12">🦞</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-10 rotate-45">🦀</div>
        <div className="absolute bottom-10 right-10 text-3xl opacity-10 -rotate-45">🐠</div>
      </div>
      
      {/* Floating Net Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-ocean-deep">
          <defs>
            <pattern id="net" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 L10,0 M10,20 L20,10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#net)"/>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-ocean rounded-full mb-6 float-animation">
            <Fish size={40} className="text-white" />
          </div>
          
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-ocean-deep mb-6">
            Bringing the Ocean's
            <span className="block text-ocean-bright">Best Catch to You</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-ocean-deep/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Experience the difference of truly fresh, sustainable seafood. 
            From our family to yours, taste the ocean's finest treasures.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button asChild variant="hero" size="lg" className="group">
            <Link to="/products" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <ShoppingCart className="mr-2" size={20} />
              Explore Products
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-ocean-deep text-ocean-deep hover:bg-ocean-deep hover:text-white">
            <Link to="/our-story" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Learn Our Story
            </Link>
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-ocean-deep/20">
          <div className="text-center">
            <div className="text-3xl mb-2">🚚</div>
            <h3 className="font-semibold text-ocean-deep mb-1">Fresh Delivery</h3>
            <p className="text-ocean-deep/70 text-sm">Within 24-48 hours nationwide</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-2">🌊</div>
            <h3 className="font-semibold text-ocean-deep mb-1">Sustainable Sourcing</h3>
            <p className="text-ocean-deep/70 text-sm">Environmentally responsible fishing</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-2">⭐</div>
            <h3 className="font-semibold text-ocean-deep mb-1">Premium Quality</h3>
            <p className="text-ocean-deep/70 text-sm">Rigorous quality standards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;