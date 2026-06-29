import { motion } from 'framer-motion'
import { Facebook, Instagram, Music, Linkedin, MessageCircle, ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#wholesale', label: 'Wholesale' },
  { href: '#catalogue', label: 'Catalogue' },
  { href: '#contact', label: 'Contact' }
]

const categories = [
  'Kitchen Appliances',
  'Thermos Products',
  'Water Dispensers',
  'Charging Accessories',
  'Power Banks',
  'Furniture',
  'Lifestyle Products'
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Music, href: '#', label: 'TikTok' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/254114785376', label: 'WhatsApp' }
]

export function Footer() {
  return (
    <footer className="relative bg-primary-navy text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-secondary-emerald/10 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[10%] w-64 h-64 border border-white/[0.04] rotate-45 rounded-3xl" />
        <div className="absolute bottom-[30%] left-[15%] w-48 h-48 border border-white/[0.04] rounded-full" />
      </div>

      <div className="relative z-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-14 md:pt-20 pb-10 md:pb-14">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <img src="/images/Kylin-Logo.jpg" alt="Kylin Logo" className="h-6 w-auto object-contain" />
                </div>
                <span className="font-heading font-bold text-xl">Kylin</span>
              </div>
              <p className="text-neutral-light text-sm leading-relaxed mb-5">
                Your trusted supplier for quality home appliances, electronics, and lifestyle products in Kenya.
              </p>
              <p className="text-xs text-neutral-light/70 leading-relaxed mb-6 italic">
                "Empowering homes and businesses with premium essentials at competitive wholesale prices."
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-light hover:bg-primary-blue hover:border-primary-blue hover:text-white transition-all duration-300"
                  >
                    <social.icon size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-heading font-bold text-base mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-neutral-light hover:text-white transition-colors duration-200 text-sm group"
                    >
                      <ChevronRight size={14} className="text-secondary-emerald group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-heading font-bold text-base mb-5">Categories</h3>
              <ul className="space-y-3">
                {categories.map(category => (
                  <li key={category}>
                    <a
                      href="#products"
                      className="inline-flex items-center gap-2 text-neutral-light hover:text-white transition-colors duration-200 text-sm group"
                    >
                      <ChevronRight size={14} className="text-secondary-emerald group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-heading font-bold text-base mb-5">Contact Information</h3>
              <div className="space-y-4">
                <ContactInfoRow icon={Phone} label="Phone" value="+254 114 785 376" href="tel:+254114785376" />
                <ContactInfoRow icon={Mail} label="Email" value="johnndungugikonyo@gmail.com" href="mailto:johnndungugikonyo@gmail.com" />
                <ContactInfoRow
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
                <ContactInfoRow icon={Clock} label="Hours" value="Mon – Sat: 8:00 AM – 6:00 PM" />
              </div>

              <a
                href="https://wa.me/254114785376"
                className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-secondary-emerald hover:bg-secondary-emerald hover:text-white hover:border-secondary-emerald transition-all duration-300 text-sm font-medium"
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-5 md:py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
              <p className="text-neutral-light">
                &copy; 2025 Kylin Home & Electronics. All Rights Reserved.
              </p>
              <p className="text-neutral-light/60 text-xs">
                Designed for Premium Wholesale Shopping.
              </p>
              <div className="flex items-center gap-4 text-xs">
                <a href="#privacy" className="text-neutral-light hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#terms" className="text-neutral-light hover:text-white transition-colors duration-200">Terms</a>
                <a href="#returns" className="text-neutral-light hover:text-white transition-colors duration-200">Returns</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function ContactInfoRow({ icon: Icon, label, value, href }: { icon: React.ElementType, label: string, value: React.ReactNode, href?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-secondary-emerald">
        <Icon size={14} aria-hidden="true" />
      </div>
      <div>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-light/60 block mb-0.5">{label}</span>
        {href ? (
          <a href={href} className="text-sm text-neutral-light hover:text-white transition-colors duration-200">{value}</a>
        ) : (
          <p className="text-sm text-neutral-light leading-relaxed">{value}</p>
        )}
      </div>
    </div>
  )
}
