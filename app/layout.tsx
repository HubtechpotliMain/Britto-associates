import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BannerProvider from "@/components/BannerSlider/BannerProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "BRITTO ASSOCIATES",
  description:
    "A multifaceted enterprise in Real Estate, Education, IT Job Assistance & Social Activism from Bangalore.",
  keywords:
    "Real Estate Bangalore, Education Consultancy, IT Job Assistance, Legal Services, Britto Associates",
  authors: [{ name: "Britto Associates" }],
  creator: "Britto Associates",
  publisher: "Britto Associates",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://britto-associates-three.vercel.app',
    siteName: 'Britto Associates',
    title: 'BRITTO ASSOCIATES',
    description: 'A multifaceted enterprise in Real Estate, Education, IT Job Assistance & Social Activism from Bangalore.',
    images: [
      {
        url: '/logo/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Britto Associates Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRITTO ASSOCIATES',
    description: 'A multifaceted enterprise in Real Estate, Education, IT Job Assistance & Social Activism from Bangalore.',
    images: ['/logo/logo.jpg'],
  },
  verification: {
    google: "RPUQ3nKGRiZQXiXh8U_FT8Ru52v6sFQi0u3Y9aV9wvs",
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'android-chrome-512x512', url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  metadataBase: new URL('https://britto-associates-three.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Google Search Console Verification Script - Visible in source code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('Google Search Console Verification Code: RPUQ3nKGRiZQXiXh8U_FT8Ru52v6sFQi0u3Y9aV9wvs');
            `,
          }}
        />
        <BannerProvider>
          <Navbar />
          {children}
          <Footer />
        </BannerProvider>
      </body>
    </html>
  );
}
