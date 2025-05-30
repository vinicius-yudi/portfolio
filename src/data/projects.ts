import { Project } from '../types';
import SaldusImage from '../assets/Saldus.png';
import TempoDeOuro from '../assets/tempoDeOuro1.png';
import ArqManager from '../assets/arqManager.png';
import QuizApp from '../assets/quizApp.png';
import Portfolio from '../assets/portfolio.png';
import GiveLink from '../assets/giveLink.png';


export const projects: Project[] = [
  {
    id: 1,
    title: "Tempo de Ouro",
    description: "Tempo de Ouro é um site voluntariado sobre nossos idosos que estão em algum asilo e consciste em que voluntários façam visitas à esses amigos e amigas da terceira idade..",
    image: TempoDeOuro,
    technologies: ["React", "TypeScript", "Firebase", "Vercel", "CSS"],
    repoUrl: ["https://github.com/vinicius-yudi/TempoDeOuro"],
    demoUrl: "https://tempo-de-ouro.vercel.app/"
  },
  {
    id: 2,
    title: "Saldus",
    description: "Saldus é plataforma web para registrar, gerenciar, classificar e visualizar relatórios dos gastos do mês de uma pessoa.",
    image: SaldusImage,
    technologies: ["React", "JavaScript", "Tailwind CSS", "TypeScript"],
    repoUrl: ["https://github.com/vinicius-yudi/Saldus"],
    demoUrl: "https://saldus.netlify.app/"
  },
  {
    id: 3,
    title: "ArqManager",
    description: "ArqManager é uma aplicação web moderna desenvolvida para simplificar e otimizar a gestão de projetos de construção civil.",
    image: ArqManager,
    technologies: ["React", "Tailwind CSS","TypeScript", "IA"],
    repoUrl: ["https://github.com/vinicius-yudi/arqManager"],
    demoUrl: "https://arqmanager.netlify.app/"
  },
  {
    id: 4,
    title: "QuizApp",
    description: "QuizApp é um aplicativo de perguntas e respostas desenvolvido para Android, utilizando Kotlin e Jetpack Compose.",
    image: QuizApp,
    technologies: ["Kotlin", "Jetpack Compose", "Android Studio","SQlite"],
    repoUrl: ["https://github.com/vinicius-yudi/aplicativo-quiz"],
    demoUrl: "https://www.youtube.com/shorts/PXC9drgs9sA"
  },
  {
    id: 5,
    title: "Meu Portfolio",
    description: "Meu portfolio como um projeto para demonstrar minhas habilidades, conhecimentos e projetos acadêmicos e pessoais.",
    image: Portfolio,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    demoUrl: "https://viniciusyudi.com",
    repoUrl: ["https://github.com/vinicius-yudi/portfolio"],
  },
  {
    id: 6,
    title: "GiveLink",
    description: "A GiveLink é uma plataforma que intermedia e conecta doadores a instituições como hospitais, ONGs, etc.",
    image: GiveLink,
    technologies: ["React", "Python FastAPI", "Tailwind CSS", "TypeScript", "PostgreSQL"],
    demoUrl: "",
    repoUrl: ["https://github.com/vinicius-yudi/givelink-front", "https://github.com/gdserafini/givelink-server"],
  }
];