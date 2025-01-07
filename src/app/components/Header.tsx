"use client";

import Link from "next/link";
// import { useState } from "react";

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white w-full py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-bold text-[#10ff00]">
            Elevate Sports Garage
          </span>
        </Link>

        {/* Mobile menu button */}
        {/* <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button> */}

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-[#10ff00] transition-colors">
            Home
          </Link>
          <Link
            href="#services"
            className="hover:text-[#10ff00] transition-colors"
          >
            Services
          </Link>
          <Link
            href="#pricing"
            className="hover:text-[#10ff00] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#10ff00] transition-colors"
          >
            Contact
          </Link>
        </nav> */}

        {/* Mobile Navigation */}
        {/* {isMenuOpen && (
          <nav className="absolute top-16 left-0 right-0 bg-black p-4 md:hidden flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-[#10ff00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="hover:text-[#10ff00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="hover:text-[#10ff00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="hover:text-[#10ff00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )} */}
      </div>
    </header>
  );
}
