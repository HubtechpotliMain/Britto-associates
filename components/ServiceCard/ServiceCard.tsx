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
  image?: string[] | string;
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
  // Normalize image to array for consistent handling
  const images = Array.isArray(image) ? image : image ? [image] : [];

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
      {images.length > 0 ? (
        <div className={images.length > 1 ? styles.multiImageWrapper : styles.imageWrapper}>
          {images.map((img, imgIndex) => (
            <Image 
              key={imgIndex}
              src={img} 
              alt={`${title} ${imgIndex + 1}`}
              width={images.length > 1 ? 200 : 400}
              height={images.length > 1 ? 160 : 320}
              sizes={images.length > 1 ? "(max-width: 768px) 45vw, (max-width: 1200px) 22vw, 16vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              className={images.length > 1 ? styles.multiServiceImage : styles.serviceImage}
              unoptimized
              priority={index !== undefined && index < 3 && imgIndex === 0}
            />
          ))}
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