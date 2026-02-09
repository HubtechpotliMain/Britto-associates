import "./globals.css";
import { Metadata } from 'next';
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best undergraduate courses in Bangalore | Postgraduate Courses",
  description: "Best undergraduate and postgraduate courses in Bangalore. Explore top colleges offering BCA, BCom, BSc Nursing, BDes, MA, MBA, MSc, MTech, admission details and career.",
  keywords: "undergraduate courses Bangalore, postgraduate courses Bangalore, BCA colleges, BCom colleges, BSc Nursing colleges, BDes colleges, MA courses, MBA courses, MSc courses, MTech courses, top colleges Bangalore",
  authors: [{ name: "Britto Associates" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.brittoassociates.com/",
  },
  openGraph: {
    title: "Best undergraduate courses in Bangalore | Postgraduate Courses",
    description: "Best undergraduate and postgraduate courses in Bangalore. Explore top colleges offering BCA, BCom, BSc Nursing, BDes, MA, MBA, MSc, MTech, admission details and career.",
    url: "https://www.brittoassociates.com",
    siteName: "Britto Associates",
    images: [
      {
        url: "https://www.brittoassociates.com/logo/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Britto Associates Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best undergraduate courses in Bangalore | Postgraduate Courses",
    description: "Best undergraduate and postgraduate courses in Bangalore. Explore top colleges offering BCA, BCom, BSc Nursing, BDes, MA, MBA, MSc, MTech, admission details and career.",
    images: ["https://www.brittoassociates.com/logo/logo.jpg"],
  },
  verification: {
    google: "RPUQ3nKGRiZQXiXh8U_FT8Ru52v6sFQi0u3Y9aV9wvs",
  },
  metadataBase: new URL("https://www.brittoassociates.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Britto Associates",
    "url": "https://www.brittoassociates.com/",
    "logo": "https://www.brittoassociates.com/logo/logo.jpg",
    "image": "https://www.brittoassociates.com/logo/logo.jpg",
    "description": "Best undergraduate and postgraduate courses in Bangalore. Explore top colleges offering BCA, BCom, BSc Nursing, BDes, MA, MBA, MSc, MTech, admission details and career.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "203, Kanakadasa Layout, Kanakadasa Main Road, Lingarajapuram, Bangalore – 560084",
      "addressCountry": "IN"
    },
    "telephone": "+91 9739950153",
    "sameAs": ["", "", ""]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.className}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
