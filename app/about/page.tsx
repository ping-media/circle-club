"use client";

import AboutHero from "@/components/about/about-hero";
import AboutInfoOne from "@/components/about/about-info-one";
import AboutInfoThree from "@/components/about/about-info-three";
import AboutInfoTwo from "@/components/about/about-info-two";
// import BorderGrid from "@/components/shared/border-grid";

const About = () => {
  return (
    <>
      <section className="bg-brown-100 py-11">
        <AboutHero />
      </section>
      <section className="bg-gold-50 py-20 border-b b-[#00000014]">
        <AboutInfoOne />
      </section>
      <section className="bg-gold-50 py-20 relative z-20">
        <AboutInfoTwo />
      </section>
      <section className="bg-brown-100 py-[120px]">
        <AboutInfoThree />
      </section>
    </>
  );
};

export default About;
