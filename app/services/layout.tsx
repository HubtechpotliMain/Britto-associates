import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Best MBA colleges in India Online |IT Job Assistance|Real Estate",
    description: "Explore the best online MBA colleges in India with specialized programs in IT, Real Estate, and management. Get expert guidance, IT job assistance, and career support.",
    alternates: {
        canonical: "https://www.brittoassociates.com/services",
    },
    openGraph: {
        title: "Best MBA colleges in India Online |IT Job Assistance|Real Estate",
        description: "Explore the best online MBA colleges in India with specialized programs in IT, Real Estate, and management. Get expert guidance, IT job assistance, and career support.",
        url: "https://www.brittoassociates.com/services",
    },
    twitter: {
        title: "Best MBA colleges in India Online |IT Job Assistance|Real Estate",
        description: "Explore the best online MBA colleges in India with specialized programs in IT, Real Estate, and management. Get expert guidance, IT job assistance, and career support.",
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
