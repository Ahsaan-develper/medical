/**
 * Practice stats and "Why Choose Us" differentiators.
 */

export interface Stat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface Differentiator {
  icon: "clock" | "scan" | "wallet" | "heart" | "leaf" | "shield";
  title: string;
  description: string;
}

export const stats: Stat[] = [
  {
    value: "8",
    label: "Specialist Doctors",
    sublabel: "Across 4 disciplines",
  },
  {
    value: "12,000+",
    label: "Patients Served",
    sublabel: "Since 2007",
  },
  {
    value: "4.9",
    label: "Average Rating",
    sublabel: "From 487 reviews",
  },
  {
    value: "18",
    label: "Years in Practice",
    sublabel: "Family-owned, not a chain",
  },
];

export const differentiators: Differentiator[] = [
  {
    icon: "clock",
    title: "Same-day emergency appointments",
    description:
      "We hold reserved slots every weekday for dental emergencies. Call before noon and you'll be seen the same day — most often within two hours.",
  },
  {
    icon: "scan",
    title: "Advanced 3D digital imaging",
    description:
      "Our CBCT scanner and intraoral scanners mean precise diagnoses, no gooey impressions, and 3D-guided implant surgery with minimal recovery time.",
  },
  {
    icon: "wallet",
    title: "Transparent, insurance-friendly pricing",
    description:
      "We're in-network with 6 major insurers and offer transparent self-pay pricing plus 0% financing. You'll always know your costs before treatment begins.",
  },
];

export interface EmergencyStep {
  step: number;
  title: string;
  description: string;
}

export const emergencySteps: EmergencyStep[] = [
  {
    step: 1,
    title: "Stay calm & assess",
    description:
      "For a knocked-out tooth, handle it by the crown (not the root). Gently rinse with milk or saliva — never scrub.",
  },
  {
    step: 2,
    title: "Call us immediately",
    description:
      "Call our emergency line at (512) 555-0911. We reserve same-day slots and an after-hours dentist is always on call.",
  },
  {
    step: 3,
    title: "Preserve the tooth",
    description:
      "If possible, place the tooth back in its socket. Otherwise store it in milk or a tooth-preservation kit and bring it with you.",
  },
  {
    step: 4,
    title: "Come in for treatment",
    description:
      "We're at 412 W 6th St, Suite 200. Tell the front desk it's an emergency and they'll take you straight back.",
  },
];
