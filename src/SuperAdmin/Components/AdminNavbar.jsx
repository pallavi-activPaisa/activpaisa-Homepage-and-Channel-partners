'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bell, LogOut, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AdminNavbar = ({ onMenuClick, isLoggedIn = true }) => {
    const router = useRouter();

    const handleLogout = () => {
        router.push('/superadmin/internal-login');
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-30"
            style={{
                backgroundColor: isLoggedIn ? "#F3F4F5" : "var(--ui-color-background-bg-neutral-bg-neutral-light-10, #ffffff)",
                borderBottom: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)"
            }}
        >
            <div style={{
                maxWidth: "100%", // Full width for Admin usually, or match Partner 1376px
                margin: "0 auto",
                padding: "16px 32px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                {/* Left side - Logo & Branding */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuClick}
                        className="md:hidden p-1 -ml-1 rounded-md transition-colors"
                        style={{
                            color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)"
                        }}
                    >
                        <Menu size={24} />
                    </button>

                    <Link href="/superadmin/dashboard" className="flex items-center ">
                        {/* Logo Image */}
                        <div style={{ position: "relative", height: "32px", width: "120px" }} className="hidden md:block">
                            <Image
                                src="/Brand/logo.svg"
                                alt="ActivPaisa Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                        {/* Mobile Logo Image */}
                        <div style={{ position: "relative", height: "24px", width: "96px" }} className="md:hidden">
                            <Image
                                src="/Brand/logo.svg"
                                alt="ActivPaisa Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>

                        {/* Vertical Divider & Text */}
                        <div className="hidden sm:flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="27" viewBox="0 0 12 27" fill="none">
                                <rect x="5.0285" y="1.03418" width="2" height="24" rx="1" fill="#9CA3AF" />
                            </svg>
                            <span style={{
                                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n20, #9ca3af)",
                                fontFamily: "var(--typogrraphy-heading-h6-inter-font-family, Inter)",
                                fontSize: "calc(var(--typogrraphy-heading-h6-large-size, 20) * 1px)",
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "calc(var(--typogrraphy-heading-h6-large-line-height, 28) * 1px)",
                                letterSpacing: "calc(var(--typogrraphy-heading-h6-large-letter-spacing, -0.4) * 1px)"
                            }}>Admin</span>
                        </div>
                    </Link>
                </div>

                {/* Right side - User Actions */}
                <div className="flex items-center gap-4 md:gap-6">
                    {isLoggedIn ? (
                        <>
                            <button className="relative hover:text-gray-700" style={{ cursor: "pointer", color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)" }}>
                                <Bell size={20} />
                                <span className="absolute top-0 right-0 block rounded-full ring-2 ring-white transform translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        height: "8px", width: "8px",
                                        backgroundColor: "var(--ui-color-surface-success-success-medium-20, #22c55e)"
                                    }}
                                ></span>
                            </button>

                            <div className="hidden sm:block" style={{
                                height: "32px",
                                width: "1px",
                                backgroundColor: "var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)"
                            }}></div>

                            <div className="flex items-center gap-3 cursor-pointer">
                                <div className="hidden md:flex flex-col items-end">
                                    <span style={{
                                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n50, #111827)",
                                        fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                                        fontSize: "calc(var(--typogrraphy-label-l-2-size, 14) * 1px)",
                                        fontWeight: "var(--typogrraphy-label-semi-bold-weight, 600)"
                                    }}>Super Admin</span>
                                    <span style={{
                                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                                        fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                                        fontSize: "calc(var(--typogrraphy-label-l-3-size, 12) * 1px)",
                                        fontWeight: "var(--typogrraphy-label-regular-weight, 400)"
                                    }}>admin@activpaisa.com</span>
                                </div>
                                <div className="relative" style={{ height: "40px", width: "40px" }}>
                                    <div style={{
                                        position: "absolute",
                                        inset: 0,
                                        borderRadius: "9999px",
                                        overflow: "hidden",
                                        border: "1px solid var(--ui-color-border-default-bd-neutral-medium-10, #e5e7eb)",
                                        backgroundColor: "var(--ui-color-background-bg-neutral-bg-neutral-light-30, #f3f4f6)"
                                    }}>
                                        <Image
                                            src="/Icons/Avatar.svg"
                                            alt="User Avatar"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    {/* Green dot status */}
                                    <span style={{
                                        position: "absolute",
                                        bottom: "0",
                                        right: "0",
                                        display: "block",
                                        height: "10px",
                                        width: "10px",
                                        borderRadius: "9999px",
                                        backgroundColor: "var(--ui-color-surface-success-success-medium-20, #22c55e)",
                                        boxShadow: "0 0 0 2px #ffffff",
                                        zIndex: 10
                                    }}></span>
                                </div>
                            </div>

                            <button onClick={handleLogout} className="hidden sm:block hover:text-gray-600" style={{ cursor: "pointer", color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n20, #9ca3af)" }}>
                                <LogOut size={20} />
                            </button>
                        </>
                    ) : (
                        <div className="flex items-center gap-6 text-sm font-medium" style={{ color: "#6B7280" }}>
                            <Link href="#" className="hover:text-gray-900">Help</Link>
                            <Link href="#" className="hover:text-gray-900">About Us</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default AdminNavbar;
