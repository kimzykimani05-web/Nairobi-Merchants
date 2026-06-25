import { motion, useReducedMotion } from 'framer-motion'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Array<{
    image: string
    name: string
    price: number | string
    category: string
  }>
}

export function ProductGrid({ products }: ProductGridProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product, index) => {
        const animationProps = reducedMotion
          ? {}
          : {
              animate: { y: [0, -8, 0] },
              transition: { duration: 5 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
            }

        return (
          <motion.div
            key={product.name}
            className="aspect-square"
            {...animationProps}
          >
            <ProductCard {...product} />
          </motion.div>
        )
      })}
    </div>
  )
}