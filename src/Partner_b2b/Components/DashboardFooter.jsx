'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DashboardFooter = () => {
    return (
        <div style={{ backgroundColor: "var(--ui-color-surface-container-brand-primary-50, #1e064c)" }} className="w-full flex justify-center">
            <footer
                className="w-full max-w-[1440px] flex flex-col items-center text-center text-white"
                style={{
                    padding: "90px",
                    gap: "60px"
                }}
            >
                {/* Brand Section */}
                <div className="flex flex-col items-center gap-6 max-w-[800px]">
                    <div className="relative w-[170px] h-[44px]">
                        <Image
                            src="/Brand/logo footer.svg"
                            alt="ActivPaisa"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed opacity-90 font-light" style={{ maxWidth: "600px" }}>
                        With ActivPaisa, compare financial products from 100+ trusted banks and NBFCs to find the right funding for your business — fast, transparent, and tailored.
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    {[
                        { icon: "/Icons/instagram.svg", alt: "Instagram" },
                        { icon: "/Icons/youtube.svg", alt: "YouTube" },
                        { icon: "/Icons/linkdin.svg", alt: "LinkedIn" },
                        { icon: "/Icons/fb.svg", alt: "Facebook" },
                        { icon: "/Icons/x.svg", alt: "Twitter" }
                    ].map((social, index) => (
                        <div key={index} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm">
                            <div className="relative w-5 h-5">
                                <Image
                                    src={social.icon}
                                    alt={social.alt}
                                    fill
                                    className="object-contain invert brightness-0" // Invert if icons are black, or remove if they are already white/colored. Footer.jsx didn't use invert, so assuming they are colored or white.
                                    // Footer.jsx uses raw images. Let's assume they work on dark bg.
                                    // Actually, let's remove invert for now and assume they are correct assets.
                                    style={{ filter: "brightness(0) invert(1)" }} // Icons in footer usually need to be white on dark bg?
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Links & Copyright */}
                <div className="flex flex-col items-center gap-6 w-full pt-8 border-t border-white/10">
                    <div className="flex items-center gap-8 text-sm font-medium">
                        <Link href="#" className="hover:text-blue-200 transition-colors">Terms of Use</Link>
                        <Link href="#" className="hover:text-blue-200 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-blue-200 transition-colors">Disclaimer</Link>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-xs text-white/60">
                        <p>Copyright © 2019 All Rights Reserved</p>
                        <p>Vaultify Marketing & Consulting Private Limited</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DashboardFooter;
