import React from 'react';

const TabButton = ({ id, activeTab, onClick, children }) => {
  const isActive = id === activeTab;
  return (
    <button
      className={`px-6 py-2 rounded-full font-bold transition-colors duration-300
        ${isActive ? 'bg-gradient-to-r from-purple-700 to-pink-500 text-white shadow-lg' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}
      `}
      onClick={() => onClick(id)}
    >
      {children}
    </button>
  );
};

export default TabButton;
