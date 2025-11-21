// app/gallery/galleryData.ts
export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  caption?: string;
  id: string;
};

const img = (file: string) => `/images/${file}`;

export const galleryItems: GalleryItem[] = [
  // Animal Rights
  { id: "animal-banner", src: img("animal-rights-banner.jpg"), alt: "Animal Rights Banner", category: "Activism", caption: "Animal Rights campaign banner" },
  { id: "animal-logo", src: img("animal-rights-logo.jpg"), alt: "Animal Rights Logo", category: "Activism", caption: "Animal Rights logo" },

  // Awards
  { id: "award-hr-id", src: img("award-human-rights-idcard.jpg"), alt: "Human Rights ID", category: "Awards", caption: "Human Rights ID card" },
  { id: "award-hr-join", src: img("award-human-rights-joining-letter.jpg"), alt: "Joining Letter", category: "Awards", caption: "Joining letter - human rights council" },
  { id: "award-gandhi", src: img("award-mahatma-gandhi-pride.jpg"), alt: "Mahatma Gandhi Pride Award", category: "Awards", caption: "Mahatma Gandhi Pride Award" },
  { id: "kalam-1", src: img("kalam-samman-1.jpg"), alt: "APJ Kalam Samman 1", category: "Awards", caption: "APJ Abdul Kalam Samman" },
  { id: "kalam-2", src: img("kalam-samman-2.jpg"), alt: "APJ Kalam Samman 2", category: "Awards", caption: "APJ Abdul Kalam Samman certificate" },

  // Brand / Poster
  { id: "britto-banner", src: img("britto-associates-banner.jpg"), alt: "Britto Associates Banner", category: "Brand", caption: "Britto Associates - Services" },

  // Education
  { id: "edu-office", src: img("education-consultancy-office.jpg"), alt: "Education Consultancy Office", category: "Education", caption: "Counselling & admissions" },
  { id: "st-joseph", src: img("education-st-joseph-university.jpg"), alt: "St Joseph University", category: "Education", caption: "St. Joseph University" },

  // Real Estate / Land
  { id: "farmland", src: img("farmland-view.jpg"), alt: "Farmland view", category: "Real Estate", caption: "Farmland and plot overview" },
  { id: "villa", src: img("real-villa-main.jpg"), alt: "Luxury Villa", category: "Real Estate", caption: "Luxury villa project" },
  { id: "key-handover", src: img("realestate-key-handover.jpg"), alt: "Key Handover", category: "Real Estate", caption: "Key handover ceremony" },

  // Founder
  { id: "founder-office", src: img("founder-office-old.jpg"), alt: "Founder in office", category: "Founder", caption: "Founder at desk" },
  { id: "founder-event1", src: img("founder-smile-event1.jpg"), alt: "Founder at event", category: "Founder", caption: "Founder at community event" },
  { id: "founder-event2", src: img("founder-smile-event2.jpg"), alt: "Founder at event 2", category: "Founder", caption: "Founder - leadership moment" },
  { id: "founder-dog1", src: img("founder-with-dog1.jpg"), alt: "Founder with dog 1", category: "Founder", caption: "Founder with pet" },
  { id: "founder-dog2", src: img("founder-with-dog2.jpg"), alt: "Founder with dog 2", category: "Founder", caption: "Founder with pet" },

  // IT / Jobs
  { id: "it-callcenter", src: img("it-job-assistance-callcenter.jpg"), alt: "Call center", category: "IT Jobs", caption: "Call center environment" },
  { id: "it-woman", src: img("it-job-assistance-woman-office.jpg"), alt: "IT worker", category: "IT Jobs", caption: "IT job assistance workspace" },

  // Legal / Consulting
  { id: "property-legal", src: img("property-legal-consult.jpg"), alt: "Legal consult", category: "Legal", caption: "Property legal consultation" },

  // -----------------------------------------
  // ⭐ NEWLY ADDED 21 IMAGES
  // -----------------------------------------

  // Attestation / Certificate
  { id: "attestation-banner", src: img("attestation-services-banner.jpg"), alt: "Attestation Services", category: "Brand", caption: "Fastest attestation services" },
  { id: "online-certificate-logo", src: img("online-certificate-logo.jpg"), alt: "Online Certificate Logo", category: "Education", caption: "Online certificate support" },

  // Pets / Animal Care
  { id: "pet-dog-forest", src: img("pet-dog-forest.jpg"), alt: "Dog in forest", category: "Activism", caption: "Pet & animal welfare" },
  { id: "dog-feeding", src: img("animal-welfare-dog-feeding.jpg"), alt: "Dog Feeding", category: "Activism", caption: "Helping street dogs" },

  // IT / Job Assistance Extra
  { id: "it-banner", src: img("it-job-assistance-banner.jpg"), alt: "IT Jobs Banner", category: "IT Jobs", caption: "IT Job support banner" },
  { id: "job-assist-badge", src: img("job-assistance-badge.jpg"), alt: "Job Assistance Badge", category: "IT Jobs", caption: "100% job assistance" },

  // Legal
  { id: "legal-doc-office", src: img("legal-documentation-office.jpg"), alt: "Legal documentation", category: "Legal", caption: "Legal paperwork office" },
  { id: "legal-writing", src: img("legal-assistance-lawyer-writing.jpg"), alt: "Lawyer writing", category: "Legal", caption: "Legal assistance process" },
  { id: "legal-poster", src: img("legal-documentation-service-poster.jpg"), alt: "Legal Documentation Poster", category: "Legal", caption: "Documentation service" },
  { id: "legal-counsel", src: img("legal-counsel-banner.jpg"), alt: "Legal Counsel", category: "Legal", caption: "Legal counsel service" },

  // Office Interiors
  { id: "office-reception", src: img("office-reception-woman.jpg"), alt: "Office Reception", category: "Brand", caption: "Office reception area" },
  { id: "meeting-room", src: img("conference-room-interior.jpg"), alt: "Conference Room", category: "Brand", caption: "Conference meeting setup" },
  { id: "modern-office", src: img("modern-office-interior.jpg"), alt: "Modern Office", category: "Brand", caption: "Modern interior office" },

  // Real Estate / Rent / RERA
  { id: "rental-management", src: img("rental-property-management-poster.jpg"), alt: "Rental Property Management", category: "Real Estate", caption: "Tenant & rent management" },
  { id: "rera-registration", src: img("rera-registration-banner.jpg"), alt: "RERA Registration", category: "Real Estate", caption: "Real estate RERA help" },

  // Education Loan / Business Loan
  { id: "edu-loan", src: img("education-loan-assistance.jpg"), alt: "Education Loan", category: "Education", caption: "Education loan assistance" },
  { id: "business-loan", src: img("business-loan-support.jpg"), alt: "Business Loan Support", category: "Business", caption: "Business loan consultation" },

  // Social Activism
  { id: "women-rights", src: img("women-rights-human-rights.jpg"), alt: "Women Rights", category: "Activism", caption: "Women's rights activism" },

  // 2025 Highlights
  { id: "highlight-01", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.41 AM.jpeg", alt: "Recent event highlight 1", category: "2025 Highlights", caption: "Community outreach moment" },
  { id: "highlight-02", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.42 AM.jpeg", alt: "Recent event highlight 2", category: "2025 Highlights", caption: "Team interaction with volunteers" },
  { id: "highlight-03", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.43 AM.jpeg", alt: "Recent event highlight 3", category: "2025 Highlights", caption: "Showcasing our latest achievements" },
  { id: "highlight-04", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.44 AM (1).jpeg", alt: "Recent event highlight 4", category: "2025 Highlights", caption: "Collaboration meeting snapshot" },
  { id: "highlight-05", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.44 AM (2).jpeg", alt: "Recent event highlight 5", category: "2025 Highlights", caption: "Service excellence appreciation" },
  { id: "highlight-06", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.44 AM.jpeg", alt: "Recent event highlight 6", category: "2025 Highlights", caption: "Celebrating client success stories" },
  { id: "highlight-07", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.45 AM (1).jpeg", alt: "Recent event highlight 7", category: "2025 Highlights", caption: "Empowering youth and students" },
  { id: "highlight-08", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.45 AM.jpeg", alt: "Recent event highlight 8", category: "2025 Highlights", caption: "Knowledge sharing session" },
  { id: "highlight-09", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.46 AM.jpeg", alt: "Recent event highlight 9", category: "2025 Highlights", caption: "Leadership roundtable capture" },
  { id: "highlight-10", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.47 AM.jpeg", alt: "Recent event highlight 10", category: "2025 Highlights", caption: "Client engagement moments" },
  { id: "highlight-11", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.48 AM (1).jpeg", alt: "Recent event highlight 11", category: "2025 Highlights", caption: "Legal awareness drive" },
  { id: "highlight-12", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.48 AM (2).jpeg", alt: "Recent event highlight 12", category: "2025 Highlights", caption: "Education counselling desk" },
  { id: "highlight-13", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.48 AM.jpeg", alt: "Recent event highlight 13", category: "2025 Highlights", caption: "Recognition for community service" },
  { id: "highlight-14", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.49 AM (1).jpeg", alt: "Recent event highlight 14", category: "2025 Highlights", caption: "Panel discussion insights" },
  { id: "highlight-15", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.49 AM.jpeg", alt: "Recent event highlight 15", category: "2025 Highlights", caption: "Service impact storytelling" },
  { id: "highlight-16", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.50 AM.jpeg", alt: "Recent event highlight 16", category: "2025 Highlights", caption: "On-ground consulting support" },
  { id: "highlight-17", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.51 AM.jpeg", alt: "Recent event highlight 17", category: "2025 Highlights", caption: "Women empowerment initiative" },
  { id: "highlight-18", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.52 AM.jpeg", alt: "Recent event highlight 18", category: "2025 Highlights", caption: "Career mentorship engagement" },
  { id: "highlight-19", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.53 AM (2).jpeg", alt: "Recent event highlight 19", category: "2025 Highlights", caption: "Training and capability building" },
  { id: "highlight-20", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.53 AM.jpeg", alt: "Recent event highlight 20", category: "2025 Highlights", caption: "Awards and honors showcase" },
  { id: "highlight-21", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.54 AM (1).jpeg", alt: "Recent event highlight 21", category: "2025 Highlights", caption: "Celebrating success together" },
  { id: "highlight-22", src: "/new-img/WhatsApp Image 2025-11-21 at 10.49.54 AM.jpeg", alt: "Recent event highlight 22", category: "2025 Highlights", caption: "Client gratitude moment" },
  { id: "highlight-23", src: "/new-img/WhatsApp Image 2025-11-21 at 9.24.18 AM.jpeg", alt: "Recent event highlight 23", category: "2025 Highlights", caption: "Morning briefing snapshot" },
];
