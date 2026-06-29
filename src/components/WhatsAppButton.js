import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
export function WhatsAppButton() {
    return (_jsx(motion.a, { href: "https://wa.me/254700000000?text=Hello%2C%20I%27m%20interested%20in%20your%20products.%20Please%20share%20more%20information.", className: "fixed bottom-6 right-4 sm:right-6 md:right-6 z-50 bg-secondary-emerald text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl touch-target min-h-[48px] min-w-[48px] flex items-center justify-center", whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, "aria-label": "Chat on WhatsApp", title: "Chat with us on WhatsApp", children: _jsx(MessageCircle, { size: 24, "aria-hidden": "true" }) }));
}
