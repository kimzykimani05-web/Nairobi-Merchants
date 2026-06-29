import { useState, useEffect, useCallback } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/Button'
import { generateWhatsAppLink } from '../utils'
import { Search, Star, Shield, Truck, Check, Zap, MessageCircle, ChevronDown } from 'lucide-react'
import { useProductStore } from '../store/productStore'

export function Hero() {
  const [activeThumb, setActiveThumb] = useState(0)
  const { searchTerm, setSearchTerm } = useProductStore()
  const reducedMotion = useReducedMotion()

  const featureProducts = [
    {
      image: '/images/hero section images/Stainless Steel Electric Kettle.jfif',
      name: 'Electric Kettle',
      price: 422,
      category: 'Kitchen Appliances',
      rating: 4.8,
      availability: 'In Stock'
    },
    {
      image: '/images/hero section images/Solar Power Bank.jpg',
      name: 'Power Bank',
      price: 1200,
      category: 'Electronics',
      rating: 4.9,
      availability: 'In Stock'
    },
    {
      image: '/images/hero section images/Bluetooth Earbuds.jpg',
      name: 'Bluetooth Earbuds',
      price: 850,
      category: 'Mobile Accessories',
      rating: 4.7,
      availability: 'In Stock'
    },
    {
      image: '/images/hero section images/Foldable Sofa.jfif',
      name: 'Foldable Sofa',
      price: 3500,
      category: 'Furniture',
      rating: 4.6,
      availability: 'Limited Stock'
    }
  ]

  const mainProduct = featureProducts[activeThumb]
  const productCount = featureProducts.length

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveThumb(prev => (prev + 1) % productCount)
    }, 5000)
    return () => clearInterval(timer)
  }, [productCount])

  const handleThumbClick = useCallback((index: number) => {
    setActiveThumb(index)
  }, [])

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const el = document.getElementById('products')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const staggerVariants = reducedMotion ? undefined : {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-hero-premium text-white">
      <div className="absolute inset-0 bg-hero-premium" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-400/25 rounded-full blur-[160px]"
          animate={reducedMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[140px]"
          animate={reducedMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-blue-300/15 rounded-full blur-[120px]"
          animate={reducedMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[70%] right-[20%] w-64 h-64 bg-indigo-400/15 rounded-full blur-[100px]"
          animate={reducedMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="absolute top-[12%] left-[55%] w-[450px] h-[450px] border border-white/[0.04] rounded-full" />
        <div className="absolute bottom-[15%] left-[8%] w-64 h-64 border border-white/[0.04] rotate-45 rounded-[3rem]" />
        <div className="absolute top-[50%] right-[8%] w-32 h-32 bg-white/[0.02] rounded-full blur-2xl" />
        <div className="absolute top-[25%] left-[15%] w-24 h-24 border border-white/[0.03] rounded-full" />
        <div className="absolute bottom-[25%] right-[25%] w-48 h-48 bg-blue-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-[80%] left-[70%] w-16 h-16 border border-white/[0.05] rotate-12 rounded-xl" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center min-h-[calc(100vh-7rem)]">
          <motion.div
            className="space-y-10 lg:space-y-12 text-center lg:text-left pt-6"
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] leading-[1.15] tracking-tight text-white drop-shadow-lg"
              variants={reducedMotion ? {} : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            >
              Quality Home<br className="hidden sm:block" />
              Essentials &<br className="hidden sm:block" />
              Electronics at<br className="hidden sm:block" />
              Competitive Prices
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-blue-100/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide"
              variants={reducedMotion ? {} : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }}
            >
              Discover premium home essentials and electronics at competitive prices. We supply Nairobi's finest homes and businesses with quality products, fast delivery, and dedicated support.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={reducedMotion ? {} : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.12 } } }}
            >
              <Button variant="whatsapp" size="lg" href={generateWhatsAppLink()} className="min-h-[56px]">
                <MessageCircle size={22} className="flex-shrink-0" />
                WhatsApp Us
              </Button>
              <Button variant="outline-light" size="lg" href="#products" className="min-h-[56px]">
                Browse Catalogue
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3"
              variants={reducedMotion ? {} : { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.14 } } }}
            >
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" className="drop-shadow-sm" />
                ))}
              </div>
              <span className="text-sm md:text-base text-blue-100/80 font-medium">"Fast delivery and genuine products."</span>
              <span className="text-sm text-white/50 hidden sm:inline">— Verified Customer</span>
            </motion.div>

            <motion.div
              className="relative max-w-md mx-auto lg:mx-0"
              variants={reducedMotion ? {} : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.16 } } }}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={18} aria-hidden="true" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                className="w-full pl-11 pr-4 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/15 transition-all min-h-[48px]"
                aria-label="Search products"
              />
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto lg:mx-0"
              variants={reducedMotion ? {} : { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.18 } } }}
            >
              {[
                { value: '500+', label: 'Products' },
                { value: '4.8★', label: 'Customer Rating' },
                { value: '24hrs', label: 'Delivery' },
                { value: '100%', label: 'Original Products' }
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-lg shadow-blue-900/10 hover:shadow-blue-400/20 hover:-translate-y-0.5 transition-all duration-300 text-center group"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] transition-all">{value}</div>
                  <div className="text-xs sm:text-sm text-blue-100/75 font-medium mt-1">{label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              variants={reducedMotion ? {} : { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } } }}
            >
              {[
                { text: 'Nairobi Supplier', icon: Shield },
                { text: 'Wholesale Available', icon: Truck },
                { text: 'Fast WhatsApp Orders', icon: Zap },
                { text: 'Quality Assured', icon: Check }
              ].map(({ text, icon: Icon }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 hover:bg-white/15 hover:scale-105 hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
                >
                  <Icon size={14} className="text-green-400" />
                  <span className="text-xs md:text-sm text-white/90 font-medium tracking-wide">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex flex-col items-center lg:pl-8 xl:pl-12 pt-4 lg:pt-0"
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.92 }}
            animate={reducedMotion ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <motion.div
                className="absolute -inset-8 bg-gradient-to-br from-blue-400/30 to-sky-400/20 rounded-[3rem] blur-3xl"
                animate={reducedMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="relative bg-white rounded-[2rem] p-6 sm:p-8 shadow-2xl shadow-blue-900/30 border border-white/40"
                animate={reducedMotion ? {} : { y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={reducedMotion ? {} : { y: -10, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] flex items-center justify-center">
                    <img
                      src={mainProduct.image}
                      alt={mainProduct.name}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>

                  <div className="w-full mt-6 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-bold text-xl sm:text-2xl text-primary-navy truncate">{mainProduct.name}</h3>
                        <p className="text-sm text-neutral-dark/70 mt-0.5">{mainProduct.category}</p>
                      </div>
                      <div className="bg-gradient-to-r from-secondary-orange to-yellow-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wide whitespace-nowrap">
                        Best Seller
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-semibold text-primary-navy">{mainProduct.rating}</span>
                        <span className="text-xs text-neutral-dark/60">• {mainProduct.availability}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-neutral-dark/60 font-medium">Price</div>
                        <div className="text-xl font-heading font-bold text-primary-navy">KES {mainProduct.price.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex gap-3 mt-8 justify-center">
              {featureProducts.slice(0, 4).map((product, index) => (
                <motion.button
                  key={product.name}
                  className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-white/10 backdrop-blur-md ${
                    index === activeThumb
                      ? 'border-white shadow-lg shadow-white/20 scale-105'
                      : 'border-white/20 opacity-70 hover:opacity-90'
                  }`}
                  onClick={() => handleThumbClick(index)}
                  whileHover={reducedMotion ? {} : { scale: 1.08 }}
                  whileTap={reducedMotion ? {} : { scale: 0.95 }}
                  aria-label={`View ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain p-1.5"
                  />
                  {index === activeThumb && (
                    <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-1 bg-white rounded-b-full" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col items-center justify-center mt-16 pb-8"
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="text-sm font-medium text-white/60 mb-3 tracking-wide">Explore Products</span>
          <motion.div
            animate={reducedMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/60"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
