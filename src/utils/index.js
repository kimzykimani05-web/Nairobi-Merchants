export const formatPrice = (price) => {
    return `KES ${price.toLocaleString()}`;
};
export const generateWhatsAppLink = (product, message) => {
    const phoneNumber = '+254700000000';
    const baseUrl = 'https://wa.me';
    let fullMessage = message || "Hello, I'm interested in your products. Please share more information.";
    if (product) {
        fullMessage = `Hello, I'm interested in ${product.name}. Please provide availability and pricing.`;
    }
    return `${baseUrl}/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
};
export const getBadgeStyles = (badge) => {
    switch (badge) {
        case 'best-seller':
            return 'bg-secondary-orange text-white';
        case 'popular':
            return 'bg-secondary-emerald text-white';
        case 'new-arrival':
            return 'bg-primary-blue text-white';
        case 'featured':
            return 'bg-gradient-to-r from-primary-blue to-secondary-emerald text-white';
        default:
            return '';
    }
};
export const getBadgeText = (badge) => {
    switch (badge) {
        case 'best-seller':
            return 'Best Seller';
        case 'popular':
            return 'Popular';
        case 'new-arrival':
            return 'New Arrival';
        case 'featured':
            return 'Featured';
        default:
            return '';
    }
};
