"use client";

import { useState, useRef, useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import AwardCard from "@/components/AwardCard/AwardCard";
import WhatsAppWidget from "@/components/WhatsAppWidget/WhatsAppWidget";
import styles from "./about.module.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");
  const [isVisible, setIsVisible] = useState(false);
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

  const stats = [
    { number: "5+", label: "Service Domains" },
    { number: "1000+", label: "Clients Served" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" }
  ];

  const values = [
    {
      icon: "🤝",
      title: "Trust & Transparency",
      description: "We believe in building relationships based on honesty and clear communication."
    },
    {
      icon: "🌱",
      title: "Social Impact", 
      description: "Every service we provide contributes to positive social change."
    },
    {
      icon: "⚡",
      title: "Innovation",
      description: "Constantly evolving to meet the changing needs of our clients."
    },
    {
      icon: "❤️",
      title: "Compassion",
      description: "Putting people and their well-being at the center of everything we do."
    }
  ];

  const awards = [
    { title: "Mahatma Gandhi National Pride Award", emoji: "🏅" },
    { title: "APJ Abdul Kalam Bhartiya Ratan Samaan", emoji: "🏆" },
    { title: "MSME Recognition – Govt. of India", emoji: "🎖️" }
  ];

  // WhatsApp functions
  const openWhatsApp = (service = "") => {
    const phoneNumber = "919739950153";
    let message = "Hello! I visited your About page and I'm interested in learning more about your services.";
    
    if (service) {
      message = `Hello! I visited your About page and I'm interested in ${service}. Please provide more information.`;
    }
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleGetInTouch = () => {
    openWhatsApp();
  };

  const handleViewServices = () => {
    window.location.href = "/services";
  };

  const handleAwardClick = (awardTitle: string) => {
    openWhatsApp(`I saw your ${awardTitle} and would like to know more about your achievements`);
  };

  const handleCertificationClick = (certTitle: string) => {
    openWhatsApp(`I'm impressed by your ${certTitle} and would like to discuss potential collaboration`);
  };

  return (
    <>
      <Hero
        title="About BRITTO ASSOCIATES"
        subtitle="A visionary enterprise recognized under MSME (Govt. of India), led by Mr. Antony John Britto."
        bgImage="/images/about-hero.jpg"
      />

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={stat.label} className={styles.statCard}>
                <h3 className={styles.statNumber}>{stat.number}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" ref={sectionRef}>
        {/* Who We Are */}
        <div className={`${styles.section} ${isVisible ? styles.animateIn : ''}`}>
          <h2 className={styles.heading}>
            <span className={styles.headingIcon}>🏢</span>
            Who We Are
          </h2>
          <div className={styles.content}>
            <p className={styles.text}>
              BRITTO ASSOCIATES is a multifaceted enterprise based in Bangalore. 
              We work across Real Estate, Education Consultancy, IT Job Support, Legal 
              Assistance, and Social Welfare. Founded by Mr. Antony John Britto, our 
              mission is to empower people with transparent, ethical, and impactful services.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className={`${styles.section} ${styles.founderSection} ${isVisible ? styles.animateIn : ''}`}>
          <h2 className={styles.heading}>
            <span className={styles.headingIcon}>👨‍💼</span>
            Our Founder
          </h2>
          <div className={styles.founderContent}>
            <div className={styles.founderText}>
              <p className={styles.text}>
                <strong>Mr. Antony John Britto</strong> is known for his contribution to community welfare, 
                education support, human rights & animal rights activism. He strongly believes 
                that business should have purpose — not just profit.
              </p>
              <div className={styles.founderQualities}>
                <span className={styles.quality}>Community Leader</span>
                <span className={styles.quality}>Social Activist</span>
                <span className={styles.quality}>Entrepreneur</span>
                <span className={styles.quality}>Mentor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className={`${styles.section} ${isVisible ? styles.animateIn : ''}`}>
          <h2 className={styles.heading}>
            <span className={styles.headingIcon}>🏆</span>
            Our Achievements
          </h2>
          <p className={styles.subtext}>
            Honored nationally for humanitarian and entrepreneurial excellence.
          </p>

          <div className={styles.awardsGrid}>
            {awards.map((award, index) => (
              <div 
                key={award.title}
                onClick={() => handleAwardClick(award.title)}
                style={{ cursor: 'pointer' }}
              >
                <AwardCard 
                  title={award.title} 
                  emoji={award.emoji}
                  delay={index * 100}
                />
              </div>
            ))}
          </div>

          <blockquote className={styles.quote}>
            "Business should not be about profits — it should be about purpose."  
            <br />
            <span>– Mr. Antony John Britto</span>
          </blockquote>
        </div>

        {/* Mission & Vision Tabs */}
        <div className={`${styles.section} ${isVisible ? styles.animateIn : ''}`}>
          <h2 className={styles.heading}>
            <span className={styles.headingIcon}>🎯</span>
            Our Purpose
          </h2>
          
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === "mission" ? styles.active : ''}`}
              onClick={() => setActiveTab("mission")}
            >
              Mission
            </button>
            <button 
              className={`${styles.tab} ${activeTab === "vision" ? styles.active : ''}`}
              onClick={() => setActiveTab("vision")}
            >
              Vision
            </button>
            <button 
              className={`${styles.tab} ${activeTab === "values" ? styles.active : ''}`}
              onClick={() => setActiveTab("values")}
            >
              Values
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === "mission" && (
              <div className={styles.missionContent}>
                <h3>Our Mission</h3>
                <ul className={styles.list}>
                  <li>Empower youth through education & job support.</li>
                  <li>Deliver transparent, honest and ethical services.</li>
                  <li>Uplift society with humanitarian initiatives.</li>
                  <li>Make real estate simple, safe & accessible.</li>
                  <li>Bridge the gap between education and employment.</li>
                </ul>
              </div>
            )}

            {activeTab === "vision" && (
              <div className={styles.visionContent}>
                <h3>Our Vision</h3>
                <p className={styles.text}>
                  To create a society where every individual has access to quality education, 
                  meaningful employment, safe housing, and legal support — all delivered with 
                  integrity and social responsibility.
                </p>
              </div>
            )}

            {activeTab === "values" && (
              <div className={styles.valuesContent}>
                <h3>Our Core Values</h3>
                <div className={styles.valuesGrid}>
                  {values.map((value, index) => (
                    <div key={value.title} className={styles.valueCard}>
                      <div className={styles.valueIcon}>{value.icon}</div>
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Certifications */}
        <div className={`${styles.section} ${isVisible ? styles.animateIn : ''}`}>
          <h2 className={styles.heading}>
            <span className={styles.headingIcon}>📜</span>
            Certifications & Recognition
          </h2>
          <div className={styles.certifications}>
            <div 
              className={styles.certCard}
              onClick={() => handleCertificationClick("ISO 9001:2015 Certification")}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.certIcon}>🏅</div>
              <h3>ISO 9001:2005 (USA)</h3>
              <p>Quality Management System Certified</p>
            </div>
            <div 
              className={styles.certCard}
              onClick={() => handleCertificationClick("MSME Registration")}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.certIcon}>🇮🇳</div>
              <h3>MSME Registered</h3>
              <p>Government of India</p>
            </div>
            <div 
              className={styles.certCard}
              onClick={() => handleCertificationClick("GST Registration")}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.certIcon}>📊</div>
              <h3>GST Registered</h3>
              <p>GST: 29BAGPB4125E2Z4</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.animateIn : ''}`}>
          <h2>Ready to Work Together?</h2>
          <p>Let's create positive impact through our collaborative services</p>
          <div className={styles.ctaButtons}>
            <button 
              className={styles.primaryBtn} 
              onClick={handleGetInTouch}
            >
              <span className={styles.whatsappIcon}>💬</span>
              Get In Touch
            </button>
            <button 
              className={styles.secondaryBtn}
              onClick={handleViewServices}
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </>
  );
}