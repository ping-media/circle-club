export interface PartnerList {
  title: string;
  description: string;
}

export interface opportunitiesList {
  title: string;
  src: string;
  isGrow: boolean;
}

export const PARTNER_LIST = [
  {
    title: "High-net-worth Clientele",
    description: "Connect with elite global decision-makers.",
  },
  {
    title: "Curated VIP environments",
    description: "Present your brand in exclusive settings.",
  },
  {
    title: "Monaco Grand Prix visibility",
    description: "Be seen at a world-renowned luxury event.",
  },
  {
    title: "Strategic brand positioning",
    description: "Strengthen your premium brand presence.",
  },
];

export const OPPORTUNNITIES_LIST = [
  {
    title: "Event Sponsorship",
    src: "/images/partner/opp_1.webp",
    isGrow: false,
  },
  {
    title: "Brand placement on Terraces & Yachts",
    src: "/images/partner/opp_2.webp",
    isGrow: true,
  },
  {
    title: "VIP Hosting Collaboration",
    src: "/images/partner/opp_3.webp",
    isGrow: false,
  },
  {
    title: "Private co-branded Activations",
    src: "/images/partner/opp_4.webp",
    isGrow: false,
  },
];
