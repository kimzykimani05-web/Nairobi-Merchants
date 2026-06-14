import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { Download, FileText } from 'lucide-react'

export function DownloadCatalogue() {
  return (
    <section id="catalogue" className="py-12 md:py-20 bg-neutral-light">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-6 md:p-12 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <FileText size={48} className="mx-auto mb-4 md:mb-6 text-primary-blue" aria-hidden="true" />
          
          <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-primary-navy mb-3 md:mb-4">
            Download Our Latest Product Catalogue
          </h2>
          
          <p className="text-neutral-dark mb-4 md:mb-6 text-responsive px-4 sm:px-0">
            Get our complete catalogue with all products, specifications, and wholesale pricing information.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6 text-small md:text-sm text-neutral-dark">
            <span>PDF File</span>
            <span className="hidden xs:inline">•</span>
            <span>Version 2.1</span>
            <span className="hidden xs:inline">•</span>
            <span>2.3 MB</span>
          </div>
          
          <Button variant="primary" size="lg" href="/catalogue.pdf" className="w-full sm:w-auto min-h-[48px]">
            <Download size={20} aria-hidden="true" />
            Download Catalogue (PDF)
          </Button>
        </motion.div>
      </div>
    </section>
  )
}