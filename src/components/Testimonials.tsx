import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      id: '1',
      name: 'Mary Wanjiru',
      business: 'Retail Shop Owner, Westlands',
      text: 'Reliable supplier with excellent prices. Their wholesale options have helped me grow my business significantly.',
      rating: 5
    },
    {
      id: '2',
      name: 'James Mwangi',
      business: 'Airbnb Host, Karen',
      text: 'Great quality products and always responsive on WhatsApp. Highly recommend for hospitality needs.',
      rating: 5
    },
    {
      id: '3',
      name: 'Sarah Njoki',
      business: 'Electronics Reseller, CBD',
      text: 'Consistent supply and competitive pricing. Perfect partner for my reselling business.',
      rating: 5
    },
    {
      id: '4',
      name: 'David Ochieng',
      business: 'Homeowner, Kileleshwa',
      text: 'Quality products at great prices. Their home essentials are exactly what I needed.',
      rating: 4
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary-navy mb-4">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              className="bg-neutral-light rounded-xl p-6 touch-target flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={j < testimonial.rating ? 'fill-secondary-orange text-secondary-orange' : 'text-neutral-medium'}
                    aria-hidden="true"
                  />
                ))}
              </div>
              
              <p className="text-responsive text-neutral-dark mb-4 flex-grow line-clamp-3">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-heading font-bold text-primary-navy">
                  {testimonial.name}
                </p>
                <p className="text-small text-neutral-dark">{testimonial.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}