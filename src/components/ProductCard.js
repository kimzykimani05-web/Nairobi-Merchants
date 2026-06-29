import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function ProductCard({ image, name, price, category }) {
    return (_jsx(motion.div, { className: "relative group", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsxs("div", { className: "absolute inset-0 bg-white/20 backdrop-blur-sm rounded-24 border border-white/20 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-white/40 group-hover:shadow-xl", children: [_jsx("img", { src: image.startsWith('/') ? image : `/${image}`, alt: name, className: "w-full h-48 object-contain p-6" }), _jsxs("div", { className: "absolute bottom-4 left-4 right-4 text-primary-navy", children: [_jsx("h3", { className: "font-semibold", children: name }), _jsxs("p", { className: "text-sm mt-1", children: ["KES ", price] }), _jsx("span", { className: "text-xs bg-white/40 rounded-full px-2 py-0.5", children: category })] })] }) }));
}
