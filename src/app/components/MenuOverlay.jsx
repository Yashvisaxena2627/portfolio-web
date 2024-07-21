import React from 'react';
import Link from 'next/link';

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="relative bg-[#121212] w-full max-w-md h-full rounded-lg overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>
        <ul className="flex flex-col items-center justify-center h-full">
          {links.map((link, index) => (
            <li key={index} className="mb-4">
              <Link href={link.path} className="text-white text-2xl hover:text-pink-500">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuOverlay;
