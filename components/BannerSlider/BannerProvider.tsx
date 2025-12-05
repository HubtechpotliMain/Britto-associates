// components/BannerSlider/BannerProvider.tsx
"use client";

import React, { useState, useEffect } from "react";
import BannerSlider from "./BannerSlider";

type BannerProviderProps = {
  children: React.ReactNode;
};

// Banner data
const banners = [
  {
    src: "/banner/college-banner.jpeg",
    alt: "College Admission Banner",
    caption: "Admissions Open for 2025-26 Academic Year"
  },
  {
    src: "/banner/free-consultation-banner.jpeg",
    alt: "Free Consultation Banner",
    caption: "Get Free Consultation for All Our Services"
  },
  {
    src: "/banner/education-all-types-banner.jpeg",
    alt: "Education All Types Banner",
    caption: "Comprehensive Education Services for All Levels"
  },
  {
    src: "/banner/welcome-december-banner.jpeg",
    alt: "Welcome December Banner",
    caption: "Special Offers for December 2025"
  },
  {
    src: "/banner/welcome-december-banner2.jpeg",
    alt: "Welcome December Banner 2",
    caption: "Year-End Special Deals Available"
  }
];

export default function BannerProvider({ children }: BannerProviderProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Show banner after 3 seconds delay
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      {children}
      <BannerSlider 
        banners={banners}
        open={showBanner}
        onClose={handleCloseBanner}
        autoPlay={true}
        autoPlayInterval={5000}
        initialDelay={0}
      />
    </>
  );
}
