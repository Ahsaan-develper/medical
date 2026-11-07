/**
 * Realistic patient testimonials.
 * Names are fictional but styled like real reviews.
 */

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  treatment: string;
  quote: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Jessica M.",
    location: "Downtown Austin",
    rating: 5,
    date: "March 2026",
    treatment: "Porcelain Veneers",
    quote:
      "I've been terrified of dentists my whole life. Dr. Okafor and her team completely changed that. My veneers look natural — not Chiclet-white — and the whole process was painless. I actually look forward to cleanings now.",
    initials: "JM",
  },
  {
    id: "t2",
    name: "Robert K.",
    location: "Tarrytown",
    rating: 5,
    date: "February 2026",
    treatment: "Dental Implant",
    quote:
      "Broke a front tooth on a Sunday. They got me in Monday morning, placed an implant by Wednesday, and the temporary looked better than my real tooth ever did. The 3D scan meant no surprises during surgery.",
    initials: "RK",
  },
  {
    id: "t3",
    name: "Sofia & Lucas R.",
    location: "Mueller",
    rating: 5,
    date: "January 2026",
    treatment: "Pediatric Care",
    quote:
      "My 4-year-old asks when he gets to go back to the dentist. Dr. Reyes lets him hold a mirror and 'help,' and the ceiling TV playing Bluey doesn't hurt. As a parent, that's worth everything.",
    initials: "SR",
  },
];
