"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import WhatsAppWidget from "@/components/WhatsAppWidget/WhatsAppWidget";
import styles from "./services.module.css";

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Education Consultancy",
      description: "College admissions & education bank loan assistance for students.",
      icon: "🎓",
      category: "education",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: ["College Admission", "Education Bank Loan", "Career Counseling", "University Guidance"],
      image: "/new-img/best-education-consultation-for-college.jpeg"
    },
    {
      title: "IT Job Assistance", 
      description: "Professional IT job placement and career guidance services.",
      icon: "💼",
      category: "career",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      features: ["Job Placement", "Resume Building", "Interview Preparation", "Career Guidance"],
      image: "/new-img/assistence-in-IT-job.jpeg"
    },
    {
      title: "Legal Assistance",
      description: "All types of legal documentation assistance (LDA) and support.",
      icon: "⚖️",
      category: "legal",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      features: ["Legal Documentation", "Document Verification", "Agreements", "Registration Support"],
      image: "/new-img/legal-assistence.jpeg"
    },
    {
      title: "Business Management",
      description: "All types of company registration and business setup services.",
      icon: "🏢",
      category: "business",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      features: ["Company Registration", "Business Setup", "Compliance", "Documentation"],
      image: [
        "/new-img/Business Management-2.jpeg",
        "/new-img/Business Management.jpeg"
      ]
    },
    {
      title: "Business Bank Loan",
      description: "Professional support in securing business loans from banks.",
      icon: "💰",
      category: "finance",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      features: ["Loan Application", "Financial Evaluation", "Bank Coordination", "Document Preparation"],
      image: "/new-img/business-bank-loan.jpeg"
    },
    {
      title: "Real Estate",
      description: "Buying & selling of apartments, villas, plots, residential & farm land.",
      icon: "🏠",
      category: "realestate",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      features: ["Property Buying/Selling", "Site Visits", "Legal Clarity", "Investment Guidance"],
      image: "/new-img/real-state.jpeg"
    },
    {
      title: "Rental Property Management",
      description: "Complete residential property management services.",
      icon: "🔑",
      category: "realestate",
      gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
      features: ["Tenant Screening", "Rent Collection", "Property Inspection", "Legal Compliance"],
      image: "/new-img/rental-property.jpeg"
    },
    {
      title: "RERA Registration",
      description: "Professional RERA registration services for real estate projects.",
      icon: "📋",
      category: "legal",
      gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
      features: ["RERA Compliance", "Project Registration", "Documentation", "Legal Support"],
      image: "/new-img/reera-registration.jpeg"
    },
    {
      title: "Social Activism",
      description: "Human rights, animal welfare, and environment protection initiatives.",
      icon: "🌿",
      category: "social",
      gradient: "linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)",
      features: ["Community Programs", "Awareness Campaigns", "Legal Aid", "Volunteer Support"],
      image: "/new-img/britto-associates-for-pets.jpeg"
    }
  ];

  const filteredServices = activeFilter === "all" 
    ? services 
    : services.filter(service => service.category === activeFilter);

  // Stats for the filter
  const serviceStats = {
    all: services.length,
    education: services.filter(s => s.category === "education").length,
    career: services.filter(s => s.category === "career").length,
    legal: services.filter(s => s.category === "legal").length,
    business: services.filter(s => s.category === "business").length,
    finance: services.filter(s => s.category === "finance").length,
    realestate: services.filter(s => s.category === "realestate").length,
    social: services.filter(s => s.category === "social").length
  };

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

  // WhatsApp functions
  const openWhatsApp = (service = "", serviceType = "") => {
    const phoneNumber = "919739950153";
    let message = "Hello! I'm interested in your services. Please provide more information.";
    
    if (service) {
      message = `Hello! I'm interested in your ${service} services. Please provide more details about ${serviceType || "this service"}.`;
    }
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleServiceClick = (service: any) => {
    openWhatsApp(service.title, service.description);
  };

  const handleBookConsultation = () => {
    openWhatsApp("", "a free consultation");
  };

  const handleWhatsAppChat = () => {
    openWhatsApp();
  };

  const handleEmailInquiry = () => {
    window.location.href = "mailto:brittoassociates1967@gmail.com?subject=Service Inquiry&body=Hello! I'm interested in your services. Please provide more information.";
  };

  const handleViewGallery = () => {
    window.location.href = "/gallery";
  };

  return (
    <>
      <Hero
        title="Our Professional Services"
        subtitle="Providing excellence across Education, IT Jobs, Legal Support, Business Management, Real Estate & Social Activism with trusted expertise."
        button1="Get Free Consultation"
        button1Link="#cta"
        button2="View Gallery"
        button2Link="/gallery"
        bgImage="/images/services-hero.jpg"
      />

      {/* Quick Stats */}
      <div className={styles.statsBanner}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>9+</span>
              <span className={styles.statText}>Service Domains</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1000+</span>
              <span className={styles.statText}>Happy Clients</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statText}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statText}>Success Rate</span>
            </div>
          </div>
        </div>
      </div>

      <section className="container" ref={sectionRef}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.heading} ${isVisible ? styles.animateHeading : ''}`}>
            Our Comprehensive Services
          </h2>
          <p className={`${styles.subheading} ${isVisible ? styles.animateSubheading : ''}`}>
            Tailored solutions for your education, career, legal, business, and real estate needs
          </p>
        </div>

        {/* Enhanced Filter Tabs */}
        <div className={styles.filterContainer}>
          <div className={styles.filterTabs}>
            {[
              "all", "education", "career", "legal", 
              "business", "finance", "realestate", "social"
            ].map(category => (
              <button
                key={category}
                className={`${styles.filterBtn} ${activeFilter === category ? styles.active : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                <span className={styles.filterText}>
                  {category === "all" ? "All Services" : 
                   category === "education" ? "Education" :
                   category === "career" ? "IT Jobs" :
                   category === "legal" ? "Legal Assistance" :
                   category === "business" ? "Business Management" :
                   category === "finance" ? "Business Loans" :
                   category === "realestate" ? "Real Estate" :
                   category === "social" ? "Social Activism" :
                   category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                <span className={styles.filterCount}>({serviceStats[category as keyof typeof serviceStats]})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {filteredServices.map((service, index) => (
            <div
              key={service.title}
              className={styles.cardWrapper}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleServiceClick(service)}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                gradient={service.gradient}
                features={service.features}
                isHovered={hoveredCard === index}
                index={index}
                delay={index * 100}
                image={service.image}
              />
            </div>
          ))}
        </div>

        {/* Education Images Grid - Only show when education filter is active */}
        {activeFilter === "education" && (
          <div className={styles.educationImagesSection}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.educationImagesTitle}>FREE CONSULTATION AND ADMISSION GUIDANCE</h3>
              <p className={styles.educationImagesSubtitle}>
                Students book your seats for your higher studies in reputed colleges online or regular with nominal fees. If required education bank loans will be provided.
              </p>
            </div>

            {/* Courses Offered */}
            <div className={styles.coursesSection}>
              <h4 className={styles.coursesTitle}>Courses Offered</h4>
              <div className={styles.coursesGrid}>
                <div className={styles.courseCategory}>
                  <h5>Undergraduate & Postgraduate Programs</h5>
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
                  <h5>Professional & Specialized Courses</h5>
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
                  <h5>Special Programs</h5>
                  <ul>
                    <li>UNCOMPLETED EDUCATION FINISH EDUCATION WHILE WORKING</li>
                    <li>Admission in colleges Free counseling & guidance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Partner Institutions */}
            <div className={styles.partnersListSection}>
              <h4 className={styles.partnersListTitle}>ADMISSION PARTNERS</h4>
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
                  <li>ST.JOSEPH'S UNIVERSITY</li>
                  <li>ARUNACHAL UNIVERSITY</li>
                  <li>NORTH EAST CHRISTIAN UNIVERSITY</li>
                  <li>CV RAMAN UNIVERSITY</li>
                  <li>INDO ASIAN ACADEMY DEGREE COLLEGE</li>
                </ol>
              </div>
            </div>

            {/* Education Images Grid */}
            <div className={styles.sectionHeader}>
              <h3 className={styles.educationImagesTitle}>Our Education Partners & Institutions</h3>
              <p className={styles.educationImagesSubtitle}>We partner with leading educational institutions across India</p>
            </div>
            <div className={styles.educationImagesGrid}>
              {educationImages.map((image, index) => (
                <div key={index} className={styles.educationImageCard}>
                  <Image
                    src={image}
                    alt={`Education institution ${index + 1}`}
                    width={200}
                    height={150}
                    className={styles.educationImage}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* IT Jobs Images Grid - Only show when career filter is active */}
        {activeFilter === "career" && (
          <div className={styles.educationImagesSection}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.educationImagesTitle}>IT JOB ASSISTANCE & PLACEMENT SUPPORT</h3>
              <p className={styles.educationImagesSubtitle}>
                Get placed in top IT companies with our comprehensive job assistance program. We provide end-to-end support from training to placement.
              </p>
            </div>

            {/* IT Jobs Images Grid */}
            <div className={styles.sectionHeader}>
              <h3 className={styles.educationImagesTitle}>Our IT Job Placement Success Stories</h3>
              <p className={styles.educationImagesSubtitle}>We have successfully placed candidates in leading IT companies</p>
            </div>
            <div className={styles.educationImagesGrid}>
              {[
                "/it-jobs/it-jobs.jpeg",
                "/it-jobs/it-jobs2.jpeg", 
                "/it-jobs/it-jobs3.jpeg",
                "/it-jobs/it-jobs4.jpeg"
              ].map((image, index) => (
                <div key={index} className={styles.educationImageCard}>
                  <Image
                    src={image}
                    alt={`IT job placement ${index + 1}`}
                    width={200}
                    height={150}
                    className={styles.educationImage}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🔍</div>
            <h3>No services found</h3>
            <p>Try selecting a different category</p>
          </div>
        )}

        {/* Enhanced CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.animateCta : ''}`} id="cta">
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h3>Ready to Transform Your Future?</h3>
              <p>Get personalized guidance and start your journey with our expert team today</p>
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
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
    </>
  );
}