'use client';

import React from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';

const DashboardLayout = ({ children, noPadding = false }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <div className="min-h-screen w-full bg-gray-50 flex flex-col font-sans text-gray-900">
            {/* Top Navbar - Fixed Width */}
            <TopNavbar onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

            <div className="relative pt-[56px]">
                {/* Sidebar - Responsive & Fixed on Desktop */}
                <div
                    className={`fixed inset-y-0 left-0 z-20 w-[240px] transform transition-transform duration-300 md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:fixed md:top-[56px] md:h-[calc(100vh-56px)]`}
                >
                    <Sidebar />
                </div>

                {/* Overlay for mobile */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}

                {/* Main Content Area */}
                <div
                    className="flex flex-col min-h-[calc(100vh-56px)] transition-all duration-300 md:ml-[240px]"
                    style={{ backgroundColor: "#F8F9FA" }}
                >



                    {/* Page Content */}
                    <main className={`flex-1 w-full max-w-full ${noPadding ? 'p-0' : 'p-4 md:p-8'}`}>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;