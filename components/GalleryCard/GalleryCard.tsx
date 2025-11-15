"use client";

import { useState } from "react";
import styles from "./GalleryCard.module.css";

interface GalleryCardProps {
  src: string;
  alt: string;
  caption?: string;
  category?: string;
  onClick: (src: string) => void;
  delay?: number;
}

export default function GalleryCard({ 
  src, 
  alt, 
  caption, 
  category, 
  onClick, 
  delay = 0 
}: GalleryCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className={`${styles.card} ${isLoaded ? styles.loaded : ''} ${isHovered ? styles.hovered : ''} ${imageError ? styles.error : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => !imageError && onClick(src)}
    >
      <div className={styles.imageContainer}>
        {!imageError ? (
          <img
            src={src}
            alt={alt}
            className={styles.image}
            onLoad={() => setIsLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className={styles.errorPlaceholder}>
            <span className={styles.errorIcon}>📷</span>
            <span className={styles.errorText}>Image not available</span>
          </div>
        )}
        
        {/* Loading Skeleton */}
        {!isLoaded && !imageError && (
          <div className={styles.skeleton}>
            <div className={styles.skeletonShimmer}></div>
          </div>
        )}

        {/* Enhanced Overlay */}
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            {category && (
              <div className={styles.categoryBadge}>
                <span className={styles.categoryDot}></span>
                {category}
              </div>
            )}
            {(caption || alt) && (
              <div className={styles.textContent}>
                <p className={styles.caption}>{caption || alt}</p>
              </div>
            )}
          </div>
          
          <div className={styles.actionButtons}>
            <button className={styles.zoomBtn} title="View larger">
              <span className={styles.zoomIcon}>🔍</span>
              <span className={styles.zoomText}>View</span>
            </button>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className={styles.hoverBorder}></div>
      </div>

      {/* Card Footer for Mobile */}
      <div className={styles.cardFooter}>
        {category && <span className={styles.footerCategory}>{category}</span>}
        {(caption || alt) && <p className={styles.footerCaption}>{caption || alt}</p>}
      </div>
    </div>
  );
}