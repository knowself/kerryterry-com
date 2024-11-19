import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  // Handle body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => 
    path === '/' ? router.pathname === '/' : router.pathname.startsWith(path);

  return (
    <header className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        onKeyDown={handleKeyDown}
      >
        <Link 
          href="/" 
          className="flex items-center gap-3 text-xl font-medium text-gray-900 hover:text-gray-600 transition"
          aria-label="Kerry Terry - Home"
        >
          <Image
            src="/images/logo.png"
            alt="Kerry Terry Piano"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
            priority
          />
          <span>Kerry Terry</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium ${
                isActive(link.href) 
                  ? 'text-gray-900 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              } transition-colors`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`} />
            <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile menu"
        className={`fixed inset-0 top-16 bg-white/80 backdrop-blur-md z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container mx-auto px-6 py-8">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium ${
                  isActive(link.href) ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                } transition-colors`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
