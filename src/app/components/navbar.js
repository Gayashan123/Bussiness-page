'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/pages/basic-rates', label: 'About Us' },
    { href: '/pages/activities', label: 'Contact Us' },
    { href: '/pages/services', label: 'Services' },
    { href: '/pages/products', label: 'Products' }
  ];

  const isActiveLink = (path) => pathname === path;

  return (
    <nav className="bg-white text-black shadow-md rounded-2xl">
      <div className="  container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="relative w-20 h-20">
          <Image 
                   src="/images/user/logo.jpg" 
                   alt="Hero Image"
                   layout="fill"  
                   objectFit="cover"  
                   className="rounded-full"
                 />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`text-lg font-semibold transition duration-300 ${isActiveLink(link.href) ? 'text-blue-400' : 'hover:text-gray-500'}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Admin Button */}
        <div className="hidden md:block">
          <Link href="/admin">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700">
              Admin
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-black focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-6 px-6 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`text-lg font-semibold transition duration-300 ${isActiveLink(link.href) ? 'text-blue-400' : 'hover:text-gray-500'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-center">
            <Link href="/admin">
              <button className="uppercase px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 w-full">
                ADMIN
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}