import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            Transformando ideias em <span className="text-indigo-600 dark:text-indigo-400">soluções digitais</span> de alto impacto
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 opacity-0 translate-y-8 animate-fade-in-up animation-delay-300">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais que combinam estética e funcionalidade.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 translate-y-8 animate-fade-in-up animation-delay-600">
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-600/30"
            >
              Ver projetos
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-medium rounded-full hover:bg-indigo-600/10 transition-all duration-300"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a
          href="#about"
          className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-indigo-600 dark:text-indigo-400 shadow-md"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={24} />
        </a>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;