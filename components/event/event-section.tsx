import SectionIntro from "../shared/section-intro";
import Container from "@/components/shared/container";
import Feature from "./feature";

const EventSection = () => {
  return (
    <Container className="flex flex-col items-center gap-11">
      <SectionIntro
        number="002"
        label="Events"
        title={
          <>
            Exclusive Monaco
            <br />
            Experiences
          </>
        }
        colorClassName="font-bold!"
        description="Access the Monaco Grand Prix from the most privileged vantage points terrace and sea."
        squareClassName="bg-[#0E0E0E29]!"
      />

      <Feature />
    </Container>
  );
};

export default EventSection;
