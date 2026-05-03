import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTitle
            label="Career"
            title="Work"
            highlight="Experience"
            description="My professional journey and the companies I've had the privilege to work with."
            center
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background transform -translate-x-1/2 mt-6 z-10 shadow-lg shadow-primary/50" />

                <div className={`flex-1 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`glass rounded-2xl p-6 card-hover ${
                    i % 2 === 0 ? '' : ''
                  }`}>
                    <div className={`flex items-start gap-3 mb-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase size={16} className="text-primary" />
                      </div>
                      <div className={i % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className="font-heading font-bold text-text">{exp.position}</h3>
                        <p className="text-primary font-medium text-sm">{exp.company}</p>
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-3 mb-3 text-muted text-xs ${
                      i % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <div className="flex items-center gap-1">
                        <Calendar size={11} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={11} />
                        <span>{exp.type}</span>
                      </div>
                      {exp.current && (
                        <Badge variant="success">Current</Badge>
                      )}
                    </div>

                    <p className="text-muted text-sm mb-4 leading-relaxed">{exp.description}</p>

                    <ul className={`space-y-1.5 mb-4 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.responsibilities.map((r, ri) => (
                        <li key={ri} className={`text-muted text-sm flex items-start gap-2 ${
                          i % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}>
                          <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.tech.map((t) => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex flex-1 items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`glass rounded-xl px-4 py-2 border border-primary/20 ${
                      i % 2 === 0 ? 'mr-auto ml-12' : 'ml-auto mr-12'
                    }`}
                  >
                    <p className="text-primary font-medium text-sm font-heading">{exp.period}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
