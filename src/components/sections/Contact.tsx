import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { personal } from '../../data/personal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: '#' },
    { icon: MessageSquare, label: 'WhatsApp', value: 'Chat with me', href: personal.social.whatsapp },
  ]

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTitle
            label="Get In Touch"
            title="Let's Work"
            highlight="Together"
            description="Have a project in mind? Let's discuss how I can help bring your ideas to life."
            center
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="font-heading font-bold text-xl text-text">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                      <Icon size={16} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-muted text-xs">{label}</p>
                      <p className="text-text text-sm font-medium group-hover:text-primary transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-surface-2">
                <p className="text-muted text-sm mb-3">Find me on</p>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: personal.social.github, label: 'GitHub' },
                    { icon: Linkedin, href: personal.social.linkedin, label: 'LinkedIn' },
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
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Available for work</span>
              </div>
              <p className="text-muted text-sm">
                I'm currently looking for new opportunities. Whether it's a full-time role or
                a freelance project, I'd love to hear from you!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-text mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-muted text-sm mb-1.5">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-surface border border-surface-2 rounded-xl px-4 py-3 text-text text-sm placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-muted text-sm mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-surface border border-surface-2 rounded-xl px-4 py-3 text-text text-sm placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-muted text-sm mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="w-full bg-surface border border-surface-2 rounded-xl px-4 py-3 text-text text-sm placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-muted text-sm mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-surface border border-surface-2 rounded-xl px-4 py-3 text-text text-sm placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === 'sending' || status === 'sent'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="animate-spin">⟳</span>
                      Sending...
                    </>
                  ) : status === 'sent' ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>
                {status === 'sent' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm text-center"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
