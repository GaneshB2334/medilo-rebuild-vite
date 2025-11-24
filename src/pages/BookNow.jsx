import { Phone, Mail, MapPin, Clock } from "lucide-react";

const BookNow = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Home Healthcare Service</h1>
            <p className="text-lg text-white/90">
              Schedule a consultation with our healthcare professionals. Available 24/7 for your convenience.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f39c12] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f] mb-1">Call Us</h3>
                      <p className="text-gray-600">08069048802</p>
                      <p className="text-sm text-gray-500">Mon-Sun 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f39c12] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f] mb-1">Email Us</h3>
                      <p className="text-gray-600">info@care24.co.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f39c12] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f] mb-1">Visit Us</h3>
                      <p className="text-gray-600">Mumbai & Delhi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f39c12] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f] mb-1">Working Hours</h3>
                      <p className="text-gray-600">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">Request a Call Back</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#f39c12] transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#f39c12] transition-colors"
                      placeholder="Enter your phone"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#f39c12] transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#f39c12] transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="caregiver">Caregiver / Elderly Care</option>
                      <option value="nurse">Nurse</option>
                      <option value="physiotherapy">Physiotherapy</option>
                      <option value="baby-care">Baby Care</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#f39c12] transition-colors"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#f39c12] text-white rounded-lg font-semibold hover:bg-[#e67e22] transition-colors"
                  >
                    Request Call Back
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Why Choose Care24?</h2>
            <p className="text-gray-600">Your trusted healthcare partner</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f39c12] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">✓</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Verified Professionals</h3>
              <p className="text-gray-600">All our caregivers are background verified and trained</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f39c12] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round the clock customer support for your needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f39c12] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">10+ Years Experience</h3>
              <p className="text-gray-600">Trusted by thousands of families across India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
