import AboutSection from "@/components/about/about-section";
import EcosystemSection from "@/components/ecosystem/ecosystem-section";
import EventSection from "@/components/event/event-section";
import HeroSection from "@/components/hero/hero-section";
import JointCircleSection from "@/components/joint-circle/joint-circle-section";
import ShowcaseSection from "@/components/showcase/showcase-section";
import SponsorSection from "@/components/sponsor/sponsor-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <section className="relative h-screen w-full">
        <HeroSection />
      </section>
      <section className="bg-gold-50 py-11">
        <EventSection />
      </section>
      <section className="relative">
        <ShowcaseSection />
      </section>
      <section className="bg-brown-100 py-11">
        <EcosystemSection />
      </section>
      <section className="bg-gold-50 py-11">
        <AboutSection />
      </section>
      <section className="relative bg-gold-200 py-11">
        <SponsorSection />
      </section>
      <section className="bg-brown-100 py-11">
        <JointCircleSection />
      </section>
    </main>
  );
}
