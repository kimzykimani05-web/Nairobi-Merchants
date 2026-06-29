import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient' | 'whatsapp' | 'outline-light'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  className?: string
  type?: 'button' | 'submit'
  ariaLabel?: string
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href,
  className = '',
  type = 'button',
  ariaLabel
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-primary-blue text-white hover:bg-primary-navy focus:ring-primary-blue',
    secondary: 'bg-secondary-orange text-white hover:bg-secondary-emerald focus:ring-secondary-orange',
    outline: 'border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
    gradient: 'bg-hero-gradient text-white hover:bg-hero-premium focus:ring-primary-blue',
    whatsapp: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5 hover:scale-[1.03] focus:ring-green-500',
    'outline-light': 'border border-white/80 text-white hover:bg-white/15 hover:border-white hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5 hover:scale-[1.03] focus:ring-white'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {children}
      </a>
    )
  }
  
  return (
    <button type={type} onClick={onClick} className={`${classes} touch-target min-h-[44px]`} aria-label={ariaLabel}>
      {children}
    </button>
  )
}