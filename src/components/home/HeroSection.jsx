import { useRef } from 'react';
import Slider from 'react-slick';
import { FaAnglesRight } from 'react-icons/fa6';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const mainSliderRef = useRef(null);
  const navSliderRef = useRef(null);

  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: navSliderRef.current,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const navSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: mainSliderRef.current,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  const slides = [
    { 
      title: 'We Hospital Doctors Patients', 
      highlight: 'Service.', 
      subtitle: 'Medical professionals providing quality healthcare services for you and your family.',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80'
    },
    { 
      title: 'Your Center for Mental', 
      highlight: 'Health.', 
      subtitle: 'Comprehensive mental health services with experienced professionals.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'
    },
    { 
      title: 'Quality Healthcare for', 
      highlight: 'Everyone.', 
      subtitle: 'Dedicated to providing exceptional medical care and support.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80'
    },
  ];

  return (
    <section className="relative">
      <Slider ref={mainSliderRef} {...mainSettings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative min-h-[600px] bg-gradient-to-r from-[#002261]/95 to-[#2ea6f7]/90 flex items-center">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                      {slide.title} <span className="text-orange-400">{slide.highlight}</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-100">{slide.subtitle}</p>
                    <div className="mb-8 p-6 bg-white/95 backdrop-blur-sm rounded-xl inline-block shadow-xl">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Receive Medical Service</h3>
                      <p className="text-gray-600 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#2ea6f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Us at: (+2) 56 54 1453
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        size="lg"
                        className="bg-[#2ea6f7] hover:bg-[#2ea6f7]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <span>Contact Now</span>
                        <FaAnglesRight className="ml-2" />
                      </Button>
                      <Button 
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <span>Discover More</span>
                        <FaAnglesRight className="ml-2" />
                      </Button>
                    </div>
                  </div>
                  <div className="hidden lg:flex justify-center items-center">
                    <div className="w-40 h-40 bg-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="container mx-auto px-4 mt-4">
        <Slider ref={navSliderRef} {...navSettings} className="hero-nav-slider">
          {slides.map((slide, index) => (
            <div key={index} className="px-2">
              <div className="rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition">
                <img 
                  src={slide.image} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-24 object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
