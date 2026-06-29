import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Home, Package, ShoppingCart, Download, Phone } from 'lucide-react';
export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);
    const navItems = [
        { name: 'Home', path: '#hero', icon: Home },
        { name: 'Products', path: '#products', icon: Package },
        { name: 'Wholesale', path: '#wholesale', icon: ShoppingCart },
        { name: 'Catalogue', path: '#catalogue', icon: Download },
        { name: 'Contact', path: '#contact', icon: Phone }
    ];
    return (_jsxs(_Fragment, { children: [_jsx("nav", { className: `sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`, children: _jsx("div", { className: "max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10", children: _jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsxs("a", { href: "/", className: "flex items-center gap-2 touch-target", children: [_jsx(ShoppingBag, { className: "h-8 w-8 text-primary-blue", "aria-label": "Logo" }), _jsx("span", { className: "font-heading font-bold text-xl text-primary-navy", children: "Nairobi Merchants" })] }), _jsx("div", { className: "hidden md:flex items-center gap-4 lg:gap-8", children: navItems.map((item) => (_jsx("a", { href: item.path, className: "text-neutral-dark hover:text-primary-blue font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue rounded px-2 py-1", "aria-label": `Navigate to ${item.name}`, children: item.name }, item.name))) }), _jsx("button", { className: "md:hidden touch-target p-2 rounded-lg hover:bg-neutral-light focus:outline-none focus:ring-2 focus:ring-primary-blue", onClick: () => setIsMenuOpen(!isMenuOpen), "aria-label": isMenuOpen ? 'Close menu' : 'Open menu', "aria-expanded": isMenuOpen, children: isMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }) }) }), isMenuOpen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden", onClick: () => setIsMenuOpen(false), "aria-hidden": "true" })), _jsx("div", { className: `fixed top-0 right-0 h-full w-64 sm:w-72 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden shadow-2xl`, children: _jsxs("div", { className: "flex flex-col h-full pt-20 px-6", children: [_jsx("div", { className: "mb-8", children: _jsx("span", { className: "text-sm font-semibold text-neutral-dark uppercase tracking-wider", children: "Menu" }) }), navItems.map((item) => (_jsxs("a", { href: item.path, className: "flex items-center gap-3 py-4 border-b border-neutral-medium text-lg font-medium text-primary-navy hover:text-primary-blue transition-colors touch-target", onClick: () => setIsMenuOpen(false), children: [_jsx(item.icon, { size: 20 }), item.name] }, item.name)))] }) })] }));
}
