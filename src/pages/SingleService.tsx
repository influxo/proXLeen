import React, { useEffect, useState } from 'react'
import Hero from '../components/Home/Hero'
import cleaningImage from '../assets/images/Image.jpg'
import { useParams } from 'react-router-dom'

// Define service types
interface ServiceData {
  title: string;
  description: string;
  features: string[];
}

const serviceData: Record<string, ServiceData> = {
  'shop-cleaning': {
    title: 'Cleaning Shops',
    description: 'We make your space shine! Professional and reliable cleaning service company providing top-notch solutions for homes and businesses. Satisfaction guaranteed!',
    features: [
      'Vetted professionals',
      'Affordable Prices',
      'Next day availability',
      'Best Quality',
      'Standard cleaning tasks',
      'Affordable Prices'
    ]
  },
  'medical-spaces': {
    title: 'Medical Spaces Cleaning',
    description: 'Specialized cleaning services for medical facilities, ensuring the highest standards of hygiene and sanitization. We follow strict protocols to maintain a safe environment.',
    features: [
      'Medical-grade cleaning',
      'Infection control',
      'Sterilization services',
      'Compliance with regulations',
      'Trained specialists',
      'Eco-friendly products'
    ]
  },
  'office-cleaning': {
    title: 'Office Cleaning',
    description: 'Keep your workplace clean and productive with our professional office cleaning services. We handle everything from daily maintenance to deep cleaning.',
    features: [
      'Daily maintenance',
      'After-hours service',
      'Customized cleaning plans',
      'Eco-friendly options',
      'Flexible scheduling',
      'Competitive rates'
    ]
  }
};

const SingleService: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<ServiceData | null>(null);
  
  useEffect(() => {
    // Set default service if slug doesn't match any service
    if (slug && serviceData[slug]) {
      setService(serviceData[slug]);
    } else {
      setService(serviceData['shop-cleaning']);
    }
  }, [slug]);

  if (!service) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="flex-1 md:pr-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{service.title}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {service.description}
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-orange-500">●</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Contact Us
            </button>
          </div>
          
          {/* Image Section */}
          <div className="flex-1 mt-12 md:mt-0">
            <img 
              src={cleaningImage} 
              alt="Professional cleaning service" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Practices And Medical Spaces Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Practices And Medical Spaces</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Hygiene In Health Care</h3>
              <p className="text-gray-600 text-sm">
                Hygiene is of the utmost importance in healthcare. Patients and employees trust that 
                medical practices and dental areas are spotlessly clean and free from contamination. 
                Hygiene is therefore at the top of our priority list. For a safe and healthy environment 
                for patients and medical personnel.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Hygiene In Health Care</h3>
              <p className="text-gray-600 text-sm">
                Hygiene is of the utmost importance in healthcare. Patients and employees trust that 
                medical practices and dental areas are spotlessly clean and free from contamination. 
                Hygiene is therefore at the top of our priority list. For a safe and healthy environment 
                for patients and medical personnel.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Hygiene In Health Care</h3>
              <p className="text-gray-600 text-sm">
                Hygiene is of the utmost importance in healthcare. Patients and employees trust that 
                medical practices and dental areas are spotlessly clean and free from contamination. 
                Hygiene is therefore at the top of our priority list. For a safe and healthy environment 
                for patients and medical personnel.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Hygiene In Health Care</h3>
              <p className="text-gray-600 text-sm">
                Hygiene is of the utmost importance in healthcare. Patients and employees trust that 
                medical practices and dental areas are spotlessly clean and free from contamination. 
                Hygiene is therefore at the top of our priority list. For a safe and healthy environment 
                for patients and medical personnel.
              </p>
            </div>
            
            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Hygiene In Health Care</h3>
              <p className="text-gray-600 text-sm">
                Hygiene is of the utmost importance in healthcare. Patients and employees trust that 
                medical practices and dental areas are spotlessly clean and free from contamination. 
                Hygiene is therefore at the top of our priority list. For a safe and healthy environment 
                for patients and medical personnel.
              </p>
            </div>
            
            {/* Card 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Hygiene In Health Care</h3>
              <p className="text-gray-600 text-sm">
                Hygiene is of the utmost importance in healthcare. Patients and employees trust that 
                medical practices and dental areas are spotlessly clean and free from contamination. 
                Hygiene is therefore at the top of our priority list. For a safe and healthy environment 
                for patients and medical personnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleService