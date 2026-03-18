import { cn } from "@/lib/utils";

const DotAndLabel = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <div className="flex items-center gap-6">
      <span className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 bg-black"></span>
      <span
        className={cn(
          "uppercase text-black font-semibold text-xs md:text-xl",
          className,
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default DotAndLabel;
