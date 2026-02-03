"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import ImageModal from "@/components/ImageModal/ImageModal";
import WhatsAppWidget from "@/components/WhatsAppWidget/WhatsAppWidget";
import styles from "./education.module.css";

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<{ src?: string; alt?: string; caption?: string } | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Education images for grid display
  const educationImages = [
    "/new-img/best-education-consultation-for-college.jpeg",
    "/education/alpha-community-college.jpeg",
    "/education/amity-university.jpeg",
    "/education/aryan-college.jpeg",
    "/education/bangalore-university.jpeg",
    "/education/christ-university.jpeg",
    "/education/cmru-university.jpeg",
    "/education/deemed-university.jpeg",
    "/education/duke-university.jpeg",
    "/education/dy-patil-university.jpeg",
    "/education/IIM-kozhikode.jpeg",
    "/education/jain-university.jpeg",
    "/education/kristu-jayanti-college.jpeg",
    "/education/manipal-university.jpeg",
    "/education/st-joseph's-university.jpeg"
  ];

  // Photos from Education page folder
  const educationPagePhotos = [
    "/Education page/WhatsApp Image 2025-12-31 at 17.53.24.jpeg",
    "/Education page/WhatsApp Image 2025-12-31 at 17.53.25 (1).jpeg",
    "/Education page/WhatsApp Image 2025-12-31 at 17.53.25.jpeg",
    "/Education page/WhatsApp Image 2025-12-31 at 17.53.26 (1).jpeg",
    "/Education page/WhatsApp Image 2025-12-31 at 17.53.26.jpeg",
    "/Education page/WhatsApp Image 2025-12-31 at 17.53.27 (1).jpeg",
    "/Education page/WhatsApp Image 2025-12-31 at 17.53.27 (3).jpeg",
    "/Education page/WhatsApp Image 2025-12-31 at 17.53.27.jpeg",
    "/Education page/WhatsApp Image 2025-12-31 at 17.53.28 (1).jpeg",
    "/Education page/WhatsApp Image 2025-12-31 at 17.53.28.jpeg",
    "/Education page/WhatsApp Image 2025-12-31 at 17.53.31.jpeg"
  ];

  // Videos from Education page folder
  const educationPageVideos = [
    "/Education page/WhatsApp Video 2025-12-31 at 17.53.28.mp4",
    "/Education page/WhatsApp Video 2025-12-31 at 17.53.29 (1).mp4",
    "/Education page/WhatsApp Video 2025-12-31 at 17.53.29 (2).mp4",
    "/Education page/WhatsApp Video 2025-12-31 at 17.53.29 (3).mp4",
    "/Education page/WhatsApp Video 2025-12-31 at 17.53.29.mp4",
    "/Education page/WhatsApp Video 2025-12-31 at 17.53.30 (1).mp4",
    "/Education page/WhatsApp Video 2025-12-31 at 17.53.30 (2).mp4",
    "/Education page/WhatsApp Video 2025-12-31 at 17.53.30.mp4"
  ];

  // New banner images for education section
  const educationBanners = [
    "/banner/addmission-open.jpeg",
    "/banner/book-your-seat.jpeg",
    "/banner/carrer-expo-2026.jpeg",
    "/banner/direct-selling.jpeg",
    "/banner/future-with-india-degree-program.jpeg",
    "/banner/get-enrollment.jpeg",
    "/banner/trusted-partner-for-service.jpeg"
  ];

  // WhatsApp functions
  const openWhatsApp = (service = "", serviceType = "") => {
    const phoneNumber = "919739950153";
    let message = "Hello! I'm interested in your education consultancy services. Please provide more information.";

    if (service) {
      message = `Hello! I'm interested in your ${service} services. Please provide more details about ${serviceType || "this service"}.`;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleBookConsultation = () => {
    openWhatsApp("", "education consultancy");
  };

  const handleWhatsAppChat = () => {
    openWhatsApp();
  };

  const handleEmailInquiry = () => {
    window.location.href = "mailto:brittoassociates1967@gmail.com?subject=Education Consultancy Inquiry&body=Hello! I'm interested in your education consultancy services. Please provide more information.";
  };

  const openModal = (src?: string, alt?: string, caption?: string) => {
    setActive({ src, alt, caption });
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setTimeout(() => setActive(null), 200);
  };

  return (
    <>
      <Hero
        title="Education Consultancy Services"
        subtitle="Comprehensive education consultancy services for students seeking admission to top colleges and universities across India."
        button1="Book Free Consultation"
        button1Link="#cta"
        button2="View Our Partners"
        button2Link="#partners"
        bgImage="/images/education-hero.jpg"
      />

      {/* Education Content Section */}
      <section className="container" ref={sectionRef}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.heading} ${isVisible ? styles.animateHeading : ''}`}>
            FREE CONSULTATION AND ADMISSION GUIDANCE
          </h2>
          <p className={`${styles.subheading} ${isVisible ? styles.animateSubheading : ''}`}>
            Students book your seats for your higher studies in reputed colleges online or regular with nominal fees. If required education bank loans will be provided.
          </p>
        </div>

        {/* Courses Offered */}
        <div className={styles.coursesSection}>
          <h3 className={styles.coursesTitle}>Courses Offered</h3>
          <div className={styles.coursesGrid}>
            <div className={styles.courseCategory}>
              <h4>Undergraduate & Postgraduate Programs</h4>
              <ul>
                <li>Ph.D</li>
                <li>BBA</li>
                <li>MBA</li>
                <li>MSC</li>
                <li>BA</li>
                <li>BCOM</li>
                <li>BSC</li>
              </ul>
            </div>
            <div className={styles.courseCategory}>
              <h4>Professional & Specialized Courses</h4>
              <ul>
                <li>ENGINEERING</li>
                <li>LAW</li>
                <li>MEDICAL RADIOLOGY</li>
                <li>ANESTHESIA & OT TECH</li>
                <li>PHYSIOTHERAPY</li>
                <li>MANAGEMENT</li>
                <li>EDUCATION</li>
                <li>PARAMEDICAL</li>
                <li>HOSPITAL ADMINISTRATION</li>
                <li>INDUSTRIAL TRAINING</li>
              </ul>
            </div>
            <div className={styles.courseCategory}>
              <h4>Special Programs</h4>
              <ul>
                <li>UNCOMPLETED EDUCATION FINISH EDUCATION WHILE WORKING</li>
                <li>Admission in colleges Free counseling & guidance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Health Care Assistant Course Section */}
        <div className={styles.healthCareSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.healthCareTitle}>Health Care Assistant Course Admission</h3>
            <p className={styles.healthCareSubtitle}>
              Hello! 👋 Thank you for your interest in the Health Care Assistant course admission at CMR College, Bangalore.
            </p>
            <p className={styles.healthCareDescription}>
              We are currently offering admissions with a nominal fee structure and bank loan assistance is available.
            </p>
            <p className={styles.healthCareDescription}>
              For complete details on the course, fees, and to start your application, please visit:
              <br />
              <strong>Website: www.brittoassociates.online</strong>
            </p>
            <p className={styles.healthCareDescription}>
              You can also reply here with your specific questions. We look forward to being your trusted partner.
            </p>
            <div className={styles.healthCareCta}>
              <button
                className={styles.healthCareBtn}
                onClick={() => openWhatsApp("Health Care Assistant course", "CMR College Bangalore")}
              >
                <span className={styles.btnIcon}>💬</span>
                WhatsApp for FREE REGISTRATION
              </button>
            </div>
          </div>
        </div>

        {/* Partner Institutions */}
        <div className={styles.partnersListSection}>
          <h3 className={styles.partnersListTitle}>ADMISSION PARTNERS</h3>
          <div className={styles.partnersList}>
            <ol>
              <li>Manipal university Jaipur & Manipal</li>
              <li>Annamalai university Tamilnadu</li>
              <li>C M R college Bangalore</li>
              <li>Jain College Bangalore</li>
              <li>Nova Academy of rural education and research Tamilnadu</li>
              <li>Technogloble IT Solution pvt Ltd (Academy for IT skilling India, Canada, UK, UAE) Bangalore</li>
              <li>Virohan health care institution Bangalore</li>
              <li>DR.MGR University Tamil nadu</li>
              <li>IALM (Institute of Law And Management) New Delhi</li>
              <li>Amity BANGALORE</li>
              <li>Alpha</li>
              <li>NMIMS</li>
              <li>ARYAN GROUP OF COLLEGES</li>
              <li>CMR UNIVERSITY BANGALORE</li>
              <li>CHRIST UNIVERSITY</li>
              <li>ST.JOSEPH&apos;S UNIVERSITY</li>
              <li>ARUNACHAL UNIVERSITY</li>
              <li>NORTH EAST CHRISTIAN UNIVERSITY</li>
              <li>CV RAMAN UNIVERSITY</li>
              <li>INDO ASIAN ACADEMY DEGREE COLLEGE</li>
            </ol>
          </div>
        </div>

        {/* Education Banner Section */}
        <div className={styles.bannerSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.bannerTitle}>Latest Education Promotions</h3>
            <p className={styles.bannerSubtitle}>
              Explore our current offers and opportunities for students
            </p>
          </div>
          <div className={styles.bannerGrid}>
            {educationBanners.map((banner, index) => (
              <div key={index} className={styles.bannerCard}>
                <Image
                  src={banner}
                  alt={`Education promotion banner ${index + 1}`}
                  width={300}
                  height={200}
                  className={styles.bannerImage}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* Education Gallery */}
        <div className={styles.educationPhotosSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.educationPhotosTitle}>Education Gallery</h3>
          </div>
          <div className={styles.educationPhotosGrid}>
            {educationPagePhotos.map((photo, index) => (
              <div
                key={index}
                className={styles.educationPhotoCard}
                onClick={() => openModal(photo, `Education Activity ${index + 1}`)}
              >
                <Image
                  src={photo}
                  alt={`Education gallery photo ${index + 1}`}
                  fill
                  className={styles.educationPhoto}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className={styles.videoSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.videoTitle}>Educational Videos</h3>
          </div>
          <div className={styles.videoGrid}>
            <div className={styles.videoCard}>
              <video
                className={styles.videoPlayer}
                controls
                preload="metadata"
              >
                <source src="/video/college-admission.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.videoCard}>
              <video
                className={styles.videoPlayer}
                controls
                preload="metadata"
              >
                <source src="/video/health-care-assistent.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Education Page Videos Grid */}
          <div className={styles.educationVideosGrid}>
            {educationPageVideos.map((video, index) => (
              <div key={index} className={styles.educationVideoCard}>
                <video
                  className={styles.educationVideoPlayer}
                  controls
                  preload="metadata"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>


        {/* Education Partners Section */}
        <div className={styles.partnersSection} id="partners">
          <div className={styles.sectionHeader}>
            <h3 className={styles.partnersTitle}>Our Education Partners & Institutions</h3>
            <p className={styles.partnersSubtitle}>
              We partner with leading educational institutions across India to provide the best opportunities for our students
            </p>
          </div>

          <div className={styles.galleryGrid}>
            {educationImages.map((image, index) => (
              <div
                key={index}
                className={styles.galleryItem}
                onClick={() => openModal(image, `Education Partner ${index + 1}`)}
              >
                <img
                  src={image}
                  alt={`Education institution ${index + 1}`}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.animateCta : ''}`} id="cta">
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h3>Ready to Start Your Educational Journey?</h3>
              <p>Get personalized guidance and secure your admission to top colleges with our expert team</p>
              <div className={styles.ctaFeatures}>
                <span>✓ Free Consultation</span>
                <span>✓ No Hidden Charges</span>
                <span>✓ 100% Transparent</span>
                <span>✓ Expert Guidance</span>
              </div>
            </div>
            <div className={styles.ctaButtons}>
              <button
                className={styles.primaryBtn}
                onClick={handleBookConsultation}
              >
                <svg
                  className={styles.btnIcon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Book Free Consultation
              </button>
              <button
                className={styles.secondaryBtn}
                onClick={handleWhatsAppChat}
              >
                <svg
                  className={styles.btnIcon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Chat
              </button>
              <button
                className={styles.tertiaryBtn}
                onClick={handleEmailInquiry}
              >
                <span className={styles.btnIcon}>📧</span>
                Email Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />

      <ImageModal
        open={open}
        src={active?.src}
        alt={active?.alt}
        caption={active?.caption}
        onClose={closeModal}
      />
    </>
  );
}
