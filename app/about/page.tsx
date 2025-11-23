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
    { title: "Mahatma Gandhi National Pride Award", emoji: "🏅", image: "/images/award-mahatma-gandhi-pride.jpg" },
    { title: "APJ Abdul Kalam Bhartiya Ratan Samaan", emoji: "🏆", image: "/images/kalam-samman-2.jpg" },
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
                  image={award.image}
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
        {/* Online Media Section */}
      <div className={`${styles.section} ${isVisible ? styles.animateIn : ''}`}>
  <h2 className={styles.heading}>
    <span className={styles.headingIcon}>📰</span>
    Online Media Coverage
  </h2>

  <p className={styles.subtext}>
    BRITTO ASSOCIATES is covered by multiple national online media platforms.
  </p>

  <div className={styles.valuesGrid}>
    {[
      { title: "Bharat Darpan News", url: "https://bharatdarpannews.com/britto-honored-with-national-awards/" },
      { title: "Newspress", url: "https://newspress.co.in/britto-associates/" },
      { title: "Hind News Network", url: "https://hindnewsnetwork.in/britto-associates/" },
      { title: "Live News Today", url: "https://livenewstoday.in/britto-associates/" },
      { title: "Indian News Portal", url: "https://indiannewsportal.com/bangalore-based-britto-associates/" },
      { title: "India Online News", url: "https://indiaonlinenews.com/britto-associates/" },
      { title: "Indian Media News", url: "https://indianmedianews.com/britto-associates/" },
      { title: "BizTalk India", url: "https://biztalkindia.com/britto-associates/" },
      { title: "E India News", url: "https://eindianews.com/britto-associates/" }
    ].map((item, index) => (
      <a
        key={index}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.valueCard}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <div className={styles.valueIcon}>🔗</div>
        <h4>{item.title}</h4>
        <p>Read Full Article →</p>
      </a>
    ))}
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
              <svg 
                className={styles.whatsappIcon}
                viewBox="0 0 24 24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
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