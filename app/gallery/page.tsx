"use client";

import React, { useState, useEffect } from "react";
import { galleryItems } from "./galleryData";
import GalleryCard from "@/components/GalleryCard/GalleryCard";
import ImageModal from "@/components/ImageModal/ImageModal";
import styles from "./gallery.module.css";
import Hero from "@/components/Hero/Hero";

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<{ src?: string; alt?: string; caption?: string } | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(`.${styles.section}`);
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  function openModal(src?: string, alt?: string, caption?: string) {
    setActive({ src, alt, caption });
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setTimeout(() => setActive(null), 200);
  }

  // Get unique categories
  const categories = ["all", ...new Set(galleryItems.map(item => item.category))];

  // Filter items based on active filter
  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Group filtered items by category
  const grouped = filteredItems.reduce<Record<string, typeof galleryItems>>((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
      <Hero
        title="Our Gallery"
        subtitle="A visual collection of our projects, awards, education activities and social initiatives."
        bgImage="/images/real-villa-main.jpg"
      />

      <main className={styles.container}>
        <header className={`${styles.header} ${isVisible ? styles.animateHeader : ''}`}>
          <h1 className={styles.title}>Our Visual Journey</h1>
          <p className={styles.subtitle}>
            Explore our work across real estate, education, social activism, and more. 
            Click any image to view in full detail.
          </p>
        </header>

        {/* Video highlight */}
        <section className={`${styles.videoSection} ${isVisible ? styles.animateIn : ''}`}>
          <div className={styles.videoContent}>
            <div className={styles.videoText}>
              <span className={styles.videoEyebrow}>New • 2025</span>
              <h2>Experience Britto Associates in Motion</h2>
              <p>
                Watch a short introduction of our multidisciplinary services, community outreach,
                and the values that drive us to deliver impact across India.
              </p>
            </div>
            <div className={styles.videoWrapper}>
              <video
                className={styles.videoPlayer}
                controls
                preload="metadata"
                poster="/images/britto-associates-banner.jpg"
              >
                <source src="/video/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <div className={styles.filterContainer}>
          <div className={styles.filterTabs}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.filterTab} ${activeFilter === category ? styles.active : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category === "all" ? "All Photos" : category}
                {category !== "all" && (
                  <span className={styles.count}>
                    {galleryItems.filter(item => item.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Content */}
        {activeFilter === "all" ? (
          // Show grouped by category when "All" is selected
          Object.keys(grouped).map((category, index) => (
            <section 
              key={category} 
              className={`${styles.section} ${isVisible ? styles.animateIn : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{category}</h2>
                <span className={styles.sectionCount}>({grouped[category].length} photos)</span>
              </div>
              <div className={styles.grid}>
                {grouped[category].map((item, itemIndex) => (
                  <GalleryCard
                    key={item.id}
                    src={item.src}
                    alt={item.alt}
                    caption={item.caption}
                    category={item.category}
                    onClick={(s) => openModal(s, item.alt, item.caption)}
                    delay={itemIndex * 100}
                  />
                ))}
              </div>
            </section>
          ))
        ) : (
          // Show all filtered items in one grid when category is selected
          <section className={`${styles.section} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{activeFilter}</h2>
              <span className={styles.sectionCount}>({filteredItems.length} photos)</span>
            </div>
            <div className={styles.grid}>
              {filteredItems.map((item, index) => (
                <GalleryCard
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  caption={item.caption}
                  category={item.category}
                  onClick={(s) => openModal(s, item.alt, item.caption)}
                  delay={index * 50}
                />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📷</div>
            <h3>No photos found</h3>
            <p>Try selecting a different category</p>
          </div>
        )}

        <ImageModal
          open={open}
          src={active?.src}
          alt={active?.alt}
          caption={active?.caption}
          onClose={closeModal}
        />
      </main>
    </>
  );
}