/**
 * Central clinic information for Lumière Dental Studio.
 * Swap these values to repurpose the page for any other medical business.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface HoursEntry {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "twitter" | "linkedin" | "youtube";
}

export interface ClinicInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  specialty: string;
  phone: string;
  phoneHref: string;
  emergencyPhone: string;
  emergencyPhoneHref: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  mapsQuery: string;
  mapsEmbedSrc: string;
  hours: HoursEntry[];
  license: {
    label: string;
    number: string;
  };
  rating: number;
  reviewCount: number;
  patientsServed: string;
  yearsInPractice: number;
  establishedYear: number;
  socials: SocialLink[];
  nav: NavItem[];
}

export const clinic: ClinicInfo = {
  name: "Lumière Dental Studio",
  shortName: "Lumière Dental",
  tagline: "Gentle, modern dentistry in the heart of Austin.",
  description:
    "A full-service dental practice on West 6th Street combining advanced technology with genuinely compassionate care — from routine cleanings to full-mouth reconstruction.",
  specialty: "General · Cosmetic · Implant Dentistry",
  phone: "(512) 555-0142",
  phoneHref: "tel:+15125550142",
  emergencyPhone: "(512) 555-0911",
  emergencyPhoneHref: "tel:+15125550911",
  email: "hello@lumieredental.com",
  address: {
    line1: "412 W 6th Street",
    line2: "Suite 200",
    city: "Austin",
    state: "TX",
    zip: "78701",
    country: "USA",
  },
  mapsQuery: "412 W 6th St, Austin, TX 78701",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=412+W+6th+St,+Austin,+TX+78701&output=embed",
  hours: [
    { day: "Monday", hours: "8:00 AM – 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 6:00 PM" },
    { day: "Thursday", hours: "7:00 AM – 7:00 PM" },
    { day: "Friday", hours: "7:00 AM – 4:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 2:00 PM" },
    { day: "Sunday", hours: "Closed", closed: true },
  ],
  license: {
    label: "Texas State Board of Dental Examiners",
    number: "TSBDE #28451",
  },
  rating: 4.9,
  reviewCount: 487,
  patientsServed: "12,000+",
  yearsInPractice: 18,
  establishedYear: 2007,
  socials: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "Google", href: "https://google.com", icon: "twitter" },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  ],
  nav: [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Our Team", href: "#team" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
};

export const trustBadges: { label: string; note: string }[] = [
  { label: "ADA Member", note: "American Dental Association" },
  { label: "TSBDE Licensed", note: "Texas State Board of Dental Examiners" },
  { label: "AACD Accredited", note: "American Academy of Cosmetic Dentistry" },
  { label: "Invisalign Provider", note: "Diamond Plus Provider 2024" },
];

export const insurancePartners: string[] = [
  "Delta Dental",
  "Cigna",
  "Aetna",
  "MetLife",
  "UnitedHealthcare",
  "Blue Cross Blue Shield",
];
