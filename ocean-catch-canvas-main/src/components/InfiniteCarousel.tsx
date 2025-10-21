import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import pallaIlish from "@/assets/fish/palla-ilish.jpg";
import yellowfinTuna from "@/assets/fish/yellowfin-tuna.jpg";
import seerSurmai from "@/assets/fish/seer-surmai.jpg";
import silverPomfret from "@/assets/fish/silver-pomfret.jpg";
import seaBass from "@/assets/fish/sea-bass.jpg";
import bangdaMackerel from "@/assets/fish/bangda-mackerel.jpg";
import redSnapper from "@/assets/fish/red-snapper.jpg";
import rawasIndianSalmon from "@/assets/fish/rawas-indian-salmon.jpg";

const InfiniteCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const products = [
    { id: "palla-ilish", name: "Palla (Ilish)", price: "$28.99/lb", image: pallaIlish },
    { id: "yellowfin-tuna", name: "Yellowfin Tuna", price: "$38.99/lb", image: yellowfinTuna },
    { id: "seer-surmai", name: "Seer (Surmai)", price: "$42.99/lb", image: seerSurmai },
    { id: "silver-pomfret", name: "Silver Pomfret", price: "$45.99/lb", image: silverPomfret },
    { id: "sea-bass-bhetki", name: "Sea Bass (Bhetki)", price: "$24.99/lb", image: seaBass },
    { id: "bangda-mackerel", name: "Bangda (Mackerel)", price: "$19.99/lb", image: bangdaMackerel },
    { id: "red-snapper-tamoshi", name: "Red Snapper (Tamoshi)", price: "$32.99/lb", image: redSnapper },
    { id: "rawas-indian-salmon", name: "Rawas (Indian Salmon)", price: "$34.99/lb", image: rawasIndianSalmon },
  ];

  // Duplicate products for seamless infinite scroll
  const duplicatedProducts = [...products, ...products, ...products];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    const maxScroll = scrollContainer.scrollWidth / 3; // Since we tripled the content

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-20 bg-gradient-emerald overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-ocean-deep mb-4">
            Fresh Daily Catches
          </h2>
          <p className="text-xl text-ocean-deep/80">
            Discover our rotating selection of the freshest fish
          </p>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedProducts.map((product, index) => (
          <Card 
            key={`${product.id}-${index}`}
            className="flex-shrink-0 w-80 group hover:shadow-emerald transition-smooth border-sage-soft"
          >
            <CardContent className="p-0">
              <div className="aspect-square bg-white flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-ocean-deep mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-ocean-deep text-lg">
                    {product.price}
                  </span>
                  <Button 
                    asChild
                    variant="ripple" 
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Link to={`/product/${product.id}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default InfiniteCarousel;