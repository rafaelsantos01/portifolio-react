import { cn } from "@/lib/utils";

const Container = ({ children, className }: any) => {
  return (
    <div
      className={cn(
        "mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-28 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24",
        className
      )}
    >
      <div>{children}</div>
    </div>
  );
};

export default Container;
