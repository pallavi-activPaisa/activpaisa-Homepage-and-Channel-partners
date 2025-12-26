//this component is used to display the info item in the profile

import React from 'react';

const InfoItem = ({ label, value, icon, className = "", style = {} }) => {
    return (

        <div className={`flex flex-col ${className}`} style={{ width: "274px", height: "auto", minHeight: "40px", ...style }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                {icon && <span>{icon}</span>}
                <span style={{
                    color: "var(--uI-color-on-surface-neutral-light-10-on-neutral-light-10-N30, #6B7280)",
                    fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                    fontSize: "var(--typogrraphy-label-l-2-size, 14px)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "var(--typogrraphy-label-L-2-line-height, 16px); /* 114.286% */",
                    letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
                }}>{label}</span>
            </div>
            <div style={{
                color: "var(--uI-color-on-surface-neutral-light-10-on-neutral-light-10-N40, #374151)",
                fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                fontSize: "var(--Typogrraphy-Label-L-2-size, 14px)",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "var(--typogrraphy-label-L-2-line-height, 16px); /* 114.286% */",
                letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
            }}>{value || "-"}</div>
        </div>
    );
};

export default InfoItem;
