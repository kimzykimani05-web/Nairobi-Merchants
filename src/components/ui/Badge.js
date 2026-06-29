import { jsx as _jsx } from "react/jsx-runtime";
import { getBadgeStyles, getBadgeText } from '../../utils';
export function Badge({ badge, className = '' }) {
    if (!badge)
        return null;
    return (_jsx("span", { className: `absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full ${getBadgeStyles(badge)} ${className}`, children: getBadgeText(badge) }));
}
