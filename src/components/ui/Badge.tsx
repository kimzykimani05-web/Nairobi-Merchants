import { getBadgeStyles, getBadgeText } from '../../utils'

interface BadgeProps {
  badge?: string
  className?: string
}

export function Badge({ badge, className = '' }: BadgeProps) {
  if (!badge) return null
  
  return (
    <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full ${getBadgeStyles(badge)} ${className}`}>
      {getBadgeText(badge)}
    </span>
  )
}