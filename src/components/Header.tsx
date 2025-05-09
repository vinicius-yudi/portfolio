import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
        >
          Vinicius<span className="text-indigo-600">Yudi</span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className={`
                    text-base font-medium capitalize transition-all duration-300
                    ${isScrolled 
                      ? 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400' 
                      : 'text-gray-800 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400'
                    }
                    hover:underline underline-offset-8 decoration-2
                  `}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`
          md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="text-xl font-medium capitalize text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;