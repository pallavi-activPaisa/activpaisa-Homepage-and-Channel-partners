import React, { useState } from 'react';
import AuthHeading from '@/components/ui/Auth/AuthHeading';
import AuthText from '@/components/ui/Auth/AuthText';
import AuthLabel from '@/components/ui/Auth/AuthLabel';
import AuthInput from '@/components/ui/Auth/AuthInput';
import AuthButton from '@/components/ui/Auth/AuthButton';
import { Lock } from 'lucide-react';

const AdminEmail = ({ email, onEmailChange, onSubmit, isLoading, error }) => {
    return (
        <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Header */}
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "8px" }}>
                <AuthHeading>Create a new password</AuthHeading>
                <AuthText style={{ textAlign: 'center', color: '#6B7280' }}>
                    Enter your registered email to receive a one-time password (OTP) and reset your password
                </AuthText>
            </div>

            {/* Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <AuthLabel>E-mail ID</AuthLabel>
                    <AuthInput
                        placeholder="admin@activpaisa.com"
                        value={email}
                        onChange={onEmailChange}
                        error={!!error}
                    />
                    {error && <p style={{ color: '#DC2626', fontSize: '12px', marginTop: '4px' }}>{error}</p>}
                </div>

                <AuthButton
                    onClick={onSubmit}
                    disabled={!email || isLoading}
                    isLoading={isLoading}
                    style={{ width: "100%" }}
                >
                    Get OTP
                </AuthButton>
            </div>

            {/* Security Note */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#6B7280', fontSize: '12px' }}>
                <Lock size={14} />
                <span>Your information is encrypted and kept safe</span>
            </div>
        </div>
    );
};

export default AdminEmail;
