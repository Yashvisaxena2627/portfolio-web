import React from 'react';
import Link from 'next/link';
import { XMarkIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="relative bg-[#121212] w-full max-w-md h-full rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-orange-500 hover:text-green-300"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>
        <ul className="flex flex-col items-center justify-center h-full space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <span
                  className={`text-white text-xl md:text-2xl hover:text-pink-500 cursor-pointer`}
                  onClick={onClose}
                >
                  {link.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuOverlay;
