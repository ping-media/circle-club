import Container from "../shared/container";
import SectionIntro from "../shared/section-intro";
import EcosystemCarousel from "./ecosystem-carousel";

const EcosystemSection = () => {
  return (
    <Container className="flex flex-col items-center gap-11">
      <SectionIntro
        number="004"
        label="Ecosystem"
        title={
          <>
            The Circle
            <br />
            Ecosystem
          </>
        }
        description="Unlike traditional concierge services, we operate our own luxury infrastructure — ensuring direct control, quality, and speed."
        colorClassName="text-white"
        descriptionClassName="text-white/80"
      />

      <EcosystemCarousel />
    </Container>
  );
};

export default EcosystemSection;
