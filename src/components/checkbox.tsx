import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import clsx from "clsx";
import { Check } from "lucide-react";
import { ReactNode, useState } from "react";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  children: ReactNode;
}

export function Checkbox({ id, checked, onCheckedChange, children }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={clsx(
          "group flex items-center justify-center h-5 w-5 border-2 border-transparent rounded outline-none bg-gray transition",
          "focus:border-primary hover:border-primary",
          "data-[state=checked]:bg-primary"
        )}
      >
        <CheckboxPrimitive.Indicator>
          <Check size={12} strokeWidth={3} className="stroke-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <label htmlFor={id} className={clsx("text-white cursor-pointer select-none", { "line-through text-white opacity-80": checked })}>
        {children}
      </label>
    </div>
  );
}
