// components/BannerSlider/BannerSlider.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./BannerSlider.module.css";

type Props = {
  banners: Array<Record<string, unknown>>;
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
  const handleBannerClick = () => {
    onClose();
    // Small delay to allow modal to close before scrolling
    setTimeout(() => {
      const registrationSection = document.getElementById('registration-form-section');
      if (registrationSection) {
        registrationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // If on a different page, navigate to home page with hash
        if (window.location.pathname !== '/') {
          window.location.href = '/#registration-form-section';
        } else {
          // If on home page but section not found yet, wait a bit and try again
          setTimeout(() => {
            const section = document.getElementById('registration-form-section');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }
      }
    }, 100);
  };

  if (!open) return null;

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

            {/* Registration Form Banner Content */}
            <div 
              className={styles.bannerContainer} 
              onClick={handleBannerClick} 
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleBannerClick();
                }
              }}
              aria-label="Click to fill registration form"
            >
              <div className={styles.registrationBanner}>
                {/* Header Section */}
                <div className={styles.bannerHeader}>
                  <div className={styles.bannerLogoSection}>
                    <div className={styles.bannerLogoCircle}>
                      <div className={styles.bannerLogoText}>BA</div>
                      <div className={styles.bannerLogoSubtext}>Britto Associates</div>
                      <div className={styles.bannerLogoRing}>
                        BHARTIYA RATAN SAMAAN - MAHATMA GANDHI PRIDE AWARD
                      </div>
                    </div>
                  </div>
                  <div className={styles.bannerRecognitionSection}>
                    <div className={styles.bannerRecognitionText}>INTERNATIONALLY RECOGNIZED</div>
                    <div className={styles.bannerIsoText}>ISO CERTIFIED 9001-2015</div>
                  </div>
                </div>

                {/* Company Name */}
                <div className={styles.bannerCompanyName}>
                  <h1>BRITTO ASSOCIATES</h1>
                  <p className={styles.bannerTagline}>(Your Trusted Partner)</p>
                  <p className={styles.bannerApprovalText}>APPROVED BY GOVERNMENT OF INDIA</p>
                </div>

                {/* Form Title */}
                <h2 className={styles.bannerFormTitle}>REGISTRATION FORM FOR ONLINE COUNSELING</h2>

                {/* Form Preview */}
                <div className={styles.bannerFormPreview}>
                  <div className={styles.bannerFormRow}>
                    <div className={styles.bannerFormField}>
                      <label>Full Name:</label>
                      <div className={styles.bannerFormPlaceholder}>Enter your full name</div>
                    </div>
                    <div className={styles.bannerFormField}>
                      <label>Phone Number:</label>
                      <div className={styles.bannerFormPlaceholder}>Enter your phone number</div>
                    </div>
                  </div>
                  <div className={styles.bannerFormRow}>
                    <div className={styles.bannerFormField}>
                      <label>Gender:</label>
                      <div className={styles.bannerFormPlaceholder}>Select Gender</div>
                    </div>
                    <div className={styles.bannerFormField}>
                      <label>Date of Birth:</label>
                      <div className={styles.bannerFormPlaceholder}>dd-mm-yyyy</div>
                    </div>
                  </div>
                  <div className={styles.bannerFormRow}>
                    <div className={styles.bannerFormField}>
                      <label>Email Address:</label>
                      <div className={styles.bannerFormPlaceholder}>Enter your email address</div>
                    </div>
                    <div className={styles.bannerFormField}>
                      <label>Preferred Time Slot:</label>
                      <div className={styles.bannerFormPlaceholder}>Select Time Slot</div>
                    </div>
                  </div>
                  <div className={styles.bannerFormField}>
                    <label>Brief reason for counseling:</label>
                    <div className={styles.bannerFormPlaceholder}>Please describe your reason for seeking counseling...</div>
                  </div>
                </div>

                {/* Click to Fill Button */}
                <div className={styles.bannerClickText}>
                  Click here to fill the form →
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
