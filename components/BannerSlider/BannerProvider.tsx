// components/BannerSlider/BannerProvider.tsx
"use client";

import React, { useState, useEffect } from "react";
import BannerSlider from "./BannerSlider";

type BannerProviderProps = {
  children: React.ReactNode;
};

// Banner data - now using registration form content instead of images
const banners = [{}];

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
