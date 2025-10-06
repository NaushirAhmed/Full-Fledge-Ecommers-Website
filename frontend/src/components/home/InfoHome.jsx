import React from 'react';
import Title from '../Title';

const Features = () => {
  return (
    <section className="py-5 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Title text1={"Why Choose Us?"}/>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="group bg-white rounded-lg shadow-md p-3 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 h-64 flex flex-col relative overflow-hidden hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-blue-100 text-blue-600 text-xl mx-auto group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 relative z-10">
              <img src='/info1.png'/>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300 relative z-10">
              Generational Expertise & Craftsmanship
            </h3>
            
            <p className="text-sm text-gray-600 mt-auto group-hover:text-gray-700 transition-colors duration-300 relative z-10">
              Over three generations of carpet-making experience, blending tradition with modern aesthetics to deliver unmatched quality.
            </p>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>

          {/* Feature 2 */}
          <div className="group bg-white rounded-lg shadow-md p-3 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 h-64 flex flex-col relative overflow-hidden hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-green-100 text-green-600 text-xl mx-auto group-hover:bg-green-500 group-hover:text-white transition-colors duration-300 relative z-10">
              <img className='object-cover' src='/info2.png'/>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300 relative z-10">
              Premium Yet Reasonable
            </h3>
            
            <p className="text-sm text-gray-600 mt-auto group-hover:text-gray-700 transition-colors duration-300 relative z-10">
              Offering luxurious carpets at prices more affordable than big brands, while maintaining superior quality unlike lower-priced alternatives online.
            </p>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>

          {/* Feature 3 */}
          <div className="group bg-white rounded-lg shadow-md p-3 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 h-64 flex flex-col relative overflow-hidden hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-purple-100 text-purple-600 text-xl mx-auto group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300 relative z-10">
             <img src='/info3.png'/>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300 relative z-10">
              Bhadohi Advantage & Customization
            </h3>
            
            <p className="text-sm text-gray-600 mt-auto group-hover:text-gray-700 transition-colors duration-300 relative z-10">
              Manufactured in Bhadohi, the carpet capital of India, with the flexibility to offer custom designs tailored to unique customer preferences.
            </p>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>

          {/* Feature 4 */}
          <div className="group bg-white rounded-lg shadow-md p-3 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 h-64 flex flex-col relative overflow-hidden hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-amber-100 text-amber-600 text-xl mx-auto group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 relative z-10">
              <img className='w-13 h-13'  src='/info4.png'/>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300 relative z-10">
              14 Days Return Policy
            </h3>
            
            <p className="text-sm text-gray-600 mt-auto group-hover:text-gray-700 transition-colors duration-300 relative z-10">
              We offer a hassle-free 14-day return policy on all our products. If you're not completely satisfied with your purchase, you can return it in its original condition for a full refund or exchange.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;