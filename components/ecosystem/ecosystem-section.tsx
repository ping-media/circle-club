import Container from "../shared/container";
import SectionIntro from "../shared/section-intro";
import EcosystemCarousel from "./ecosystem-carousel";

const EcosystemSection = () => {
  return (
    <Container className="relative z-50 flex flex-col items-center px-6 md:px-0 gap-11">
      <SectionIntro
        number="004"
        label="Ecosystem"
        title={
          <>
            <p className="hidden md:block">
              The Circle
              <br />
              Ecosystem
            </p>
            <p className="block md:hidden">The Circle Ecosystem</p>
          </>
        }
        description="Unlike traditional concierge services, we operate our own luxury infrastructure — ensuring direct control, quality, and speed."
        colorClassName="font-bold! text-white"
        descriptionClassName="text-white/80"
        labelClassName="text-white!"
        squareClassName="bg-[#FFFFFF29]!"
      />

      <EcosystemCarousel />
    </Container>
  );
};

export default EcosystemSection;
