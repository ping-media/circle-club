"use client";

import AnimatedHeader from "../layout/animated-header";
import Container from "../shared/container";
import SectionTitle from "../shared/section-title";

const ServiceSection = () => {
  return (
    <>
      <AnimatedHeader phase={"reveal"} />

      <Container
        // className="mt-40 mb-10 px-6 md:px-0"
        className="mt-40 mb-10 px-6 lg:px-0"
      >
        <div
          // className="md:max-w-xl 2xl:max-w-2xl flex flex-col gap-6"
          className="lg:max-w-xl 2xl:max-w-2xl flex flex-col gap-6"
        >
          <SectionTitle
            title={
              <>
                Our <br />
                Ecosystem
              </>
            }
            colorClassName="font-black text-white leading-normal md:leading-[1.01] text-5xl md:text-8xl!"
          />
          <p className="text-white text-sm md:text-base leading-4.5 md:leading-6">
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
