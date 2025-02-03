import { LucideMenu } from "lucide-react";
import Image from "next/image";
import React from "react";
import DSGLogoWhite from "../../public/dsg-logo-white.png";

const NavBar = () => {
  return (
    <header className="w-full max-w-screen mx-auto flex items-center justify-between font-sans text-white absolute z-[50] top-0 md:px-24 px-6 py-4">
      {/* Logo */}
      <Image
        src={DSGLogoWhite}
        alt="White DSG Logo"
        className="w-24 sm:w-28"
        priority
      />

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center md:gap-16 gap-4 overflow-hidden">
        <a href="">Home</a>
        <a href="">Mortgages</a>
        <a href="">Protection</a>
        <a href="">Privacy Policy</a>
        <a href="">About Us</a>
      </nav>

      {/* Mobile Menu Icon */}
      <LucideMenu className="md:hidden w-8 h-8 cursor-pointer" />
    </header>
  );
};

export default NavBar;
