import Image from "next/image";
import DotAndLabel from "../shared/DotAndLabel";

const OPERATIONS = ["Direct", "Operational", "Exclusive"];

const ServicesVideos = () => {
  return (
    <>
      <div className="absolute inset-0 h-full w-full object-cover">
        <Image
          src="/images/services/services.webp"
          className="object-cover"
          fill
          alt="services"
        />
      </div>

      <div className="absolute inset-0 bg-white/25 backdrop-blur-md" />

      <div className="absolute z-50 inset-0 w-full h-full flex items-center justify-center gap-6 md:gap-12">
        {OPERATIONS.map((o) => (
          <DotAndLabel label={o} key={o} isLight />
        ))}
      </div>
    </>
  );
};

export default ServicesVideos;
