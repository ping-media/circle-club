"use client";

import { cn } from "@/lib/utils";

const BorderGrid = ({ borderClassName }: { borderClassName?: string }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      <div className="h-full px-8 relative">
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 h-full border-l border-r border-dashed border-[#DDDDDD1F]",
            borderClassName,
          )}
        >
          <div
            className={cn(
              "border-r border-dashed border-[#DDDDDD1F]",
              borderClassName,
            )}
          />
          <div
            className={cn(
              "border-r border-dashed border-[#DDDDDD1F]",
              borderClassName,
            )}
          />
          <div />
        </div>
      </div>
    </div>
  );
};

export default BorderGrid;
