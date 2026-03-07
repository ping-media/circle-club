import ThumbnailVideoPlayer from "@/components/shared/thumbnail-video-player";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 min-h-125",
          reverse ? "md:[&>*:first-child]:order-2" : "",
        )}
      >
        {/* Left Content */}
        <motion.div
          className="order-2 md:order-0 bg-gold-200 px-4 py-4 lg:py-16 lg:px-16 flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="w-full md:max-w-xs 2xl:max-w-sm space-y-6">
            <h2 className="text-xl md:text-4xl font-bold uppercase leading-tight text-foreground">
              {title}
            </h2>

            <p className="text-sm md:text-[20px] text-foreground leading-[100%]">
              {description}
            </p>

            <motion.button
              className="inline-block w-full lg:w-auto bg-brown-100 text-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {buttonText}
            </motion.button>
          </div>
        </motion.div>

        {/* Right Video */}
        <motion.div
          className="order-1 md:order-0 relative h-87.5 md:h-auto p-4 md:p-0 bg-gold-200"
          initial={{
            opacity: 0,
            x: reverse ? -80 : 80,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ThumbnailVideoPlayer videoSrc={videoSrc} thumbnail={thumbnail} />
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureCard;
