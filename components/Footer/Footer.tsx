"use client";

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Briefcase } from 'lucide-react';
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* TOP GRID */}
        <div className={styles.topGrid}>
          
          {/* Brand Box */}
          <div className="col">
            <div className={styles.brandRow}>
              
              {/* Company Logo */}
              <div className={styles.brandLogoBox}>
                <img 
                  src="/logo/logo.jpg" 
                  alt="Britto Associates Logo" 
                  className={styles.brandLogo} 
                />
              </div>

              <div>
                <h3 className={styles.brandTitle}>BRITTO ASSOCIATES </h3>
                <p className={styles.brandSub}>A Multi-Domain Enterprise</p>
              </div>
            </div>

            <p className={styles.brandSub}>
              Real Estate • Education Consultancy • IT Job Assistance • Social Activism • Legal Consulting
            </p>

            <div className={styles.contactInfo}>
              <p><strong>ISO :</strong> 9001:2005 (USA)</p>
              <p><strong>GST :</strong> 29BAGPB4125E2Z4</p>
              <p><strong>MSME :</strong> Registered – Govt. of India</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col">
            <h3>Quick Links</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/">Home</Link></li>
              <li className={styles.linkItem}><Link href="/about">About Us</Link></li>
              <li className={styles.linkItem}><Link href="/education">Education</Link></li>
              <li className={styles.linkItem}><Link href="/services">Services</Link></li>
              <li className={styles.linkItem}><Link href="/gallery">Gallery</Link></li>
              <li className={styles.linkItem}><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          {/* Services */}
 {/* Services */}
 <div className="col">
  <h3>Our Services</h3>
  <ul className={styles.linkList}>
    <li>Education Consultancy</li>
    <li>IT Job Assistance</li>
    <li>Legal Assistance</li>
    <li>Business Management</li>
    <li>Business Loan Assistance</li>
    <li>Real Estate Consulting</li>
    <li>Rental Property Management</li>
    <li>RERA Registration</li>
    <li>Social Activism</li>
  </ul>
</div>



          {/* Contact */}
          <div className="col">
            <h3>Contact Us</h3>

            <ul className={styles.contactList}>
              
              <li className={styles.contactItem}>
                <MapPin size={18} />
                <span className={styles.contactText}>
                  203, Kanakadasa Layout,<br />
                  Kanakadasa Main Road,<br />
                  Lingarajapuram, Bangalore – 560084
                </span>
              </li>

              <li className={styles.contactItem}>
                <Phone size={18} />
                <a href="tel:+919739950153">+91 9739950153</a>
              </li>

              <li className={styles.contactItem}>
                <Mail size={18} />
                <a href="mailto:brittoassociates1967@gmail.com">
                  brittoassociates1967@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p style={{ color:'#94a3b8', fontSize:13 }}>
            © {new Date().getFullYear()} BRITTO ASSOCIATES. All rights reserved.
          </p>

          <div className={styles.socials}>
            <a className={styles.socialBtn}><Facebook size={16} /></a>
            <a className={styles.socialBtn}><Instagram size={16} /></a>
            <a className={styles.socialBtn}><Twitter size={16} /></a>
          </div>
        </div>

        {/* ⭐ TECHPOTLI CREDIT ⭐ */}
        <div className={styles.techpotli}>
          <p>Website Designed by</p>

          <a
            href="https://techpotli.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            <img
              src="/logo/New_Techpotli_Logo.png"
              alt="TechPotli"
              className={styles.logo}
            />
          </a>
        </div>

      </div>
    </footer>
  );
}
