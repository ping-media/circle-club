import { Button } from "../ui/button";
import Image from "next/image";

const SocialBtn = () => {
  return (
    <Button className="flex items-center justify-center relative bg-transparent z-10 hover:scale-105 transition hover:bg-transparent">
      {/* overlay  */}
      <div className="bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/60 border border-white/30 absolute -z-10 w-[62px] h-[62px]" />
      {/* icon */}
      <Image
        src="/images/Whatsapp.svg"
        width={32}
        height={32}
        className="object-contain"
        alt="Whatsapp logo"
      />
    </Button>
  );
};

export default SocialBtn;
