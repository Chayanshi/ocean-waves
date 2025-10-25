import { Fish, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { products } from "@/data/products";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];



  // Count products per category
  const categoryCountMap: Record<string, number> = {};
  products.forEach((p) => {
    categoryCountMap[p.category] = (categoryCountMap[p.category] || 0) + 1;
  });
  const topCategories = Object.entries(categoryCountMap)
    .sort(([, aCount], [, bCount]) => bCount - aCount)
    .slice(0, 4)
    .map(([name]) => {
      const itemsCount = categoryCountMap[name];
      return {
        id: name.toLowerCase().replace(/\s+/g, "-"),
        name,
        description: `Explore our finest selection of ${name}`,
        gradient: "bg-gradient-ocean", // You can customize per category
        items: `${itemsCount}+ varieties`,
      };
    });  

  return (
    <footer className="bg-gradient-emerald pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="AquaFresh Logo" className="h-10 w-10" />
              <span className="font-heading font-bold text-xl text-ocean-deep">
                AquaFresh
              </span>
            </div>
            <p className="text-ocean-deep/80 leading-relaxed">
              Fresh from the ocean to your table. We bring you the finest selection 
              of premium fish products sourced sustainably from pristine waters.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="water-ripple p-2 bg-white/20 rounded-full text-ocean-deep hover:bg-ocean-bright hover:text-white transition-smooth"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-ocean-deep mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {topCategories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={`/products?category=${encodeURIComponent(link.name)}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-ocean-deep/80 hover:text-ocean-bright transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-ocean-deep mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/our-story"
                  className="text-ocean-deep/80 hover:text-ocean-bright transition-colors"
                  onClick={() =>window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-ocean-deep/80 hover:text-ocean-bright transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-ocean-deep mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-ocean-deep/80">
                <MapPin size={18} className="text-ocean-bright" />
                <span>123 Harbor Drive, Ocean City</span>
              </div>
              <div className="flex items-center space-x-3 text-ocean-deep/80">
                <Phone size={18} className="text-ocean-bright" />
                <span>+1 (555) 123-FISH</span>
              </div>
              <div className="flex items-center space-x-3 text-ocean-deep/80">
                <Mail size={18} className="text-ocean-bright" />
                <span>hello@aquafresh.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sage-soft/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ocean-deep/70 text-sm">
            © 2024 AquaFresh. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="#"
              className="text-ocean-deep/70 hover:text-ocean-bright text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-ocean-deep/70 hover:text-ocean-bright text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;