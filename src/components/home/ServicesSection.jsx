import { FaAnglesRight } from 'react-icons/fa6';

const ServicesSection = () => {
  const services = [
    { title: 'Pharmacology', index: '01' },
    { title: 'Orthopedic', index: '02' },
    { title: 'Hematology', index: '03' },
    { title: 'Plastic Surgery', index: '04' },
    { title: 'Neurology', index: '05' },
    { title: 'Ophthalmology', index: '06' },
    { title: 'Dental Care', index: '07' },
    { title: 'Cardiology', index: '08' }
  ];

  const serviceIcons = [
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
    </svg>,
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
    </svg>,
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
    </svg>,
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
    </svg>,
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
    </svg>,
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>,
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>,
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  ];

  return (
    <section className="bg-[#e8edf0] py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="text-[#2ea6f7] font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[#2ea6f7]"></span>
              OUR BEST SERVICE
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#222]">
              High-Quality Services This Doctor
            </h2>
          </div>
          <div className="max-w-lg text-[#636363]">
            We are privileged to work with hundreds of future-thinking medical professionals, 
            including many of the world's top healthcare providers.
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-[#2ea6f7] hover:to-[#002261] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors text-[#2ea6f7] group-hover:text-white">
                  {serviceIcons[index]}
                </div>
                <span className="text-6xl font-bold text-gray-100 group-hover:text-white/20 transition-colors">
                  {service.index}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#222] group-hover:text-white transition-colors">
                <a href="/services">{service.title}</a>
              </h3>
              <p className="text-[#636363] group-hover:text-white/90 transition-colors">
                Medical competitor research startup to financial
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex items-center gap-6 p-8 bg-white rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
            <svg className="w-8 h-8 text-[#2ea6f7]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-medium text-[#636363]">
              Delivering tomorrow's health care for your family.<br />
              <a href="/services" className="text-[#2ea6f7] font-bold hover:underline inline-flex items-center gap-2 mt-2">
                SEE MORE <FaAnglesRight className="text-sm" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
