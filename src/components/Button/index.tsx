import { Slot } from "@radix-ui/react-slot";
import React, { ReactNode } from "react";
import { clsx } from "clsx";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, asChild }) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
    >
      {children}
    </Comp>
  );
};

export default Button;