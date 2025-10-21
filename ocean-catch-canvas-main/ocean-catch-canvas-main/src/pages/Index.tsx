import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import FlipCards from "@/components/FlipCards";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductCategories />
      <InfiniteCarousel />
      <FlipCards />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
