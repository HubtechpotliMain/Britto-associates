// components/ServiceCard/ServiceCard.tsx
"use client";

import Image from "next/image";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  gradient?: string;
  isHovered?: boolean;
  index?: number;
  delay?: number;
  features?: string[];
  image?: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  gradient,
  isHovered,
  index,
  delay = 0,
  image
}: ServiceCardProps) {
  return (
    <div 
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      style={gradient ? { 
        background: gradient,
        '--hover-glow': gradient,
        animationDelay: `${delay}ms`
      } as React.CSSProperties : {
        animationDelay: `${delay}ms`
      }}
      data-index={index}
    >
      {image ? (
        <div className={styles.imageWrapper}>
          <Image 
            src={image} 
            alt={title}
            width={400}
            height={320}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.serviceImage}
            unoptimized
            priority={index !== undefined && index < 3}
          />
        </div>
      ) : (
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>{icon}</span>
        </div>
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.hoverEffect}></div>
    </div>
  );
}