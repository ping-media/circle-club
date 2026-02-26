import { Button } from "../ui/button";
import Image from "next/image";

const SocialBtn = () => {
  return (
    <Button className="w-16 h-16 flex items-center justify-center bg-white/40 backdrop-blur-sm rounded-full hover:scale-105 transition hover:bg-white/60 border border-white">
      <Image
        src="/images/Whatsapp.svg"
        width={26}
        height={26}
        className="object-contain"
        alt="Whatsapp logo"
      />
    </Button>
  );
};

export default SocialBtn;
