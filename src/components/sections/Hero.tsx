import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import { personal } from '../../data/personal'

const floatingTech = [
  { name: 'React', angle: 0, color: '#61DAFB', emoji: '⚛️' },
  { name: 'TS', angle: 60, color: '#3178C6', emoji: '📘' },
  { name: 'Node', angle: 120, color: '#339933', emoji: '🟢' },
  { name: 'Next', angle: 180, color: '#FFFFFF', emoji: '▲' },
  { name: 'SQL', angle: 240, color: '#4169E1', emoji: '🐘' },
  { name: 'Docker', angle: 300, color: '#2496ED', emoji: '🐳' },
]

function TechOrbit() {
  const radius = 160
  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        {floatingTech.map((tech, i) => {
          const rad = (tech.angle * Math.PI) / 180
          const x = 50 + (radius / 192) * 50 * Math.cos(rad)
          const y = 50 + (radius / 192) * 50 * Math.sin(rad)
          return (
            <motion.div
              key={tech.name}
              className="absolute w-12 h-12 rounded-xl glass flex flex-col items-center justify-center cursor-pointer"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
                border: `1px solid ${tech.color}40`,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              whileHover={{ scale: 1.3 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              custom={i}
            >
              <span className="text-lg">{tech.emoji}</span>
              <span className="text-[9px] text-muted font-medium">{tech.name}</span>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 flex items-center justify-center animate-pulse-glow">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-heading font-bold text-4xl md:text-5xl shadow-2xl">
              A
            </div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-2 -right-2 w-7 h-7 bg-green-400 rounded-full border-2 border-background flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-full border border-primary/10 animate-spin-slow" />
      <div className="absolute inset-8 rounded-full border border-secondary/10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" id="hero">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm text-muted"
            >
              <Sparkles size={14} className="text-primary" />
              <span>Available for new opportunities</span>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>

            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-primary font-medium tracking-widest text-sm uppercase"
              >
                — Introducing
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-heading font-black text-5xl md:text-6xl lg:text-7xl leading-tight"
              >
                Hello,{' '}
                <span className="text-gradient">I'm</span>
                <br />
                <span className="text-text">{personal.name}</span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="h-px w-8 bg-primary" />
                <span className="text-xl text-muted font-medium">{personal.role}</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted text-lg leading-relaxed max-w-md"
            >
              {personal.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
                <ArrowDown size={16} />
              </Button>
              <a href={personal.resume} download>
                <Button variant="secondary" size="lg">
                  <Download size={16} />
                  Download CV
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-2"
            >
              <span className="text-muted text-sm">Follow me:</span>
              {[
                { icon: Github, href: personal.social.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.social.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-all hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-8 pt-2"
            >
              {[
                { value: '1+', label: 'Years Exp.' },
                { value: '10+', label: 'Projects Done' },
                { value: '5+', label: 'Happy Clients' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading font-bold text-2xl text-gradient">{stat.value}</p>
                  <p className="text-muted text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <TechOrbit />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-muted text-xs tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
