import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, MapPin, Facebook, Instagram, Twitter, Search, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { FaPinterestP } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const navLinks = [
    { 
      name: "Home", 
      path: "/",
      hasSubmenu: true,
      submenu: [
        { name: "Main Home", path: "/" },
        { name: "Home V2", path: "/home-v2" },
        { name: "Home V3", path: "/home-v3" },
      ]
    },
    { name: "About", path: "/about" },
    { 
      name: "Service", 
      path: "/services",
      hasSubmenu: true,
      submenu: [
        { name: "Service", path: "/services" },
        { name: "Service Details", path: "/service-details" },
      ]
    },
    { 
      name: "Blog", 
      path: "/blog",
      hasSubmenu: true,
      submenu: [
        { name: "Blog List", path: "/blog" },
        { name: "Blog Details", path: "/blog-details" },
      ]
    },
    { 
      name: "Pages", 
      path: "#",
      hasSubmenu: true,
      submenu: [
        { name: "Appointments", path: "/appointments" },
        { name: "Doctors", path: "/doctors" },
        { name: "Doctor Details", path: "/doctor-details" },
        { name: "Timetable", path: "/timetable" },
        { name: "Projects", path: "/projects" },
        { name: "Error 404", path: "/error" },
      ]
    },
    { name: "Contact", path: "/contact" },
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
      {/* Top Bar */}
      <div className="bg-[#0066CC] text-white py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex flex-wrap gap-6">
              <a href="mailto:contact@health24.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">contact@health24.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Your Location Here</span>
              </div>
            </div>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#0066CC] flex items-center justify-center transition-all duration-300">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#0066CC] flex items-center justify-center transition-all duration-300">
                <FaPinterestP className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#0066CC] flex items-center justify-center transition-all duration-300">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#0066CC] flex items-center justify-center transition-all duration-300">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/images/logo.svg" alt="Health24 Logo" className="h-12 w-auto" />
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
                          ? "text-[#0066CC]"
                          : "text-[#081F3E] hover:text-[#0066CC]"
                      }`}
                    >
                      {link.name}
                      {link.hasSubmenu && (
                        <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                    {link.hasSubmenu && (
                      <ul className="absolute left-0 top-full mt-2 min-w-[220px] bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        {link.submenu.map((sublink) => (
                          <li key={sublink.path}>
                            <Link
                              to={sublink.path}
                              className="block px-5 py-2.5 text-[14px] text-[#081F3E] hover:text-[#0066CC] hover:bg-blue-50 transition-colors"
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

              {/* Search */}
              <div className="relative">
                <button 
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-[#0066CC] hover:text-[#0066CC] flex items-center justify-center transition-all duration-300"
                >
                  <Search className="w-4 h-4" />
                </button>
                {searchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 bg-white shadow-xl rounded-lg p-4 z-50">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0066CC]"
                      />
                      <button className="px-4 py-2 bg-[#0066CC] text-white rounded-lg hover:bg-[#0052A3] transition-colors">
                        <Search className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC] text-white rounded-lg font-medium text-sm hover:bg-[#0052A3] transition-all duration-300 group"
              >
                <span>Contact Now</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6 text-[#081F3E]" /> : <Menu className="w-6 h-6 text-[#081F3E]" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-4 border-t animate-slideDown">
              <ul className="pt-4">
                {navLinks.map((link) => (
                  <li key={link.path} className="border-b border-gray-100 last:border-0">
                    <Link
                      to={link.path}
                      className={`block py-3 px-4 font-medium transition-colors ${
                        isActive(link.path)
                          ? "text-[#0066CC] bg-blue-50"
                          : "text-[#081F3E] hover:text-[#0066CC] hover:bg-blue-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.hasSubmenu && (
                      <ul className="bg-gray-50 py-2">
                        {link.submenu.map((sublink) => (
                          <li key={sublink.path}>
                            <Link
                              to={sublink.path}
                              className="block py-2 px-8 text-sm text-[#081F3E] hover:text-[#0066CC] hover:bg-white transition-colors"
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
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#0066CC] text-white rounded-lg font-medium hover:bg-[#0052A3] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Contact Now</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
