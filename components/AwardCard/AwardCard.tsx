// components/AwardCard/AwardCard.tsx
"use client";

import Image from "next/image";
import styles from "./AwardCard.module.css";

interface AwardCardProps {
  title: string;
  emoji: string;
  delay?: number;
  image?: string;
}

export default function AwardCard({ title, emoji, delay = 0, image }: AwardCardProps) {
  return (
    <div 
      className={styles.card}
      style={{ animationDelay: `${delay}ms` }}
    >
      {image ? (
        <div className={styles.imageWrapper}>
          <Image 
            src={image} 
            alt={title}
            width={500}
            height={400}
            className={styles.awardImage}
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={title.includes("Mahatma Gandhi") || title.includes("APJ Abdul Kalam")}
          />
        </div>
      ) : (
        <span className={styles.emoji}>{emoji}</span>
      )}
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}