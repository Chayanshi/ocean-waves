import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const uniqueCategories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const AllProducts = () => {
  const query = useQuery();
  const navigate = useNavigate();

  const initialCategory = query.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Update URL and state when user selects category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      navigate("/products"); // reset to base page
    } else {
      navigate(`/products?category=${category}`);
    }
  };

  // Sync state with query param (when navigating or reloading)
  useEffect(() => {
    const category = query.get("category") || "All";
    setSelectedCategory(category);
  }, [query]);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section
        className=".hero-style1 relative min-h-screen flex items-center justify-center wave-animation2 overflow-hidden"
        style={{
          minHeight: 300,
          maxHeight: 400,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className=".hero-style1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-water-deep mb-4">
            All Products
          </h1>
          <p className="text-xl text-water-deep/80 max-w-2xl mx-auto">
            Discover our complete selection of premium fish and seafood,
            sourced fresh from the world's finest waters.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {uniqueCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "ocean" : "outline"}
                className="font-medium"
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-water-pale hover:shadow-water transition-smooth transform hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-shore flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-water-bright bg-water-pale px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-water-deep mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-water-deep/70 mb-3">
                      {product.tagline}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-water-deep text-lg">
                        {product.price}/{product.unit}
                      </span>
                      <Button
                        asChild
                        variant="ripple"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Link
                          to={`/product/${product.id}`}
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }
                        >
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* If no products in this category */}
          {filteredProducts.length === 0 && (
            <p className="text-center text-water-deep/70 mt-8">
              No products found in this category.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllProducts;
