import React, { useEffect, useRef } from 'react';
import { Code, Server, Globe, Figma } from 'lucide-react';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
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

  const skills = [
    { icon: <Code size={24} />, title: "Front-End", items: ["React", "Vue.js", "Next.js", "TypeScript", "TailwindCSS"] },
    { icon: <Server size={24} />, title: "Back-End", items: ["Node.js", "Express", "Python", "Django", "PostgreSQL"] },
    { icon: <Globe size={24} />, title: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git", "Linux"] },
    { icon: <Figma size={24} />, title: "Design", items: ["UI/UX", "Figma", "Responsive Design", "Accessibility"] }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll opacity-0 translate-y-8">
            Minhas <span className="text-indigo-600 dark:text-indigo-400">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 animate-on-scroll opacity-0 translate-y-8 animation-delay-200"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 animate-on-scroll opacity-0 translate-y-8 animation-delay-400">
            Tecnologias e ferramentas que utilizo para criar soluções excepcionais
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className={`
                bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700
                hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300
                animate-on-scroll opacity-0 translate-y-8 transform hover:-translate-y-2
              `}
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skill.title}
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;