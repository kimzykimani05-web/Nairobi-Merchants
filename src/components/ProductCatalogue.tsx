import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Product } from '../types/index'
import { ProductCard } from './ui/ProductCard'
import { ProductModal } from './ui/ProductModal'
import { useProductStore } from '../store/productStore'
import { Search } from 'lucide-react'

export function ProductCatalogue() {
  const { products, searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, sortBy, setSortBy, priceRange, setPriceRange } = useProductStore()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || product.category === selectedCategory
    const matchesPrice = product.unitPrice >= priceRange[0] && product.unitPrice <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.unitPrice - b.unitPrice
      case 'price-high':
        return b.unitPrice - a.unitPrice
      case 'newest':
        return 0
      case 'popular':
        return (a.badge === 'best-seller' ? -1 : 1) - (b.badge === 'best-seller' ? -1 : 1)
      default:
        return 0
    }
  })

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <section id="products" className="py-12 md:py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary-navy mb-4">
            Product Catalogue
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto text-responsive">
            Browse our complete range of quality products
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-dark" size={20} aria-hidden="true" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary-blue min-h-[44px]"
              aria-label="Search products"
            />
          </div>

          <select
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
            className="px-4 py-3 border border-neutral-medium rounded-lg bg-white min-h-[44px]"
            aria-label="Filter by category"
          >
            <option value="">All Categories</option>
            <option value="kitchen-appliances">Kitchen Appliances</option>
            <option value="thermos-products">Thermos Products</option>
            <option value="home-care-appliances">Home Care Appliances</option>
            <option value="water-dispensers">Water Dispensers</option>
            <option value="chargers">Charging Accessories</option>
            <option value="charging-cables">Charging Cables</option>
            <option value="power-banks">Power Banks</option>
            <option value="audio-products">Audio Accessories</option>
            <option value="furniture">Furniture</option>
            <option value="home-decor">Home Décor</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-3 border border-neutral-medium rounded-lg bg-white min-h-[44px]"
            aria-label="Sort products"
          >
            <option value="popular">Popular First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {sortedProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard product={product} onQuickView={handleQuickView} />
            </motion.div>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <p className="text-center text-neutral-dark py-12 text-responsive">No products found matching your criteria</p>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}