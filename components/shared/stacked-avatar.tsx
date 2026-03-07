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
        "relative w-7 h-7 md:w-10 md:h-10 rounded-full border border-white overflow-hidden",
        index !== 0 ? "-ml-1.5" : "",
      )}
      style={{ zIndex: 10 + index }}
    >
      <Image src={src} alt={alt} fill className="object-contain rounded-full" />
    </div>
  );
};

export default StackedAvatar;
