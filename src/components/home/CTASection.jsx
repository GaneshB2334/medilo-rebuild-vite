import { Button } from '@/components/ui/button';
import { FaAnglesRight } from 'react-icons/fa6';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-[#002261] to-[#2ea6f7] py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Let Your Health Take a Backseat!
            </h2>
            <p className="text-lg text-gray-100">
              Schedule an appointment with one of our experienced medical professionals today!
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              className="bg-white text-[#2ea6f7] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span>Book Appointment</span>
              <FaAnglesRight className="ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2ea6f7] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Call: (+2) 56 54 1453</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
