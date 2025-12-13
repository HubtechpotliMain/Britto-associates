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
  verification: {
    google: "jDBbtrPPmdeE-gzntS9XytyuXAX4smFdN4jXP1c4qSg",
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
  manifest: '/favicon/site.webmanifest'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <BannerProvider>
          <Navbar />
          {children}
          <Footer />
        </BannerProvider>
      </body>
    </html>
  );
}
