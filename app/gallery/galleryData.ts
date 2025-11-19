// app/gallery/galleryData.ts
export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  caption?: string;
  id: string;
};

export const galleryItems: GalleryItem[] = [
  // Animal Rights
  { id: "animal-banner", src: "/images/gallery/animal-rights-banner.jpg", alt: "Animal Rights Banner", category: "Activism", caption: "Animal Rights campaign banner" },
  { id: "animal-logo", src: "/images/gallery/animal-rights-logo.jpg", alt: "Animal Rights Logo", category: "Activism", caption: "Animal Rights logo" },

  // Awards
  { id: "award-hr-id", src: "/images/gallery/award-human-rights-idcard.jpg", alt: "Human Rights ID", category: "Awards", caption: "Human Rights ID card" },
  { id: "award-hr-join", src: "/images/gallery/award-human-rights-joining-letter.jpg", alt: "Joining Letter", category: "Awards", caption: "Joining letter - human rights council" },
  { id: "award-gandhi", src: "/images/gallery/award-mahatma-gandhi-pride.jpg", alt: "Mahatma Gandhi Pride Award", category: "Awards", caption: "Mahatma Gandhi Pride Award" },
  { id: "kalam-1", src: "/images/gallery/kalam-samman-1.jpg", alt: "APJ Kalam Samman 1", category: "Awards", caption: "APJ Abdul Kalam Samman" },
  { id: "kalam-2", src: "/images/gallery/kalam-samman-2.jpg", alt: "APJ Kalam Samman 2", category: "Awards", caption: "APJ Abdul Kalam Samman certificate" },

  // Brand / Poster
  { id: "britto-banner", src: "/images/gallery/britto-associates-banner.jpg", alt: "Britto Associates Banner", category: "Brand", caption: "Britto Associates - Services" },

  // Education
  { id: "edu-office", src: "/images/gallery/education-consultancy-office.jpg", alt: "Education Consultancy Office", category: "Education", caption: "Counselling & admissions" },
  { id: "st-joseph", src: "/images/gallery/education-st-joseph-university.jpg", alt: "St Joseph University", category: "Education", caption: "St. Joseph University" },

  // Real Estate / Land
  { id: "farmland", src: "/images/gallery/farmland-view.jpg", alt: "Farmland view", category: "Real Estate", caption: "Farmland and plot overview" },
  { id: "villa", src: "/images/gallery/real-villa-main.jpg", alt: "Luxury Villa", category: "Real Estate", caption: "Luxury villa project" },
  { id: "key-handover", src: "/images/gallery/realestate-key-handover.jpg", alt: "Key Handover", category: "Real Estate", caption: "Key handover ceremony" },

  // Founder
  { id: "founder-office", src: "/images/gallery/founder-office-old.jpg", alt: "Founder in office", category: "Founder", caption: "Founder at desk" },
  { id: "founder-event1", src: "/images/gallery/founder-smile-event1.jpg", alt: "Founder at event", category: "Founder", caption: "Founder at community event" },
  { id: "founder-event2", src: "/images/gallery/founder-smile-event2.jpg", alt: "Founder at event 2", category: "Founder", caption: "Founder - leadership moment" },
  { id: "founder-dog1", src: "/images/gallery/founder-with-dog1.jpg", alt: "Founder with dog 1", category: "Founder", caption: "Founder with pet" },
  { id: "founder-dog2", src: "/images/gallery/founder-with-dog2.jpg", alt: "Founder with dog 2", category: "Founder", caption: "Founder with pet" },

  // IT / Jobs
  { id: "it-callcenter", src: "/images/gallery/it-job-assistance-callcenter.jpg", alt: "Call center", category: "IT Jobs", caption: "Call center environment" },
  { id: "it-woman", src: "/images/gallery/it-job-assistance-woman-office.jpg", alt: "IT worker", category: "IT Jobs", caption: "IT job assistance workspace" },

  // Legal / Consulting
  { id: "property-legal", src: "/images/gallery/property-legal-consult.jpg", alt: "Legal consult", category: "Legal", caption: "Property legal consultation" },

  // -----------------------------------------
  // ⭐ NEWLY ADDED 21 IMAGES
  // -----------------------------------------

  // Attestation / Certificate
  { id: "attestation-banner", src: "/images/gallery/attestation-services-banner.jpg", alt: "Attestation Services", category: "Brand", caption: "Fastest attestation services" },
  { id: "online-certificate-logo", src: "/images/gallery/online-certificate-logo.jpg", alt: "Online Certificate Logo", category: "Education", caption: "Online certificate support" },

  // Pets / Animal Care
  { id: "pet-dog-forest", src: "/images/gallery/pet-dog-forest.jpg", alt: "Dog in forest", category: "Activism", caption: "Pet & animal welfare" },
  { id: "dog-feeding", src: "/images/gallery/animal-welfare-dog-feeding.jpg", alt: "Dog Feeding", category: "Activism", caption: "Helping street dogs" },

  // IT / Job Assistance Extra
  { id: "it-banner", src: "/images/gallery/it-job-assistance-banner.jpg", alt: "IT Jobs Banner", category: "IT Jobs", caption: "IT Job support banner" },
  { id: "job-assist-badge", src: "/images/gallery/job-assistance-badge.jpg", alt: "Job Assistance Badge", category: "IT Jobs", caption: "100% job assistance" },

  // Legal
  { id: "legal-doc-office", src: "/images/gallery/legal-documentation-office.jpg", alt: "Legal documentation", category: "Legal", caption: "Legal paperwork office" },
  { id: "legal-writing", src: "/images/gallery/legal-assistance-lawyer-writing.jpg", alt: "Lawyer writing", category: "Legal", caption: "Legal assistance process" },
  { id: "legal-poster", src: "/images/gallery/legal-documentation-service-poster.jpg", alt: "Legal Documentation Poster", category: "Legal", caption: "Documentation service" },
  { id: "legal-counsel", src: "/images/gallery/legal-counsel-banner.jpg", alt: "Legal Counsel", category: "Legal", caption: "Legal counsel service" },

  // Office Interiors
  { id: "office-reception", src: "/images/gallery/office-reception-woman.jpg", alt: "Office Reception", category: "Brand", caption: "Office reception area" },
  { id: "meeting-room", src: "/images/gallery/conference-room-interior.jpg", alt: "Conference Room", category: "Brand", caption: "Conference meeting setup" },
  { id: "modern-office", src: "/images/gallery/modern-office-interior.jpg", alt: "Modern Office", category: "Brand", caption: "Modern interior office" },

  // Real Estate / Rent / RERA
  { id: "rental-management", src: "/images/gallery/rental-property-management-poster.jpg", alt: "Rental Property Management", category: "Real Estate", caption: "Tenant & rent management" },
  { id: "rera-registration", src: "/images/gallery/rera-registration-banner.jpg", alt: "RERA Registration", category: "Real Estate", caption: "Real estate RERA help" },

  // Education Loan / Business Loan
  { id: "edu-loan", src: "/images/gallery/education-loan-assistance.jpg", alt: "Education Loan", category: "Education", caption: "Education loan assistance" },
  { id: "business-loan", src: "/images/gallery/business-loan-support.jpg", alt: "Business Loan Support", category: "Business", caption: "Business loan consultation" },

  // Social Activism
  { id: "women-rights", src: "/images/gallery/women-rights-human-rights.jpg", alt: "Women Rights", category: "Activism", caption: "Women's rights activism" },
];
