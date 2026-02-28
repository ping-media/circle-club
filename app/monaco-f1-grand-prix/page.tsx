import BannerSection from "@/components/shared/banner-section";
import MonacoHero from "@/components/monaco-grand-prix/monaco-hero";
import BorderGrid from "@/components/shared/border-grid";
import MonacoOneSection from "@/components/monaco-grand-prix/monaco-one-section";
import MonacoTwoSection from "@/components/monaco-grand-prix/monaco-two-section";
import ChooseSection from "@/components/monaco-grand-prix/choose-section";

const MonacoF1GrandPrix = () => {
  return (
    <>
      <section className="bg-brown-100 relative py-11">
        <BorderGrid />
        <MonacoHero />
      </section>
      <section className="bg-gold-50 py-20 relative">
        <BorderGrid />
        <MonacoOneSection />
      </section>
      <section className="bg-gold-300 py-20 relative">
        <BorderGrid />
        <MonacoTwoSection />
      </section>
      <section className="py-20 relative">
        <BorderGrid />
        <ChooseSection />
      </section>
      <section className="relative bg-brown-100 py-[120px]">
        <BorderGrid />
        <BannerSection
          number={"005"}
          label={"Global Reach"}
          title={"SECURE YOUR POSITION"}
          description={
            "Claim your place within an exclusive circle where access, influence, and visibility converge."
          }
          btnLabel={"Send Request"}
        />
      </section>
    </>
  );
};

export default MonacoF1GrandPrix;
