"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThumbnailVideoPlayerProps {
  videoSrc: string;
  thumbnail: string;
  className?: string;
}

const ThumbnailVideoPlayer = ({
  videoSrc,
  thumbnail,
  className,
}: ThumbnailVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play();
    });
  };

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {!isPlaying && (
        <>
          {/* Thumbnail */}
          <Image
            src={thumbnail}
            alt="Video thumbnail"
            fill
            className="object-cover"
            priority={false}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Play Button */}
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/55 backdrop-blur-xs transition hover:scale-105 cursor-pointer border border-white">
              <Play className="h-6 w-6 text-white fill-white" />
            </span>
          </button>
        </>
      )}

      {isPlaying && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          controls
          autoPlay
          playsInline
        />
      )}
    </div>
  );
};

export default ThumbnailVideoPlayer;
