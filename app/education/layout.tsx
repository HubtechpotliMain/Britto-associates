import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Engineering Courses Online|Medical Colleges in Bangalore",
    description: "Best engineering colleges online and discover the best medical colleges in Bangalore. Get detailed information on admissions, eligibility, fees, and career.",
    alternates: {
        canonical: "https://www.brittoassociates.com/education",
    },
    openGraph: {
        title: "Engineering Courses Online|Medical Colleges in Bangalore",
        description: "Best engineering colleges online and discover the best medical colleges in Bangalore. Get detailed information on admissions, eligibility, fees, and career.",
        url: "https://www.brittoassociates.com/education",
    },
    twitter: {
        title: "Engineering Courses Online|Medical Colleges in Bangalore",
        description: "Best engineering colleges online and discover the best medical colleges in Bangalore. Get detailed information on admissions, eligibility, fees, and career.",
    },
};

export default function EducationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
