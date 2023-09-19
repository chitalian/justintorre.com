// TerminalInput.tsx
import clsx from "clsx";
import React, { useRef, useEffect, useState, forwardRef } from "react";

interface TerminalInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  ({ placeholder, value, onChange, className }, ref) => {
    const textWidthRef = useRef<HTMLSpanElement>(null);
    const [textWidth, setTextWidth] = useState(0);

    useEffect(() => {
      if (textWidthRef.current) {
        setTextWidth(textWidthRef.current.offsetWidth);
      }
    }, [value]);

    return (
      <div
        className={clsx(
          "relative bg-transparent text-white p-2 rounded",
          className
        )}
      >
        <input
          ref={ref} // Use the forwarded ref here
          type="text"
          className="bg-transparent outline-none w-full text-white"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
);

TerminalInput.displayName = "TerminalInput";

export default TerminalInput;
