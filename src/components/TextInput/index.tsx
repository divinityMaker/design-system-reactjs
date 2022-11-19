import { Slot } from "@radix-ui/react-slot";
import React, { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot: React.FC<TextInputRootProps> = (props) => {
  return <div className="flex items-center  gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">{props.children}</div>
};

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon: React.FC<TextInputIconProps> = (props) => {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
};

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput: React.FC<TextInputInputProps> = (props) => {
  return <input className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400" {...props} />
};

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
