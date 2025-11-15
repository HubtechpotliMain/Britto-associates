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
];
