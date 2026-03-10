import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { WA_LINK } from "@/constants/site";

const SocialBtn = () => {
  return (
    <Button
      className="hidden lg:flex items-center justify-center relative bg-transparent z-10 hover:scale-105 transition hover:bg-transparent gap-2.5"
      asChild
    >
      <Link href={WA_LINK} target="_blank">
        {/* overlay  */}
        <div className="bg-white/20 backdrop-blur-sm rounded-full border border-white/30 absolute -z-10 w-[62px] h-[62px]" />
        {/* icon */}
        <Image
          src="/images/Whatsapp.svg"
          fill
          className="object-contain"
          alt="Whatsapp logo"
        />
      </Link>
    </Button>
  );
};

export default SocialBtn;
