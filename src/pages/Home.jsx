import { Link } from "react-router-dom";
import { Phone, Clock, MapPin, Award, Users, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2c5282] to-[#1e3a5f] text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Largest Home Healthcare Service Provider In{" "}
                <span className="text-[#f39c12]">Mumbai & Delhi</span>
              </h1>
              <p className="text-lg text-white/90">
                Your health & wellness, our priority: Experience personal care & support with Care24.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/book-now"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#f39c12] text-white rounded-lg font-semibold hover:bg-[#e67e22] transition-all duration-300 shadow-lg"
                >
                  Request a call back
                </Link>
                <a
                  href="tel:08069048802"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
              
              {/* Review Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-6">
                <div className="text-center">
                  <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
                  <div className="text-xs text-white/70">Google</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
                  <div className="text-xs text-white/70">Justdial</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
                  <div className="text-xs text-white/70">Lybrate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=700&fit=crop"
                  alt="Caregiver with elderly patient"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Tabs Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link
              to="/services/caregiver"
              className="bg-[#f39c12] text-white p-6 rounded-lg text-center hover:bg-[#e67e22] transition-all duration-300 shadow-lg"
            >
              <h3 className="font-bold text-lg">Caregiver / Elderly Care</h3>
            </Link>
            <Link
              to="/services/nurse"
              className="bg-gray-100 text-[#1e3a5f] p-6 rounded-lg text-center hover:bg-gray-200 transition-all duration-300"
            >
              <h3 className="font-bold text-lg">Nurse</h3>
            </Link>
            <Link
              to="/services/physiotherapy"
              className="bg-gray-100 text-[#1e3a5f] p-6 rounded-lg text-center hover:bg-gray-200 transition-all duration-300"
            >
              <h3 className="font-bold text-lg">Physiotherapy</h3>
            </Link>
            <Link
              to="/services/baby-care"
              className="bg-gray-100 text-[#1e3a5f] p-6 rounded-lg text-center hover:bg-gray-200 transition-all duration-300"
            >
              <h3 className="font-bold text-lg">Baby Care</h3>
            </Link>
          </div>
        </div>
      </div>

      {/* Verified Caregivers Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#f39c12] font-semibold text-sm uppercase tracking-wide">Our Team</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-2 mb-6">
                  Hire our <span className="text-[#f39c12]">Verified Caregivers</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Hire skilled and trusted caregivers from Care24 to provide best home healthcare to your loved ones. 
                  All our professionals are background verified, trained, and experienced in providing quality care.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f39c12] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1e3a5f] mb-1">Certified Professionals</h3>
                      <p className="text-gray-600">All caregivers are certified and trained</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f39c12] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1e3a5f] mb-1">Background Verified</h3>
                      <p className="text-gray-600">Complete background checks for safety</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=500&fit=crop"
                  alt="Healthcare professional"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f39c12] mb-2">10+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f39c12] mb-2">50K+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f39c12] mb-2">5K+</div>
              <div className="text-white/80">Verified Caregivers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f39c12] mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#f39c12] font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-2 mb-4">
              Best Home Healthcare in Mumbai & Delhi
            </h2>
            <p className="text-gray-600">
              We provide comprehensive home healthcare services with compassion and professionalism
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#f39c12] rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Round the clock care services available whenever you need assistance
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#f39c12] rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                Professional and caring approach to all our healthcare services
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#f39c12] rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Local Presence</h3>
              <p className="text-gray-600">
                Serving Mumbai and Delhi with dedicated local healthcare teams
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-[#f39c12] to-[#e67e22] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Home Healthcare Services?</h2>
          <p className="text-lg mb-8 text-white/90">Contact us today for quality home healthcare support</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/book-now"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#f39c12] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Book Now
            </Link>
            <a
              href="tel:08069048802"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call: 08069048802
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
