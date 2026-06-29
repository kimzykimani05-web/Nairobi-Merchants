import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
export function Testimonials() {
    const testimonials = [
        {
            id: '1',
            name: 'Mary Wanjiru',
            business: 'Retail Shop Owner, Westlands',
            text: 'Reliable supplier with excellent prices. Their wholesale options have helped me grow my business significantly.',
            rating: 5
        },
        {
            id: '2',
            name: 'James Mwangi',
            business: 'Airbnb Host, Karen',
            text: 'Great quality products and always responsive on WhatsApp. Highly recommend for hospitality needs.',
            rating: 5
        },
        {
            id: '3',
            name: 'Sarah Njoki',
            business: 'Electronics Reseller, CBD',
            text: 'Consistent supply and competitive pricing. Perfect partner for my reselling business.',
            rating: 5
        },
        {
            id: '4',
            name: 'David Ochieng',
            business: 'Homeowner, Kileleshwa',
            text: 'Quality products at great prices. Their home essentials are exactly what I needed.',
            rating: 4
        }
    ];
    return (_jsx("section", { className: "py-12 md:py-20 bg-white", children: _jsxs("div", { className: "max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10", children: [_jsx(motion.div, { className: "text-center mb-8 md:mb-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, children: _jsx("h2", { className: "font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary-navy mb-4", children: "What Our Customers Say" }) }), _jsx("div", { className: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6", children: testimonials.map((testimonial, i) => (_jsxs(motion.div, { className: "bg-neutral-light rounded-xl p-6 touch-target flex flex-col h-full", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: i * 0.1 }, children: [_jsx("div", { className: "flex gap-1 mb-3", children: [...Array(5)].map((_, j) => (_jsx(Star, { size: 16, className: j < testimonial.rating ? 'fill-secondary-orange text-secondary-orange' : 'text-neutral-medium', "aria-hidden": "true" }, j))) }), _jsxs("p", { className: "text-responsive text-neutral-dark mb-4 flex-grow line-clamp-3", children: ["\"", testimonial.text, "\""] }), _jsxs("div", { children: [_jsx("p", { className: "font-heading font-bold text-primary-navy", children: testimonial.name }), _jsx("p", { className: "text-small text-neutral-dark", children: testimonial.business })] })] }, testimonial.id))) })] }) }));
}
