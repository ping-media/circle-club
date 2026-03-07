import AboutSection from "@/components/about/about-section";
import EcosystemSection from "@/components/ecosystem/ecosystem-section";
import EventSection from "@/components/event/event-section";
import HeroSection from "@/components/hero/hero-section";
import JointCircleSection from "@/components/joint-circle/joint-circle-section";
import BorderGrid from "@/components/shared/border-grid";
import ShowcaseSection from "@/components/showcase/showcase-section";
import SponsorSection from "@/components/sponsor/sponsor-section";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative h-[90vh] md:h-screen w-full overflow-x-hidden">
        <BorderGrid />
        <HeroSection />
      </section>
      <section className="relative bg-gold-50 py-11 md:py-25">
        <BorderGrid borderClassName="border-white/20" />
        <EventSection />
      </section>
      <section className="relative">
        <BorderGrid />
        <ShowcaseSection />
      </section>
      <section className="relative bg-brown-100 py-11 md:py-16">
        <BorderGrid />
        <EcosystemSection />
      </section>
      <section className="relative bg-gold-50 py-11">
        <BorderGrid borderClassName="border-white/20" />
        <AboutSection />
      </section>
      <section className="relative bg-gold-200">
        <BorderGrid borderClassName="border-white/20" />
        <SponsorSection />
      </section>
      <section className="relative bg-brown-100 py-11">
        <BorderGrid />
        <JointCircleSection />
      </section>
    </div>
  );
}
