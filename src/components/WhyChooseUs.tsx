import { motion } from 'framer-motion'
import { DollarSign, Shield, Package, MapPin, Zap, Headphones, Tag, CheckCircle } from 'lucide-react'

export function WhyChooseUs() {
  const features = [
    { icon: DollarSign, title: 'Competitive Pricing', desc: 'Best prices in Nairobi market' },
    { icon: Shield, title: 'Premium Product Quality', desc: 'Tested and verified products' },
    { icon: Package, title: 'Wholesale Supply Available', desc: 'Bulk orders welcome' },
    { icon: MapPin, title: 'Nairobi-Based Operations', desc: 'Local supplier, fast delivery' },
    { icon: Zap, title: 'Fast Order Processing', desc: 'Quick response and shipping' },
    { icon: Headphones, title: 'Dedicated Customer Support', desc: 'Personal assistance always' },
    { icon: Tag, title: 'Bulk Discounts', desc: 'Volume-based savings' },
    { icon: CheckCircle, title: 'Trusted Supplier', desc: 'Verified business partner' }
  ]

  return (
    <section className="py-12 md:py-20 bg-neutral-light">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary-navy mb-4">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-xl p-6 text-center shadow-md touch-target"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <feature.icon size={36} className="mx-auto mb-4 text-primary-blue" aria-hidden="true" />
              <h3 className="font-heading font-bold text-base md:text-lg text-primary-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-responsive text-neutral-dark">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}