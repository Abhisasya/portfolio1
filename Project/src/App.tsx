import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar darkMode={darkMode} />
        
        <button 
          onClick={toggleDarkMode} 
          className={`fixed right-4 bottom-4 p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <main>
          <Hero darkMode={darkMode} />
          <Education darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;