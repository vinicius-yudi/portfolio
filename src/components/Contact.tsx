import React, { useEffect, useRef } from 'react';
import { socialLinks } from '../data/social';
import * as LucideIcons from 'lucide-react';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = container.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll opacity-0 translate-y-8">
            Entre em <span className="text-indigo-600 dark:text-indigo-400">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 animate-on-scroll opacity-0 translate-y-8 animation-delay-200"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 animate-on-scroll opacity-0 translate-y-8 animation-delay-400">
            Vamos trabalhar juntos no seu próximo projeto? Entre em contato através de um dos canais abaixo.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {socialLinks.map((link, index) => {
            const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons];
            
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group flex flex-col items-center p-6 rounded-xl
                  bg-gray-50 dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700
                  hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300
                  animate-on-scroll opacity-0 translate-y-8
                `}
                style={{ animationDelay: `${index * 100 + 600}ms` }}
              >
                <div className="p-4 mb-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-600 transition-colors duration-300">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;