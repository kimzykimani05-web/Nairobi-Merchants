import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { FeaturedProducts } from './components/FeaturedProducts'
import { ProductCatalogue } from './components/ProductCatalogue'
import { WholesaleSection } from './components/WholesaleSection'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Testimonials } from './components/Testimonials'
import { DownloadCatalogue } from './components/DownloadCatalogue'
import { Contact } from './components/Contact'
import { CallToAction } from './components/CallToAction'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { TrustPayment } from './components/TrustPayment'
import { WhatsAppButton } from './components/WhatsAppButton'
import { BackToTop } from './components/BackToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation variant="hero" />
      <main>
        <Hero />
        <FeaturedProducts />
        <ProductCatalogue />
        <WholesaleSection />
        <WhyChooseUs />
        <Testimonials />
        <DownloadCatalogue />
        <Contact />
        <CallToAction />
        <Newsletter />
      </main>
      <Footer />
      <TrustPayment />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
