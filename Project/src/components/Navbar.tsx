import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled 
      ? darkMode 
        ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' 
        : 'bg-white/95 shadow-lg backdrop-blur-sm' 
      : 'bg-transparent'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-bold text-xl">
            <a href="#" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-300`}>
              Portfolio
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#about" className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>About</a>
              <a href="#education" className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>Education</a>
              <a href="#experience" className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>Experience</a>
              <a href="#skills" className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>Skills</a>
              <a href="#projects" className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>Projects</a>
              <a href="#contact" className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>Contact</a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } transition-colors duration-300`}
              >
                Resume
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className={`p-2 rounded-md ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#education" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </a>
            <a 
              href="#experience" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#skills" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              } transition-colors duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;