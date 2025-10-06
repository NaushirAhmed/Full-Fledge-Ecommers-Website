import React, { useState } from 'react';

const StorySlider = () => {
  const [activeTab, setActiveTab] = useState('OUR STORY');
  
  const tabs = [
    'OUR STORY',
    'OUR HERITAGE',
    'FOUNDER\'S VISION',
    'CRAFTSMANSHIP AND INNOVATION'
  ];
  
  const content = {
    'OUR STORY': {
      title: 'Our Story',
      text: 'Nuravi began with a simple mission: to bring exceptional quality rugs to homes around the world. Our journey started over two decades ago...',
      media: (
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <video 
            className="w-full h-full object-cover" 
            autoPlay
            loop
            muted
            poster="postervideo.png"
            src='/nuraviStory.mp4'
            controls 
          >
          </video>
        </div>
      )
    },
    'OUR HERITAGE': {
      title: 'Our Heritage',
      text: 'With roots in traditional rug-making regions, we honor centuries-old techniques while adapting to contemporary styles and needs...',
      media: (
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="heritage.jpg" 
            alt="Heritage" 
            className="w-full h-full object-cover"
          />
        </div>
      )
    },
    'FOUNDER\'S VISION': {
      title: 'Founder\'s Vision',
      text: 'Our founder believed that every home deserves beautiful, handcrafted rugs that tell a story. This vision continues to guide us today...',
      media: (
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="founder.jpg" 
            alt="Founder's Vision" 
            className="w-full h-full object-cover"
          />
        </div>
      )
    },
    'CRAFTSMANSHIP AND INNOVATION': {
      title: 'Craftsmanship and Innovation',
      text: 'At Nuravi, craftsmanship is at the heart of everything we do. Our rugs are a testament to the skill and dedication of artisans who have perfected their craft over generations.',
      media: (
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" 
            alt="Craftsmanship" 
            className="w-full h-full object-cover"
          />
        </div>
      )
    }
  };

  return (
    <div className="bg-white py-3 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm md:text-base font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>
        
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 px-4">
          {/* Media Section */}
          <div className="w-full lg:w-1/2">
            {content[activeTab].media}
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {content[activeTab].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {content[activeTab].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySlider;