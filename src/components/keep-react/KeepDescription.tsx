import { cn } from "keep-react/utils";
import React from "react";

// Define Level as a union type of string literals
type Level = "primary" | "secondary" | "subDescription";

interface PropsTypes {
  level?: Level;
  children: React.ReactNode;
  className?: string;
}

const KeepDescription: React.FC<PropsTypes> = ({
  level = "primary",
  children,
  className,
  ...rest
}) => {
  if (level === "primary")
    return (
      <p
        className={cn(
          "text-body-3 text-metal-500  dark:text-metal-300",
          className
        )}
        {...rest}
      >
        {children}
      </p>
    );
  else if (level === "secondary")
    return (
      <p
        className={cn(
          "text-body-4 font-normal text-metal-600 dark:text-metal-300",
          className
        )}
        {...rest}
      >
        {children}
      </p>
    );
  else if (level === "subDescription")
    return (
      <h1
        className={cn(
          "text-body-5 font-normal leading-[1.4] text-metal-600 dark:text-metal-300",
          className
        )}
        {...rest}
      >
        {children}
      </h1>
    );
};

export default KeepDescription;
