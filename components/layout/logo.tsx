import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  size?: "normal" | "large";
  isHome?: boolean;
}

const Logo = ({ size = "normal", isHome = false }: LogoProps) => {
  return (
    <motion.div
      layoutId="circleclub-logo"
      className={cn(
        "w-30 md:w-35 2xl:w-40",
        size === "large" ? "scale-250 md:scale-350" : "scale-100",
      )}
    >
      <Image
        src={isHome ? "/images/logo.svg" : "/images/logo_dark.svg"}
        width={160}
        height={60}
        alt="Circle Club Logo"
        priority
      />
    </motion.div>
  );
};

export default Logo;
