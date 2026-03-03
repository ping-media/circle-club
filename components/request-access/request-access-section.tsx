"use client";

import AnimatedHeader from "../layout/animated-header";
import Container from "../shared/container";
import SectionTitle from "../shared/section-title";

const RequestAccessSection = () => {
  return (
    <>
      <AnimatedHeader phase={"reveal"} />

      <Container className="mt-40 mb-10 px-6 md:px-0">
        <div className="md:max-w-3xl 2xl:max-w-4xl flex flex-col gap-6">
          <SectionTitle
            title={
              <>
                Submit Your <br /> Request
              </>
            }
            colorClassName="font-black text-white leading-normal md:leading-[1.01] text-5xl md:text-8xl!"
          />
          <p className="text-white text-sm md:text-base leading-4.5 md:leading-6">
            Tell us what you need. We respond precisely. We focus on
            understanding first, then delivering with precision.
          </p>
        </div>
      </Container>
    </>
  );
};

export default RequestAccessSection;
