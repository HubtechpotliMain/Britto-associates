"use client";

import { useState, useRef, useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import ContactCard from "@/components/ContactCard/ContactCard";
import WhatsAppWidget from "@/components/WhatsAppWidget/WhatsAppWidget";
import { Phone, MessageCircle, Mail, MapPin, Clock, Zap, Send, Car, Train } from "lucide-react";
import styles from "./contact.module.css";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("contact");
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const services = [
    "Real Estate",
    "Education Consultancy", 
    "IT Job Assistance",
    "Legal Consulting",
    "Social Activism",
    "General Inquiry"
  ];

  const quickActions = [
    {
      icon: "phone",
      title: "Call Now",
      description: "Speak directly with our team",
      action: "tel:+919739950153",
      color: "#10b981"
    },
    {
      icon: "whatsapp",
      title: "WhatsApp",
      description: "Quick chat for instant support",
      action: "https://wa.me/919739950153",
      color: "#25d366"
    },
    {
      icon: "mail",
      title: "Email Us",
      description: "Send detailed inquiries",
      action: "mailto:brittoassociates1967@gmail.com",
      color: "#3b82f6"
    },
    {
      icon: "mappin",
      title: "Visit Office",
      description: "Schedule an office visit",
      action: "#map",
      color: "#f59e0b"
    }
  ];

  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <Hero
        title="Get In Touch With Us"
        subtitle="Ready to transform your future? Connect with BRITTO ASSOCIATES for expert guidance in real estate, education, career, legal, and social services."
        button1="Call Now"
        button1Link="tel:+919739950153"
        button2="WhatsApp"
        button2Link="https://wa.me/919739950153"
      />

      {/* ---------------- QUICK ACTIONS ---------------- */}
      <section className={styles.quickActions}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Quick Connect</h2>
          <p className={styles.sectionSubtitle}>Choose your preferred way to reach us</p>
          
          <div className={styles.actionsGrid}>
            {quickActions.map((action, index) => (
              <a
                key={action.title}
                href={action.action}
                className={styles.actionCard}
                style={{ '--accent-color': action.color } as React.CSSProperties}
                target={action.action.startsWith('http') ? '_blank' : '_self'}
                rel={action.action.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <div className={styles.actionIcon} style={{ backgroundColor: action.color }}>
                  {action.icon === "phone" && <Phone size={32} />}
                  {action.icon === "whatsapp" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" width={32} height={32}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  )}
                  {action.icon === "mail" && <Mail size={32} />}
                  {action.icon === "mappin" && <MapPin size={32} />}
                </div>
                <h3>{action.title}</h3>
                <p>{action.description}</p>
                <div className={styles.actionHover}></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <section className="container" ref={sectionRef}>
        <div className={styles.tabContainer}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === "contact" ? styles.active : ''}`}
              onClick={() => setActiveTab("contact")}
            >
              <Phone size={18} />
              Contact Info
            </button>
            <button 
              className={`${styles.tab} ${activeTab === "form" ? styles.active : ''}`}
              onClick={() => setActiveTab("form")}
            >
              <Mail size={18} />
              Send Message
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === "contact" && (
              <div className={`${styles.contactSection} ${isVisible ? styles.animateIn : ''}`}>
                <h2 className={styles.heading}>Our Contact Information</h2>
                <p className={styles.subheading}>Multiple ways to connect with our team</p>

                <div className={styles.grid}>
                  <ContactCard
                    label="Office Address"
                    value="203, Kanakadasa Layout, Kanakadasa Main Road, Lingarajapuram, Bangalore – 560084"
                    icon="mappin"
                    description="Visit us for personalized consultation"
                  />

                  <ContactCard
                    label="Email Address"
                    value="brittoassociates1967@gmail.com"
                    icon="mail"
                    link="mailto:brittoassociates1967@gmail.com"
                    description="Send detailed inquiries and documents"
                  />

                  <ContactCard
                    label="Phone Number"
                    value="+91 9739950153"
                    icon="phone"
                    link="tel:+919739950153"
                    description="Available 9 AM - 7 PM, Mon - Sat"
                  />

                  <ContactCard
                    label="WhatsApp"
                    value="+91 9739950153"
                    icon="whatsapp"
                    link="https://wa.me/919739950153"
                    description="Quick responses for instant support"
                  />

                  <ContactCard
                    label="Working Hours"
                    value="Monday - Saturday: 9:00 AM - 7:00 PM"
                    icon="clock"
                    description="Sunday: Emergency services only"
                  />

                  <ContactCard
                    label="Response Time"
                    value="Within 2 hours during business hours"
                    icon="zap"
                    description="We value your time and queries"
                  />
                </div>
              </div>
            )}

            {activeTab === "form" && (
              <div className={`${styles.formSection} ${isVisible ? styles.animateIn : ''}`}>
                <h2 className={styles.heading}>Send Us a Message</h2>
                <p className={styles.subheading}>Fill out the form below and we'll get back to you shortly</p>

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="service">Service Interested In *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <span>Send Message</span>
                    <Send size={18} className={styles.btnIcon} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- GOOGLE MAP ---------------- */}
      <section className={styles.mapSection} id="map">
        <div className="container">
          <h2 className={styles.heading}>Visit Our Office</h2>
          <p className={styles.subheading}>Located in the heart of Bangalore for your convenience</p>

          <div className={styles.mapContainer}>
            <div className={styles.mapInfo}>
              <div className={styles.addressCard}>
                <h3>
                  <MapPin size={20} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }} />
                  Office Address
                </h3>
                <p>203, Kanakadasa Layout<br />Kanakadasa Main Road<br />Lingarajapuram<br />Bangalore – 560084</p>
                <div className={styles.mapFeatures}>
                  <span><Car size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} /> Ample Parking</span>
                  <span><Train size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} /> Near Metro Station</span>
                  <span><Clock size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} /> Mon-Sat: 9AM-7PM</span>
                </div>
              </div>
            </div>
            
            <div className={styles.mapWrap}>
              <iframe
                title="Britto Associates Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4923364327626!2d77.6276!3d13.0113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17163fb0cfd3%3A0x7a6b93e7cd36aa0!2sLingarajapuram%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- WHATSAPP WIDGET ---------------- */}
      <WhatsAppWidget />
    </>
  );
}