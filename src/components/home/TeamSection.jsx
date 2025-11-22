import Slider from 'react-slick';
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from 'react-icons/fa6';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  const teamMembers = [
    { 
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80', 
      name: 'Dr. Norma Pedric', 
      role: 'Neurologiest' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80', 
      name: 'Dr. Sarah Johnson', 
      role: 'Cardiologist' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80', 
      name: 'Dr. Michael Chen', 
      role: 'Surgeon' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80', 
      name: 'Dr. Emily Davis', 
      role: 'Pediatrician' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80', 
      name: 'Dr. James Wilson', 
      role: 'Orthopedic' 
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#2ea6f7] font-semibold mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#2ea6f7]"></span>
            OUR TEAM MEMBER
            <span className="w-8 h-px bg-[#2ea6f7]"></span>
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#222]">
            Meet Our Specialist This<br />Doctor Meeting
          </h2>
        </div>
        <Slider {...settings} className="team-slider">
          {teamMembers.map((member, index) => (
            <div key={index} className="px-3">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <a href="/about" className="block">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </a>
                <div className="p-6 text-center bg-gradient-to-br from-[#2ea6f7] to-[#002261] text-white">
                  <h3 className="text-xl font-bold mb-2">
                    <a href="/about" className="hover:text-blue-200 transition">
                      {member.name}
                    </a>
                  </h3>
                  <p className="mb-4 text-gray-200">{member.role}</p>
                  <div className="flex justify-center gap-2">
                    {[FaFacebookF, FaPinterestP, FaTwitter, FaInstagram].map((Icon, i) => (
                      <a 
                        key={i} 
                        href="#" 
                        className="w-10 h-10 bg-white/20 hover:bg-white hover:text-[#2ea6f7] rounded-full flex items-center justify-center transition"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <hr className="mt-24 border-gray-200 container mx-auto" />
    </section>
  );
};

export default TeamSection;
