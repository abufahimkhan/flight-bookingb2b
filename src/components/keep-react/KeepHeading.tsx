import { cn } from "keep-react/utils";
import React from "react";

// Define Level as a union type of string literals
type Level = "primary" | "secondary" | "subheading";

interface PropsTypes {
  level?: Level;
  children: React.ReactNode;
  className?: string;
}

const KeepHeading: React.FC<PropsTypes> = ({
  level = "primary",
  children,
  className,
  ...rest
}) => {
  if (level === "primary")
    return (
      <h1
        className={cn(
          "mb-2 inline-block w-full text-heading-6 font-semibold text-white dark:text-white",
          className
        )}
        {...rest}
      >
        {children}
      </h1>
    );
  else if (level === "secondary")
    return (
      <h1
        className={cn(
          "mb-2 inline-block w-full text-xl font-medium text-secondary-main dark:text-white",
          className
        )}
        {...rest}
      >
        {children}
      </h1>
    );
  else if (level === "subheading")
    return (
      <h1
        className={cn(
          "text-body-3 font-medium text-secondary-main dark:text-white",
          className
        )}
        {...rest}
      >
        {children}
      </h1>
    );
};

export default KeepHeading;
