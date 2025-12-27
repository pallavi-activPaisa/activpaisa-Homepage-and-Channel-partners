'use client';

import React from 'react';
import VerificationWizard from '../../../Partner_b2b/Verification/VerificationWizard';
import TopNavbar from '@/Partner_b2b/Components/TopNavbar';

import Footer from '../../../components/Footer/Footer';
import DashboardFooter from '@/Partner_b2b/Components/DashboardFooter';

const VerificationPage = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans w-full">
            <TopNavbar />
            <main style={{ maxWidth: "1440px", margin: "auto", width: "100%", marginTop: "56px" }}>
                <VerificationWizard />
            </main>
            <DashboardFooter />
        </div>
    );
};

export default VerificationPage;
