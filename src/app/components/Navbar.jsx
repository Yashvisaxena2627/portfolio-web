"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 right-0 z-10 bg-[#121212] ${scrolledDown ? "bg-opacity-0" : "bg-opacity-0"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:py-4">
        <Link href="/" className="flex items-center text-2xl md:text-5xl text-orange-500 font-semibold">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
        </Link>
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="flex items-center px-3 py-2 text-orange-500 hover:text-green-300 hover:border-green-300"
          >
            {!navbarOpen ? (
              <Bars3Icon className="h-6 w-6" />
            ) : (
              <XMarkIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path} title={link.title} className="text-orange-500 hover:text-green-300" />
          ))}
        </div>
      </div>
      {navbarOpen && scrolledDown && <MenuOverlay links={navLinks} onClose={handleToggle} />}
    </nav>
  );
};

export default Navbar;
