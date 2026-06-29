import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { ProductCard } from './ui/ProductCard';
import { ProductModal } from './ui/ProductModal';
import { useProductStore } from '../store/productStore';
import { useState } from 'react';
export function FeaturedProducts() {
    const { products } = useProductStore();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const featuredProducts = products.filter(p => p.badge && ['best-seller', 'popular', 'new-arrival', 'featured'].includes(p.badge)).slice(0, 4);
    const handleQuickView = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    return (_jsxs("section", { id: "featured", className: "py-12 md:py-20 bg-neutral-light", children: [_jsxs("div", { className: "max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10", children: [_jsxs(motion.div, { className: "text-center mb-8 md:mb-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, children: [_jsx("h2", { className: "font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary-navy mb-4", children: "Featured Products" }), _jsx("p", { className: "text-neutral-dark max-w-2xl mx-auto text-responsive", children: "Our most popular and latest products handpicked for you" })] }), _jsx("div", { className: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6", children: featuredProducts.map((product, i) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: i * 0.1 }, children: _jsx(ProductCard, { product: product, onQuickView: handleQuickView }) }, product.id))) })] }), _jsx(ProductModal, { product: selectedProduct, isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })] }));
}
