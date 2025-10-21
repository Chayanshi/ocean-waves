import { Anchor, Fish, Globe, Heart, Shield, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const OurStory = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const milestones = [
    { year: "1950", title: "Founded", description: "D.R. Taru & Sons was established with a small fishing venture and a big dream." },
    { year: "1975", title: "Expansion", description: "Grew from a local fish supplier into a trusted seafood distributor in Pune." },
    { year: "1995", title: "Innovation", description: "Introduced modern cold-storage and processing facilities to ensure freshness." },
    { year: "2010", title: "Sustainability", description: "Adopted eco-friendly sourcing and partnered with sustainable fisheries." },
    { year: "2025", title: "Legacy Continues", description: "75+ years later, we continue serving the finest and freshest seafood." }
  ];

  const values = [
    {
      icon: Fish,
      title: "Freshness First",
      description: "We source daily from trusted fishermen to bring only the freshest catch to your table."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We’re committed to responsible fishing that protects marine life for future generations."
    },
    {
      icon: Heart,
      title: "Family Values",
      description: "As a proud family-run business, we build lasting relationships with our customers and partners."
    },
    {
      icon: Shield,
      title: "Quality & Trust",
      description: "Every product undergoes strict quality checks to ensure safety, purity, and premium taste."
    }
  ];

  const team = [
    { name: "Mr. Dattatray Taru", role: "Founder", description: "Pioneer of D.R. Taru & Sons, built on values of honesty and excellence." },
    { name: "Rahul Taru", role: "Operations Director", description: "Oversees day-to-day sourcing, logistics, and quality management." },
    { name: "Sneha Taru", role: "Customer Relations", description: "Leads our customer engagement and brand communications." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section 
        className=".hero-style1 relative min-h-screen flex items-center justify-center wave-animation2 overflow-hidden"
        style={{
          minHeight: 300,
          maxHeight: 400, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-water-deep mb-4">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
             Four decades of passion, tradition, and commitment to bringing 
            you the ocean's finest treasures.
          </p>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-water-deep mb-6">
                A Legacy Built on Trust & Tradition
              </h2>
              <div className="space-y-4 text-water-deep/80 leading-relaxed">
                <p>
                  Founded in 1950 by <strong>Mr. Dattatray Taru</strong>, D.R. Taru & Sons began as
                  a small family venture with a simple goal — to deliver high-quality,
                  sustainably sourced fish to the community. What started as a local
                  operation in Pune has grown into a trusted name in seafood retail,
                  celebrated for our freshness, ethics, and consistency.
                </p>
                <p>
                  Every day, we carefully select catches from trusted fishermen who share
                  our vision of sustainable practices. Each product undergoes rigorous
                  quality checks to ensure that only the best reaches your kitchen.
                </p>
                <p>
                  Our journey continues with the same passion and purpose — to bring
                  people together through delicious, responsibly sourced seafood, while
                  preserving the ocean for generations to come.
                </p>
              </div>
            </div>
            <div className="bg-gradient-shore rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🐟</div>
              <h3 className="font-heading font-semibold text-xl text-water-deep mb-2">
                From One Family to Thousands
              </h3>
              <p className="text-water-deep/80">
                For over 75 years, our family has proudly served countless households,
                restaurants, and chefs — delivering premium seafood with trust and
                tradition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-shore">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-water-deep mb-12 text-center">
            Our Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={milestone.year} className="group hover:shadow-water transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    {index + 1}
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-water-deep mb-2">
                    {milestone.year}
                  </h3>
                  <h4 className="font-semibold text-water-bright mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-water-deep/80">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-water-deep mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="group text-center hover:shadow-water transition-smooth">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    <value.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-water-deep mb-3">
                    {value.title}
                  </h3>
                  <p className="text-water-deep/80 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-shore">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-water-deep mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-water transition-smooth">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4 text-3xl text-white">
                    👨‍🍳
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-water-deep mb-1">
                    {member.name}
                  </h3>
                  <p className="text-water-bright font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-water-deep/80 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-depth text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Experience the Freshness of D.R. Taru & Sons
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join generations of customers who trust us for sustainably sourced,
            premium-quality seafood — fresh from the ocean to your plate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="emerald" size="lg" onClick={scrollToProducts}>
              <Link to="/our-story" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Browse Products</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue text-black bg-gradient-depth hover:bg-white hover:text-ocean-deep"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;
