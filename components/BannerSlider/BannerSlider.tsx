// components/BannerSlider/BannerSlider.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageModal from "@/components/ImageModal/ImageModal";
import styles from "./BannerSlider.module.css";

type Banner = {
  src: string;
  alt: string;
  caption?: string;
};

type Props = {
  banners: Banner[];
  open: boolean;
  onClose: () => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  initialDelay?: number;
};

export default function BannerSlider({ 
  banners, 
  open, 
  onClose, 
  autoPlay = true, 
  autoPlayInterval = 5000,
  initialDelay = 3000 
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setIsReady(true);
      }, initialDelay);
      return () => clearTimeout(timer);
    }
  }, [open, initialDelay]);

  useEffect(() => {
    if (!open || !autoPlay || !isReady) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [open, autoPlay, autoPlayInterval, banners.length, isReady]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!open || banners.length === 0) return null;

  const currentBanner = banners[currentIndex];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.98, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className={styles.closeButton} onClick={onClose} aria-label="Close">
              ×
            </button>

            {/* Main Banner Image */}
            <div className={styles.bannerContainer}>
              <img 
                src={currentBanner.src} 
                alt={currentBanner.alt} 
                className={styles.bannerImage}
              />
              {currentBanner.caption && (
                <div className={styles.caption}>{currentBanner.caption}</div>
              )}
            </div>

            {/* Navigation Controls */}
            {banners.length > 1 && (
              <>
                {/* Previous Button */}
                <button 
                  className={`${styles.navButton} ${styles.prevButton}`}
                  onClick={goToPrev}
                  aria-label="Previous banner"
                >
                  ‹
                </button>

                {/* Next Button */}
                <button 
                  className={`${styles.navButton} ${styles.nextButton}`}
                  onClick={goToNext}
                  aria-label="Next banner"
                >
                  ›
                </button>

                {/* Dots Indicator */}
                <div className={styles.dotsContainer}>
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to banner ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Counter */}
                <div className={styles.counter}>
                  {currentIndex + 1} / {banners.length}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
