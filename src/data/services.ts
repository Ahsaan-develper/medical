/**
 * Dental services offered by the practice.
 * Each service has a Lucide icon name, a benefit-driven description, and optional bullets.
 */

export interface Service {
  id: string;
  title: string;
  icon:
    | "stethoscope"
    | "sparkles"
    | "implant"
    | "smile"
    | "emergency"
    | "baby"
    | "scan"
    | "shield";
  description: string;
  bullets: string[];
  startingPrice?: string;
}

export const services: Service[] = [
  {
    id: "general",
    title: "General & Family Dentistry",
    icon: "stethoscope",
    description:
      "Routine cleanings, exams, fillings, and preventive care that keep your whole family smiling for life.",
    bullets: [
      "Same-day cleanings & exams",
      "Tooth-colored fillings",
      "Gum disease therapy",
    ],
    startingPrice: "from $89",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    icon: "sparkles",
    description:
      "Veneers, professional whitening, and smile makeovers designed around your facial proportions.",
    bullets: [
      "Porcelain veneers",
      "In-office & take-home whitening",
      "Digital smile preview",
    ],
    startingPrice: "from $349",
  },
  {
    id: "implants",
    title: "Dental Implants",
    icon: "implant",
    description:
      "Permanent tooth replacement with 3D-guided implant surgery for precise, minimally invasive placement.",
    bullets: [
      "Single tooth & full-arch implants",
      "3D CBCT-guided placement",
      "Lifetime warranty on implants*",
    ],
    startingPrice: "from $1,950",
  },
  {
    id: "orthodontics",
    title: "Invisalign & Orthodontics",
    icon: "smile",
    description:
      "Clear aligners and modern braces to straighten teeth discreetly — most cases complete in 6–12 months.",
    bullets: [
      "Invisalign Diamond Plus provider",
      "Free orthodontic consultation",
      "Digital treatment preview",
    ],
    startingPrice: "from $3,200",
  },
  {
    id: "emergency",
    title: "Emergency Dental Care",
    icon: "emergency",
    description:
      "Toothache, broken tooth, or lost crown? We reserve same-day slots every weekday for urgent care.",
    bullets: [
      "Same-day appointments",
      "After-hours emergency line",
      "Walk-ins welcome when available",
    ],
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    icon: "baby",
    description:
      "Gentle, kid-friendly dentistry that builds confident young patients — from first tooth to braces.",
    bullets: [
      "Sealants & fluoride treatments",
      "Sensory-friendly visits",
      "TV on the ceiling during treatment",
    ],
    startingPrice: "from $75",
  },
  {
    id: "imaging",
    title: "3D Digital Imaging",
    icon: "scan",
    description:
      "Low-radiation CBCT scans and intraoral scanning replace gooey impressions with pinpoint accuracy.",
    bullets: [
      "Cone-beam 3D imaging",
      "Digital intraoral scans",
      "No more putty impressions",
    ],
  },
  {
    id: "preventive",
    title: "Preventive & Periodontal Care",
    icon: "shield",
    description:
      "Deep cleanings, scaling, and personalized gum-health plans that stop disease before it starts.",
    bullets: [
      "Periodontal therapy",
      "Oral cancer screenings",
      "Custom night guards",
    ],
  },
];
