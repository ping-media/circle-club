import BorderGrid from "@/components/shared/border-grid";
import Partnership from "@/components/sponsor/partnership";
import SponsorHero from "@/components/sponsor/sponsor-hero";
import WhyPartner from "@/components/sponsor/why-partner";

const Sponsors = () => {
  return (
    <>
      <section className="bg-brown-100 relative py-11">
        <BorderGrid />
        <SponsorHero />
      </section>
      <section className="bg-gold-50 relative py-11">
        <BorderGrid />
        <WhyPartner />
      </section>
      <section className="relative bg-brown-100 py-[120px]">
        <BorderGrid />
        <Partnership />
      </section>
    </>
  );
};

export default Sponsors;
