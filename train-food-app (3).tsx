import React, { useState } from 'react';
import { 
  Home, 
  MapPin, 
  ShoppingCart, 
  User, 
  Train, 
  Search 
} from 'lucide-react';

// Main App Component
const TrainFoodApp = () => {
  const [activeScreen, setActiveScreen] = useState('home');

  const renderScreen = () => {
    switch(activeScreen) {
      case 'home':
        return <HomeScreen />;
      case 'stations':
        return <StationsScreen />;
      case 'order':
        return <OrderScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow overflow-y-auto">
        {renderScreen()}
      </div>
      <BottomNavigation 
        activeScreen={activeScreen} 
        onScreenChange={setActiveScreen} 
      />
    </div>
  );
};

// Home Screen Component
const HomeScreen = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-800">Train Meal</h1>
        <Train color="#1E40AF" size={32} />
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-md mb-4">
        <div className="flex items-center mb-2">
          <Search className="mr-2 text-gray-500" />
          <input 
            type="text" 
            placeholder="ค้นหาอาหาร จังหวัด หรือสถานี" 
            className="w-full outline-none"
          />
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">เส้นทางยอดนิยม</h2>
        <div className="flex space-x-2 overflow-x-auto">
          {['กรุงเทพ-เชียงใหม่', 'กรุงเทพ-หาดใหญ่', 'อุดร-กรุงเทพ'].map((route) => (
            <div 
              key={route} 
              className="bg-blue-100 px-4 py-2 rounded-full text-blue-800"
            >
              {route}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">ร้านอาหารใกล้คุณ</h2>
        <div className="space-y-3">
          {[
            { name: 'ข้าวมันไก่สุรินทร์', station: 'สถานีสุรินทร์' },
            { name: 'ส้มตำอีสาน', station: 'สถานีขอนแก่น' },
            { name: 'ก๋วยเตี๋ยวเรือ', station: 'สถานีอยุธยา' }
          ].map((restaurant) => (
            <div 
              key={restaurant.name} 
              className="bg-white p-3 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{restaurant.name}</h3>
                <p className="text-gray-500 text-sm">{restaurant.station}</p>
              </div>
              <button className="bg-green-500 text-white px-3 py-1 rounded-full">
                สั่งเลย
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Bottom Navigation Component
const BottomNavigation = ({ activeScreen, onScreenChange }) => {
  const navItems = [
    { icon: Home, screen: 'home' },
    { icon: MapPin, screen: 'stations' },
    { icon: ShoppingCart, screen: 'order' },
    { icon: User, screen: 'profile' }
  ];

  return (
    <div className="bg-white flex justify-around py-3 shadow-lg">
      {navItems.map(({ icon: Icon, screen }) => (
        <button 
          key={screen}
          onClick={() => onScreenChange(screen)}
          className={`p-2 rounded-full ${
            activeScreen === screen 
              ? 'bg-blue-100 text-blue-700' 
              : 'text-gray-500'
          }`}
        >
          <Icon />
        </button>
      ))}
    </div>
  );
};

// Placeholder screens (can be developed further)
const StationsScreen = () => <div>สถานี</div>;
const OrderScreen = () => <div>ออเดอร์</div>;
const ProfileScreen = () => <div>โปรไฟล์</div>;

export default TrainFoodApp;
