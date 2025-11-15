"use client";

import styles from "./WhyChooseUs.module.css";
import { motion } from "framer-motion";

const items = [
  { icon: "✔️", text: "Ethical & Transparent Services" },
  { icon: "🏆", text: "Government Recognized (MSME)" },
  { icon: "💼", text: "Multi-Domain Expertise" },
  { icon: "🤝", text: "Trusted & Community Focused" },
  { icon: "⚡", text: "Fast & Reliable Support" },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h2 className={styles.heading}>Why Choose BRITTO ASSOCIATES?</h2>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className={styles.icon}>{item.icon}</span>
              <p className={styles.text}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
