import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#F8F9FA] py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4">Contact Us</h1>
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="text-gray-600 hover:text-[#26B9DB]">Home</a>
              <span className="text-gray-400">/</span>
              <span className="text-[#26B9DB]">Contact Us</span>
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

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Doctor Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=700&fit=crop" 
                alt="Doctor" 
                className="rounded-lg w-full"
              />
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#26B9DB] opacity-20">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-[#26B9DB]"></div>
                <span className="text-[#26B9DB] font-semibold uppercase tracking-wider text-sm">CONTACT US</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-8 leading-tight">
                Meet Our Specialist This Doctor Meet
              </h2>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full px-5 py-4 rounded-lg bg-[#F8F9FA] border border-transparent focus:border-[#26B9DB] focus:bg-white focus:outline-none transition-colors text-[#1a1a1a] placeholder:text-gray-400"
                  />
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="w-full px-5 py-4 rounded-lg bg-[#F8F9FA] border border-transparent focus:border-[#26B9DB] focus:bg-white focus:outline-none transition-colors text-[#1a1a1a] placeholder:text-gray-400"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="Your Subject"
                    className="w-full px-5 py-4 rounded-lg bg-[#F8F9FA] border border-transparent focus:border-[#26B9DB] focus:bg-white focus:outline-none transition-colors text-[#1a1a1a] placeholder:text-gray-400"
                  />
                  <input 
                    type="tel" 
                    placeholder="Your phone"
                    className="w-full px-5 py-4 rounded-lg bg-[#F8F9FA] border border-transparent focus:border-[#26B9DB] focus:bg-white focus:outline-none transition-colors text-[#1a1a1a] placeholder:text-gray-400"
                  />
                </div>

                <textarea 
                  rows={6}
                  placeholder="Your comments"
                  className="w-full px-5 py-4 rounded-lg bg-[#F8F9FA] border border-transparent focus:border-[#26B9DB] focus:bg-white focus:outline-none transition-colors text-[#1a1a1a] placeholder:text-gray-400 resize-none"
                ></textarea>

                <Button 
                  type="submit"
                  className="bg-[#26B9DB] hover:bg-[#1fa0c1] text-white px-10 py-6 rounded-full text-base font-medium"
                >
                  Send Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
