import React from 'react';

const StatusCard = ({ label, value, icon, isError, subAction }) => (
    <div style={{
        padding: "16px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        backgroundColor: "var(--ui-color-background-bg-neutral-bg-neutral-light-10, #FFF)",
        borderRadius: "calc(var(--corner-radius-medium, 16) * 1px)",
        border: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #E5E7EB)",
        boxShadow: "0 1px 2px 0 var(--Effects-shadow-4, rgba(17, 24, 39, 0.04))"
    }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src="/Icons/profilebox.svg" alt="" style={{ width: "20px", height: "20px" }} />
            <span style={{
                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n20, #9ca3af)",
                fontSize: "calc(var(--typogrraphy-paragraph-para-4-size, 12) * 1px)",
                fontWeight: "500"
            }}>
                {label}
            </span>
        </div>
        <div className="flex items-center gap-2">
            <span style={{
                fontSize: "calc(var(--typogrraphy-paragraph-para-3-size, 14) * 1px)",
                fontWeight: "600",
                color: isError ? "var(--ui-color-surface-warning-warning-strong-10, #d97706)" : "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n50, #111827)"
            }}>
                {value}
            </span>
            {icon}
            {subAction}
        </div>
    </div>
);

export default StatusCard;
