import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Achievements and Awards | Britto Associates",
    description: "Explore the national awards and recognitions received by Mr. Antony John Britto and Britto Associates for humanitarian and entrepreneurial excellence.",
    alternates: {
        canonical: "https://www.brittoassociates.com/achievements",
    },
    openGraph: {
        title: "Achievements and Awards | Britto Associates",
        description: "Explore the national awards and recognitions received by Mr. Antony John Britto and Britto Associates for humanitarian and entrepreneurial excellence.",
        url: "https://www.brittoassociates.com/achievements",
    },
    twitter: {
        title: "Achievements and Awards | Britto Associates",
        description: "Explore the national awards and recognitions received by Mr. Antony John Britto and Britto Associates for humanitarian and entrepreneurial excellence.",
    },
};

export default function AchievementsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
