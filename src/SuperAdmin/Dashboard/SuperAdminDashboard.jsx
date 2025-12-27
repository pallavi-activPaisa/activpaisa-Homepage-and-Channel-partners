'use client';

import React from 'react';
import DashboardLayout from '../Components/DashboardLayout';


const SuperAdminDashboard = () => {
    return (
        <DashboardLayout>
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
                <h1 className="text-[#1F2937] font-bold text-4xl mb-2">Dashboard</h1>
                <p className="text-[#6B7280] text-lg mb-6 font-medium">We're getting things ready for you.</p>

                <p className="text-[#9CA3AF] max-w-[500px] text-sm leading-relaxed">
                    Your dashboard is currently under setup. Key insights, reports, and performance metrics will appear here shortly.
                </p>
            </div>
        </DashboardLayout>
    );
};



export default SuperAdminDashboard;
