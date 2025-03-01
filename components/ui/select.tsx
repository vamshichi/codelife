"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomSelectProps extends SelectPrimitive.SelectProps {
    className?: string;
  }

export function Select({ children, className, ...props }: CustomSelectProps) {
    return (
      <SelectPrimitive.Root {...props}>
        <SelectTrigger className={cn("flex items-center justify-between p-2 border rounded-lg", className)}>
          <SelectValue placeholder="Select an option" />
          <ChevronDown className="w-4 h-4" />
        </SelectTrigger>
        <SelectContent className="border rounded-lg bg-white shadow-lg p-2">
          {children}
        </SelectContent>
      </SelectPrimitive.Root>
    );
  }

export function SelectTrigger({ className, ...props }: SelectPrimitive.SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger className={cn("flex items-center p-2 border rounded-lg", className)} {...props} />
  );
}

export function SelectContent({ className, ...props }: SelectPrimitive.SelectContentProps) {
  return (
    <SelectPrimitive.Content className={cn("border rounded-lg bg-white shadow-lg p-2", className)} {...props} />
  );
}

export function SelectItem({ className, ...props }: SelectPrimitive.SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText />
      <SelectPrimitive.ItemIndicator>
        <Check className="w-4 h-4" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

export function SelectValue({ className, ...props }: SelectPrimitive.SelectValueProps) {
  return <SelectPrimitive.Value className={cn("text-gray-700", className)} {...props} />;
}
