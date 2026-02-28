export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export const SITE_CONFIG = {
  name: "Circle Club",
  description: "Exclusive Social Club for the Elite",
};

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "icons/phone.svg",
    label: "Phone",
    value: "+01 74846-54854",
    href: "tel:+01 74846-54854",
  },
  {
    icon: "icons/email.svg",
    label: "Email",
    value: "Circleclube21@gmail.com",
    href: "mailto:circleclube21@gmail.com",
  },
];
