import React from 'react';
import ReactLogo from '../assets/react.png';
import FigmaLogo from '../assets/figma.png';
import PythonLogo from '../assets/python.png';
import AndroidStudio from '../assets/androidStudio.png';
import Firebase from '../assets/firebase.png';
import Kotlin from '../assets/kotlin.png';
import TypeScript from '../assets/typeScript.png';
import MySql from '../assets/mysql.png';
import NodeJS from '../assets/nodejs.png';



const Skills: React.FC = () => {
  const logos = [
    { icon: ReactLogo, name: 'React' },
    { icon: FigmaLogo, name: 'Figma' },
    { icon: PythonLogo, name: 'Python' },
    { icon: AndroidStudio, name: 'Android Studio' },
    { icon: Firebase, name: 'Firebase' },
    { icon: Kotlin, name: 'Kotlin' },
    { icon: TypeScript, name: 'TypeScript' },
    { icon: MySql, name: 'MySQL' },
    { icon: NodeJS, name: 'Node.js' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Minhas <span className="text-indigo-600 dark:text-indigo-400">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Tecnologias e ferramentas que utilizo para criar soluções excepcionais
          </p>
        </div>

        {/* Carrossel */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-32 h-32 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <img src={logo.icon} alt={logo.name} className="w-16 h-16" />
              </div>
            ))}
            {/* Duplicação para efeito contínuo */}
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-32 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <img src={logo.icon} alt={logo.name} className="w-16 h-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;