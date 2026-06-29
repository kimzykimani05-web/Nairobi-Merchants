import { motion } from 'framer-motion'
import type { Product } from '../../types/index'
import { Button } from './Button'
import { Badge } from './Badge'
import { formatPrice, generateWhatsAppLink } from '../../utils'
import { Eye, MessageCircle } from 'lucide-react'

interface ProductCardProps {
  product: Product
  onQuickView: (product: Product) => void
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden group relative flex flex-col h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Badge badge={product.badge} />
      
      <div className="aspect-square overflow-hidden relative flex-shrink-0">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHQ9IjQwMCIgaGVpZ2h0PSI0MDAiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0Y4QUFGQ2YiIC8+PHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgcng9IjIwIiBmaWxsPSIjRTRFNkVGIi8+PHRleHQgeD0iMjAwIiB5Mj0iMjAwIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMzMzQxNTUiIHRleHQtYW5jaG9sVHlwZT0ibWlkZGxlIj5QcmljZTwvdGV4dD48dGV4dCB4PSIyMDAiIHkyPSIyNDAiIGZvbnQtZmFtaWx5PSJJbnRlLCBzYW50LXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMzM0MTU1Ij5QcmljZzwv dGV4dD48L3N2Zz4='
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
      </div>
      
      <div className="p-4 space-y-3 flex-grow flex flex-col">
        <span className="text-xs font-medium text-secondary-emerald uppercase tracking-wider">
          {product.category.replace('-', ' ')}
        </span>
        
        <h3 className="font-heading font-bold text-base sm:text-lg text-primary-navy line-clamp-2 flex-grow">
          {product.name}
        </h3>
        
        <p className="text-sm text-neutral-dark line-clamp-2">
          {product.specifications[0]}
        </p>
        
        <div className="space-y-2 pt-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-neutral-dark">Unit Price</span>
            <span className="font-bold text-primary-blue text-sm sm:text-base">{formatPrice(product.unitPrice)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-neutral-dark">Carton ({product.cartonQuantity})</span>
            <span className="font-bold text-secondary-emerald text-sm sm:text-base">{formatPrice(product.cartonPrice)}</span>
          </div>
          
          {product.colors.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-dark">Colors:</span>
              <div className="flex gap-1">
                {product.colors.slice(0, 3).map((color: string, i: number) => (
                  <span key={i} className="text-xs bg-neutral-medium px-2 py-1 rounded">
                    {color}
                  </span>
                ))}
                {product.colors.length > 3 && (
                  <span className="text-xs">+{product.colors.length - 3}</span>
                )}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 mt-auto">
<Button
  variant="outline"
  size="sm"
  onClick={() => onQuickView(product)}
  className="w-full sm:w-[100px] sm:flex-none min-h-[44px]"
>
  <Eye size={16} />
  Quick View
</Button>

<Button
  variant="secondary"
  size="sm"
  href={generateWhatsAppLink(product)}
  className="w-full sm:w-[100px] sm:flex-none min-h-[44px]"
>
  <MessageCircle size={16} />
  WhatsApp
</Button>
        </div>
      </div>
    </motion.div>
  )
}