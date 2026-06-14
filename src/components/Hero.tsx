import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { generateWhatsAppLink } from '../utils'
import { Package, Truck, Shield, Clock } from 'lucide-react'

export function Hero() {
  const trustBadges = [
    { icon: Package, text: 'Nairobi-Based Supplier' },
    { icon: Package, text: 'Wholesale Available' },
    { icon: Shield, text: 'Quality Assured' },
    { icon: Clock, text: 'Fast Response Time' },
    { icon: Truck, text: 'Reliable Customer Support' }
  ]

  return (
    <section id="hero" className="relative min-h-screen bg-hero-gradient text-white pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 h-48 sm:-top-40 sm:-right-40 sm:w-80 sm:h-80 bg-primary-blue rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 sm:-bottom-40 sm:-left-40 sm:w-80 sm:h-80 bg-secondary-emerald rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen py-12 md:py-20">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.h1
              className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Quality Home Essentials & Electronics at Competitive Prices
            </motion.h1>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-neutral-light max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Supplying Nairobi with affordable and premium household products, mobile accessories, electronics, and lifestyle essentials.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button variant="gradient" size="lg" href="#products" className="w-full sm:w-auto min-h-[48px]">
                Browse Catalogue
              </Button>
              
              <Button variant="outline" size="lg" href={generateWhatsAppLink()} className="w-full sm:w-auto min-h-[48px]">
                Order via WhatsApp
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {trustBadges.map((badge, i: number) => (
                <motion.div
                  key={badge.text}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <badge.icon size={18} className="text-secondary-emerald" />
                  <span className="text-xs sm:text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square bg-white/10 rounded-xl backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}