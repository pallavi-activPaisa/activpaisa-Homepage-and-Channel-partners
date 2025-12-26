'use client';

import React from 'react';
import Link from 'next/link';
import {
    Home,
    BarChart2,
    PieChart,
    MessageSquare,
    Briefcase,
    Calendar,
    Files,
    Megaphone,
    ChevronDown,
    CheckSquare,
    AlertTriangle
} from 'lucide-react';

const NavItem = ({ icon, label, active = false, hasSubmenu = false }) => {
    return (
        <div className={`group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors ${active ? 'bg-gray-50 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
            <div className="flex items-center gap-3">
                <span className={`${active ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'}`}>
                    {icon}
                </span>
                {label}
            </div>
            {hasSubmenu && (
                <ChevronDown size={16} className="text-gray-400" />
            )}
        </div>
    );
};

const CheckListRow = ({ label, checked }) => (
    <div className="flex items-center gap-2">
        <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${checked ? 'bg-gray-500 border-gray-500' : 'bg-white border-gray-300'}`}>
            {checked && <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
        </div>
        <p className="text-xs text-gray-500">{label}</p>
    </div>
)

const SidebarFinal = () => {
    return (
        <aside
            className="flex flex-col border-r border-[#E5E7EB] h-full"
            style={{
                width: "240px",
                backgroundColor: "#F3F4F5",
                padding: "20px 16px",
                gap: "24px"
            }}
        >
            {/* Scrollable Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
                {/* Main Navigation */}
                <nav className="space-y-1">
                    <NavItem icon={<Home size={18} />} label="Home" hasSubmenu />
                    <NavItem icon={<BarChart2 size={18} />} label="Analytics" hasSubmenu />
                    <NavItem icon={<PieChart size={18} />} label="Reports" hasSubmenu />

                    <div className="pt-6 pb-2 px-2">
                        <p className="text-xs font-medium text-gray-400">Tools</p>
                    </div>

                    <NavItem icon={<MessageSquare size={18} />} label="Messages" hasSubmenu />
                    <NavItem icon={<Briefcase size={18} />} label="Projects" hasSubmenu />
                    <NavItem icon={<Calendar size={18} />} label="Calendar" hasSubmenu />
                    <NavItem icon={<Files size={18} />} label="Files & Library" hasSubmenu />
                    <NavItem icon={<Megaphone size={18} />} label="Campaign" hasSubmenu />
                </nav>

                <div className="mt-auto pt-4 pb-0">
                    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                        <div className="flex items-start gap-2 mb-4">
                            <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={16} fill="currentColor" fillOpacity={0.2} />
                            <h3 className="text-xs font-semibold text-gray-700">Account verification pending</h3>
                        </div>

                        <div className="space-y-3 mb-5">
                            <CheckListRow label="Personal details submitted" checked />
                            <CheckListRow label="Mobile number verified" checked />
                            <CheckListRow label="Upload KYC & Bank details" />
                            <CheckListRow label="Sign digital agreement" />
                            <CheckListRow label="Account verification and activation" />
                        </div>

                        <Link href="/partner/verification">
                            <button className="w-full bg-[#5D3EA8] hover:bg-[#4b3288] text-white text-xs font-semibold py-2.5 px-4 rounded-md transition-all shadow-sm">
                                Complete Verification
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SidebarFinal;
