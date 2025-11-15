"use client";

import { useState, useRef, useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import AwardCard from "@/components/AwardCard/AwardCard";
import WhatsAppWidget from "@/components/WhatsAppWidget/WhatsAppWidget";
import styles from "./Home.module.css";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("mission");
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
      description: "Land, plots, villas, apartments, farmland — guided ethically with trust.",
      icon: "🏡",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Education Consultancy",
      description: "Helping students choose colleges & courses to build strong futures.",
      icon: "🎓",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "IT Job Assistance",
      description: "Skill guidance + job placement support in the IT sector.",
      icon: "💼",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "Social Activism",
      description: "Human rights, child education, animal welfare & community support.",
      icon: "🌍",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "Legal Consulting",
      description: "Legal clarity & support for documentation, registration & formalities.",
      icon: "⚖️",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  const stats = [
    { number: "5+", label: "Service Domains" },
    { number: "1000+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Projects Done" }
  ];

  const awards = [
    { title: "Mahatma Gandhi National Pride Award", emoji: "🏅" },
    { title: "APJ Abdul Kalam Bhartiya Ratan Samaan", emoji: "🏆" },
    { title: "MSME Recognition – Govt. of India", emoji: "🎖️" }
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

  // WhatsApp functions
  const openWhatsApp = (service = "") => {
    const phoneNumber = "919739950153";
    let message = "Hello! I'm interested in your services.";
    
    if (service) {
      message = `Hello! I'm interested in your ${service} services. Please provide more information.`;
    }
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleFreeConsultation = () => {
    openWhatsApp();
  };

  const handleViewServices = () => {
    window.location.href = "/services";
  };

  const handleAwardClick = (awardTitle: string) => {
    openWhatsApp(`I saw your ${awardTitle} and would like to know more about your achievements`);
  };

  return (
    <>
      <Hero
        title="Driving Growth, Education & Social Impact from Bangalore"
        subtitle="BRITTO ASSOCIATES works across Real Estate, Education, IT Jobs, Legal Services & Social Welfare."
        button1="Explore Services"
        button1Link="/services"
        button2="Contact Now"
        button2Link="/contact"
        bgImage="/images/home-hero.jpg"
      />

      {/* Stats Banner */}
      <div className={styles.statsBanner}>
        <div className="container">
          <div className={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statText}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.aboutTitle}>About BRITTO ASSOCIATES</h2>
              <p className={styles.aboutDescription}>
                A visionary enterprise recognized under MSME (Govt. of India), led by Mr. Antony John Britto. 
                We are a multifaceted enterprise based in Bangalore working across Real Estate, Education 
                Consultancy, IT Job Support, Legal Assistance, and Social Welfare.
              </p>
              
              <div className={styles.founderSection}>
                <h3>Our Founder</h3>
                <p>
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
            
            <div className={styles.aboutAchievements}>
              <h3>Our Achievements</h3>
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
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.missionSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Purpose & Values</h2>
          
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
                <p>
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
      </section>

      {/* Services Section */}
      <section className="container" ref={sectionRef}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.heading} ${isVisible ? styles.animateHeading : ''}`}>
            Our Work Domains
          </h2>
          <p className={`${styles.subheading} ${isVisible ? styles.animateSubheading : ''}`}>
            Comprehensive services designed to empower individuals and communities
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={styles.cardWrapper}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => openWhatsApp(service.title)}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                gradient={service.gradient}
                isHovered={hoveredCard === index}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Quick CTA */}
        <div className={`${styles.quickCta} ${isVisible ? styles.animateCta : ''}`}>
          <div className={styles.ctaContent}>
            <h3>Ready to Get Started?</h3>
            <p>Let's discuss how we can help you achieve your goals</p>
            <div className={styles.ctaButtons}>
              <button 
                className={styles.ctaBtnPrimary} 
                onClick={handleFreeConsultation}
              >
                <span className={styles.whatsappIcon}>💬</span>
                Get Free Consultation
              </button>
              <button 
                className={styles.ctaBtnSecondary}
                onClick={handleViewServices}
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Certifications Section */}
      <section className={styles.certificationsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Certifications & Recognition</h2>
          <div className={styles.certifications}>
            <div className={styles.certCard}>
              <div className={styles.certIcon}>🏅</div>
              <h3>ISO 9001:2005 (USA)</h3>
              <p>Quality Management System Certified</p>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certIcon}>🇮🇳</div>
              <h3>MSME Registered</h3>
              <p>Government of India</p>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certIcon}>📊</div>
              <h3>GST Registered</h3>
              <p>GST: 29BAGPB4125E2Z4</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaContent}>
            <h2>Ready to Work Together?</h2>
            <p>Let's create positive impact through our collaborative services</p>
            <div className={styles.finalCtaButtons}>
              <button 
                className={styles.primaryBtn}
                onClick={handleFreeConsultation}
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
        </div>
      </section>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </>
  );
}