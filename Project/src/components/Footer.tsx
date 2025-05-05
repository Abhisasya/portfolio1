import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`py-10 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#" 
              className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
            >
              Portfolio
            </a>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Building modern web experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
            
              <a 
                href="https://www.linkedin.com/in/balasankula-abhisasya91392b1b3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:balasankulaabhi@gmail.com" 
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
            
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              &copy; {new Date().getFullYear()} Abhisasya Balasankula
            </p>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop} 
        className={`fixed right-4 bottom-16 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;