import { cn } from "@/lib/utils";

const BorderGrid = ({
  length = 4,
  borderClassName,
}: {
  length?: number;
  borderClassName?: string;
}) => {
  const BORDERLINE = new Array(length).fill("");
  return (
    <div className="absolute inset-0 h-full z-10">
      <div className="grid md:grid-cols-12 h-full">
        {BORDERLINE.map((_, index) => (
          <div
            key={index}
            className={cn(
              "border-r-2 md:col-span-3 border-dashed border-[#DDDDDD1F]",
              borderClassName,
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default BorderGrid;
