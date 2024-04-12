import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

// Define a type for your component's props
type ButtonLoadingProps = {
  isLoading: boolean;
  isFormFilled:boolean;
  children: ReactNode;
  className?: string; // Optional property
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonLoading({
  isLoading,
  children,
  isFormFilled,
  className,
}: ButtonLoadingProps) {
  return (
    <Button disabled={!isFormFilled || isLoading} className={className}>
      {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
