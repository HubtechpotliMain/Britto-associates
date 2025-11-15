// components/ServiceCard/ServiceCard.tsx
"use client";

import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  gradient?: string;
  isHovered?: boolean;
  index?: number;
  delay?: number; // Add this line
    features?: string[];
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  gradient,
  isHovered,
  index,
  delay = 0 // Add this with default value
}: ServiceCardProps) {
  return (
    <div 
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      style={gradient ? { 
        background: gradient,
        '--hover-glow': gradient,
        animationDelay: `${delay}ms` // Add this
      } as React.CSSProperties : {
        animationDelay: `${delay}ms` // Add this for non-gradient cards too
      }}
      data-index={index}
    >
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.hoverEffect}></div>
    </div>
  );
}