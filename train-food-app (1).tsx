import React, { useState } from 'react';
import { 
  User, 
  CreditCard, 
  Settings, 
  Bell, 
  MapPin, 
  Heart, 
  LogOut 
} from 'lucide-react';

const ProfileScreen = () => {
  const [user] = useState({
    name: 'สมชาย เดินทาง',
    email: 'somchai.travel@example.com',
    points: 520,
    trips: 27,
    savedLocations: [
      {
        name: 'บ้าน',
        address: '123 ถ.รัชดาภิเษก กรุงเทพมหานคร 10310',
        type: 'home',
        coordinates: { lat: 13.7563, lng: 100.5018 }
      },
      {
        name: 'ที่ทำงาน',
        address: '456 อาคารซีพีทาวเวอร์ ถ.สีลม กรุงเทพมหานคร 10500',
        type: 'work',
        coordinates: { lat: 13.7278, lng: 100.5329 }
      }
    ]
  });

  return (
    <div className="bg-gray-100 h-full">
      <div className="bg-blue-700 p-6 rounded-b-2xl">
        <div className="flex items-center space-x-4">
          <div className="bg-white p-2 rounded-full">
            <User size={40} className="text-blue-700" />
          </div>
          <div>
            <h2 className="text-white text-xl font-bold">{user.name}</h2>
            <p className="text-blue-200">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">สถานที่บันทึก</h3>
            <button className="text-blue-600">+ เพิ่มสถานที่</button>
          </div>

          {user.savedLocations.map((location) => (
            <div 
              key={location.name} 
              className="flex items-center bg-blue-50 rounded-lg p-3 mb-2"
            >
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                {location.type === 'home' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                    <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/>
                    <path d="M9 22V12h6v10m-9-8h12V4l-6-3-6 3v12z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                    <path d="M12 22v-7"/>
                    <path d="M16 16.7a9 9 0 1 0-8 0v7"/>
                    <circle cx="12" cy="7" r="5"/>
                  </svg>
                )}
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold">{location.name}</h4>
                <p className="text-gray-600 text-sm">{location.address}</p>
              </div>
              <button className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">แผนที่เส้นทาง</h3>
            <button className="text-blue-600">ดูทั้งหมด</button>
          </div>
          <div className="bg-blue-50 rounded-lg h-48 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="mx-auto text-blue-700 mb-2" />
              <p className="text-gray-600">กำลังโหลดแผนที่...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
