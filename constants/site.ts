export interface ContactInfo {
  icon: string;
  label: string;
  value: string | string[];
  href: string | string[];
}

export const SITE_CONFIG = {
  name: "Circle Club",
  description: "Exclusive Social Club for the Elite",
};

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "icons/phone.svg",
    label: "Phone",
    value: ["+41 78 303 83 13", "+33 6 27 08 53 55"],
    href: ["tel:+41 78 303 83 13", "tel:+33 6 27 08 53 55"],
  },
  {
    icon: "icons/email.svg",
    label: "Email",
    value: "contact@circleclub.co",
    href: "mailto:contact@circleclub.co",
  },
];
