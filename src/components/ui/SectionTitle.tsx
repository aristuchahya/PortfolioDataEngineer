import { motion } from 'framer-motion'

interface SectionTitleProps {
  label?: string
  title: string
  highlight?: string
  description?: string
  center?: boolean
}

export default function SectionTitle({ label, title, highlight, description, center = false }: SectionTitleProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-medium text-sm tracking-widest uppercase mb-3"
        >
          — {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text"
      >
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted text-lg mt-4 max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
