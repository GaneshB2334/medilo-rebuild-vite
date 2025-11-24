import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Clock, MapPin, Award, Users, Heart, Stethoscope, Baby, Dumbbell, HeartPulse } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Caregiver",
    time: "Morning",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
    // Placeholder for integration (API / email service)
    console.log("Callback request submitted", formData);
    // Reset after short delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", service: "Caregiver", time: "Morning" });
    }, 3000);
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2c5282] to-[#1e3a5f] text-white overflow-hidden">
        <div className="container mx-auto px-4 py-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Largest Home Healthcare Service Provider In{" "}
                <span className="text-[#f39c12]">Mumbai & Delhi</span>
              </h1>
              <p className="text-lg text-white/90">
                Your health & wellness, our priority: Experience personal care & support with Health24.
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

      {/* Request a Callback Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl order-1 md:order-none">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=700&fit=crop"
                alt="Friendly healthcare support agent"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1e3a5f]/30 mix-blend-multiply" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm text-[#1e3a5f] font-semibold">
                We call back within 15 minutes
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 flex flex-col justify-center">
              <span className="text-[#f39c12] font-semibold text-xs uppercase tracking-wider mb-2">Get in Touch</span>
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Request a Callback</h2>
              <p className="text-gray-600 mb-6">Fill in your details and our care coordinator will reach out shortly.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1e3a5f] mb-1">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-300 focus:ring-[#f39c12] focus:border-[#f39c12] px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1e3a5f] mb-1">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 08069048802"
                    className="w-full rounded-lg border border-gray-300 focus:ring-[#f39c12] focus:border-[#f39c12] px-4 py-3 text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#1e3a5f] mb-1">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 focus:ring-[#f39c12] focus:border-[#f39c12] px-4 py-3 text-sm"
                    >
                      <option>Caregiver</option>
                      <option>Nurse</option>
                      <option>Physiotherapy</option>
                      <option>Baby Care</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-[#1e3a5f] mb-1">Preferred Time</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 focus:ring-[#f39c12] focus:border-[#f39c12] px-4 py-3 text-sm"
                    >
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#f39c12] text-white rounded-lg font-semibold hover:bg-[#e67e22] transition-colors"
                  >
                    <Phone className="w-5 h-5" /> Submit Request
                  </button>
                </div>
                {submitted && (
                  <div className="text-sm text-green-600 bg-green-50 border border-green-100 rounded-md p-3">
                    Thank you! We will call you shortly.
                  </div>
                )}
              </form>
              <div className="mt-6 text-xs text-gray-500">
                By submitting, you agree to be contacted by Health24 regarding your request.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section (Improved UI) */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(243,156,18,0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#f39c12] font-semibold text-xs uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-3">Comprehensive Home Healthcare Support</h2>
            <p className="text-gray-600 mt-4">Choose from our range of professional in-home healthcare services tailored to your family's needs.</p>
          </div>
          <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Caregiver */}
            <Link
              to="/services/caregiver"
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#f39c12]/10 to-[#e67e22]/10 transition-opacity" />
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#f39c12]/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <HeartPulse className="w-7 h-7 text-[#f39c12]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Caregiver / Elderly Care</h3>
                <p className="text-sm text-gray-600 flex-1">Compassionate daily living assistance for seniors & recovery patients.</p>
              </div>
              <div className="px-6 pb-6">
                <span className="inline-flex items-center text-sm font-semibold text-[#f39c12] group-hover:text-[#e67e22]">Learn More →</span>
              </div>
            </Link>
            {/* Nurse */}
            <Link
              to="/services/nurse"
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#1e3a5f]/5 to-[#2c5282]/10 transition-opacity" />
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Stethoscope className="w-7 h-7 text-[#1e3a5f]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Nurse</h3>
                <p className="text-sm text-gray-600 flex-1">Professional clinical care, monitoring, injections & post-operative support.</p>
              </div>
              <div className="px-6 pb-6">
                <span className="inline-flex items-center text-sm font-semibold text-[#1e3a5f] group-hover:text-[#2c5282]">Learn More →</span>
              </div>
            </Link>
            {/* Physiotherapy */}
            <Link
              to="/services/physiotherapy"
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-emerald-500/5 to-emerald-600/10 transition-opacity" />
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Dumbbell className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Physiotherapy</h3>
                <p className="text-sm text-gray-600 flex-1">Recovery-focused therapeutic exercises & pain management programs.</p>
              </div>
              <div className="px-6 pb-6">
                <span className="inline-flex items-center text-sm font-semibold text-emerald-600 group-hover:text-emerald-700">Learn More →</span>
              </div>
            </Link>
            {/* Baby Care */}
            <Link
              to="/services/baby-care"
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-pink-500/5 to-pink-600/10 transition-opacity" />
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Baby className="w-7 h-7 text-pink-600" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Baby Care</h3>
                <p className="text-sm text-gray-600 flex-1">Gentle newborn & infant care with maternal support services.</p>
              </div>
              <div className="px-6 pb-6">
                <span className="inline-flex items-center text-sm font-semibold text-pink-600 group-hover:text-pink-700">Learn More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Verified Caregivers Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#f39c12] font-semibold text-sm uppercase tracking-wide">Our Team</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-2 mb-6">
                  Hire our <span className="text-[#f39c12]">Verified Caregivers</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Hire skilled and trusted caregivers from Health24 to provide best home healthcare to your loved ones. 
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
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

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <span className="text-[#f39c12] font-semibold text-xs uppercase tracking-wider">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-3">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-4">Quick answers to common queries about our home healthcare services.</p>
          </div>
          <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What services do you provide?</AccordionTrigger>
                <AccordionContent>
                  We offer caregiver / elderly care, professional nursing, physiotherapy and baby care services. Each service is tailored to individual health and comfort needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How quickly can I get a caregiver?</AccordionTrigger>
                <AccordionContent>
                  After a request, we typically respond within 15 minutes and can deploy a verified caregiver within a few hours depending on location and specific requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Are your caregivers verified?</AccordionTrigger>
                <AccordionContent>
                  Yes. All caregivers undergo thorough background checks, certification validation, and continuous training to maintain quality and safety standards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Which areas do you serve?</AccordionTrigger>
                <AccordionContent>
                  We currently serve Mumbai and Delhi with dedicated local teams and 24/7 support coordination.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How do I request a callback?</AccordionTrigger>
                <AccordionContent>
                  Use the Request a Callback form above or call us directly at 08069048802. Fill in your details and we will contact you shortly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

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
