import { Slot } from "@radix-ui/react-slot";
import React, { ReactNode } from "react";
import { clsx } from "clsx";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  size = "md",
  children,
  asChild,
  className,
}) => {
  const Comp = asChild ? Slot : "h2";
  return (
    <Comp
      className={clsx(
        "text-gray-100 font-bold font-sans",
        {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
};

export default Heading;
