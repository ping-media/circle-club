import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const SectionTitle = ({
  title,
  colorClassName,
  as = "h2",
}: {
  title: ReactNode;
  colorClassName?: string;
  as?: "h2" | "h3" | "h4";
}) => {
  const MotionTag = motion(as);
  return (
    <MotionTag
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "text-3xl md:text-4xl lg:text-6xl font-black uppercase leading-[1.2]",
        colorClassName,
      )}
    >
      {title}
    </MotionTag>
  );
};

export default SectionTitle;
