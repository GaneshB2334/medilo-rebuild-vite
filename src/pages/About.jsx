import { Button } from "@/components/ui/button";
import { Headphones, Users } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#F8F9FA] py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4">About Page</h1>
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="text-gray-600 hover:text-[#26B9DB]">Home</a>
              <span className="text-gray-400">/</span>
              <span className="text-[#26B9DB]">About Page</span>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="20" r="8" fill="#FFB347" />
            <path d="M50 30 L45 45 L55 45 Z M40 50 L30 70 L50 70 Z M60 50 L50 70 L70 70 Z" fill="#4A90E2" stroke="#1a1a1a" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="absolute right-20 top-20 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[86px] border-b-[#26B9DB] opacity-80"></div>
        
        {/* Doctors Image on Right */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop" 
            alt="Medical Team" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Images */}
            <div className="relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=700&fit=crop" 
                  alt="Medical Team" 
                  className="rounded-2xl w-full"
                />
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-[#26B9DB]/10 rounded-full"></div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-5xl font-bold text-[#26B9DB] mb-2">26+</div>
                <div className="text-gray-600 font-medium">Experience</div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-[#26B9DB]"></div>
                <span className="text-[#26B9DB] font-semibold uppercase tracking-wider text-sm">OUR ABOUT US</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                More Than 26+ Years About Provide Medical.
              </h2>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We are privileged to work with hundreds of future-thinking medial, including many of the world's top hardware, software, and brands, feel safe and comfortable in establishing.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#26B9DB]/10 rounded-full flex items-center justify-center">
                      <Headphones className="w-8 h-8 text-[#26B9DB]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Client Support</h3>
                    <p className="text-gray-600">But must explain to you medical of and pain was.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#26B9DB]/10 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-[#26B9DB]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Doctor Support</h3>
                    <p className="text-gray-600">But must explain to you medical of and pain was.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                There are many variations of pass available this medical service the team{" "}
                <a href="#" className="text-[#26B9DB] font-semibold hover:underline">READ MORE +</a>
              </p>

              <Button className="bg-[#26B9DB] hover:bg-[#1fa0c1] text-white px-8 py-6 rounded-full text-base font-medium">
                About More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-[#26B9DB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#1a1a1a] mb-2">80+</div>
              <div className="text-gray-600 font-medium">Active Clients</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-[#26B9DB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#1a1a1a] mb-2">80K+</div>
              <div className="text-gray-600 font-medium">Team Support</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-[#26B9DB]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#1a1a1a] mb-2">80+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-[#26B9DB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-[#1a1a1a] mb-2">80K+</div>
              <div className="text-gray-600 font-medium">Award Winner</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
