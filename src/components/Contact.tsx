import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from './ui/Button'

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary-navy mb-4">
            Contact Us
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto text-responsive px-4 sm:px-0">
            Ready to place your order or inquire about wholesale? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            className="space-y-5 md:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3 md:gap-4">
              <MessageCircle size={20} className="text-primary-blue mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-heading font-bold text-base md:text-lg text-primary-navy mb-1">
                  WhatsApp Business
                </h3>
                <p className="text-responsive text-neutral-dark">+254 700 000 000</p>
                <Button variant="outline" size="sm" href="https://wa.me/254700000000" className="mt-2 min-h-[44px]">
                  Chat Now
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <Phone size={20} className="text-primary-blue mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-heading font-bold text-base md:text-lg text-primary-navy mb-1">
                  Phone
                </h3>
                <p className="text-responsive text-neutral-dark">+254 700 000 000</p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <Mail size={20} className="text-primary-blue mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-heading font-bold text-base md:text-lg text-primary-navy mb-1">
                  Email
                </h3>
                <p className="text-responsive text-neutral-dark">info@nairobimerchants.co.ke</p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <MapPin size={20} className="text-primary-blue mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-heading font-bold text-base md:text-lg text-primary-navy mb-1">
                  Location
                </h3>
                <p className="text-responsive text-neutral-dark">Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <Clock size={20} className="text-primary-blue mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-heading font-bold text-base md:text-lg text-primary-navy mb-1">
                  Business Hours
                </h3>
                <p className="text-responsive text-neutral-dark">Mon - Sat: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-3 md:space-y-4 bg-neutral-light p-4 md:p-6 rounded-xl" aria-label="Contact form">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 min-h-[48px] border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary-blue"
                  aria-label="Your name"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Business Name (Optional)"
                  className="w-full px-4 py-3 min-h-[48px] border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary-blue"
                  aria-label="Business name"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 min-h-[48px] border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary-blue"
                  aria-label="Phone number"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Products of Interest or Message"
                  rows={4}
                  className="w-full px-4 py-3 min-h-[120px] border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary-blue"
                  aria-label="Your message"
                />
              </div>
              
              <Button variant="primary" size="lg" className="w-full min-h-[48px]">
                Send via WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}