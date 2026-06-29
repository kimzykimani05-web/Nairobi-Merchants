import { getBadgeStyles, getBadgeText } from '../../utils'

interface BadgeProps {
  badge?: string
  className?: string
}

export function Badge({ badge, className = '' }: BadgeProps) {
  if (!badge) return null
  
  return (
    <span 
      className={`absolute top-3 right-3 px-3 py-1.5 text-xs font-bold rounded-full z-10 transition-all duration-300 hover:scale-105 ${getBadgeStyles(badge)} ${className}`}
      role="status"
      aria-label={getBadgeText(badge)}
    >
      {getBadgeText(badge)}
    </span>
  )
}