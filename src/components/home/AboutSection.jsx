import { FaAnglesRight, FaCircleCheck } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="relative py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80" 
                alt="About" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]" 
              />
              <a 
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full shadow-xl hover:scale-105 transition-transform"
              >
                <span className="w-16 h-16 bg-[#2ea6f7] rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-[#002261] transition-colors">
                  ▶
                </span>
                <span className="font-semibold text-gray-900">How We Work</span>
              </a>
            </div>
            <div className="absolute bottom-0 right-0 w-48 hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" 
                alt="About" 
                className="rounded-2xl shadow-xl" 
              />
            </div>
            <div className="absolute bottom-8 left-8 bg-[#2ea6f7] text-white p-8 rounded-2xl shadow-2xl">
              <p className="text-5xl font-bold mb-2">26+</p>
              <p className="text-lg font-semibold">Experience</p>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <div className="mb-8">
              <p className="text-[#2ea6f7] font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-[#2ea6f7]"></span>
                OUR ABOUT US
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#222]">
                More Than 26+ Years About Provide Medical
              </h2>
            </div>
            <p className="text-[#636363] mb-8 leading-relaxed">
              We are privileged to work with hundreds of future-thinking medical professionals, 
              including many of the world's top healthcare providers. Our commitment to excellence 
              and patient care sets us apart in the medical field.
            </p>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-8 h-8 text-[#2ea6f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-[#222]">Client Support</h3>
                </div>
                <p className="text-[#636363] text-sm">
                  Professional medical care and support services available 24/7
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-8 h-8 text-[#2ea6f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-[#222]">Doctor Support</h3>
                </div>
                <p className="text-[#636363] text-sm">
                  Expert medical professionals available round the clock
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="flex items-start gap-4 mb-8 p-6 bg-blue-50 rounded-xl">
              <div className="text-[#2ea6f7] text-2xl shrink-0 mt-1">
                <FaCircleCheck />
              </div>
              <p className="text-[#636363]">
                There are many variations of medical services available. Our comprehensive 
                care approach ensures the best outcomes for our patients.{' '}
                <a href="/about" className="text-[#2ea6f7] font-bold hover:underline">
                  READ MORE +
                </a>
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="bg-[#2ea6f7] hover:bg-[#002261] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span>About More</span>
              <FaAnglesRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
