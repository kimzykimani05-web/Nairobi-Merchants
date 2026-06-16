import { motion } from 'framer-motion'
import type { Product } from '../types/index'
import { ProductCard } from './ui/ProductCard'
import { ProductModal } from './ui/ProductModal'
import { useProductStore } from '../store/productStore'
import { useState } from 'react'

export function FeaturedProducts() {
  const { products } = useProductStore()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const featuredProducts = products.filter(p => p.badge && ['best-seller', 'popular', 'new-arrival'].includes(p.badge)).slice(0, 4)

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <section id="featured" className="py-12 md:py-20 bg-neutral-light">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary-navy mb-4">
            Featured Products
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto text-responsive">
            Our most popular and latest products handpicked for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={product} onQuickView={handleQuickView} />
            </motion.div>
          ))}
        </div>
      </div>
      
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}