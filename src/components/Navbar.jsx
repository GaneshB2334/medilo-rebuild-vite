import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About Us", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      hasSubmenu: true,
      submenu: [
        { name: "Caregiver / Elderly Care", path: "/services/caregiver" },
        { name: "Nurse", path: "/services/nurse" },
        { name: "Physiotherapy", path: "/services/physiotherapy" },
        { name: "Baby Care", path: "/services/baby-care" },
      ]
    },
    { name: "Blogs", path: "/blog" },
    { name: "Book Now", path: "/book-now" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg animate-slideDown' : 'relative'}`}>
      {/* Main Navbar */}
      <nav className="bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <div className="text-[#1e3a5f] font-bold text-xl">C24</div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">care24</span>
                  <span className="text-[10px] text-white/80">World Class Care. Centre Home</span>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.path} className="relative group">
                    <Link
                      to={link.path}
                      className={`text-[15px] font-medium transition-colors flex items-center gap-1 ${
                        isActive(link.path)
                          ? "text-white"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {link.hasSubmenu && (
                        <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
                      )}
                    </Link>
                    {link.hasSubmenu && (
                      <ul className="absolute left-0 top-full mt-2 min-w-[220px] bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        {link.submenu.map((sublink) => (
                          <li key={sublink.path}>
                            <Link
                              to={sublink.path}
                              className="block px-5 py-2.5 text-[14px] text-[#1e3a5f] hover:text-[#f39c12] hover:bg-orange-50 transition-colors"
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Call Button */}
              <a
                href="tel:08069048802"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border border-white/30 text-white rounded font-medium text-sm hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us - 08069048802</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-4 border-t border-white/20 animate-slideDown">
              <ul className="pt-4">
                {navLinks.map((link) => (
                  <li key={link.path} className="border-b border-white/20 last:border-0">
                    <Link
                      to={link.path}
                      className={`block py-3 px-4 font-medium transition-colors ${
                        isActive(link.path)
                          ? "text-white bg-white/10"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.hasSubmenu && (
                      <ul className="bg-white/5 py-2">
                        {link.submenu.map((sublink) => (
                          <li key={sublink.path}>
                            <Link
                              to={sublink.path}
                              className="block py-2 px-8 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="px-4 mt-4">
                <a
                  href="tel:08069048802"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us - 08069048802</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
