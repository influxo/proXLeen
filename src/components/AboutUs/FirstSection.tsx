import React from 'react'
import bottleImage from '../../assets/images/bottle.jpg'

const FirstSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Section with Stats */}
        <div className="relative flex-1 border-l-2 border-orange-400 pl-4">
          <img 
            src={bottleImage} 
            alt="Clean professional environment" 
            className="w-full rounded-lg shadow-md"
          />
          
          {/* Monthly Mentors Stats Box */}
          <div className="absolute top-4 right-[-20px] bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-600 text-sm mb-1">Monthly Mentors</p>
            <p className="text-3xl font-bold text-gray-800">5000+</p>
          </div>
          
          {/* Reviews Stats Box */}
          <div className="absolute bottom-4 left-[-20px] bg-white p-4 rounded-lg shadow-lg">
            <div className="flex gap-1 justify-center mb-1">
              <span className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-gray-600">👤</span>
              <span className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-gray-600">👤</span>
            </div>
            <p className="text-lg font-bold text-gray-800">8000+ reviews</p>
          </div>
          
          {/* Decorative Dots */}
          <div className="absolute top-[-20px] right-[-20px] w-16 h-16 opacity-50">
            <div className="grid grid-cols-5 gap-1">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-green-500 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Text Section */}
        <div className="flex-1 md:pl-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Professional maintenance is essential to create a clean 
            and safe environment, regardless of the type of space.
            At Aco Clean we are your reliable partner, with more 
            than 15 years of experience, for high-quality cleaning 
            services in various professional environments.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Get a quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default FirstSection