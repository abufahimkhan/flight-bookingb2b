import { Input, Label } from "keep-react";
import { cn } from "keep-react/utils";
import React, { useState } from "react";

type KeepInputProps = React.ComponentProps<typeof Input> & {
  type?: string;
  className?: string;
  label?: string;
  value?: string;
  onChange: (e: any) => void;
};

const KeepInput: React.FC<KeepInputProps> = ({
  type = "text",
  className,
  label,
  value,
  onChange,
  ...rest
}) => {
  const [data, setData] = useState("");

  const input = (
    <Input
      type={type}
      {...rest}
      className={cn(
        "border dark:border-metal-50 border-metal-300 text-base placeholder:text-metal-400",
        className
      )}
      value={value ?? data}
      onChange={(e) => {
        setData(e.target.value);
        onChange(e.target.value);
      }}
    />
  );

  if (label) {
    return (
      <fieldset className="space-y-1">
        <Label htmlFor="name">{label}</Label>
        {input}
      </fieldset>
    );
  } else {
    return input;
  }
};

export default KeepInput;
