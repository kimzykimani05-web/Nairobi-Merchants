import { motion } from 'framer-motion'

interface ProductCardProps {
  image: string
  name: string
  price: number | string
  category: string
}

export function ProductCard({ image, name, price, category }: ProductCardProps) {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-24 border border-white/20 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-white/40 group-hover:shadow-xl">
        <img 
          src={image.startsWith('/') ? image : `/${image}`}
          alt={name} 
          className="w-full h-48 object-contain p-6"
        />
        <div className="absolute bottom-4 left-4 right-4 text-primary-navy">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm mt-1">KES {price}</p>
          <span className="text-xs bg-white/40 rounded-full px-2 py-0.5">{category}</span>
        </div>
      </div>
    </motion.div>
  )
}