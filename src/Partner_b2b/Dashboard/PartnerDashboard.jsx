'use client';

import React from 'react';
import DashboardLayout from '../Components/DashboardLayout';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const PartnerDashboard = () => {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-500 mt-1">Welcome back, DesignerShip. Here's what's happening with your partner account.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatsCard
                        title="Total Earnings"
                        value="₹1,24,500"
                        trend="+12%"
                        icon={<DollarSign size={24} className="text-green-600" />}
                        trendUp={true}
                    />
                    <StatsCard
                        title="Active Referrals"
                        value="45"
                        trend="+5%"
                        icon={<Users size={24} className="text-blue-600" />}
                        trendUp={true}
                    />
                    <StatsCard
                        title="Pending Leads"
                        value="12"
                        trend="-2%"
                        icon={<Activity size={24} className="text-amber-600" />}
                        trendUp={false}
                    />
                    <StatsCard
                        title="Conversion Rate"
                        value="3.2%"
                        trend="+0.4%"
                        icon={<TrendingUp size={24} className="text-purple-600" />}
                        trendUp={true}
                    />
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Graphic / Chart Area */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
                            <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2">
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                                <option>This Year</option>
                            </select>
                        </div>

                        {/* Dummy Chart Visualization */}
                        <div className="h-64 flex items-end justify-between gap-2 px-2">
                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((height, i) => (
                                <div key={i} className="w-full bg-purple-50 rounded-t-sm relative group">
                                    <div
                                        className="absolute bottom-0 w-full bg-purple-500 rounded-t-sm transition-all duration-500 group-hover:bg-purple-600"
                                        style={{ height: `${height}%` }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-gray-400 uppercase font-medium">
                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                        </div>
                    </div>

                    {/* Recent Leads */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Leads</h3>
                        <div className="space-y-4">
                            <LeadItem name="Amit Kumar" status="Converted" date="2 mins ago" />
                            <LeadItem name="Sarah Smith" status="Pending" date="1 hour ago" />
                            <LeadItem name="Rajesh Singh" status="Rejected" date="3 hours ago" />
                            <LeadItem name="Priya Patel" status="In Progress" date="5 hours ago" />
                            <LeadItem name="John Doe" status="Pending" date="1 day ago" />
                        </div>
                        <button className="w-full mt-4 py-2 text-sm text-purple-600 font-medium hover:bg-purple-50 rounded transition-colors">
                            View All Leads
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

const StatsCard = ({ title, value, trend, icon, trendUp }) => {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
                </div>
                <div className={`p-2 rounded-lg bg-gray-50`}>
                    {icon}
                </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
                <span className={`font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
                    {trend}
                </span>
                <span className="text-gray-400 ml-2">vs last month</span>
            </div>
        </div>
    );
};

const LeadItem = ({ name, status, date }) => {
    const getStatusColor = (s) => {
        switch (s) {
            case 'Converted': return 'bg-green-100 text-green-700';
            case 'Pending': return 'bg-yellow-100 text-yellow-700';
            case 'Rejected': return 'bg-red-100 text-red-700';
            default: return 'bg-blue-100 text-blue-700';
        }
    };

    return (
        <div className="flex items-center justify-between pb-3 border-b border-gray-50 last:border-0 last:pb-0">
            <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">{name}</p>
                    <p className="text-xs text-gray-400">{date}</p>
                </div>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(status)}`}>
                {status}
            </span>
        </div>
    );
};

export default PartnerDashboard;
