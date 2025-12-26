import Link from 'next/link';
import Button from '../../Components/UI/Button';

const ProfileStatusBanner = ({ status }) => {
    // Define content and styles based on status
    let content = {};
    let styles = {};

    switch (status) {
        case 'verified':
            content = {
                title: "Verified Profile",
                text: "Your profile has been successfully verified. You are now fully active.",
                hasButton: false
            };
            styles = {
                bg: "var(--ui-color-surface-success-success-light-10, #f0fdf4)",
                border: "var(--ui-color-surface-success-success-light-20, #dcfce7)", // Using light border for verified
                textTitle: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-suc50, #15803d)",
                textBody: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-suc50, #15803d)"
            };
            break;
        case 'blocked':
            content = {
                title: "Temporarily Blocked Profile",
                text: "Action Required: This action was taken due to policy review.",
                hasButton: true,
                buttonText: "Contact Support",
                buttonLink: "/contact-support", // Placeholder link
                buttonVariant: "outline" // Assuming outline variant or we style it manually
            };
            styles = {
                bg: "var(--ui-color-surface-error-error-light-10, #fef2f2)",
                border: "var(--ui-color-surface-error-error-light-20, #fee2e2)",
                textTitle: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-err50, #dc2626)",
                textBody: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-err50, #dc2626)"
            };
            break;
        case 'failed':
            content = {
                title: "Verification Failed",
                text: "Correction Required: The PAN details do not match the Aadhaar records.",
                hasButton: true,
                buttonText: "Fix & Resubmit >",
                buttonLink: "/partner/verification",
                buttonVariant: "primary"
            };
            styles = {
                bg: "var(--ui-color-surface-error-error-light-10, #fef2f2)",
                border: "var(--ui-color-surface-error-error-light-20, #fee2e2)",
                textTitle: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-err50, #dc2626)",
                textBody: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-err50, #dc2626)"
            };
            break;
        case 'under_review':
            content = {
                title: "Under Review Profile",
                text: "Your verification is currently under review and typically takes 24–48 hours.",
                hasButton: false
            };
            styles = {
                bg: "var(--ui-color-surface-infomation-info-light-10, #e5f5ff)",
                border: "var(--ui-color-surface-infomation-info-light-20, #cceaff)",
                textTitle: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-inf50, #004474)",
                textBody: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-inf50, #004474)"
            };
            break;
        case 'submitted':
            content = {
                title: "Submitted Profile",
                text: "Your details have been submitted successfully. Verification will start shortly.",
                hasButton: false
            };
            styles = {
                bg: "var(--ui-color-surface-infomation-info-light-10, #e5f5ff)",
                border: "var(--ui-color-surface-infomation-info-light-20, #cceaff)",
                textTitle: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-inf50, #004474)",
                textBody: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-inf50, #004474)"
            };
            break;
        case 'pending':
        default:
            content = {
                title: "Pending Verification",
                text: "Payouts are currently disabled. Complete verification to start receiving payments. It only takes about 5 minutes",
                hasButton: true,
                buttonText: "Complete Verification >",
                buttonLink: "/partner/verification",
                buttonVariant: "primary"
            };
            styles = {
                bg: "var(--ui-color-surface-warning-warning-light-10, #fffbeb)",
                border: "var(--ui-color-border-semantic-bd-warning-medium-20, #d97706)",
                textTitle: "var(--ui-color-on-surface-warning-medium-20-on-warning-medium-20, #d97706)",
                textBody: "var(--ui-color-on-surface-warning-medium-20-on-warning-medium-20, #d97706)"
            };
            break;
    }

    return (
        <div style={{
            backgroundColor: styles.bg,
            borderColor: styles.border,
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "calc(var(--corner-radius-2xsmall, 8) * 1px)",
            padding: "16px",
            display: "flex",
            // flexDirection: "column", // Removing inline style to let className handle responsive direction
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
        }} className="flex-col sm:flex-row">
            <div className="flex items-start gap-3 w-full sm:w-auto">
                <div>
                    <h3 style={{
                        color: styles.textTitle,
                        fontSize: "calc(var(--typogrraphy-label-l-2-size, 14) * 1px)",
                        fontWeight: "var(--typogrraphy-label-bold-weight, 700)"
                    }}>{content.title}</h3>
                    <p style={{
                        color: styles.textBody,
                        fontSize: "calc(var(--typogrraphy-paragraph-para-4-size, 12) * 1px)",
                        marginTop: "4px"
                    }}>
                        {content.text}
                    </p>
                </div>
            </div>
            {content.hasButton && (
                <Link href={content.buttonLink} className="w-full sm:w-auto">
                    {status === 'blocked' ? (
                        <button style={{
                            backgroundColor: "#ffffff",
                            color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n50, #111827)",
                            border: "1px solid #e5e7eb",
                            padding: "8px 16px",
                            fontSize: "12px",
                            fontWeight: "500",
                            borderRadius: "6px",
                            cursor: "pointer",
                            width: "100%", // Full width on mobile
                            whiteSpace: "nowrap"
                        }} className="sm:w-auto">
                            {content.buttonText}
                        </button>
                    ) : (
                        <Button variant={content.buttonVariant} className="whitespace-nowrap rounded-md w-full sm:w-auto" style={{
                            backgroundColor: "var(--ui-color-surface-brand-primary-strong-10, #4c2399)",
                            color: "var(--color-generic-white, #ffffff)",
                            fontSize: "calc(var(--typogrraphy-label-l-3-size, 12) * 1px)",
                            padding: "8px 16px",
                            height: "auto"
                        }}>
                            {content.buttonText}
                        </Button>
                    )}
                </Link>
            )}
        </div>
    );
};

export default ProfileStatusBanner;

