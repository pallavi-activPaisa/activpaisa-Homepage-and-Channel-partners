'use client';

import React from 'react';

import TopNavbar from '../../../Partner_b2b/Components/TopNavbar';
import ProfileDetails from '../../../Partner_b2b/profile/ProfileDetails';
import DashboardFooter from '@/Partner_b2b/Components/DashboardFooter';

const ProfilePage = () => {
    return (
        <div className="min-h-screen  flex flex-col font-sans w-full">
            <TopNavbar />
            <main style={{ maxWidth: "1440px", margin: "auto", width: "100%", marginTop: "56px" }}>
                <ProfileDetails />
            </main>
            <DashboardFooter />
        </div>
    );
};

export default ProfilePage;
