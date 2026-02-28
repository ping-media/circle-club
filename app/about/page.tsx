"use client";

import AboutHero from "@/components/about/about-hero";
import AboutInfoOne from "@/components/about/about-info-one";
import BannerSection from "@/components/shared/banner-section";
import AboutInfoTwo from "@/components/about/about-info-two";
import BorderGrid from "@/components/shared/border-grid";

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
      <section className="relative bg-brown-100 py-[120px]">
        <BorderGrid />
        <BannerSection
          number={"004"}
          label={"Global Reach"}
          title={
            <>
              Based in monaco. Operating without <br /> borders
            </>
          }
          description={
            "While rooted in Monaco, our services extend internationally and We respond to requests wherever our clients operate."
          }
          btnLabel={"Request Access"}
        />
      </section>
    </>
  );
};

export default About;
