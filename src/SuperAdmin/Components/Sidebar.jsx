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
    AlertTriangle,
    Users,
    Settings,
    Shield
} from 'lucide-react';

const NavItem = ({ icon, label, active = false, hasSubmenu = false, href = '#' }) => {
    return (
        <Link href={href}>
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
        </Link>
    );
};

const Sidebar = () => {
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
                    <NavItem icon={<Home size={18} />} label="Overview" active href="/superadmin/dashboard" />
                    <NavItem icon={<Users size={18} />} label="Partner Management" hasSubmenu />
                    <NavItem icon={<BarChart2 size={18} />} label="Analytics" hasSubmenu />
                    <NavItem icon={<Shield size={18} />} label="Roles & Permissions" hasSubmenu />

                    <div className="pt-6 pb-2 px-2">
                        <p className="text-xs font-medium text-gray-400">System</p>
                    </div>

                    <NavItem icon={<MessageSquare size={18} />} label="Notifications" />
                    <NavItem icon={<Settings size={18} />} label="Settings" hasSubmenu />
                    <NavItem icon={<Files size={18} />} label="Audit Logs" />
                </nav>

                {/* Admin Specific Widget or Empty */}
                <div className="mt-auto pt-4 pb-0">
                    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                        <div className="flex items-start gap-2 mb-2">
                            <Shield className="text-purple-600 shrink-0 mt-0.5" size={16} />
                            <h3 className="text-xs font-semibold text-gray-700">Super Admin Access</h3>
                        </div>
                        <p className="text-xs text-gray-500 mb-3">You have full system privileges.</p>
                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold py-2 px-4 rounded-md transition-all">
                            View Activity
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
