import ThumbnailVideoPlayer from "@/components/shared/thumbnail-video-player";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  title: string;
  description: string;
  buttonText: string;
  videoSrc: string;
  thumbnail: string;
  className?: string;
  reverse?: boolean;
}

const FeatureCard = ({
  title,
  description,
  buttonText,
  videoSrc,
  thumbnail,
  className,
  reverse,
}: FeatureSectionProps) => {
  return (
    <section className={cn("w-full", className)}>
      <div
        className={cn(
          "grid md:grid-cols-2 min-h-125",
          reverse ? "md:[&>*:first-child]:order-2" : "",
        )}
      >
        {/* Left Content */}
        <div className="bg-gold-200 px-8 py-16 md:px-16 flex flex-col justify-center items-center">
          <div className="w-full md:max-w-xs 2xl:max-w-sm space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight text-black">
              {title}
            </h2>

            <p className="text-sm md:text-base text-black leading-relaxed">
              {description}
            </p>

            <button className="inline-block bg-brown-100 text-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition">
              {buttonText}
            </button>
          </div>
        </div>

        {/* Right Video */}
        <div className="relative h-87.5 md:h-auto">
          <ThumbnailVideoPlayer videoSrc={videoSrc} thumbnail={thumbnail} />
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
