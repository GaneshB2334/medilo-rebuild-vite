import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(var(--medical-blue-light))] to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our healthcare team. We're here to help you with any questions or concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[hsl(var(--medical-blue-light))] rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-[hsl(var(--medical-blue))]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">(+2) 56 54 1453</p>
                <p className="text-muted-foreground">(+2) 56 54 1454</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[hsl(var(--medical-blue-light))] rounded-full flex items-center justify-center">
                    <Mail className="w-8 h-8 text-[hsl(var(--medical-blue))]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">demo@example.com</p>
                <p className="text-muted-foreground">info@medilo.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[hsl(var(--medical-blue-light))] rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-[hsl(var(--medical-blue))]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">123 Medical Center</p>
                <p className="text-muted-foreground">Healthcare City</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[hsl(var(--medical-blue-light))] rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-[hsl(var(--medical-blue))]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                <p className="text-muted-foreground">Mon-Fri: 8AM - 8PM</p>
                <p className="text-muted-foreground">24/7 Emergency</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-[hsl(var(--medical-blue))]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-[hsl(var(--medical-blue))]"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-[hsl(var(--medical-blue))]"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-[hsl(var(--medical-blue))]"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[hsl(var(--medical-blue))] hover:bg-[hsl(var(--medical-accent))] text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Location</h2>
              <div className="bg-gray-200 rounded-lg h-[500px] flex items-center justify-center">
                <p className="text-muted-foreground">Map placeholder - Integrate Google Maps here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-blue))] to-[hsl(var(--medical-blue-dark))] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Medical Emergency?</h2>
          <p className="text-xl mb-8">
            Call our 24/7 emergency hotline for immediate assistance
          </p>
          <a 
            href="tel:+2565541453" 
            className="inline-block bg-white text-[hsl(var(--medical-blue))] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors"
          >
            Emergency: (+2) 56 54 1453
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
