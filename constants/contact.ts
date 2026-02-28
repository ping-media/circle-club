export interface ContactList {
  number: string;
  title: string;
  description: string;
  src: string;
}

export const CONTACT_LIST: ContactList[] = [
  {
    number: "01.",
    title: "General Inquiries",
    description:
      "For membership details, private requests, or additional information.",
    src: "/images/contact/contact_1.webp",
  },
  {
    number: "02.",
    title: "Grand Prix Access",
    description:
      "Dedicated coordination for race weekend hospitality and terrace access.",
    src: "/images/contact/contact_2.webp",
  },
  {
    number: "03.",
    title: "Partnerships & Sponsors",
    description:
      "Brand collaborations, corporate hosting, and strategic partnerships.",
    src: "/images/contact/contact_1.webp",
  },
  {
    number: "04.",
    title: "Automotive / Villas / Real Estate",
    description: "Direct connection to activity managers.",
    src: "/images/contact/contact_2.webp",
  },
];
