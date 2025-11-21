import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--medical-blue-dark))] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Medilo</h3>
            <p className="text-white/80 mb-4">
              Your trusted healthcare partner providing quality medical services with compassion and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-white/80">Cardiology</li>
              <li className="text-white/80">Neurology</li>
              <li className="text-white/80">Orthopedics</li>
              <li className="text-white/80">Pediatrics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white/80">123 Medical Center, Healthcare City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="text-white/80">(+2) 56 54 1453</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="text-white/80">demo@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>&copy; 2024 Medilo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
