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
      title: "Real Estate",
      description: "Buy/sell land, apartments, villas, and farmland with full legal clarity.",
      icon: "🏠",
      category: "business",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: ["Property Consulting", "Legal Documentation", "Site Visits", "Investment Guidance"]
    },
    {
      title: "Education Consultancy", 
      description: "Guiding students into top institutions across India.",
      icon: "🎓",
      category: "education",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      features: ["Career Counseling", "University Admissions", "Scholarship Guidance", "Documentation"]
    },
    {
      title: "IT Job Assistance",
      description: "Connect to genuine IT jobs with skill-building guidance.",
      icon: "💼",
      category: "career",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      features: ["Resume Building", "Interview Prep", "Skill Training", "Job Placement"]
    },
    {
      title: "Social Activism",
      description: "Human rights, animal welfare, environment protection.",
      icon: "🌿",
      category: "social",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      features: ["Community Programs", "Awareness Campaigns", "Legal Aid", "Volunteer Support"]
    },
    {
      title: "Legal Consulting",
      description: "Document verification, agreements, registrations & support.",
      icon: "⚖️",
      category: "legal",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      features: ["Document Review", "Legal Agreements", "Registration Support", "Compliance"]
    }
  ];

  const filteredServices = activeFilter === "all" 
    ? services 
    : services.filter(service => service.category === activeFilter);

  // Stats for the filter
  const serviceStats = {
    all: services.length,
    business: services.filter(s => s.category === "business").length,
    education: services.filter(s => s.category === "education").length,
    career: services.filter(s => s.category === "career").length,
    social: services.filter(s => s.category === "social").length,
    legal: services.filter(s => s.category === "legal").length
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
        subtitle="Providing excellence across Real Estate, Education, IT Jobs & Legal Support with trusted expertise and social impact."
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
              <span className={styles.statNumber}>5+</span>
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
            Tailored solutions for your real estate, education, career, and legal needs
          </p>
        </div>

        {/* Enhanced Filter Tabs */}
        <div className={styles.filterContainer}>
          <div className={styles.filterTabs}>
            {["all", "business", "education", "career", "social", "legal"].map(category => (
              <button
                key={category}
                className={`${styles.filterBtn} ${activeFilter === category ? styles.active : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                <span className={styles.filterText}>
                  {category === "all" ? "All Services" : 
                   category === "business" ? "Real Estate" : 
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