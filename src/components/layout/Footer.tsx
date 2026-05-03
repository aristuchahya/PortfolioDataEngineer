import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react'
import { personal } from '../../data/personal'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-heading font-bold text-lg text-gradient">Dev.Portfolio</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Passionate full-stack developer building modern digital experiences. Available for freelance & full-time opportunities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-text mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-muted text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-text mb-3">Connect</h3>
            <div className="flex gap-3">
              {[
                { icon: Github, href: personal.social.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.social.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: personal.social.twitter, label: 'Twitter' },
                { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-background flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-muted text-sm mt-3">
              <a href={`mailto:${personal.email}`} className="hover:text-primary transition-colors">
                {personal.email}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-surface-2 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="text-muted text-sm flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
