import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, ChevronDown } from 'lucide-react'
import { TrustIndicators } from './TrustIndicators'

const productsOfInterest = [
  'Kitchen Appliances',
  'Thermos Products',
  'Water Dispensers',
  'Charging Accessories',
  'Power Banks',
  'Furniture',
  'Lifestyle Products',
  'Other'
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hello Kylin!%0A%0AName: ${formData.name}%0ABusiness: ${formData.business || 'N/A'}%0APhone: ${formData.phone}%0AEmail: ${formData.email || 'N/A'}%0AProduct Interest: ${formData.product || 'General Inquiry'}%0AMessage: ${formData.message || 'No message'}`
    window.open(`https://wa.me/254114785376?text=${message}`, '_blank')
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary-navy mb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto text-responsive px-4 sm:px-0">
            Ready to place your order or inquire about wholesale? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-14">
          <motion.div
            className="lg:col-span-2 space-y-5 md:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-blue/10 text-primary-blue flex items-center justify-center">
                <img src="/images/Kylin-Logo.jpg" alt="Kylin Logo" className="h-6 w-auto object-contain" />
              </div>
              <span className="font-heading font-bold text-lg text-primary-navy">Kylin</span>
            </div>

            <p className="text-neutral-dark text-sm md:text-base leading-relaxed max-w-md">
              Your trusted supplier for quality home appliances, electronics, and lifestyle products in Kenya. We deliver excellence at wholesale prices.
            </p>

            <div className="space-y-4 pt-2">
              <ContactRow
                icon={Phone}
                label="Phone"
                value="+254 114 785 376"
                href="tel:+254114785376"
              />
              <ContactRow
                icon={Mail}
                label="Email"
                value="johnndungugikonyo@gmail.com"
                href="mailto:johnndungugikonyo@gmail.com"
              />
              <ContactRow
                icon={MapPin}
                label="Address"
                value={
                  <>
                    Koinange Street<br />
                    Kenya House Complex, Room T8<br />
                    Nairobi, Kenya
                  </>
                }
              />
              <ContactRow
                icon={Clock}
                label="Business Hours"
                value="Monday – Saturday: 8:00 AM – 6:00 PM"
              />
            </div>

            <div className="pt-4">
              <Button
                variant="whatsapp"
                size="lg"
                href="https://wa.me/254114785376"
                className="w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="bg-neutral-light rounded-2xl p-5 sm:p-7 md:p-8 border border-neutral-medium/60 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-neutral-dark">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-medium text-primary-navy placeholder:text-neutral-dark/50 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="business" className="text-xs font-semibold uppercase tracking-wider text-neutral-dark">Business Name</label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-medium text-primary-navy placeholder:text-neutral-dark/50 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all duration-200"
                    placeholder="Your business name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-neutral-dark">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-medium text-primary-navy placeholder:text-neutral-dark/50 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all duration-200"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-dark">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-medium text-primary-navy placeholder:text-neutral-dark/50 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all duration-200"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="product" className="text-xs font-semibold uppercase tracking-wider text-neutral-dark">Product of Interest</label>
                  <div className="relative">
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-medium text-primary-navy focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all duration-200 appearance-none pr-10"
                    >
                      <option value="">Select a category</option>
                      {productsOfInterest.map(product => (
                        <option key={product} value={product}>{product}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-dark pointer-events-none" aria-hidden="true" />
                  </div>
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-neutral-dark">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-medium text-primary-navy placeholder:text-neutral-dark/50 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all duration-200 resize-y min-h-[120px]"
                    placeholder="Tell us about your inquiry or order details..."
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button type="submit" variant="primary" size="lg" className="flex-1 sm:flex-none">
                  <Send size={18} />
                  Send via WhatsApp
                </Button>
                <p className="text-xs text-neutral-dark/80">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        <TrustIndicators />
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href }: { icon: React.ElementType, label: string, value: React.ReactNode, href?: string }) {
  return (
    <div className="flex items-start gap-3 md:gap-4 group">
      <div className="w-10 h-10 rounded-xl bg-primary-blue/10 text-primary-blue flex items-center justify-center flex-shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
        <Icon size={18} aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-dark mb-0.5">{label}</h3>
        {href ? (
          <a href={href} className="text-sm md:text-base text-primary-navy hover:text-primary-blue transition-colors duration-200">
            {value}
          </a>
        ) : (
          <p className="text-sm md:text-base text-primary-navy leading-relaxed">{value}</p>
        )}
      </div>
    </div>
  )
}
