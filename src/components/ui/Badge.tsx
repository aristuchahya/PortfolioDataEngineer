import { clsx } from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'success'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        {
          'bg-surface text-muted border border-surface-2': variant === 'default',
          'bg-primary/10 text-primary border border-primary/20': variant === 'primary',
          'bg-secondary/10 text-secondary border border-secondary/20': variant === 'secondary',
          'bg-green-500/10 text-green-400 border border-green-500/20': variant === 'success',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
