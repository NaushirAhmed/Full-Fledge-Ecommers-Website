import React from 'react';
import { Link } from 'react-router-dom';

const CompactCarpetSelection = () => {
  return (
    <div className="w-full py-6 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-items-center">
          {/* Living Room */}
          <div className="w-full max-w-[280px]">
            <div className="aspect-square w-full mx-auto bg-gradient-to-r from-amber-200 to-amber-400 rounded-lg overflow-hidden relative">
              <Link to="/livingroom" className="block h-full w-full">
                <img 
                  src="https://carpetplanet.in/cdn/shop/files/filter_by_room_3.png?crop=center&height=450&v=1738916561&width=450" 
                  alt="Living Room" 
                  className="h-full w-full object-cover"
                />
                <p className="text-base sm:text-lg font-bold text-black absolute bottom-2 left-3 z-50 bg-white bg-opacity-80 px-2 py-1 rounded-md shadow-sm">
                  Living Room
                </p>
              </Link>
            </div>
          </div>
          
          {/* Dining Room */}
          <div className="w-full max-w-[280px]">
            <div className="aspect-square w-full mx-auto bg-gradient-to-r from-emerald-200 to-emerald-400 rounded-lg overflow-hidden relative">
              <Link to="/diningroom" className="block h-full w-full">
                <img 
                  src="https://carpetplanet.in/cdn/shop/files/filter_by_room_4.png?crop=center&height=450&v=1738916561&width=450" 
                  alt="Dining Room" 
                  className="h-full w-full object-cover"
                />
                <p className="text-base sm:text-lg font-bold text-black absolute bottom-2 left-3 z-50 bg-white bg-opacity-80 px-2 py-1 rounded-md shadow-sm">
                  Dining Room
                </p>
              </Link>
            </div>
          </div>
          
          {/* Bed Room */}
          <div className="w-full max-w-[280px]">
            <div className="aspect-square w-full mx-auto bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg overflow-hidden relative">
              <Link to="/bedroom" className="block h-full w-full">
                <img 
                  src="https://carpetplanet.in/cdn/shop/files/filter_by_room_01.png?crop=center&height=450&v=1738916561&width=450" 
                  alt="Bed Room" 
                  className="h-full w-full object-cover"
                />
                <p className="text-base sm:text-lg font-bold text-black absolute bottom-2 left-3 z-50 bg-white bg-opacity-80 px-2 py-1 rounded-md shadow-sm">
                  Bed Room
                </p>
              </Link>
            </div>
          </div>
          
          {/* Kids Room */}
          <div className="w-full max-w-[280px]">
            <div className="aspect-square w-full mx-auto bg-gradient-to-r from-pink-200 to-pink-400 rounded-lg overflow-hidden relative">
              <Link to="/kidsroom" className="block h-full w-full">
                <img 
                  src="https://carpetplanet.in/cdn/shop/files/filter_by_room_2.png?crop=center&height=450&v=1738916561&width=450" 
                  alt="Kids Room" 
                  className="h-full w-full object-cover"
                />
                <p className="text-base sm:text-lg font-bold text-black absolute bottom-2 left-3 z-50 bg-white bg-opacity-80 px-2 py-1 rounded-md shadow-sm">
                  Kids Room
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompactCarpetSelection;