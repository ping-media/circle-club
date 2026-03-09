export interface FeatureItem {
  title: string;
  description: string;
  buttonText: string;
  videoSrc: string;
  thumbnail: string;
  href: string;
}

export const FEATURES: FeatureItem[] = [
  {
    title: "VIP Terrace Experience",
    description:
      "Elevated views over the Monaco circuit. Curated guest list. Elite race weekend positioning.",
    buttonText: "Request Terrace Access",
    videoSrc: "/videos/event/event_1.mp4",
    thumbnail: "/images/event/event_1.webp",
    href: "/request-access",
  },
  {
    title: "Private Yacht Experience",
    description:
      "Front-row harbor access. Private deck atmosphere. Champagne service during the Grand Prix weekend.",
    buttonText: "Request Terrace Access",
    videoSrc: "/videos/event/event_1.mp4",
    thumbnail: "/images/sponsor/sponsor.webp",
    href: "/request-access",
  },
];
