"use client";

import AnimatedHeader from "../layout/animated-header";
import Container from "../shared/container";
import SectionTitle from "../shared/section-title";

const ServiceSection = () => {
  return (
    <>
      <AnimatedHeader phase={"reveal"} />

      <Container className="mt-40 mb-10">
        <div className="md:max-w-xl 2xl:max-w-2xl flex flex-col gap-6">
          <SectionTitle
            title={
              <>
                Our <br />
                Ecosystem
              </>
            }
            colorClassName="font-black text-white leading-[1.01] md:text-8xl!"
          />
          <p className="text-white">
            Circle Club operates a structured network of premium services across
            Monaco and the French Riviera. controlled, owned, and executed
            without intermediaries.
          </p>
        </div>
      </Container>
    </>
  );
};

export default ServiceSection;
