// components/AwardCard/AwardCard.tsx
"use client";

import styles from "./AwardCard.module.css";

interface AwardCardProps {
  title: string;
  emoji: string;
  delay?: number; // Add delay prop
}

export default function AwardCard({ title, emoji, delay = 0 }: AwardCardProps) {
  return (
    <div 
      className={styles.card}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}