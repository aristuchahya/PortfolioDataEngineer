export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  tech: string[]
  category: 'web' | 'mobile' | 'fullstack' | 'api'
  github?: string
  live?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with real-time inventory, payment integration, and admin dashboard.',
    longDescription: 'A complete e-commerce solution built with Next.js, featuring real-time inventory management, Stripe payment integration, order tracking, and a comprehensive admin dashboard with analytics.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind'],
    category: 'fullstack',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Real-time collaborative task management with drag-and-drop, team features, and progress tracking.',
    longDescription: 'A Trello-like task management application with real-time collaboration using WebSockets, drag-and-drop boards, team workspaces, and detailed progress analytics.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    category: 'fullstack',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Chat Assistant',
    description: 'Intelligent chat application powered by AI with conversation history and context awareness.',
    longDescription: 'An AI-powered chat assistant built with React and integrated with OpenAI API, featuring conversation history, context awareness, and multiple chat modes.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    tech: ['React', 'OpenAI API', 'Node.js', 'Redis', 'TypeScript'],
    category: 'web',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts, data visualization, and custom reports.',
    longDescription: 'A comprehensive analytics platform with real-time data visualization using Chart.js, interactive filters, custom report generation, and PDF export functionality.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
    category: 'web',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'REST API Service',
    description: 'Scalable microservices REST API with authentication, rate limiting, and comprehensive documentation.',
    longDescription: 'A production-ready REST API built with Express.js featuring JWT authentication, role-based access control, rate limiting, caching with Redis, and Swagger documentation.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    tech: ['Node.js', 'Express', 'JWT', 'Redis', 'Docker'],
    category: 'api',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Modern blog platform with CMS, SEO optimization, and markdown support.',
    longDescription: 'A full-featured blog platform with a custom CMS, markdown editor, SEO optimization, image optimization, and social sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    tech: ['Next.js', 'MDX', 'Sanity', 'TailwindCSS', 'Vercel'],
    category: 'web',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
]
