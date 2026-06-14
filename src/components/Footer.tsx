import { ShoppingBag, MessageCircle } from 'lucide-react'

export function Footer() {
  const categories = [
    'Kitchen Appliances', 'Thermos Products', 'Home Care Appliances',
    'Water Dispensers', 'Charging Accessories', 'Power Banks'
  ]

  return (
    <footer className="bg-primary-navy text-white py-8 md:py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="h-6 w-6 text-secondary-emerald" aria-hidden="true" />
              <span className="font-heading font-bold text-lg md:text-xl">Nairobi Merchants</span>
            </div>
            <p className="text-responsive text-neutral-light">
              Your trusted supplier for quality home appliances, electronics, and lifestyle products in Nairobi.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4 text-base md:text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-responsive text-neutral-light hover:text-secondary-emerald">Home</a></li>
              <li><a href="#products" className="text-responsive text-neutral-light hover:text-secondary-emerald">Products</a></li>
              <li><a href="#wholesale" className="text-responsive text-neutral-light hover:text-secondary-emerald">Wholesale</a></li>
              <li><a href="#catalogue" className="text-responsive text-neutral-light hover:text-secondary-emerald">Catalogue</a></li>
              <li><a href="#contact" className="text-responsive text-neutral-light hover:text-secondary-emerald">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4 text-base md:text-lg">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href="#products" className="text-responsive text-neutral-light hover:text-secondary-emerald">{cat}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4 text-base md:text-lg">Contact Info</h3>
            <div className="space-y-2 text-responsive">
              <p className="text-neutral-light">Nairobi, Kenya</p>
              <p className="text-neutral-light">+254 700 000 000</p>
              <p className="text-neutral-light">info@nairobimerchants.co.ke</p>
            </div>
            <a
              href="https://wa.me/254700000000"
              className="inline-flex items-center gap-2 mt-4 text-secondary-emerald hover:text-white touch-target"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 md:mt-8 pt-6">
          <p className="text-center text-small text-neutral-light">
            &copy; 2025 Nairobi Merchants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}