import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    isLoading = false,
    disabled = false,
    ...props
}) => {
    const baseStyles = "px-6 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-[#5D3EA8] text-white hover:bg-[#4b3288] focus:ring-[#5D3EA8]",
        secondary: "bg-[#1C1C1C] text-white hover:bg-black focus:ring-gray-800",
        outline: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300",
        ghost: "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100",
        danger: "bg-red-50 text-red-600 hover:bg-red-100",
        amber: "bg-amber-600 hover:bg-amber-700 text-white"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 size={16} className="animate-spin" />}
            {children}
        </button>
    );
};

export default Button;
