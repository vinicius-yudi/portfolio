import React, { useEffect, useRef } from 'react';
import FotoPerfil from '../assets/fotoPerfil.jpg';
import CurriculoPDF from '../assets/viniciusYudi.pdf'; // Certifique-se de adicionar o arquivo PDF na pasta assets

const About: React.FC = () => {
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

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll opacity-0 translate-y-8">
            Sobre <span className="text-indigo-600 dark:text-indigo-400">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 animate-on-scroll opacity-0 translate-y-8 animation-delay-200"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-on-scroll opacity-0 translate-x-(-8)">
            <div className="overflow-hidden rounded-full shadow-2xl w-80 h-100 mx-auto">
              <img
                src={FotoPerfil}
                alt="Vinicius Yudi"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-x-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Olá! Sou Vinicius Yudi, tenho 20 anos e sou estudante de Sistemas de Informações na PUCPR, atualmente estou no 5° período.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Minha jornada como estudante e desenvolvedor me levou a explorar, estudar e trabalhar com diversas tecnologias e metodologias, sempre buscando a excelência técnica e a melhor experiência para o usuário final.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Quando não estou codificando, você pode me encontrar explorando novas tecnologias, principalmente IAs. No meu tempo livre, pratico diversos hobbies, como jogar no computador, ouvir música, jogar futebol, sair com os amigos, ir em encontros de carros e o que eu mais gosto é praticar pesca esportiva.
            </p>
            {/* Botão de Currículo */}
            <a
              href={CurriculoPDF}
              download="Vinicius_Yudi_Curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
            >
              Baixar Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;