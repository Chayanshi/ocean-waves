import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import pallaIlish from "@/assets/fish/palla-ilish.jpg";
import seerSurmai from "@/assets/fish/seer-surmai.jpg";
import silverPomfret from "@/assets/fish/silver-pomfret.jpg";
import squidCalamari from "@/assets/fish/squid-calamari.jpg";

const FlipCards = () => {
  const fishCards = [
    {
      id: "palla-ilish",
      name: "Palla (Ilish)",
      image: pallaIlish,
      frontBg: "bg-gradient-ocean",
      backBg: "bg-gradient-emerald",
      description:
        "A premium delicacy from the Bay of Bengal, Palla (Ilish) is celebrated for its rich flavor, tender texture, and natural oils. A true favorite among seafood lovers.",
      facts: ["High Omega-3", "Rich Protein", "Healthy Fats", "Low Calories"],
      price: "$28.99/lb"
    },
    {
      id: "seer-surmai",
      name: "Seer (Surmai)",
      image: seerSurmai,
      frontBg: "bg-gradient-coral",
      backBg: "bg-gradient-sunset",
      description:
        "Also known as Indo-Pacific King Mackerel, Seer (Surmai) is prized for its firm, flaky texture and rich, mildly sweet flavor — a true favorite across coastal India.",
      facts: ["Rich Omega-3", "High Protein", "Vitamin B12", "Low Calories"],
      price: "$42.99/lb"
    },
    {
      id: "silver-pomfret",
      name: "Silver Pomfret",
      image: silverPomfret,
      frontBg: "bg-gradient-sunset",
      backBg: "bg-gradient-ocean",
      description:
        "Known for its delicate flavor and tender, flaky texture, Silver Pomfret is a premium choice loved for its subtle taste and versatility in cooking.",
      facts: ["Omega-3 Rich", "Lean Protein", "Low Calories", "B Vitamins"],
      price: "$45.99/lb"
    },
    {
      id: "squid-calamari",
      name: "Squid (Calamari)",
      image: squidCalamari,
      frontBg: "bg-gradient-emerald",
      backBg: "bg-gradient-coral",
      description:
        "Loved worldwide for its tender, slightly sweet flavor and versatility, Squid (Calamari) is a seafood delicacy that shines in everything from grills to gourmet pastas.",
      facts: ["High Protein", "Low Calories", "Rich Omega-3", "B12 Vitamins"],
      price: "$16.99/lb"
    }
  ];

  return (
    <section className="py-20 bg-background flip-card-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-ocean-deep mb-4">
            Featured Catches
          </h2>
          <p className="text-xl text-ocean-deep/80">
            Hover to discover what makes each fish special
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fishCards.map((fish, index) => (
            <div 
              key={fish.id} 
              className="flip-card h-80"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className={`flip-card-front ${fish.frontBg} flex flex-col items-center justify-center p-6 text-white relative overflow-hidden`}>
                  <div className="w-16 h-16 mb-4 float-animation rounded-full overflow-hidden">
                    <img 
                      src={fish.image} 
                      alt={fish.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-center mb-2">
                    {fish.name}
                  </h3>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="text-sm opacity-80">Hover to learn more</span>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
                </div>
                
                {/* Back Side */}
                <div className={`flip-card-back ${fish.backBg} p-6 text-white flex flex-col justify-between`}>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3">
                      {fish.name}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed opacity-90">
                      {fish.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {fish.facts.map((fact, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{fish.price}</span>
                    <Button 
                      asChild
                      variant="emerald" 
                      size="sm"
                      className="bg-white/20 text-white border border-white/40 hover:bg-white/30"
                    >
                      <Link to={`/product/${fish.id}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCards;