import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { Mail, Send } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-primary-blue/10 text-primary-blue flex items-center justify-center">
            <Mail size={20} aria-hidden="true" />
          </div>
          <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-primary-navy mb-2">
            Stay Updated
          </h2>
          <p className="text-neutral-dark text-sm md:text-base mb-6 max-w-md mx-auto">
            Be the first to know about new arrivals, wholesale offers, and exclusive deals.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-neutral-medium bg-white text-primary-navy placeholder:text-neutral-dark/60 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200 min-h-[48px]"
            />
            <Button type="submit" variant="primary" className="min-h-[48px]">
              Subscribe
              <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
