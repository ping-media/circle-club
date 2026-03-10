import { WA_LINK } from "./site";

export const NAVIGATION = [
  { label: "Services", href: "/services" },
  { label: "Monaco F1 Grand Prix", href: "/monaco-f1-grand-prix" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const CONNECT = [
  { label: "Request Access", href: "/request-access", isexternal: false },
  { label: "Sponsor Inquiry", href: "/sponsors", isexternal: false },
  { label: "WhatsApp", href: WA_LINK, isexternal: true },
  {
    label: "Instagram",
    href: "https://www.instagram.com/circleclub.co?utm_source=ig_web_button_share_sheet",
    isexternal: true,
  },
];

export const SOCIAL = [
  // { label: "Facebook", src: "/icons/facebook.svg", href: "#" },
  // { label: "X", src: "/icons/twitter.svg", href: "#" },
  {
    label: "Instagram",
    src: "/icons/instagram.svg",
    href: "https://www.instagram.com/circleclub.co?utm_source=ig_web_button_share_sheet",
  },
  // { label: "Youtube", src: "/icons/youtube.svg", href: "#" },
];

export const SOCIAL_MOBILE = [
  // { label: "Facebook", src: "/icons/facebook_white.svg", href: "#" },
  // { label: "X", src: "/icons/twitter_white.svg", href: "#" },
  {
    label: "Instagram",
    src: "/icons/instagram_white.svg",
    href: "https://www.instagram.com/circleclub.co?utm_source=ig_web_button_share_sheet",
  },
  // { label: "Youtube", src: "/icons/youtube_white.svg", href: "#" },
];
