import { Copy, MoreVertical } from 'lucide-react';

const ProfileHeader = ({ user, status, children, onStatusToggle, onBusinessTypeToggle }) => {
    // Determine Badge Styles based on Status
    let badgeStyles = {};
    let badgeText = "";

    switch (status) {
        case 'verified':
            badgeText = "Verified";
            badgeStyles = {
                backgroundColor: "var(--ui-color-surface-success-success-light-10, #f0fdf4)",
                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-suc50, #15803d)",
                borderColor: "var(--ui-color-surface-success-success-light-20, #dcfce7)"
            };
            break;
        case 'blocked':
            badgeText = "Blocked";
            badgeStyles = {
                backgroundColor: "var(--ui-color-surface-error-error-light-10, #fef2f2)",
                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-err50, #dc2626)",
                borderColor: "var(--ui-color-surface-error-error-light-20, #fee2e2)"
            };
            break;
        case 'failed':
            badgeText = "Failed";
            badgeStyles = {
                backgroundColor: "var(--ui-color-surface-error-error-light-10, #fef2f2)",
                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-err50, #dc2626)",
                borderColor: "var(--ui-color-surface-error-error-light-20, #fee2e2)"
            };
            break;
        case 'under_review':
            badgeText = "Under Review";
            badgeStyles = {
                backgroundColor: "var(--ui-color-surface-infomation-info-light-10, #e5f5ff)",
                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-inf40, #0073c3)",
                borderColor: "var(--ui-color-surface-infomation-info-light-20, #cceaff)"
            };
            break;
        case 'submitted':
            badgeText = "Submitted";
            badgeStyles = {
                backgroundColor: "var(--ui-color-surface-infomation-info-light-10, #e5f5ff)",
                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-inf40, #0073c3)",
                borderColor: "var(--ui-color-surface-infomation-info-light-20, #cceaff)"
            };
            break;
        case 'pending':
        default:
            badgeText = "Pending";
            badgeStyles = {
                backgroundColor: "var(--ui-color-surface-warning-warning-light-10, #fffbeb)",
                color: "var(--ui-color-on-surface-warning-medium-20-on-warning-medium-20, #d97706)",
                borderColor: "var(--ui-color-border-semantic-bd-warning-medium-20, #d97706)"
            };
            break;
    }

    return (
        <div >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                    <img src="/Icons/Avatar.svg" alt="Profile Avatar" style={{
                        height: "56px",
                        width: "56px",
                        borderRadius: "999px",
                        objectFit: "cover",
                        flexShrink: 0
                    }} />
                    <div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <h2 style={{
                                color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n50, #111827)",
                                fontFamily: "var(--typogrraphy-heading-h6-inter-font-family, Inter)",
                                fontSize: "calc(var(--typogrraphy-heading-h6-small-size, 18) * 1px)",
                                fontWeight: "700"
                            }}>{user.name}</h2>
                            <span style={{
                                backgroundColor: badgeStyles.backgroundColor,
                                color: badgeStyles.color,
                                fontSize: "10px", fontWeight: "700",
                                padding: "2px 8px", borderRadius: "4px",
                                border: `1px solid ${badgeStyles.borderColor} `,
                                letterSpacing: "0.05em"
                            }}>
                                {badgeText}
                            </span>
                        </div>
                        <div className="flex items-center gap-4 mt-2 flex-wrap" style={{
                            color: "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n20, #9ca3af)",
                            fontSize: "calc(var(--typogrraphy-paragraph-para-4-size, 12) * 1px)"
                        }}>
                            <div className="flex items-center gap-1">
                                <span className="font-medium">{user.dsaId}</span>
                                <button className="hover:text-gray-600">
                                    <Copy size={12} />
                                </button>
                            </div>

                            <span>{user.phone}</span>

                            <span>{user.email}</span>
                        </div>
                    </div>
                </div>
                <button
                    className="text-gray-400 hover:bg-gray-50 p-1 rounded-full self-start"
                    onClick={onBusinessTypeToggle}
                    title="Toggle Business Type (Testing)"
                    style={{ marginRight: '8px' }}
                >
                    <Copy size={20} style={{ transform: 'rotate(90deg)' }} /> {/* Using Copy for now as quick icon or maybe just reuse what's available? "Switch" icon would be better but I'll use Copy or just text "Type" if I can't import easily. Wait, "Copy" is already imported. I'll use that for now or just add "Briefcase" to imports. I'll add "Briefcase" to imports. */}
                </button>
                <button
                    className="text-gray-400 hover:bg-gray-50 p-1 rounded-full self-start"
                    onClick={onStatusToggle}
                    title="Click to cycle status (Testing)"
                >
                    <MoreVertical size={20} />
                </button>
            </div>


            <div>
                {children}
            </div>
        </div>
    );
};

export default ProfileHeader;
