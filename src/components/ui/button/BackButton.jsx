"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

const BackButton = ({
    onClick,
    label = "Back",
    className = "",
    style,
    ...props
}) => {
    const router = useRouter();

    const handleBack = (e) => {
        if (onClick) {
            onClick(e);
        } else {
            router.back();
        }
    };

    return (
        <button
            type="button"
            onClick={handleBack}
            style={{
                position: 'relative',
                top: '24px',
                left: '-146px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '8px 12px',
                backgroundColor: 'transparent',
                color: '#374151',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                fontFamily: 'var(--typogrraphy-label-inter-font-family, Inter, sans-serif)',
                transition: 'background-color 0.2s ease, transform 0.1s ease',
                ...style,
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F3F4F6';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
            }}
            onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
            }}
            className={className}
            {...props}
        >
            <ChevronLeft size={18} />
            <span>{label}</span>
        </button>
    );
};

export default BackButton;
