import { cn } from "@/lib/utils";

const Container = ({
  children,
  as = "div",
  className,
}: {
  children: React.ReactNode;
  as?: "div" | "section";
  className?: string;
}) => {
  const Component = as;
  return (
    <Component
      className={cn(
        "w-full md:max-w-6xl 2xl:max-w-7xl mx-auto p-3 md:p-0",
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
