import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Business Management Colleges in Bangalore| RERA Registration",
    description: "Business Management colleges in Bangalore and learn about RERA registration services. Get detailed information on admissions, eligibility, course fees, and for real estate.",
    alternates: {
        canonical: "https://www.brittoassociates.com/gallery",
    },
    openGraph: {
        title: "Business Management Colleges in Bangalore| RERA Registration",
        description: "Business Management colleges in Bangalore and learn about RERA registration services. Get detailed information on admissions, eligibility, course fees, and for real estate.",
        url: "https://www.brittoassociates.com/gallery",
    },
    twitter: {
        title: "Business Management Colleges in Bangalore| RERA Registration",
        description: "Business Management colleges in Bangalore and learn about RERA registration services. Get detailed information on admissions, eligibility, course fees, and for real estate.",
    },
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
