import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: ReactNode;
}

export const GradientText = ({ 
  as: Component = "h1", 
  className, 
  children,
  ...props 
}: GradientTextProps) => {
  return (
    <Component 
      className={cn(
        "bg-gradient-to-r from-[#5f72be] to-[#9b59b6] bg-clip-text text-transparent",
        className
      )} 
      {...props}
    >
      {children}
    </Component>
  );
};
