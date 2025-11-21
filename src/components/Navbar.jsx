import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[hsl(var(--medical-blue-dark))] text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="mailto:demo@example.com" className="flex items-center gap-2 hover:opacity-80">
              <Mail className="w-4 h-4" />
              demo@example.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              123 Medical Center, Healthcare City
            </div>
          </div>
          <div className="flex gap-3">
            <a href="#" className="hover:opacity-80">Facebook</a>
            <a href="#" className="hover:opacity-80">Twitter</a>
            <a href="#" className="hover:opacity-80">Instagram</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-[hsl(var(--medical-blue))] rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Medilo</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-[hsl(var(--medical-blue))]"
                      : "text-foreground hover:text-[hsl(var(--medical-blue))]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-[hsl(var(--medical-blue))] hover:bg-[hsl(var(--medical-accent))] text-white">
                Contact Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 px-4 ${
                    isActive(link.path)
                      ? "text-[hsl(var(--medical-blue))]"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 mt-2">
                <Button className="w-full bg-[hsl(var(--medical-blue))] hover:bg-[hsl(var(--medical-accent))] text-white">
                  Contact Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
