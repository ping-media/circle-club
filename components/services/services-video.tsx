import HeroVideo from "../hero/hero-video";
import DotAndLabel from "../shared/DotAndLabel";

const OPERATIONS = ["Direct", "Operational", "Exclusive"];

const ServicesVideos = () => {
  return (
    <>
      <HeroVideo
        src="videos/services.mp4"
        objectPosition="50% 63%"
        overlayClassName="bg-white/25 backdrop-blur-md"
      />

      <div className="absolute inset-0 w-full h-full flex items-center justify-center gap-12">
        {OPERATIONS.map((o) => (
          <DotAndLabel label={o} key={o} />
        ))}
      </div>
    </>
  );
};

export default ServicesVideos;
