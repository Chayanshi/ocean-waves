import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Share2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();

  // Find the product by ID from centralized data
  const product = products.find((p) => p.id === id);

  // If product not found, show error
  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="font-heading font-bold text-3xl text-water-deep mb-4">
            Product Not Found
          </h1>
          <Button asChild variant="ocean">
            <Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to Products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related products from the same category (max 3)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/products" className="flex items-center gap-2 text-water-deep" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <ArrowLeft size={20} />
              Back to Products
            </Link>
          </Button>
        </div>
      </section>

      {/* Product Details */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-shore flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {product.category}
                </Badge>
                <h1 className="font-heading font-bold text-3xl md:text-4xl text-water-deep mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-water-deep/80 mb-4">
                  {product.tagline}
                </p>
                <div className="flex items-center gap-4">
                  <span className="font-heading font-bold text-3xl text-water-deep">
                    {product.price}
                  </span>
                  <span className="text-water-deep/70">{product.unit}</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-water-deep/80 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-heading font-semibold text-lg text-water-deep mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-water-deep/80">
                      <div className="w-2 h-2 bg-water-bright rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" className="flex-1">
                  <ShoppingCart className="mr-2" size={20} />
                  Add to Cart
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 size={20} />
                  </Button>
                </div>
              </div> */}

              {/* Product Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-water-pale">
                <div>
                  <h4 className="font-semibold text-water-deep mb-2">Nutritional Info</h4>
                  <div className="space-y-1 text-sm text-water-deep/80">
                    <div className="flex justify-between">
                      <span>Calories:</span>
                      <span>{product.nutritional.calories}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Protein:</span>
                      <span>{product.nutritional.protein}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Omega-3:</span>
                      <span>{product.nutritional.omega3}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-water-deep mb-2">Product Details</h4>
                  <div className="space-y-1 text-sm text-water-deep/80">
                    <div><strong>Origin:</strong> {product.origin}</div>
                    <div><strong>Freshness:</strong> {product.freshness}</div>
                    <div><strong>Storage:</strong> {product.storage}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gradient-shore">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-water-deep mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="group overflow-hidden border-water-pale hover:shadow-water transition-smooth transform hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-sand flex items-center justify-center overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-water-deep mb-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="related-view flex items-center justify-between">
                      <span className="font-bold text-water-deep">
                        {relatedProduct.price}/{relatedProduct.unit}
                      </span>
                      <Button
                        asChild
                        variant="ripple"
                        size="sm"
                      >
                        <Link to={`/product/${relatedProduct.id}`}
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;