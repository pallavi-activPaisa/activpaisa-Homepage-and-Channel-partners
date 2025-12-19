import React from 'react';
import Link from 'next/link';

const SignupFooter = () => {
    return (
        <footer className="w-full py-6 px-8 sm:px-12 text-center text-xs text-gray-500 mt-auto">
            <p className="mb-2">© 2025 activpaisa. All rights reserved.</p>
            <div className="flex justify-center gap-4">
                <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
                <span>|</span>
                <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
                <span>|</span>
                <Link href="/disclaimer" className="hover:text-gray-900 transition-colors">Disclaimer</Link>
            </div>
        </footer>
    );
};

export default SignupFooter;
