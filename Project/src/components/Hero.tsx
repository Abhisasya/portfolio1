import React from 'react';
import { ArrowDown,  Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="my-auto py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className={`w-64 h-64 mx-auto rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-500' : 'border-blue-600'}`}>
                <img 
                  src="/profile.jpg"
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute inset-0 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} blur-xl opacity-20`}></div>
            </div>
          </div>
          
          <div className="md:w-1/2 text-center md:text-left">
            <div className="max-w-lg mx-auto md:mx-0">
              <p className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
                Abhisasya Balasankula
              </h1>
              <h2 className={`text-xl md:text-2xl font-medium mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Software Developer
              </h2>
              <p className={`mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm a passionate software developer with expertise in creating responsive, 
                user-friendly applications. With a strong foundation in modern technologies 
                and a keen eye for detail, I build engaging digital experiences.
              </p>
              
              <div className="flex space-x-4 justify-center md:justify-start">
                
                <a 
                  href="https://www.linkedin.com/in/balasankula-abhisasya91392b1b3" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:balasankulaabhi@gmail.com" 
                  className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center pb-8 animate-bounce">
        <a href="#education" className={`inline-block p-2 rounded-full ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'}`}>
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;