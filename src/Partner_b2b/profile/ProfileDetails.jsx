import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, MoreVertical, Clock, CheckCircle, AlertCircle, Copy } from 'lucide-react';
import Button from '../Components/UI/Button';
import AuthHeading from '@/components/ui/Auth/AuthHeading';
import AuthLabel from '@/components/ui/Auth/AuthLabel';
import ProfileStatusBanner from './components/ProfileStatusBanner';
import ProfileHeader from './components/ProfileHeader';
import StatusCard from './components/StatusCard';
import PersonalInformation from './components/Card/PersonalInformation';
import BusinessInformation from './components/Card/BusinessInformation';
import DocumentsCard from './components/Card/DocumentsCard';
import PaymentAccountInformation from './components/Card/PaymentAccountInformation';
import AgreementsConsents from './components/Card/Agreements&Consents';

const ProfileDetails = () => {
    const router = useRouter();
    const [status, setStatus] = useState("pending");
    const [businessType, setBusinessType] = useState("Entity");

    const handleStatusToggle = () => {
        const statuses = ["pending", "verified", "blocked", "submitted", "failed", "under_review"];
        const nextIndex = (statuses.indexOf(status) + 1) % statuses.length;
        setStatus(statuses[nextIndex]);
    };

    const handleBusinessTypeToggle = () => {
        setBusinessType(prev => prev === "Entity" ? "Individual" : "Entity");
    };

    const user = {
        name: "Adit Khanna",
        dsaId: "DSA-6992",
        phone: "+91 98765 43210",
        email: "Mark@thedesigner.com",
        initials: "AK",
        businessType: businessType
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '1252px',
            margin: '0 auto',
            padding: '24px 32px',
            width: '100%'
        }}>
            {/* Back Button */}
            <div>
                <button
                    onClick={() => router.back()}
                    className="group flex items-center transition-colors"
                    style={{
                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n30, #6b7280)",
                        fontFamily: "var(--typogrraphy-label-inter-font-family, Inter)",
                        fontSize: "calc(var(--typogrraphy-label-l-2-size, 14) * 1px)",
                        fontWeight: "var(--typogrraphy-label-medium-weight, 500)",
                        cursor: "pointer"
                    }}
                >
                    <ChevronLeft size={20} className="mr-1 group-hover:-translate-x-1 transition-transform" />
                    <span>Back</span>
                </button>
            </div>

            {/* Title Section */}
            <div className="flex items-center justify-between">
                <div style={{
                    display: "flex",
                    height: "auto",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignSelf: "stretch",
                    gap: "4px"
                }}>
                    <h3 style={{
                        color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                        fontFamily: "var(--typogrraphy-heading-h3-inter-font-family, Inter)",
                        fontSize: "calc(var(--typogrraphy-heading-h3-large-size, 32) * 1px)",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "calc(var(--typogrraphy-heading-h3-large-line-height, 40) * 1px)",
                        letterSpacing: "calc(var(--typogrraphy-heading-h3-large-letter-spacing, -0.64) * 1px)",
                    }}>Partner Profile</h3>
                    <AuthLabel>View and Manage your Personal and Business details</AuthLabel>
                </div>
            </div>

            {/* Warning Banner */}
            <ProfileStatusBanner status={status} />


            {/* Profile Header Section */}
            <ProfileHeader user={user} status={status} onStatusToggle={handleStatusToggle} onBusinessTypeToggle={handleBusinessTypeToggle}>

            </ProfileHeader>
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatusCard label="Status" value="Inactive" />
                <StatusCard label="Phone Number" value="Verified" />
                <StatusCard
                    label="E-Mail ID"
                    value="Not Verified"
                    subAction={<button style={{ color: "var(--ui-color-surface-infomation-info-strong-10, #0073c3)", marginLeft: "4px", cursor: "pointer" }}>Verify</button>}
                    isError
                />
                <StatusCard label="Onboarded" value="12 Jan, 2024" />
            </div>



            {/* Details Grid */}
            {/* Details Grid */}
            {/* Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PersonalInformation businessType={user.businessType} status={status} />

                {user.businessType === 'Entity' && (
                    <BusinessInformation gstRegistered={true} status={status} />
                )}

                {user.businessType === 'Entity' && status !== 'verified' && (
                    <div className="hidden lg:block"></div>
                )}

                {user.businessType === 'Entity' && status === 'verified' && (
                    <>
                        <DocumentsCard />
                        <PaymentAccountInformation />
                    </>
                )}

                {(user.businessType !== 'Entity' || status !== 'verified') && (
                    <AgreementsConsents businessType={user.businessType} status={status} />
                )}

                {user.businessType === 'Entity' && status === 'verified' && (
                    <AgreementsConsents businessType={user.businessType} status={status} />
                )}
            </div>
        </div>


    );
};



export default ProfileDetails;
