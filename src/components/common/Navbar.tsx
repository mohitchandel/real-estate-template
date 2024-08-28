"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 md:py-5 transition-all duration-300 ${isScrolled ? 'py-2 md:py-3' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer hover:text-pink-300 transition-colors duration-300"
          >
            Dream<span className="text-pink-300">Home</span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={handleMobileMenuToggle}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop and Mobile Navigation Links */}
          <div
            className={`lg:flex lg:items-center absolute lg:relative top-full left-0 right-0 bg-white lg:bg-transparent ${
              isMobileMenuOpen ? "block" : "hidden"
            } transition-all duration-300 lg:transition-none`}
          >
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-1 xl:space-x-4 p-4 lg:p-0">
              {[
                { href: "/Dashboard", label: "Dashboard" },
                { href: "/Property/Property_type", label: "PropertyType" },
                { href: "/Services", label: "Services" },
                { href: "/About", label: "About Us" },
                { href: "/Contact_us", label: "Contact" },
                { href: "/Login", label: "Login" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}