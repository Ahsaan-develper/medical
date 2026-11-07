/**
 * Doctor / team profiles.
 * Portrait images use Unsplash source URLs (real photography, not AI).
 */

export interface Doctor {
  id: string;
  name: string;
  firstName: string;
  credentials: string;
  specialty: string;
  bio: string;
  image: string;
  imageAlt: string;
  highlights: string[];
}

export const team: Doctor[] = [
  {
    id: "dr-amara-okafor",
    name: "Dr. Amara Okafor",
    firstName: "Amara",
    credentials: "DDS, FAGD — Founder & Lead Dentist",
    specialty: "Cosmetic & Restorative Dentistry",
    bio: "Dr. Okafor founded Lumière in 2007 after a decade in academic medicine. She has placed over 4,000 veneers and is a Fellow of the Academy of General Dentistry.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Dr. Amara Okafor, lead dentist at Lumière Dental Studio",
    highlights: ["18+ yrs experience", "4,000+ veneers placed", "NYU College of Dentistry"],
  },
  {
    id: "dr-marcus-lindqvist",
    name: "Dr. Marcus Lindqvist",
    firstName: "Marcus",
    credentials: "DMD, MS — Implant Specialist",
    specialty: "Oral Surgery & Implantology",
    bio: "A board-certified periodontist, Dr. Lindqvist leads our implant program with 3D-guided surgical techniques and a 99.2% implant success rate.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Dr. Marcus Lindqvist, implant specialist",
    highlights: ["Board-certified periodontist", "99.2% implant success", "3D-guided surgery"],
  },
  {
    id: "dr-priya-nair",
    name: "Dr. Priya Nair",
    firstName: "Priya",
    credentials: "DDS — Invisalign Diamond Plus Provider",
    specialty: "Orthodontics & Clear Aligners",
    bio: "Dr. Nair has transformed over 1,800 smiles with Invisalign and is one of only a handful of Diamond Plus providers in the Austin metro area.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Dr. Priya Nair, orthodontist",
    highlights: ["Diamond Plus Provider", "1,800+ aligner cases", "UCLA School of Dentistry"],
  },
  {
    id: "dr-elias-reyes",
    name: "Dr. Elias Reyes",
    firstName: "Elias",
    credentials: "DMD — Pediatric Dentist",
    specialty: "Pediatric & Adolescent Dentistry",
    bio: "Dr. Reyes makes dental visits something kids actually look forward to, with a gentle, story-driven approach and a dedicated child-friendly treatment room.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of Dr. Elias Reyes, pediatric dentist",
    highlights: ["Board-certified pediatric dentist", "Sensory-friendly care", "Bilingual EN/ES"],
  },
];
