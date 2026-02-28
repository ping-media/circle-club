import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SectionLabel = ({
  colorClassName,
  descriptionClassName,
  squareClassName,
  number,
  label,
  labelClassName,
}: {
  colorClassName?: string;
  descriptionClassName?: string;
  squareClassName?: string;
  number?: string;
  label?: string;
  labelClassName?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground",
        colorClassName,
      )}
    >
      <span
        className={cn(
          "w-3 h-3 2xl:w-4 2xl:h-4 bg-muted-foreground",
          squareClassName,
        )}
      ></span>
      {number && (
        <span className={cn("font-light", descriptionClassName)}>{number}</span>
      )}
      {label && (
        <span className={cn("font-light text-foreground", labelClassName)}>
          {label}
        </span>
      )}
    </motion.div>
  );
};

export default SectionLabel;
