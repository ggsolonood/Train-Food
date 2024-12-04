import React, { useState } from 'react';

const StationScreen = () => {
  const [stations] = useState([
    {
      name: 'สถานีหัวลำโพง',
      code: 'HLP',
      distance: '2.5 กม.',
      facilities: ['Wi-Fi', 'จุดชาร์จ', 'ห้องน้ำ']
    },
    {
      name: 'สถานีบางซื่อ',
      code: 'BSN',
      distance: '5.7 กม.',
      facilities: ['ร้านอาหาร', 'Wi-Fi', 'จุดบริการ']
    }
  ]);

  return (
    <div className="bg-gray-100 h-full">
      <div className="bg-blue-700 p-4 rounded-b-2xl">
        <div className="flex items-center bg-white rounded-lg p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input 
            type="text" 
            placeholder="ค้นหาสถานีรถไฟ" 
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-3">สถานีใกล้เคียง</h3>
          {stations.map((station) => (
            <div 
              key={station.code} 
              className="flex items-center bg-blue-50 rounded-lg p-3 mb-2"
            >
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                  <path d="M9 4h6"/>
                  <path d="M4 7h16"/>
                  <path d="M10 11v6"/>
                  <path d="M14 11v6"/>
                  <path d="M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
                </svg>
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold">{station.name}</h4>
                <p className="text-gray-600 text-sm">
                  รหัสสถานี: {station.code} • ระยะห่าง {station.distance}
                </p>
                <div className="flex mt-1 space-x-2">
                  {station.facilities.map((facility) => (
                    <span 
                      key={facility} 
                      className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
              <button className="text-blue-600">เลือก</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StationScreen;
