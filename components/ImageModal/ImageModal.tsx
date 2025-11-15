// components/ImageModal/ImageModal.tsx
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ImageModal.module.css";

type Props = {
  open: boolean;
  src?: string;
  alt?: string;
  caption?: string;
  onClose: () => void;
};

export default function ImageModal({ open, src, alt, caption, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.98, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt={alt} className={styles.preview} />
            <div className={styles.info}>
              <div className={styles.title}>{alt}</div>
              {caption && <div className={styles.caption}>{caption}</div>}
              <button className={styles.close} onClick={onClose} aria-label="Close">Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
