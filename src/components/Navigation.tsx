import { useState, useEffect } from 'react'
import { Menu, X, Home, Package, Grid, ShoppingCart, Download, Phone } from 'lucide-react'

interface NavigationProps {
  variant?: 'default' | 'hero'
}

export function Navigation({ variant = 'default' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navItems = [
    { name: 'Home', path: '#hero', icon: Home },
    { name: 'Products', path: '#products', icon: Package },
    { name: 'Wholesale', path: '#wholesale', icon: ShoppingCart },
    { name: 'Catalogue', path: '#catalogue', icon: Download },
    { name: 'Contact', path: '#contact', icon: Phone }
  ]

  const isHeroVariant = variant === 'hero'
  const navBg = isHeroVariant
    ? (isScrolled ? 'bg-neutral-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent')
    : (isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm')

  return (
    <>
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${navBg}`}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex justify-between items-center h-24">
            <a href="/" className="flex items-center gap-4 touch-target">
              <img src="/images/Kylin-Logo.jpg" alt="Kylin Logo" className="h-14 w-auto object-contain" />
              <span className={`font-heading font-bold text-3xl ${isHeroVariant ? 'text-white' : 'text-primary-navy'}`}>
                Kylin
              </span>
            </a>

            <div className={`hidden md:flex items-center gap-4 lg:gap-8 ${isHeroVariant ? 'hidden' : ''}`}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-neutral-dark hover:text-primary-blue font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue rounded px-2 py-1"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              className={`md:hidden touch-target p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${isHeroVariant ? 'text-white hover:bg-white/10' : 'text-primary-navy hover:bg-neutral-light'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-64 sm:w-72 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden shadow-2xl`}>
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="mb-8">
            <span className="text-sm font-semibold text-neutral-dark uppercase tracking-wider">Menu</span>
          </div>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="flex items-center gap-3 py-4 border-b border-neutral-medium text-lg font-medium text-primary-navy hover:text-primary-blue transition-colors touch-target"
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon size={20} />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
