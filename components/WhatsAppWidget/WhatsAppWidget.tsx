"use client";

import styles from "./WhatsAppWidget.module.css";
import { motion } from "framer-motion";

export default function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/919739950153?text=Hello%20Britto%20Associates"
      className={styles.floating}
      target="_blank"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      💬
    </motion.a>
  );
}
