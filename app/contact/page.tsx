import ContactFormSection from "@/components/contact/contact-form-section";
import ContactHero from "@/components/contact/contact-hero";
import ContactSection from "@/components/contact/contact-section";
import BorderGrid from "@/components/shared/border-grid";
import { SITE_CONFIG } from "@/constants/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact | ${SITE_CONFIG.name}`,
};

const Contact = () => {
  return (
    <>
      <section className="bg-white relative py-11">
        <BorderGrid />
        <ContactHero />
      </section>
      <section className="relative bg-gray-dark pt-11 lg:py-20">
        <BorderGrid />
        <ContactFormSection />
      </section>
      <section className="bg-white py-11 lg:py-20 relative">
        <BorderGrid />
        <ContactSection />
      </section>
    </>
  );
};

export default Contact;
