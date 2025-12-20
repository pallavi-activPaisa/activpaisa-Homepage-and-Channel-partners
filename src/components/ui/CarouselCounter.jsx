import React from "react";

const CarouselCounter = ({ current, total }) => {
    // 0,1,2 -> active dot index (looping)
    const activeDotIndex = (current - 1) % 3;

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                justifyContent: "center",
            }}
        >
            {/* Counter pill */}
            <div
                style={{
                    padding: "6px 14px",
                    borderRadius: 999,
                    background: "#6B7280", // dark gray
                    color: "#FFFFFF",
                    fontSize: 13,
                    fontWeight: 600,
                    lineHeight: 1,
                    fontFamily:
                        "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
                }}
            >
                {current}/{total}
            </div>

            {/* Dots */}
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                {[0, 1, 2].map((index) => {
                    const isActive = index === activeDotIndex;

                    return (
                        <div
                            key={index}
                            style={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: isActive ? "#9CA3AF" : "#E5E7EB", // active darker
                                transition: "background-color 0.25s ease",
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CarouselCounter;
