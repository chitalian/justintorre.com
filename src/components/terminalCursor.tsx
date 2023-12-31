// TerminalInput.tsx
import clsx from "clsx";
import React, { useRef, useEffect, useState, forwardRef } from "react";

interface TerminalInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  ({ placeholder, value, onChange, className, onKeyPress }, ref) => {
    return (
      <div
        className={clsx(
          "relative bg-transparent text-white px-2 rounded",
          className
        )}
      >
        <input
          ref={ref} // Use the forwarded ref here
          type="text"
          onKeyDown={(e) => {
            onKeyPress && onKeyPress(e);
          }}
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
