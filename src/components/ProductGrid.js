import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useReducedMotion } from 'framer-motion';
import { ProductCard } from './ProductCard';
export function ProductGrid({ products }) {
    const reducedMotion = useReducedMotion();
    return (_jsx("div", { className: "grid grid-cols-2 gap-4", children: products.map((product, index) => {
            const animationProps = reducedMotion
                ? {}
                : {
                    animate: { y: [0, -8, 0] },
                    transition: { duration: 5 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
                };
            return (_jsx(motion.div, { className: "aspect-square", ...animationProps, children: _jsx(ProductCard, { ...product }) }, product.name));
        }) }));
}
