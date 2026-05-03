import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { projects } from '../../data/projects'

const featured = projects.filter((p) => p.featured)

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            label="My Work"
            title="Featured"
            highlight="Projects"
            description="A selection of projects I'm proud of. Each one taught me something new."
          />
          <Link to="/projects">
            <Button variant="outline" size="sm">
              View All Projects
              <ArrowRight size={14} />
            </Button>
          </Link>
        </div>

        <div className="space-y-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group glass rounded-2xl overflow-hidden card-hover"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent lg:bg-gradient-to-r" />
                  <Badge
                    variant="primary"
                    className="absolute top-4 left-4"
                  >
                    {project.category}
                  </Badge>
                </div>

                <div className={`p-8 flex flex-col justify-center space-y-4 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div>
                    <p className="text-primary text-sm font-medium mb-2">
                      Project {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-heading font-bold text-2xl text-text group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted leading-relaxed">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" size="sm">
                          <Github size={14} />
                          Source Code
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
