import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function CallToAction() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary-navy via-primary-blue to-primary-navy p-8 sm:p-10 md:p-14 text-center md:text-left shadow-xl"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary-emerald/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
            <div className="max-w-2xl">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-3 md:mb-4 leading-tight">
                Ready to Upgrade Your Home or Business?
              </h2>
              <p className="text-neutral-light text-sm sm:text-base md:text-lg leading-relaxed">
                Discover premium home appliances and electronics at wholesale prices. Supply your retail store, hotel, or home with quality Kylin products trusted across Kenya.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:gap-4 flex-shrink-0">
              <Button
                variant="outline-light"
                size="lg"
                className="group hover:bg-white hover:text-primary-navy"
              >
                Browse Catalogue
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-secondary-emerald hover:bg-secondary-orange text-white shadow-lg"
                href="https://wa.me/254114785376"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
