import ContactHero from "@/components/contact/contact-hero";
import ContactSection from "@/components/contact/contact-section";
import BorderGrid from "@/components/shared/border-grid";

const Contact = () => {
  return (
    <>
      <section className="bg-brown-100 relative py-11">
        <BorderGrid />
        <ContactHero />
      </section>
      <section className="bg-gold-50 py-20 relative">
        <BorderGrid />
        <ContactSection />
      </section>
    </>
  );
};

export default Contact;
