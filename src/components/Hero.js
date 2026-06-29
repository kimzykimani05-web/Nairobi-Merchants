import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { generateWhatsAppLink } from '../utils';
import { Package, Truck, Shield, Clock, MessageCircle } from 'lucide-react';
import { ProductGrid } from './ProductGrid';
export function Hero() {
    const trustBadges = [
        { icon: Package, text: 'Nairobi-Based Supplier' },
        { icon: Truck, text: 'Wholesale Available' },
        { icon: Clock, text: 'Fast WhatsApp Response' },
        { icon: Shield, text: 'Quality Assured' },
        { icon: Truck, text: 'Reliable Customer Support' }
    ];
    const featuredProducts = [
        {
            image: '/images/hero section images/Stainless Steel Electric Kettle.jfif',
            name: 'Stainless Steel Electric Kettle',
            price: 422,
            category: 'Kitchen Appliances'
        },
        {
            image: '/images/hero section images/Solar Power Bank.jpg',
            name: 'Solar Power Bank',
            price: 1200,
            category: 'Electronics'
        },
        {
            image: '/images/hero section images/Bluetooth Earbuds.jpg',
            name: 'Bluetooth Earbuds',
            price: 850,
            category: 'Mobile Accessories'
        },
        {
            image: '/images/hero section images/Foldable Sofa.jfif',
            name: 'Foldable Sofa',
            price: 3500,
            category: 'Furniture'
        }
    ];
    return (_jsxs("section", { id: "hero", className: "relative min-h-screen bg-hero-gradient text-white pt-20", children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [_jsx("div", { className: "absolute -top-20 -right-20 w-48 h-48 sm:-top-40 sm:-right-40 sm:w-80 sm:h-80 bg-primary-blue rounded-full opacity-20 blur-3xl" }), _jsx("div", { className: "absolute -bottom-20 -left-20 w-48 h-48 sm:-bottom-40 sm:-left-40 sm:w-80 sm:h-80 bg-secondary-emerald rounded-full opacity-20 blur-3xl" })] }), _jsxs("div", { className: "max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10", children: [_jsxs("div", { className: "grid gap-8 md:gap-12 items-center min-h-screen py-12 md:py-20 lg:grid-cols-2", children: [_jsxs("div", { className: "space-y-6 md:space-y-8 text-center lg:text-left", children: [_jsx(motion.h1, { className: "font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, children: "Quality Home Essentials & Electronics at Competitive Prices" }), _jsx(motion.p, { className: "text-base md:text-lg lg:text-xl text-neutral-light max-w-lg mx-auto lg:mx-0", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 }, children: "Supplying Nairobi with affordable and premium household products, mobile accessories, electronics, furniture, and lifestyle essentials." }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto justify-center lg:justify-start", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsxs(Button, { variant: "gradient", size: "lg", href: generateWhatsAppLink(), className: "w-full sm:w-auto min-h-[52px] flex items-center justify-center gap-2", children: [_jsx(MessageCircle, { size: 20, className: "flex-shrink-0" }), "Order via WhatsApp"] }), _jsx(Button, { variant: "outline", size: "lg", href: "#products", className: "w-full sm:w-auto min-h-[52px] flex items-center justify-center gap-2", children: "Browse Catalogue" })] }), _jsx(motion.div, { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-8 max-w-lg mx-auto lg:mx-0", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 0.3 }, children: trustBadges.map((badge, i) => (_jsxs(motion.div, { className: "flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 backdrop-blur-sm", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.3 + i * 0.1 }, children: [_jsx(badge.icon, { size: 18, className: "text-secondary-emerald" }), _jsx("span", { className: "text-xs sm:text-sm font-medium", children: badge.text })] }, badge.text))) })] }), _jsx(motion.div, { className: "relative hidden lg:block", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, delay: 0.4 }, children: _jsx(ProductGrid, { products: featuredProducts }) })] }), _jsx(motion.div, { className: "lg:hidden mt-12", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.5 }, children: _jsx(ProductGrid, { products: featuredProducts }) })] })] }));
}
