export interface Experience {
  id: number
  company: string
  position: string
  type: string
  period: string
  startDate: string
  endDate: string
  current: boolean
  description: string
  responsibilities: string[]
  tech: string[]
  logo?: string
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'PT. Ebdesk Technology',
    position: 'Data Engineer',
    type: 'Full-time',
    period: '2025',
    startDate: '2025-02',
    endDate: 'present',
    current: true,
    description: 'Responsible for designing and implementing data pipelines, managing databases, and ensuring data quality for a SaaS platform that serves over 10,000 users. Collaborate closely with cross-functional teams to deliver data-driven features and insights.',
    responsibilities: [
      'Architected and built scalable data pipelines using Python and Airflow',
      'Designed and optimized Elasticsearch clusters for fast data retrieval',
    ],
    tech: ['Python', 'Airflow', 'Elasticsearch', 'Docker', 'Git', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    id: 2,
    company: 'PT. Ebdesk Technology',
    position: 'Backend Developer',
    type: 'Full-time',
    period: '2024 – 2025',
    startDate: '2024-10',
    endDate: '2025-02',
    current: false,
    description: 'Mainly responsible for developing and maintaining the backend of a SaaS platform that serves over 10,000 users. Collaborated closely with frontend developers and product managers to deliver new features and improve performance.',
    responsibilities: [
      'Architected and built scalable backend services using Java and Spring Boot',
      'Designed and implemented RESTful APIs consumed by React frontend',
    ],
    tech: ['Java', 'Spring Boot', 'Elasticsearch', 'Docker', 'Git'],
  },
  {
    id: 3,
    company: 'Freelance',
    position: 'Web Developer',
    type: 'Freelance',
    period: '2023 – 2024',
    startDate: '2023-11',
    endDate: '2024-04',
    current: false,
    description: 'Worked with small businesses to build their online presence through custom websites and web applications.',
    responsibilities: [
      'Designed and developed websites for local businesses',
      'Built custom React components and integrated with RESTful APIs',
      'Integrated payment systems and booking functionality',
      'Provided ongoing maintenance and technical support',
    ],
    tech: ['JavaScript', 'React', 'NestJS', 'PostgreSQL', 'TailwindCSS', 'Git'],
  },
]
