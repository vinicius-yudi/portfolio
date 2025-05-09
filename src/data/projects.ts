import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    repoUrl: "https://github.com/viniciusyudi/ecommerce",
    demoUrl: "https://ecommerce-demo.viniciusyudi.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
    image: "https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    repoUrl: "https://github.com/viniciusyudi/task-manager",
    demoUrl: "https://tasks.viniciusyudi.com"
  },
  {
    id: 3,
    title: "Health Tracking Dashboard",
    description: "A comprehensive health metrics dashboard that visualizes user activity, nutrition, and wellness data.",
    image: "https://images.pexels.com/photos/9574342/pexels-photo-9574342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    repoUrl: "https://github.com/viniciusyudi/health-tracker",
  },
  {
    id: 4,
    title: "Real Estate Listing Platform",
    description: "A property listing application with advanced filtering, virtual tours, and appointment scheduling.",
    image: "https://images.pexels.com/photos/7578986/pexels-photo-7578986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "GraphQL", "Apollo", "MongoDB"],
    repoUrl: "https://github.com/viniciusyudi/real-estate",
    demoUrl: "https://realestate.viniciusyudi.com"
  },
  {
    id: 5,
    title: "AI Content Generator",
    description: "An AI-powered application that generates custom content for marketing, blogs, and social media.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    repoUrl: "https://github.com/viniciusyudi/ai-content-generator",
  },
  {
    id: 6,
    title: "Finance Tracker",
    description: "A personal finance application with expense tracking, budget planning, and financial insights.",
    image: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Recharts"],
    repoUrl: "https://github.com/viniciusyudi/finance-tracker",
    demoUrl: "https://finance.viniciusyudi.com"
  }
];