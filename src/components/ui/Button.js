import { jsx as _jsx } from "react/jsx-runtime";
export function Button({ children, variant = 'primary', size = 'md', onClick, href, className = '', type = 'button' }) {
    const baseClasses = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
        primary: 'bg-primary-blue text-white hover:bg-primary-navy focus:ring-primary-blue',
        secondary: 'bg-secondary-orange text-white hover:bg-secondary-emerald focus:ring-secondary-orange',
        outline: 'border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
        gradient: 'bg-hero-gradient text-white hover:bg-cta-gradient focus:ring-primary-blue'
    };
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3',
        lg: 'px-8 py-4 text-lg'
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    if (href) {
        return (_jsx("a", { href: href, className: classes, target: "_blank", rel: "noopener noreferrer", children: children }));
    }
    return (_jsx("button", { type: type, onClick: onClick, className: `${classes} touch-target min-h-[44px]`, children: children }));
}
