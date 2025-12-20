"use client";
import React, { useState, useEffect } from "react";
import SignupReviewCard from "./SignupReviewCard";
import CarouselCounter from "@/components/ui/CarouselCounter";

const SignupLeftPanel = () => {
    const cardData = [
        {
            id: 1,
            message:
                " ActivPaisa made starting my loan advisory business simple. The entire loan process moved faster than traditional banks, and the support team guided me at every step.",
            name: "Karan Mehta",
            location: "New Delhi",
        },
        {
            id: 2,
            message:
                " Great platform, clear payouts, and excellent support. What usually takes weeks was done in a few days. ActivPaisa helped me serve customers smoothly.",
            name: "Chandan Verma",
            location: "Noida",
        },
        {
            id: 3,
            message:
                " Working with ActivPaisa has been seamless. The portal is easy to use, and their team helped me close deals quickly. It’s become a strong income stream for me.",
            name: "Vikas Kumar",
            location: "Bengaluru",
        },
        {
            id: 4,
            message:
                " ActivPaisa made starting my loan advisory business simple. The entire loan process moved faster than traditional banks, and the support team guided me at every step.",
            name: "Karan Mehta",
            location: "New Delhi",
        },
        {
            id: 5,
            message:
                " Great platform, clear payouts, and excellent support. What usually takes weeks was done in a few days. ActivPaisa helped me serve customers smoothly.",
            name: "Chandan Verma",
            location: "Noida",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-scroll logic (5 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % cardData.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [cardData.length]);

    return (
        <div className="hidden md:flex flex-1 justify-center items-center h-full p-5 bg-white">
            <style>
                {`
                    @keyframes fadeSlide {
                        from { opacity: 0; transform: translateX(20px); }
                        to { opacity: 1; transform: translateX(0); }
                    }
                `}
            </style>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "24px",
                    background: "var(--ui-color-surface-brand-primary-light-10, #F2EFFC)",
                    padding: "64px 40px",
                    overflow: "hidden"
                }}
            >
                {/* TOP SECTION: HEADING + CAROUSEL */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: "40px" }}>

                    {/* Headings */}
                    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
                        <h2 style={{
                            color: "#374151",
                            textAlign: "center",
                            fontFamily: "Inter",
                            fontSize: "32px",
                            fontWeight: 600,
                            lineHeight: "40px",
                        }}>
                            Built to Scale Your Lending Business
                        </h2>
                        <p style={{
                            color: "#6B7280",
                            textAlign: "center",
                            fontFamily: "Inter",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            marginTop: "-8px" // Visual tweak to pull it closer if needed, or just standard gap
                        }}>
                            Join 4,000+ advisors who trust us to power their lending business
                        </p>
                    </div>

                    {/* Review Card Carousel */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                        <div key={activeIndex} style={{ animation: "fadeSlide 0.5s ease-out" }}>
                            <SignupReviewCard
                                message={cardData[activeIndex].message}
                                name={cardData[activeIndex].name}
                                location={cardData[activeIndex].location}
                            />
                        </div>

                        {/* COUNTER */}
                        <div onClick={() => setActiveIndex((prev) => (prev + 1) % cardData.length)} style={{ cursor: "pointer" }}>
                            <CarouselCounter current={activeIndex + 1} total={cardData.length} />
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION: LOGOS */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                    <p style={{
                        color: "#6B7280",
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontWeight: 600,
                    }}>
                        Work with Top-tier Banks & NBFCs
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
                        <img src="/partnersLogo/axislogo.png" alt="Axis Bank" style={{ height: "24px", objectFit: "contain" }} />
                        <img src="/partnersLogo/bajajlogo.png" alt="Bajaj Finserv" style={{ height: "24px", objectFit: "contain" }} />
                        <img src="/partnersLogo/yesbanklogo.png" alt="Yes Bank" style={{ height: "24px", objectFit: "contain" }} />
                        <img src="/partnersLogo/boblogo.png" alt="Bank of Baroda" style={{ height: "24px", objectFit: "contain" }} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignupLeftPanel;
