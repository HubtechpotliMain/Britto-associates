import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Britto Associates | Legal & Business Consultancy In India",
    description: "Get in touch with Britto Associates for professional legal consultancy, business advisory, RERA registration help, and expert support. Reach us for queries, appointments, and reliable services across India.",
    alternates: {
        canonical: "https://www.brittoassociates.com/contact",
    },
    openGraph: {
        title: "Contact Britto Associates | Legal & Business Consultancy In India",
        description: "Get in touch with Britto Associates for professional legal consultancy, business advisory, RERA registration help, and expert support. Reach us for queries, appointments, and reliable services across India.",
        url: "https://www.brittoassociates.com/contact",
    },
    twitter: {
        title: "Contact Britto Associates | Legal & Business Consultancy In India",
        description: "Get in touch with Britto Associates for professional legal consultancy, business advisory, RERA registration help, and expert support. Reach us for queries, appointments, and reliable services across India.",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
