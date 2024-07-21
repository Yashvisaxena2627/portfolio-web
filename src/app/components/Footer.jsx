import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 flex justify-between">
          <Image
            src="/images/logo.png" 
            alt="Logo"
            width={40} 
            height={40} 
            className="text-orange-500" 
          />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
