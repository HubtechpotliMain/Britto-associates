"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    preferredTimeSlot: "",
    counselingReason: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*REGISTRATION FORM FOR ONLINE COUNSELING*\n\n` +
      `*Full Name:* ${formData.fullName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone Number:* ${formData.phone}\n` +
      `*Gender:* ${formData.gender || "Not specified"}\n` +
      `*Date of Birth:* ${formData.dateOfBirth || "Not specified"}\n` +
      `*Preferred Time Slot:* ${formData.preferredTimeSlot || "Not specified"}\n` +
      `*Brief reason for counseling:*\n${formData.counselingReason || "Not specified"}\n\n` +
      `_This registration was submitted through the BRITTO ASSOCIATES website._`;

    const phoneNumber = "919739950153";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
    
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      dateOfBirth: "",
      preferredTimeSlot: "",
      counselingReason: ""
    });
  };

  return (
    <section className={styles.registrationSection}>
      <div className="container">
        <div className={styles.formContainer}>
          {/* Header/Branding */}
          <div className={styles.header}>
            <div className={styles.logoSection}>
              <div className={styles.logoCircle}>
                <div className={styles.logoText}>BA</div>
                <div className={styles.logoSubtext}>Britto Associates</div>
                <div className={styles.logoRing}>
                  BHARTIYA RATAN SAMAAN - MAHATMA GANDHI PRIDE AWARD
                </div>
              </div>
            </div>
            <div className={styles.recognitionSection}>
              <div className={styles.recognitionText}>INTERNATIONALLY RECOGNIZED</div>
              <div className={styles.isoText}>ISO CERTIFIED 9001-2015</div>
            </div>
          </div>

          <div className={styles.companyName}>
            <h1>BRITTO ASSOCIATES</h1>
            <p className={styles.tagline}>(Your Trusted Partner)</p>
            <p className={styles.approvalText}>APPROVED BY GOVERNMENT OF INDIA</p>
          </div>

          {/* Form Title */}
          <h2 className={styles.formTitle}>REGISTRATION FORM FOR ONLINE COUNSELING</h2>

          {/* Form */}
          <form className={styles.registrationForm} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              {/* Left Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName">Full Name:</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="gender">Gender:</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={styles.selectInput}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="dateOfBirth">Date of Birth:</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className={styles.dateInput}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="preferredTimeSlot">Preferred Time Slot:</label>
                  <select
                    id="preferredTimeSlot"
                    name="preferredTimeSlot"
                    value={formData.preferredTimeSlot}
                    onChange={handleInputChange}
                    className={styles.selectInput}
                  >
                    <option value="">Select Time Slot</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Full Width Textarea */}
            <div className={styles.formGroup}>
              <label htmlFor="counselingReason">Brief reason for counseling:</label>
              <textarea
                id="counselingReason"
                name="counselingReason"
                value={formData.counselingReason}
                onChange={handleInputChange}
                rows={5}
                placeholder="Please describe your reason for seeking counseling..."
                className={styles.textarea}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitButton}>
              SUBMIT REGISTRATION
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

