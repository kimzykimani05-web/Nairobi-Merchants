import { motion, AnimatePresence } from 'framer-motion'
import type { Product } from '../../types/index'
import { Button } from './Button'
import { Badge } from './Badge'
import { formatPrice, generateWhatsAppLink } from '../../utils'
import { X, MessageCircle, Package, Palette } from 'lucide-react'

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-4 md:p-6">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 md:top-4 md:right-4 text-neutral-dark hover:text-primary-navy touch-target p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="aspect-square bg-neutral-light rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <Badge badge={product.badge} className="static" />
                  
                  <h2 id="modal-title" className="font-heading font-bold text-xl md:text-2xl text-primary-navy">
                    {product.name}
                  </h2>
                  
                  <p className="text-neutral-dark text-responsive">{product.description}</p>
                  
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="font-heading font-semibold text-base md:text-lg">Specifications</h3>
                    <ul className="space-y-1">
                      {product.specifications.map((spec: string, i: number) => (
                        <li key={i} className="text-sm md:text-base text-neutral-dark">• {spec}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-3 md:pt-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Package size={18} className="text-secondary-emerald" aria-hidden="true" />
                      <span className="font-medium text-responsive">Wholesale Pricing Available</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div className="p-3 bg-neutral-light rounded-lg">
                        <p className="text-sm md:text-base text-neutral-dark">Unit Price</p>
                        <p className="font-bold text-lg md:text-xl text-primary-blue">{formatPrice(product.unitPrice)}</p>
                      </div>
                      <div className="p-3 bg-neutral-light rounded-lg">
                        <p className="text-sm md:text-base text-neutral-dark">Carton ({product.cartonQuantity} pcs)</p>
                        <p className="font-bold text-lg md:text-xl text-secondary-emerald">{formatPrice(product.cartonPrice)}</p>
                      </div>
                    </div>
                    
                    {product.colors.length > 0 && (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <Palette size={18} className="text-primary-blue" aria-hidden="true" />
                        <span className="text-sm md:text-base font-medium">Available Colors:</span>
                        <div className="flex gap-2 flex-wrap">
                          {product.colors.map((color: string, i: number) => (
                            <span key={i} className="text-xs md:text-sm bg-white border px-2 py-1 rounded">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-3 md:pt-4 mt-auto">
                    <Button
                      variant="primary"
                      size="lg"
                      href={generateWhatsAppLink(product)}
                      className="w-full min-h-[48px]"
                    >
                      <MessageCircle size={20} aria-hidden="true" />
                      Order via WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}