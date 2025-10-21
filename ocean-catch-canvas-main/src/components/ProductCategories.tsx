import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

// Count products per category
const categoryCountMap: Record<string, number> = {};
products.forEach((p) => {
  categoryCountMap[p.category] = (categoryCountMap[p.category] || 0) + 1;
});

const topCategories = Object.entries(categoryCountMap)
  .sort(([, aCount], [, bCount]) => bCount - aCount)
  .slice(0, 4)
  .map(([categoryName, count]) => {
    // Get all products in this category
    const categoryProducts = products.filter(p => p.category === categoryName);

    // Pick a random image from this category
    const randomImage = categoryProducts[Math.floor(Math.random() * categoryProducts.length)].image;

    return {
      id: categoryName.toLowerCase().replace(/\s+/g, "-"),
      name: categoryName,
      description: `Explore our finest selection of ${categoryName}`,
      image: randomImage,  // use random product image
      gradient: "bg-gradient-ocean",
      items: `${count}+ varieties`,
    };
  });

const ProductCategories = () => {
  return (
    <section id="products-section" className=".hero-style1 py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-ocean-deep mb-6">
            Our Product Categories
          </h2>
          <p className="text-xl text-ocean-deep/80 max-w-3xl mx-auto">
            From the familiar to the exotic, discover our carefully curated selection 
            of premium fish and seafood products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topCategories.map((category, index) => (
            <Card
              key={category.id}
              className="group overflow-hidden border-sage-soft hover:shadow-float transition-bounce transform hover:scale-105 hover:-rotate-1"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className={`${category.gradient} relative overflow-hidden aspect-square`}>

                  <div className="text-6xl mb-4 group-hover:scale-110 transition-smooth">
                    <img 
                      src={category.image}
                      alt={category.id}
                    />
                  </div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-ocean-deep mb-2">
                    {category.name}
                  </h3>
                  <p className="text-ocean-deep/70 text-sm mb-3 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ocean-bright font-medium">
                      {category.items}
                    </span>
                    <Button
                      asChild
                      variant="ripple"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Link to={`/products?category=${encodeURIComponent(category.name)}`}
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        Explore
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="ocean" size="lg">
            <Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
