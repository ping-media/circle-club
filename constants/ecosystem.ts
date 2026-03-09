export interface EcosystemCard {
  title: string;
  description: string;
  buttonText: string;
  thumbnail: string;
  href: string;
}

export const ECOSYSTEM_CARD: EcosystemCard[] = [
  {
    title: "Prestige Rental Cars",
    description: "Direct access to high-performance and ultra-luxury vehicles.",
    buttonText: "Contact Mobility Manager",
    thumbnail: "/images/ecosystem/eco_1.webp",
    href: "/contact",
  },
  {
    title: "Private Villas",
    description:
      "Short and long-term curated properties in Monaco and the Riviera.",
    buttonText: "Contact Property Advisor",
    thumbnail: "/images/ecosystem/eco_2.webp",
    href: "/contact",
  },
  {
    title: "Monaco Real Estate",
    description:
      "Strategic real estate advisory within Monaco's most prestigious districts.",
    buttonText: "Contact Real Estate Expert",
    thumbnail: "/images/ecosystem/eco_3.webp",
    href: "/contact",
  },
  {
    title: "Valet Services",
    description: "Prestigious restaurant partnerships.",
    buttonText: "Contact Valet Director",
    thumbnail: "/images/ecosystem/eco_4.webp",
    href: "/contact",
  },
];
