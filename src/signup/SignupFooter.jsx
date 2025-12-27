import React from 'react';
import Link from 'next/link';
import AuthText from "@/components/ui/Auth/AuthText";

const SignupFooter = () => {
    return (
        <footer style={{
            display: "flex",
            padding: "40px 0",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
        }}>
            <AuthText style={{
                color:
                    "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                fontSize:
                    "calc(var(--typogrraphy-paragraph-para-4-size) * 1px)",
                lineHeight:
                    "calc(var(--typogrraphy-paragraph-para-4-line-height) * 1px)",
            }
            }>© 2025 activpaisa. All rights reserved.</AuthText>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
            }}>
                <AuthText style={{
                    color:
                        "var(--ui-color-on-surface-neutral-light-10-on-neutral-light-10-n40, #374151)",
                    fontSize:
                        "calc(var(--typogrraphy-paragraph-para-4-size) * 1px)",
                    lineHeight:
                        "calc(var(--typogrraphy-paragraph-para-4-line-height) * 1px)",
                }
                }>Privacy Policy | Terms of Service | Disclaimer</AuthText>
            </div>
        </footer>
    );
};

export default SignupFooter;
