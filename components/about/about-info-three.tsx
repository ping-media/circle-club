"use client";

import BannerSection from "../shared/banner-section";

const AboutInfoThree = () => {
  return (
    <div className="px-6 lg:px-0">
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
        href="/request-access"
        className="bg-gray-dark!"
      />
    </div>
  );
};

export default AboutInfoThree;
