export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Monaco F1 Grand Prix", href: "#" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
