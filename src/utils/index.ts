import type { Product } from '../types'

export const formatPrice = (price: number): string => {
  return `KES ${price.toLocaleString()}`
}

export const generateWhatsAppLink = (product?: Product, message?: string): string => {
  const phoneNumber = '+254700000000'
  const baseUrl = 'https://wa.me'
  let fullMessage = message || "Hello, I'm interested in your products. Please share more information."
  
  if (product) {
    fullMessage = `Hello, I'm interested in ${product.name}. Please provide availability and pricing.`
  }
  
  return `${baseUrl}/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`
}

export const getBadgeStyles = (badge?: string): string => {
  switch (badge) {
    case 'best-seller':
      return 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/25'
    case 'popular':
      return 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
    case 'new-arrival':
      return 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
    case 'featured':
      return 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25'
    case 'limited':
      return 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/25'
    case 'wholesale':
      return 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg shadow-slate-700/25'
    case 'fast-selling':
      return 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
    case 'trending':
      return 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg shadow-pink-500/25'
    default:
      return ''
  }
}

export const getBadgeText = (badge?: string): string => {
  switch (badge) {
    case 'best-seller':
      return 'Best Seller'
    case 'popular':
      return 'Popular'
    case 'new-arrival':
      return 'New Arrival'
    case 'featured':
      return 'Featured'
    case 'limited':
      return 'Limited'
    case 'wholesale':
      return 'Wholesale'
    case 'fast-selling':
      return 'Fast Selling'
    case 'trending':
      return 'Trending'
    default:
      return ''
  }
}

export const getCategoryIcon = (categoryId: string): string => {
  const icons: Record<string, string> = {
    'kitchen-appliances': '🍳',
    'thermos-products': '☕',
    'home-care-appliances': '🏠',
    'water-dispensers': '💧',
    'chargers': '⚡',
    'charging-cables': '🔌',
    'power-banks': '🔋',
    'audio-products': '🎧',
    'furniture': '🛋️',
    'home-decor': '🎨'
  }
  return icons[categoryId] || '📦'
}