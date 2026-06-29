import { motion } from 'framer-motion'
import { ShieldCheck, Truck, Headphones, Lock } from 'lucide-react'

const trustBadges = [
  { icon: ShieldCheck, label: 'Quality Assured' },
  { icon: Truck, label: 'Wholesale Supplier' },
  { icon: Headphones, label: 'Reliable Support' },
  { icon: Lock, label: 'Secure Ordering' }
]

export function TrustPayment() {
  return (
    <div className="bg-neutral-light border-t border-neutral-medium/50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-dark mr-2">Accepted Payments</span>
            {['M-Pesa', 'Visa', 'Mastercard', 'Bank Transfer'].map((method) => (
              <span
                key={method}
                className="px-3 py-1.5 bg-white rounded-md border border-neutral-medium shadow-sm text-xs font-semibold text-primary-navy whitespace-nowrap"
              >
                {method}
              </span>
            ))}
          </div>

          <div className="h-px md:h-8 md:w-px bg-neutral-medium md:mx-4" />

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-1.5 text-xs md:text-sm text-neutral-dark"
              >
                <badge.icon size={16} className="text-secondary-emerald flex-shrink-0" aria-hidden="true" />
                <span className="font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
