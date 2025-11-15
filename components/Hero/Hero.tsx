// components/Hero/Hero.tsx
"use client";

import styles from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle: string;
  button1?: string;
  button1Link?: string;
  button2?: string;
  button2Link?: string;
  bgImage?: string; // Make optional
}

export default function Hero({ 
  title, 
  subtitle, 
  button1, 
  button1Link, 
  button2, 
  button2Link, 
  bgImage 
}: HeroProps) {
  // Agar bgImage hai toh image use karein, nahi toh default gradient
  const backgroundStyle = bgImage 
    ? { 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : { 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      };

  return (
    <section 
      className={styles.hero}
      style={backgroundStyle}
    >
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          
          {(button1 || button2) && (
            <div className={styles.buttons}>
              {button1 && button1Link && (
                <a href={button1Link} className={styles.primaryBtn}>
                  {button1}
                </a>
              )}
              {button2 && button2Link && (
                <a href={button2Link} className={styles.secondaryBtn}>
                  {button2}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}