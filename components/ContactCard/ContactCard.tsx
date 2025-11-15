"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./ContactCard.module.css";

type Props = {
  label: string;
  value: string;
  icon: string;
  link?: string;
  description?: string; // Add description prop
};

export default function ContactCard({ label, value, icon, link, description }: Props) {
  const content = (
    <>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.texts}>
        <h3>{label}</h3>
        <p className={styles.value}>{value}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </>
  );

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {link ? (
        <a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <div className={styles.wrap}>{content}</div>
      )}
    </motion.div>
  );
}