import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brown/5">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center">
            <Link href="/" className="text-2xl font-eb-garamond text-brown-dark hover:text-primary transition-colors">
              Piano Lessons with Kerry Terry
            </Link>
            
            <div className="mt-4 relative w-24 h-24">
              <Image
                src="/images/Best Treble Heart Clef AI of a trace v2.jpg"
                alt="Kerry Heart Clef"
                fill
                className="object-contain"
              />
            </div>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-eb-garamond text-brown-dark mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="/" className="block nav-link">
                Home
              </Link>
              <Link href="/about" className="block nav-link">
                About
              </Link>
              <Link href="/contact" className="block nav-link">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-eb-garamond text-brown-dark mb-4">Contact</h3>
            <div className="space-y-3 text-brown">
              <p>
                <a href="mailto:kerryterry@aol.com" className="nav-link">
                kerryterry@aol.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-brown/5 text-center text-brown">
          <p>&copy; {currentYear} Kerry Terry Piano. All rights reserved.</p>
          <p className="mt-2 text-[14px] text-brown/60">
            Website designed and built by{' '}
            <a 
              href="https://derivativegenius.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brown transition-colors duration-200"
            >
              Derivative Genius
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
