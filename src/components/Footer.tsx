import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-700 dark:text-gray-300 flex items-center justify-center">
          <span>&copy; {currentYear} Vinicius Yudi. Todos os direitos reservados.</span>
          <Heart 
            size={16} 
            className="mx-2 text-indigo-600 dark:text-indigo-400 animate-pulse" 
            fill="currentColor"
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;