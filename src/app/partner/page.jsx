import { redirect } from 'next/navigation';

export default function PartnerRootPage() {
    // Redirect to the dashboard by default
    redirect('/partner/dashboard');
}
