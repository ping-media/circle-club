"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";

interface HeroVideoProps {
  src: string;
  poster?: string;
  overlay?: boolean;
  className?: string;
  objectPosition?: string;
  overlayClassName?: string;
}

const HeroVideo = ({
  src,
  poster,
  overlay = true,
  className = "",
  objectPosition = "center",
  overlayClassName = "",
}: HeroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <>
      {/* Background Video */}
      <video
        ref={videoRef}
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
        style={{ objectPosition }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Optional Overlay */}
      {overlay && (
        <div className={cn("absolute inset-0 bg-black/25", overlayClassName)} />
      )}
    </>
  );
};

export default HeroVideo;
