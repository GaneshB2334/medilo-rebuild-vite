import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Stethoscope, Activity, Brain, Phone, ArrowRight } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Heart className="w-12 h-12 text-[hsl(var(--medical-blue))]" />,
      title: "Cardiology",
      description: "Expert cardiac care with state-of-the-art technology and experienced specialists."
    },
    {
      icon: <Brain className="w-12 h-12 text-[hsl(var(--medical-blue))]" />,
      title: "Neurology",
      description: "Comprehensive neurological services for brain and nervous system conditions."
    },
    {
      icon: <Activity className="w-12 h-12 text-[hsl(var(--medical-blue))]" />,
      title: "Orthopedics",
      description: "Advanced treatment for bone, joint, and muscle disorders."
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-[hsl(var(--medical-blue))]" />,
      title: "General Medicine",
      description: "Primary healthcare services for all your medical needs."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--medical-blue-light))] to-white min-h-[600px] flex items-center overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                We Hospital Doctors Patients{" "}
                <span className="text-[hsl(var(--medical-blue))]">Service.</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Providing exceptional healthcare services with compassion and excellence. 
                Your health and wellbeing are our top priorities.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                <h3 className="text-xl font-semibold mb-2">Receive Medical Service</h3>
                <div className="flex items-center gap-2 text-[hsl(var(--medical-blue))]">
                  <Phone className="w-5 h-5" />
                  <span className="text-lg font-semibold">Call Us at: (+2) 56 54 1453</span>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button 
                  asChild
                  className="bg-[hsl(var(--medical-blue))] hover:bg-[hsl(var(--medical-accent))] text-white"
                >
                  <Link to="/contact">
                    Contact Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-[hsl(var(--medical-blue))] text-[hsl(var(--medical-blue))] hover:bg-[hsl(var(--medical-blue-light))]"
                >
                  <Link to="/about">Discover More</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=600&fit=crop" 
                  alt="Medical professionals" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Medical Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services delivered by experienced professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-blue-dark))] to-[hsl(var(--medical-blue))] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop" 
                alt="Medical team" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Meet The Team Support Medical Service</h2>
              <p className="text-lg text-white/90">
                Our dedicated team of healthcare professionals is committed to providing 
                exceptional care and support for all your medical needs.
              </p>
              <Button 
                asChild
                className="bg-white text-[hsl(var(--medical-blue))] hover:bg-white/90"
              >
                <Link to="/about">
                  Booking Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience quality healthcare services
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-[hsl(var(--medical-blue))] hover:bg-[hsl(var(--medical-accent))] text-white"
          >
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
