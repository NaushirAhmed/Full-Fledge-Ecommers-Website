import React, { useState, useEffect } from 'react';


const Newslatters = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
   const textMessages = [
    "✨ 5 Ways to Transform Your Space With a Nuravi Carpet",
    "🌟 Exclusive Deals Just For Our Subscribers!",
    "🎨 Discover the Latest Carpet Designs & Trends",
    "📧 Get Interior Design Tips Direct to Your Inbox",
    "💫 Be the First to Know About New Collections"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => 
          prevIndex === textMessages.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500); // Half of the transition time
    }, 3000);

    return () => clearInterval(interval);
  }, [textMessages.length]);


    return (
    <div className='text-center bg-gradient-to-r from-gray-100 to-gray-200  border-t border-b border-gray-300'>
      {/* Animated Text */}
      <div className={`transition-all duration-500 transform ${
        isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
      }`}>
        <div className='text-sm md:text-base lg:text-lg font-semibold text-gray-800 '>
          {textMessages[currentTextIndex]}
        </div>
      </div>
      </div>
    )
}

export default Newslatters