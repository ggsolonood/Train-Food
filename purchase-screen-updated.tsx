import React, { useState } from 'react';

const PurchaseScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'ข้าวเหนียวหมูปิ้ง',
      price: 59,
      quantity: 1,
      image: '/placeholder/food1.jpg'
    },
    {
      id: 2,
      name: 'น้ำดื่ม',
      price: 20,
      quantity: 2,
      image: '/placeholder/water.jpg'
    }
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="bg-gray-100 h-full">
      <div className="bg-blue-700 p-6 rounded-b-2xl">
        <div className="flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <h2 className="text-white text-xl font-bold">ตะกร้าสินค้า</h2>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-3">รายการอาหาร</h3>
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center bg-blue-50 rounded-lg p-3 mb-2"
            >
              <div className="bg-white p-1 rounded-lg mr-3">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded-lg" 
                />
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-600">฿{item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-blue-100 px-2 rounded">-</button>
                <span>{item.quantity}</span>
                <button className="bg-blue-100 px-2 rounded">+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between mb-2">
            <span>ยอดรวม</span>
            <span className="font-bold">฿{calculateTotal()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>ส่วนลด</span>
            <span className="text-green-600">-฿0</span>
          </div>
          <div className="border-t pt-2 flex justify-between">
            <span className="font-bold">ยอดสุทธิ</span>
            <span className="font-bold text-blue-700">฿{calculateTotal()}</span>
          </div>
        </div>

        <button className="w-full bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
            <line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
          ชำระเงิน
        </button>
      </div>
    </div>
  );
};

export default PurchaseScreen;
