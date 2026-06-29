import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductCatalogue } from './components/ProductCatalogue';
import { WholesaleSection } from './components/WholesaleSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { DownloadCatalogue } from './components/DownloadCatalogue';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
export default function App() {
    return (_jsxs("div", { className: "min-h-screen bg-white font-body", children: [_jsx(Navigation, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(FeaturedProducts, {}), _jsx(ProductCatalogue, {}), _jsx(WholesaleSection, {}), _jsx(WhyChooseUs, {}), _jsx(Testimonials, {}), _jsx(DownloadCatalogue, {}), _jsx(Contact, {})] }), _jsx(Footer, {}), _jsx(WhatsAppButton, {})] }));
}
