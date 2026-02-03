import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Business Management | Real Estate Consulting | Education Courses",
    description: "Explore top programs in Business Management, expert Real Estate Consulting services, and professional Education Courses. Gain knowledge, skills, career or business.",
    alternates: {
        canonical: "https://www.brittoassociates.com/about",
    },
    openGraph: {
        title: "Business Management | Real Estate Consulting | Education Courses",
        description: "Explore top programs in Business Management, expert Real Estate Consulting services, and professional Education Courses. Gain knowledge, skills, career or business.",
        url: "https://www.brittoassociates.com/about",
    },
    twitter: {
        title: "Business Management | Real Estate Consulting | Education Courses",
        description: "Explore top programs in Business Management, expert Real Estate Consulting services, and professional Education Courses. Gain knowledge, skills, career or business.",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
