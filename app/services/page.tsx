import JointCircleSection from "@/components/joint-circle/joint-circle-section";
import ScrollServiceCards from "@/components/services/scroll-service-cards";
import ServiceSection from "@/components/services/services-section";
import ServicesVideos from "@/components/services/services-video";
import BorderGrid from "@/components/shared/border-grid";
import { SITE_CONFIG } from "@/constants/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Services | ${SITE_CONFIG.name}`,
};

const Services = () => {
  return (
    <>
      <section className="relative bg-brown-100 py-11">
        <BorderGrid />
        <ServiceSection />
      </section>
      <section className="relative h-20 md:h-40 2xl:h-[164px]">
        <BorderGrid />
        <ServicesVideos />
      </section>
      <section className="relative bg-gold-50 py-11">
        <BorderGrid />
        <ScrollServiceCards />
      </section>
      <section className="relative bg-brown-100 py-11">
        <BorderGrid />
        <JointCircleSection />
      </section>
    </>
  );
};

export default Services;
