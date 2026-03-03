import AboutHero from "@/components/about/about-hero";
import AboutInfoOne from "@/components/about/about-info-one";
import AboutInfoTwo from "@/components/about/about-info-two";
import BorderGrid from "@/components/shared/border-grid";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/site";
import AboutInfoThree from "@/components/about/about-info-three";

export const metadata: Metadata = {
  title: `About | ${SITE_CONFIG.name}`,
};

const About = () => {
  return (
    <>
      <section className="bg-brown-100 relative py-11">
        <BorderGrid />
        <AboutHero />
      </section>
      <section className="bg-gold-50 py-20 relative border-b b-[#00000014]">
        <BorderGrid />
        <AboutInfoOne />
      </section>
      <section className="bg-gold-50 py-20 relative z-20">
        <BorderGrid />
        <AboutInfoTwo />
      </section>
      <section className="relative bg-brown-100 py-20 md:py-30">
        <BorderGrid />
        <AboutInfoThree />
      </section>
    </>
  );
};

export default About;
