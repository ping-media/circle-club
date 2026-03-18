import BorderGrid from "@/components/shared/border-grid";
import Partnership from "@/components/sponsor/partnership";
import SponsorHero from "@/components/sponsor/sponsor-hero";
import WhyPartner from "@/components/sponsor/why-partner";
import WhyPartnerOpportunities from "@/components/sponsor/why-partner-opportunities";
import { SITE_CONFIG } from "@/constants/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Sponsors | ${SITE_CONFIG.name}`,
};

const Sponsors = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="bg-white relative py-11">
        <BorderGrid />
        <SponsorHero />
      </section>
      <section className="bg-gray-dark relative py-11">
        <BorderGrid borderClassName="border-[#EBE3CA]!" />
        <WhyPartner />
      </section>
      <section className="bg-gray-dark relative py-11">
        <BorderGrid borderClassName="border-[#EBE3CA]!" />
        <WhyPartnerOpportunities />
      </section>
      <section className="relative bg-white py-11 lg:py-30">
        <BorderGrid />
        <Partnership />
      </section>
    </div>
  );
};

export default Sponsors;
