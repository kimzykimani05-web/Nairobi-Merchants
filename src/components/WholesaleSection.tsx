import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { Package, TrendingDown, Users, ShoppingCart } from 'lucide-react'

export function WholesaleSection() {
  const benefits = [
    { icon: Package, title: 'Competitive Pricing', desc: 'Bulk discounts for large orders' },
    { icon: TrendingDown, title: 'Volume Discounts', desc: 'Up to 30% off on carton orders' },
    { icon: Users, title: 'Reliable Supply', desc: 'Consistent stock for business needs' },
    { icon: ShoppingCart, title: 'MOQ Friendly', desc: 'Minimum order quantities vary by product' }
  ]

  return (
    <section id="wholesale" className="py-12 md:py-20 bg-hero-gradient text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            Bulk Purchasing Solutions
          </h2>
          <p className="max-w-2xl mx-auto opacity-90 text-responsive px-4 sm:px-0">
            We provide competitive pricing and reliable supply solutions for retailers, hotels, Airbnb hosts, offices, institutions, and resellers throughout Kenya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center touch-target"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <benefit.icon size={36} className="mx-auto mb-4 text-secondary-emerald" aria-hidden="true" />
              <h3 className="font-heading font-bold text-base md:text-lg mb-2">{benefit.title}</h3>
              <p className="text-responsive opacity-80">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button variant="secondary" size="lg" href="#contact" className="min-h-[48px]">
            Request Wholesale Pricing
          </Button>
        </motion.div>
      </div>
    </section>
  )
}