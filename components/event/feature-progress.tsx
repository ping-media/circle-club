import { motion } from "framer-motion";
import { FEATURES } from "@/constants/features";

const FeatureProgress = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <div className="mt-10 h-0.5 bg-black/20 relative overflow-hidden mx-6">
      <motion.div
        className="absolute top-0 left-0 h-full bg-brown-100"
        animate={{
          width: `${(activeIndex + 1) * (100 / FEATURES.length)}%`,
        }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
};

export default FeatureProgress;
