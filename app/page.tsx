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
      title: "Education Consultancy",
      description: "College admissions & education bank loan assistance for students.",
      icon: "🎓",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: "/new-img/best-education-consultation-for-college.jpeg"
    },
    {
      title: "IT Job Assistance", 
      description: "Professional IT job placement and career guidance services.",
      icon: "💼",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      image: "/new-img/assistence-in-IT-job.jpeg"
    },
    {
      title: "Legal Assistance",
      description: "All types of legal documentation assistance (LDA) and support.",
      icon: "⚖️",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      image: "/new-img/legal-doc-service.jpeg"
    },
    {
      title: "Business Management",
      description: "All types of company registration and business setup services.",
      icon: "🏢",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "Business Bank Loan",
      description: "Professional support in securing business loans from banks.",
      icon: "💰",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      image: "/new-img/education-loan.jpeg"
    },
    {
      title: "Real Estate",
      description: "Buying & selling of apartments, villas, plots, residential & farm land.",
      icon: "🏠",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      image: "/new-img/britto-associates-buying-selling-card.jpeg"
    },
    {
      title: "Rental Property Management",
      description: "Complete residential property management services.",
      icon: "🔑",
      gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)"
    },
    {
      title: "RERA Registration",
      description: "Professional RERA registration services for real estate projects.",
      icon: "📋",
      gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
      image: "/new-img/britto-associates-reera.jpeg"
    },
    {
      title: "Social Activism",
      description: "Human rights, animal welfare, and environment protection initiatives.",
      icon: "🌿",
      gradient: "linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)",
      image: "/new-img/britto-associates-for-pets.jpeg"
    }
  ];

  const stats = [
    { number: "9+", label: "Service Domains" },
    { number: "1000+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Projects Done" }
  ];

  const awards = [
    { title: "Mahatma Gandhi National Pride Award", emoji: "🏅", image: "/images/award-mahatma-gandhi-pride.jpg" },
    { title: "APJ Abdul Kalam Bhartiya Ratan Samaan", emoji: "🏆", image: "/images/kalam-samman-1.jpg" },
    { title: "MSME Recognition – Govt. of India", emoji: "🎖️", image: "/new-img/MSME-img.jpeg" }
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

  // Online Media Coverage data
  const mediaCoverage = [
    { title: "Bharat Darpan News", url: "https://bharatdarpannews.com/britto-honored-with-national-awards/" },
    { title: "Newspress", url: "https://newspress.co.in/britto-associates/" },
    { title: "Hind News Network", url: "https://hindnewsnetwork.in/britto-associates/" },
    { title: "Live News Today", url: "https://livenewstoday.in/britto-associates/" },
    { title: "Indian News Portal", url: "https://indiannewsportal.com/bangalore-based-britto-associates/" },
    { title: "India Online News", url: "https://indiaonlinenews.com/britto-associates/" },
    { title: "Indian Media News", url: "https://indianmedianews.com/britto-associates/" },
    { title: "BizTalk India", url: "https://biztalkindia.com/britto-associates/" },
    { title: "E India News", url: "https://eindianews.com/britto-associates/" }
  ];

  // Helper function for media logos
  const getMediaLogo = (title: string) => {
    const words = title.split(' ');
    if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
    return words.map(word => word[0]).join('').substring(0, 3).toUpperCase();
  };

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
        subtitle="BRITTO ASSOCIATES works across Education, IT Jobs, Legal Services, Business Management, Real Estate & Social Welfare."
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
                We are a multifaceted enterprise based in Bangalore working across Education Consultancy, 
                IT Job Support, Legal Assistance, Business Management, Real Estate, and Social Welfare.
              </p>
              
              <div className={styles.founderSection}>
                <h3>Our Founder</h3>
                <div className={styles.founderContent}>
                  <div className={styles.founderImageWrapper}>
                    <img 
                      src="/images/founder-smile-event2.jpg" 
                      alt="Mr. Antony John Britto - Founder of Britto Associates"
                      className={styles.founderImage}
                    />
                  </div>
                  <div className={styles.founderText}>
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
                image={service.image}
              />
            </div>
          ))}
        </div>

        {/* Quick CTA */}
       
      </section>

      {/* Online Media Coverage Section */}
      <section className={styles.mediaSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.mediaHeading}>
              <span className={styles.headingIcon}>📰</span>
              Online Media Coverage
            </h2>
            <p className={styles.mediaSubtext}>
              BRITTO ASSOCIATES is covered by multiple national online media platforms.
            </p>
          </div>

          <div className={styles.mediaGrid}>
            {mediaCoverage.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mediaCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.mediaIcon}>📰</div>
                  <div className={styles.mediaLogo}>
                    {getMediaLogo(item.title)}
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h4>{item.title}</h4>
                  <p className={styles.cardDescription}>
                    Read our feature article on this prominent news platform
                  </p>
                  <div className={styles.readMore}>
                    <span>Read Full Article</span>
                    <span className={styles.arrow}>→</span>
                  </div>
                </div>
                <div className={styles.cardHoverEffect}></div>
              </a>
            ))}
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
        </div>
      </section>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </>
  );
}