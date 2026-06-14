import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { FeaturedProducts } from './components/FeaturedProducts'
import { ProductCatalogue } from './components/ProductCatalogue'
import { WholesaleSection } from './components/WholesaleSection'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Testimonials } from './components/Testimonials'
import { DownloadCatalogue } from './components/DownloadCatalogue'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <Hero />
        <FeaturedProducts />
        <ProductCatalogue />
        <WholesaleSection />
        <WhyChooseUs />
        <Testimonials />
        <DownloadCatalogue />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}