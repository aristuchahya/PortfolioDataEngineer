export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools'
  icon: string
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 85, category: 'frontend', icon: '📘' },
  { name: 'Next.js', level: 80, category: 'frontend', icon: '▲' },
  { name: 'TailwindCSS', level: 90, category: 'frontend', icon: '🎨' },
  { name: 'Vue.js', level: 70, category: 'frontend', icon: '💚' },
  { name: 'HTML/CSS', level: 95, category: 'frontend', icon: '🌐' },

  // Backend
  { name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
  { name: 'Express.js', level: 82, category: 'backend', icon: '🚂' },
  { name: 'Python', level: 75, category: 'backend', icon: '🐍' },
  { name: 'REST API', level: 88, category: 'backend', icon: '🔌' },
  // { name: 'GraphQL', level: 70, category: 'backend', icon: '◈' },

  // Database
  { name: 'PostgreSQL', level: 80, category: 'database', icon: '🐘' },
  { name: 'MongoDB', level: 78, category: 'database', icon: '🍃' },
  { name: 'MySQL', level: 75, category: 'database', icon: '🐬' },
  { name: 'Redis', level: 65, category: 'database', icon: '🔴' },
  { name: 'Elasticsearch', level: 75, category: 'database', icon: '🔍' },

  // DevOps
  { name: 'Docker', level: 72, category: 'devops', icon: '🐳' },
  { name: 'Git', level: 88, category: 'devops', icon: '🔀' },
  { name: 'CI/CD', level: 68, category: 'devops', icon: '🔄' },
  { name: 'Linux', level: 75, category: 'devops', icon: '🐧' },

  // Tools
  { name: 'VS Code', level: 95, category: 'tools', icon: '💻' },
  { name: 'Figma', level: 70, category: 'tools', icon: '🎭' },
  { name: 'Postman', level: 85, category: 'tools', icon: '📮' },
]

export const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'TailwindCSS', color: '#06B6D4' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Git', color: '#F05032' },
]
