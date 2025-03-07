import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define the service type
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const ServiceSlider: React.FC = () => {
  // Sample services data
  const services: Service[] = [
    {
      id: 1,
      title: 'Office Cleaning',
      description: 'Professional cleaning services for offices of all sizes, ensuring a clean and productive workspace.',
      icon: '🏢',
    },
    {
      id: 2,
      title: 'Commercial Cleaning',
      description: 'Comprehensive cleaning solutions for retail stores, restaurants, and other commercial spaces.',
      icon: '🏪',
    },
    {
      id: 3,
      title: 'Window Cleaning',
      description: 'Expert window cleaning services for a crystal-clear view and enhanced building appearance.',
      icon: '🪟',
    },
    {
      id: 4,
      title: 'Floor Maintenance',
      description: 'Specialized floor cleaning and maintenance for various floor types including carpet, tile, and hardwood.',
      icon: '🧹',
    },
    {
      id: 5,
      title: 'Disinfection Services',
      description: 'Thorough disinfection services to ensure a safe and hygienic environment for your employees and customers.',
      icon: '🧪',
    },
    {
      id: 6,
      title: 'Post-Construction Cleaning',
      description: 'Detailed cleaning after construction or renovation projects to prepare spaces for immediate use.',
      icon: '🏗️',
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 px-[4%] bg-white">
      <div className="container mx-auto">
        <div className='flex flex-col-2 justify-between'>
         <div className="mb-12 w-1/2 text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Excellent service for all your cleaning assignments.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Whatever the assignment, we will take care of it down to the last detail. This way you are assured of a perfect result.
            </p>
            </div>
            <div className='flex-col justify-between w-1/2 items-end text-right'>
                <div>
                    buttons
                </div>
                <div>
                    cta
                </div>
            </div>
        </div>

        <hr className='border-[1.5px] border-[#FF9800]' />

        <div className="pt-6">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="px-4">
                <div className="bg-gray-50 rounded-lg p-8 h-[300px] shadow-md transition-transform hover:scale-105">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="mt-6 text-orange-500 font-medium hover:text-orange-600 transition-colors flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;