import React from 'react';

const SuperAdminDashboard = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
            backgroundColor: '#F3F4F6'
        }}>
            <h1 style={{
                fontFamily: 'Inter',
                fontSize: '32px',
                fontWeight: '700',
                color: '#111827'
            }}>
                Welcome Super Admin
            </h1>
            <p style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                color: '#6B7280',
                marginTop: '12px'
            }}>
                This is your dashboard.
            </p>
        </div>
    );
};

export default SuperAdminDashboard;
