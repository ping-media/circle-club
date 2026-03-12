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
      <section className="bg-brown-100 relative py-11">
        <BorderGrid />
        <ContactHero />
      </section>
      <section className="relative bg-gold-50 pt-11 lg:py-20">
        <BorderGrid />
        <ContactFormSection />
      </section>
      <section className="bg-gold-50 py-11 lg:py-20 relative">
        <BorderGrid />
        <ContactSection />
      </section>
    </>
  );
};

export default Contact;
