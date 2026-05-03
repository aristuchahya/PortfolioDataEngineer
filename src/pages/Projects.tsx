import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, ChevronRight } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'

type Category = 'all' | Project['category']

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'web', label: 'Web App' },
  { key: 'api', label: 'API / Backend' },
  { key: 'mobile', label: 'Mobile' },
]

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="glass rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl shadow-primary/10"
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 glass rounded-full flex items-center justify-center text-muted hover:text-text transition-colors"
          >
            <X size={16} />
          </button>
          <Badge variant="primary" className="absolute bottom-4 left-4">
            {project.category}
          </Badge>
        </div>
        <div className="p-6 space-y-4">
          <h2 className="font-heading font-bold text-2xl text-text">{project.title}</h2>
          <p className="text-muted leading-relaxed">{project.longDescription}</p>
          <div>
            <p className="text-sm text-muted mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="sm">
                  <Github size={14} />
                  GitHub
                </Button>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Button size="sm">
                  <ExternalLink size={14} />
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="glass rounded-2xl overflow-hidden cursor-pointer group card-hover"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="glass px-4 py-2 rounded-xl text-sm text-white flex items-center gap-2">
            View Details <ChevronRight size={14} />
          </div>
        </div>
        <Badge variant="primary" className="absolute top-3 left-3">
          {project.category}
        </Badge>
        {project.featured && (
          <Badge variant="secondary" className="absolute top-3 right-3">
            Featured
          </Badge>
        )}
      </div>
      <div className="p-5 space-y-3">
        <h3 className="font-heading font-bold text-text group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <Badge key={t} variant="default">{t}</Badge>
          ))}
          {project.tech.length > 3 && (
            <Badge variant="default">+{project.tech.length - 3}</Badge>
          )}
        </div>
        <div className="flex gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm">
                <Github size={12} />
              </Button>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm">
                <ExternalLink size={12} />
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [category, setCategory] = useState<Category>('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = category === 'all'
    ? projects
    : projects.filter((p) => p.category === category)

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTitle
            label="Portfolio"
            title="All My"
            highlight="Projects"
            description="A collection of projects I've built, ranging from web apps to backend services."
            center
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                category === cat.key
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                  : 'glass text-muted hover:text-text'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted">
            No projects found in this category.
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
