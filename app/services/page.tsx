"use client";

import { useState, useRef, useEffect } from "react";
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
      features: ["College Admission", "Education Bank Loan", "Career Counseling", "University Guidance"]
    },
    {
      title: "IT Job Assistance", 
      description: "Professional IT job placement and career guidance services.",
      icon: "💼",
      category: "career",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      features: ["Job Placement", "Resume Building", "Interview Preparation", "Career Guidance"]
    },
    {
      title: "Legal Assistance",
      description: "All types of legal documentation assistance (LDA) and support.",
      icon: "⚖️",
      category: "legal",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      features: ["Legal Documentation", "Document Verification", "Agreements", "Registration Support"]
    },
    {
      title: "Business Management",
      description: "All types of company registration and business setup services.",
      icon: "🏢",
      category: "business",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      features: ["Company Registration", "Business Setup", "Compliance", "Documentation"]
    },
    {
      title: "Business Bank Loan",
      description: "Professional support in securing business loans from banks.",
      icon: "💰",
      category: "finance",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      features: ["Loan Application", "Financial Evaluation", "Bank Coordination", "Document Preparation"]
    },
    {
      title: "Real Estate",
      description: "Buying & selling of apartments, villas, plots, residential & farm land.",
      icon: "🏠",
      category: "realestate",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      features: ["Property Buying/Selling", "Site Visits", "Legal Clarity", "Investment Guidance"]
    },
    {
      title: "Rental Property Management",
      description: "Complete residential property management services.",
      icon: "🔑",
      category: "realestate",
      gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
      features: ["Tenant Screening", "Rent Collection", "Property Inspection", "Legal Compliance"]
    },
    {
      title: "RERA Registration",
      description: "Professional RERA registration services for real estate projects.",
      icon: "📋",
      category: "legal",
      gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
      features: ["RERA Compliance", "Project Registration", "Documentation", "Legal Support"]
    },
    {
      title: "Social Activism",
      description: "Human rights, animal welfare, and environment protection initiatives.",
      icon: "🌿",
      category: "social",
      gradient: "linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)",
      features: ["Community Programs", "Awareness Campaigns", "Legal Aid", "Volunteer Support"]
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
              />
            </div>
          ))}
        </div>

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
                <span className={styles.btnIcon}>📞</span>
                Book Free Consultation
              </button>
              <button 
                className={styles.secondaryBtn}
                onClick={handleWhatsAppChat}
              >
                <span className={styles.btnIcon}>💬</span>
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