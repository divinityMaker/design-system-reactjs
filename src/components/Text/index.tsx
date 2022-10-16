import { Slot } from "@radix-ui/react-slot";
import React, { ReactNode } from "react";
import { clsx } from "clsx";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

const Text: React.FC<TextProps> = ({ size = "md", children, asChild }) => {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
};

export default Text;
