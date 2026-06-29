import { motion } from 'framer-motion'
import { MessageCircle, Truck, ShieldCheck, MapPin, Headphones } from 'lucide-react'

const indicators = [
  {
    icon: MessageCircle,
    title: 'Fast WhatsApp Response',
    description: 'Quick replies during business hours'
  },
  {
    icon: Truck,
    title: 'Wholesale Orders Accepted',
    description: 'Bulk pricing for retailers & businesses'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assured Products',
    description: 'Genuine items with warranty support'
  },
  {
    icon: MapPin,
    title: 'Nairobi-Based Supplier',
    description: 'Located in the heart of the CBD'
  },
  {
    icon: Headphones,
    title: 'Reliable Customer Support',
    description: 'Dedicated assistance for every client'
  }
]

export function TrustIndicators() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {indicators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative bg-white rounded-xl p-4 md:p-5 border border-neutral-medium/60 shadow-sm hover:shadow-md hover:border-primary-blue/30 transition-all duration-300 text-center"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-full bg-primary-blue/10 text-primary-blue flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                <item.icon size={20} aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-xs sm:text-sm md:text-base text-primary-navy leading-tight">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
