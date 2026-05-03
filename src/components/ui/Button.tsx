import { forwardRef } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50',
          {
            'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25':
              variant === 'primary',
            'bg-surface text-text border border-surface-2 hover:border-primary/50 hover:bg-surface-2':
              variant === 'secondary',
            'border border-primary/50 text-primary hover:bg-primary hover:text-white':
              variant === 'outline',
            'text-muted hover:text-text hover:bg-surface': variant === 'ghost',
          },
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-5 py-2.5 text-sm': size === 'md',
            'px-7 py-3.5 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
