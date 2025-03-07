import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

// Import images from assets
import officeCleaningImg from '../../assets/images/Image.jpg';
import springCleaningImg from '../../assets/images/pcc.jpg';
import houseCleaningImg from '../../assets/images/bottle.jpg';

// Service type definition
interface ServiceType {
  id: number;
  title: string;
  image: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  // Service data
  const services: ServiceType[] = [
    {
      id: 1,
      title: 'Office Cleaning',
      image: officeCleaningImg,
      description: 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services.'
    },
    {
      id: 2,
      title: 'Spring Cleaning',
      image: springCleaningImg,
      description: 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services.'
    },
    {
      id: 3,
      title: 'House Cleaning',
      image: houseCleaningImg,
      description: 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services.'
    },
    {
      id: 4,
      title: 'Office Cleaning',
      image: officeCleaningImg,
      description: 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services.'
    },
    {
      id: 5,
      title: 'Spring Cleaning',
      image: springCleaningImg,
      description: 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services.'
    },
    {
      id: 6,
      title: 'House Cleaning',
      image: houseCleaningImg,
      description: 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services.'
    }
  ];

  // Service card component
  const ServiceCard = ({ service }: { service: ServiceType }) => {
    return (
      <div className="flex flex-col">
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <button className={`flex items-center gap-2 px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors mt-auto ${
          service.title === 'Spring Cleaning' ? 'bg-[#FF9800] !text-white border-[#FF9800] hover:bg-[#FF9800]' : ''
        }`}>
          Book Now
          <FaArrowRight className="text-sm" />
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Excellent Service For All<br />
          Your Cleaning Assignments.
        </h2>
        <p className="text-gray-600 max-w-3xl">
          Whatever the assignment, we will take care of it down to the last detail. This way you
          are assured of a perfect result.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 my-8"></div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 my-12"></div>
    </div>
  );
};

export default ServicesSection;