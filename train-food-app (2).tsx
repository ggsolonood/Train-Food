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
    trips: 27
  });

  const menuItems = [
    { 
      icon: CreditCard, 
      title: 'วิธีการชำระเงิน', 
      subtitle: 'จัดการบัตรเครดิต และวอลเล็ท' 
    },
    { 
      icon: Bell, 
      title: 'การแจ้งเตือน', 
      subtitle: 'จัดการการแจ้งเตือนของคุณ' 
    },
    { 
      icon: MapPin, 
      title: 'สถานีโปรด', 
      subtitle: 'รายการสถานีที่คุณชอบ' 
    },
    { 
      icon: Heart, 
      title: 'ร้านอาหารที่ชื่นชอบ', 
      subtitle: 'คอลเลคชันร้านอาหารของคุณ' 
    },
    { 
      icon: Settings, 
      title: 'การตั้งค่า', 
      subtitle: 'การตั้งค่าแอปพลิเคชัน' 
    }
  ];

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
        <div className="flex justify-between mt-4">
          <div className="text-center">
            <h3 className="text-white font-bold text-lg">{user.points}</h3>
            <p className="text-blue-200 text-sm">คะแนน</p>
          </div>
          <div className="text-center">
            <h3 className="text-white font-bold text-lg">{user.trips}</h3>
            <p className="text-blue-200 text-sm">การเดินทาง</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 mt-4">
        {menuItems.map((item) => (
          <div 
            key={item.title} 
            className="bg-white p-4 rounded-lg flex items-center shadow-md"
          >
            <div className="bg-blue-100 p-2 rounded-full mr-4">
              <item.icon className="text-blue-700" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.subtitle}</p>
            </div>
            <button className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="p-4">
        <button className="w-full bg-red-500 text-white py-3 rounded-lg flex items-center justify-center">
          <LogOut className="mr-2" />
          ออกจากระบบ
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
