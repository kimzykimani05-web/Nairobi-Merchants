import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ui/ProductCard';
import { ProductModal } from './ui/ProductModal';
import { useProductStore } from '../store/productStore';
import { Search } from 'lucide-react';
export function ProductCatalogue() {
    const { products, searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, sortBy, setSortBy, priceRange, setPriceRange } = useProductStore();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        const matchesPrice = product.unitPrice >= priceRange[0] && product.unitPrice <= priceRange[1];
        return matchesSearch && matchesCategory && matchesPrice;
    });
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.unitPrice - b.unitPrice;
            case 'price-high':
                return b.unitPrice - a.unitPrice;
            case 'newest':
                return 0;
            case 'popular':
                return (a.badge === 'best-seller' ? -1 : 1) - (b.badge === 'best-seller' ? -1 : 1);
            default:
                return 0;
        }
    });
    const handleQuickView = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    return (_jsxs("section", { id: "products", className: "py-12 md:py-20 bg-white", children: [_jsxs("div", { className: "max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10", children: [_jsxs(motion.div, { className: "text-center mb-8 md:mb-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, children: [_jsx("h2", { className: "font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary-navy mb-4", children: "Product Catalogue" }), _jsx("p", { className: "text-neutral-dark max-w-2xl mx-auto text-responsive", children: "Browse our complete range of quality products" })] }), _jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-6 md:mb-8", children: [_jsxs("div", { className: "flex-1 relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-dark", size: 20, "aria-hidden": "true" }), _jsx("input", { type: "text", placeholder: "Search products...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full pl-10 pr-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary-blue min-h-[44px]", "aria-label": "Search products" })] }), _jsxs("select", { value: selectedCategory || '', onChange: (e) => setSelectedCategory(e.target.value || null), className: "px-4 py-3 border border-neutral-medium rounded-lg bg-white min-h-[44px]", "aria-label": "Filter by category", children: [_jsx("option", { value: "", children: "All Categories" }), _jsx("option", { value: "kitchen-appliances", children: "Kitchen Appliances" }), _jsx("option", { value: "thermos-products", children: "Thermos Products" }), _jsx("option", { value: "home-care-appliances", children: "Home Care Appliances" }), _jsx("option", { value: "water-dispensers", children: "Water Dispensers" }), _jsx("option", { value: "chargers", children: "Charging Accessories" }), _jsx("option", { value: "charging-cables", children: "Charging Cables" }), _jsx("option", { value: "power-banks", children: "Power Banks" }), _jsx("option", { value: "audio-products", children: "Audio Accessories" }), _jsx("option", { value: "furniture", children: "Furniture" }), _jsx("option", { value: "home-decor", children: "Home D\u00E9cor" })] }), _jsxs("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "px-4 py-3 border border-neutral-medium rounded-lg bg-white min-h-[44px]", "aria-label": "Sort products", children: [_jsx("option", { value: "popular", children: "Popular First" }), _jsx("option", { value: "price-low", children: "Price: Low to High" }), _jsx("option", { value: "price-high", children: "Price: High to Low" }), _jsx("option", { value: "newest", children: "Newest First" })] })] }), _jsx("div", { className: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6", children: sortedProducts.map((product, i) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: i * 0.05 }, children: _jsx(ProductCard, { product: product, onQuickView: handleQuickView }) }, product.id))) }), sortedProducts.length === 0 && (_jsx("p", { className: "text-center text-neutral-dark py-12 text-responsive", children: "No products found matching your criteria" }))] }), _jsx(ProductModal, { product: selectedProduct, isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })] }));
}
