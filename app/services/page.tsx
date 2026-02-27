import JointCircleSection from "@/components/joint-circle/joint-circle-section";
import ServiceSection from "@/components/services/services-section";
import ServicesVideos from "@/components/services/services-video";

const Services = () => {
  return (
    <>
      <section className="bg-brown-100 py-11">
        <ServiceSection />
      </section>
      <section className="relative md:h-[160px] 2xl:h-[164px]">
        <ServicesVideos />
      </section>
      <section className="bg-gold-50 py-11"></section>
      <section className="bg-brown-100 py-11">
        <JointCircleSection />
      </section>
    </>
  );
};

export default Services;
