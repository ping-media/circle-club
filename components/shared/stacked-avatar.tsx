import { cn } from "@/lib/utils";
import Image from "next/image";

const StackedAvatar = ({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "relative w-10 h-10 rounded-full border border-white overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer",
        index !== 0 ? "-ml-1.5" : "",
      )}
      style={{ zIndex: 10 + index }}
    >
      <Image src={src} alt={alt} fill className="object-contain rounded-full" />
    </div>
  );
};

export default StackedAvatar;
