import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Activity, Stethoscope, Baby, Eye, Bone, Syringe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-16 h-16 text-[hsl(var(--medical-blue))]" />,
      title: "Cardiology",
      description: "Comprehensive cardiac care including diagnosis, treatment, and management of heart conditions with advanced technology."
    },
    {
      icon: <Brain className="w-16 h-16 text-[hsl(var(--medical-blue))]" />,
      title: "Neurology",
      description: "Expert care for neurological disorders, brain conditions, and nervous system diseases."
    },
    {
      icon: <Bone className="w-16 h-16 text-[hsl(var(--medical-blue))]" />,
      title: "Orthopedics",
      description: "Advanced treatment for musculoskeletal conditions, joint replacements, and sports injuries."
    },
    {
      icon: <Baby className="w-16 h-16 text-[hsl(var(--medical-blue))]" />,
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents with compassionate care."
    },
    {
      icon: <Activity className="w-16 h-16 text-[hsl(var(--medical-blue))]" />,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response and critical care capabilities."
    },
    {
      icon: <Eye className="w-16 h-16 text-[hsl(var(--medical-blue))]" />,
      title: "Ophthalmology",
      description: "Complete eye care services including vision correction and surgical treatments."
    },
    {
      icon: <Stethoscope className="w-16 h-16 text-[hsl(var(--medical-blue))]" />,
      title: "General Medicine",
      description: "Primary healthcare services for routine checkups, preventive care, and general health concerns."
    },
    {
      icon: <Syringe className="w-16 h-16 text-[hsl(var(--medical-blue))]" />,
      title: "Laboratory",
      description: "State-of-the-art diagnostic services with accurate and timely test results."
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(var(--medical-blue-light))] to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Our Medical Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive healthcare solutions delivered by experienced professionals with state-of-the-art technology
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-blue))] to-[hsl(var(--medical-blue-dark))] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Medical Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our medical team is available 24/7 to provide the care you need
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="tel:+2565541453" 
              className="bg-white text-[hsl(var(--medical-blue))] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Call Now: (+2) 56 54 1453
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
