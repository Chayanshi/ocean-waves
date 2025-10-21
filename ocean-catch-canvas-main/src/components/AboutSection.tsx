import { Link } from "react-router-dom";
import { Anchor, Award, Fish, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Fish,
      title: "75+ Years",
      description: "of seafood excellence"
    },
    {
      icon: Anchor,
      title: "20+ Vessels",
      description: "in our sustainable fleet"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "freshness you can trust"
    },
    {
      icon: Heart,
      title: "Family-Owned",
      description: "serving since 1950"
    }

  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with water texture */}
      <div className="absolute inset-0 bg-gradient-emerald opacity-30"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(22, 185, 129, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(15, 23, 42, 0.1) 0%, transparent 50%)`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-ocean-deep mb-6">
                From Ocean to Table,
                <span className="block text-ocean-bright">With Love & Care</span>
              </h2>
              <div className="space-y-4 text-ocean-deep/80 leading-relaxed">
                <p>
                  Welcome to D.R. Taru & Sons — Pune’s trusted name in premium seafood since 1950. 
                  With decades of expertise in the fishing industry, we take pride in delivering the freshest, 
                  sustainably sourced fish and seafood straight from the coast to your table. 
                  Every catch is carefully selected and quality-checked to ensure unmatched freshness, flavor, and nutrition.
                </p>
                <p>
                  At D.R. Taru & Sons, sustainability and customer satisfaction are at the heart of everything we do. 
                  We partner with responsible fisheries, support ethical practices, 
                  and offer a wide variety of seafood — from local favorites to exotic specialties. 
                  Whether you’re a home cook or a professional chef, our commitment remains the same — bringing you the best of the sea, 
                  every single day.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero">
                <Link to="/our-story" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Read Our Story</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Browse Products</Link>
              </Button>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className="group text-center hover:shadow-emerald transition-bounce transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    <highlight.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-ocean-deep mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-ocean-deep/70 text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;