import { memo, useState, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import type { Product } from '../../types/index'
import { Button } from './Button'
import { Badge } from './Badge'
import { formatPrice, generateWhatsAppLink } from '../../utils'
import { Eye, MessageCircle } from 'lucide-react'

interface ProductCardProps {
  product: Product
  onQuickView: (product: Product) => void
  featured?: boolean
}

export const ProductCard = memo(function ProductCard({ product, onQuickView, featured = false }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const hasMultipleImages = product.images.length > 1
  const currentImage = useMemo(() => product.images[currentImageIndex] || product.images[0], [product.images, currentImageIndex])
  
  const handleImageHover = useCallback(() => {
    if (hasMultipleImages && currentImageIndex < product.images.length - 1) {
      setCurrentImageIndex(1)
    }
  }, [hasMultipleImages, currentImageIndex, product.images.length])
  
  const handleImageLeave = useCallback(() => {
    setCurrentImageIndex(0)
  }, [])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      className="bg-white rounded-20 border border-gray-100/50 shadow-premium group relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-1"
      variants={cardVariants}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <Badge badge={product.badge} />

      <div 
        className="aspect-product overflow-hidden relative flex-shrink-0 bg-product-image"
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageLeave}
      >
        <motion.img
          src={currentImage}
          alt={product.name}
          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHQ9IjQwMCIgaGVpZ2h0PSI0MDAiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI0Y4QUFGQ2YiIC8+PHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgcng9IjIwIiBmaWxsPSIjRTRFNkVGIi8+PHRleHQgeD0iMjAwIiB5Mj0iMjAwIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMzMzQxNTUiIHRleHQtYW5jaG9sVHlwZT0ibWlkZGxlIj5QcmljZTwvdGV4dD48dGV4dCB4PSIyMDAiIHkyPSIyNDAiIGZvbnQtZmFtaWx5PSJJbnRlLCBzYW50LXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMzM0MTU1Ij5QcmljZzwv dGV4dD48L3N2Zz4='
          }}
        />
        
        {hasMultipleImages && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === currentImageIndex ? 'bg-primary-blue w-4' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 space-y-3 flex-grow flex flex-col">
        <span className="text-xs font-semibold text-neutral-dark uppercase tracking-wider">
          {product.category.replace(/-/g, ' ')}
        </span>
        
        <h3 className="font-heading font-bold text-base sm:text-lg text-primary-navy line-clamp-2 leading-tight flex-grow">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-500 line-clamp-1">
          {product.specifications[0]}
        </p>

        <div className="border-t border-gray-100 pt-3 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 uppercase tracking-wide">Unit Price</span>
            <span className="font-bold text-base sm:text-lg text-secondary-emerald">{formatPrice(product.unitPrice)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 uppercase tracking-wide">Carton Price</span>
            <span className="font-semibold text-sm sm:text-base text-gray-600">{formatPrice(product.cartonPrice)}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-2 mt-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onQuickView(product)}
            className="w-full min-h-[44px] text-sm font-medium"
            ariaLabel={`Quick view ${product.name}`}
          >
            <Eye size={16} aria-hidden="true" />
            Quick View
          </Button>

          <Button
            variant="whatsapp"
            size="sm"
            href={generateWhatsAppLink(product)}
            className="w-full min-h-[44px] text-sm font-medium shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
            ariaLabel={`Order ${product.name} via WhatsApp`}
          >
            <MessageCircle size={16} aria-hidden="true" />
            Order Now
          </Button>
        </div>
      </div>
    </motion.div>
  )
})