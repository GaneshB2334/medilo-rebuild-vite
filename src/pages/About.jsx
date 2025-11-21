import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-12 h-12" />, value: "50+", label: "Expert Doctors" },
    { icon: <Heart className="w-12 h-12" />, value: "10k+", label: "Happy Patients" },
    { icon: <Award className="w-12 h-12" />, value: "25+", label: "Years Experience" },
    { icon: <Clock className="w-12 h-12" />, value: "24/7", label: "Emergency Service" }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(var(--medical-blue-light))] to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">About Medilo</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted healthcare partner providing quality medical services with compassion and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center text-[hsl(var(--medical-blue))] mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--medical-blue-light))] to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Medilo, we are committed to providing exceptional healthcare services that prioritize 
                patient wellbeing and satisfaction. Our mission is to deliver compassionate, quality care 
                using the latest medical technology and practices.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in treating every patient with dignity and respect, ensuring they receive 
                personalized care tailored to their unique needs.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop" 
                alt="Healthcare mission" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from patient care to medical innovation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Compassion</h3>
                <p className="text-muted-foreground">
                  Every patient is treated with empathy, understanding, and genuine care.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace cutting-edge technology and medical advances to provide the best care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
