import { cn } from "@/lib/utils";

const DotAndLabel = ({
  label,
  className,
  isLight = false,
}: {
  label: string;
  className?: string;
  isLight?: boolean;
}) => {
  return (
    <div className="flex items-center gap-6">
      <span
        className={cn(
          "w-2.5 h-2.5 2xl:w-4 2xl:h-4",
          isLight ? "bg-white" : "bg-black",
        )}
      />
      <span
        className={cn(
          "uppercase font-semibold text-xs md:text-xl",
          isLight ? "text-white" : "text-black",
          className,
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default DotAndLabel;
