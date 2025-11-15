import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
