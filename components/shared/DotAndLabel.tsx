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
      <span className="w-3 h-3 2xl:w-4 2xl:h-4 bg-white"></span>
      <span
        className={cn("uppercase text-white font-semibold text-xl", className)}
      >
        {label}
      </span>
    </div>
  );
};

export default DotAndLabel;
