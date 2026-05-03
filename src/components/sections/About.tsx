import { motion } from 'framer-motion'
import { MapPin, Mail, Calendar, Award, Coffee, Code, Zap } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { personal } from '../../data/personal'

const highlights = [
  { icon: Code, label: 'Clean Code', desc: 'Writing maintainable, scalable solutions' },
  { icon: Zap, label: 'Fast Delivery', desc: 'Meeting deadlines without compromising quality' },
  { icon: Award, label: 'Best Practices', desc: 'Following industry standards & patterns' },
  { icon: Coffee, label: 'Passionate', desc: 'Always learning new technologies' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/20 via-surface to-secondary/20 border border-surface-2 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                <div className="relative z-10 text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center text-white font-heading font-bold text-5xl shadow-2xl shadow-primary/30">
                    A
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-text mb-1">{personal.fullName}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{personal.role}</p>
                  <div className="flex items-center justify-center gap-2 text-muted text-sm">
                    <MapPin size={14} className="text-primary" />
                    <span>{personal.location}</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 glass rounded-xl p-3 border border-primary/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-muted">Available</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                <span className="font-heading font-bold text-3xl">1+</span>
                <span className="text-xs opacity-80">Years Exp</span>
              </div>
              <div className="absolute -top-4 -left-4 glass rounded-2xl p-3 border border-secondary/20">
                <Award className="text-secondary" size={24} />
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <SectionTitle
              label="About Me"
              title="Passionate developer"
              highlight="& problem solver"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 text-muted leading-relaxed"
            >
              <p>
                I'm a passionate full-stack developer based in {personal.location}, with a strong
                focus on building exceptional digital experiences. With 3+ years of professional
                experience, I've worked on everything from small business websites to complex
                enterprise applications.
              </p>
              <p>
                My expertise spans across the entire web development stack — from crafting pixel-perfect
                user interfaces with React and TypeScript to building robust backend services with
                Node.js and PostgreSQL. I believe in clean code, thoughtful architecture, and
                continuous learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-3"
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="glass rounded-xl p-4 card-hover"
                >
                  <item.icon size={20} className="text-primary mb-2" />
                  <h4 className="font-semibold text-text text-sm">{item.label}</h4>
                  <p className="text-muted text-xs mt-0.5">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {[
                { icon: Mail, label: personal.email },
                { icon: MapPin, label: personal.location },
                { icon: Calendar, label: 'Available Now' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-muted text-sm">
                  <Icon size={14} className="text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
