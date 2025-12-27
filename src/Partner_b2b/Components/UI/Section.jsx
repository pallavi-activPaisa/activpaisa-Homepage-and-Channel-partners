import React from 'react';

export const Section = ({ title, children, className = "" }) => (
    <div className={className}>
        {title && <h4 className="text-[#5D3EA8] text-sm font-bold mb-4">{title}</h4>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8">
            {children}
        </div>
    </div>
);

export default Section;
