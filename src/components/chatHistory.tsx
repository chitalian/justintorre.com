"use client";
import { useRef, useState } from "react";
import TerminalInput from "./terminalCursor";
import { initialWelcomeMessage } from "@/lib/contants";
import { TypeWriter } from "./typeWriter";

interface Chat {
  id: string;
  message: string;
  timestamp: string;
  user: string;
}

export function ChatHistory({
  className,
  chatHistory: [chatHistory, setChatHistory],
  canSubmit: [canSubmit, setCanSubmit],
}: {
  className?: string;
  chatHistory: [Chat[], (chatHistory: Chat[]) => void];
  canSubmit: [boolean, (canSubmit: boolean) => void];
}) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null); // Step 1: Create a ref

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input when the div is clicked
    }
  };

  return (
    <div
      className="min-w-[90vw] min-h-[350px] lg:min-w-[70vw] lg:min-h-[600px] h-max flex-1  rounded-lg flex flex-col relative "
      onClick={handleDivClick} // Step 2: Add an onClick event handler to the parent div
    >
      <div
        className={`fadeOutAnimation absolute text-xl w-full h-full flex justify-center items-center`}
      >
        <div className="border-2 p-10 rounded-lg bg-black">
          Hello! Welcome to my personal website 🚀
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-between fadeInAnimation w-full h-full items-stretch font-mono rounded-lg border-gray-400 border-2 text-xs bg-cyan-800">
        <div className="lg:flex flex-col border-r-2 text-center h-auto border-gray-400 hidden">
          <div className="border-b text-left py-1 px-6">/terminal</div>
          <div className="border-b text-left py-1 px-6">/images</div>
          <div className="border-b text-left py-1 px-6">/videos</div>
          <div className="border-b text-left py-1 px-6">
            /blog {"(coming soon)"}
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-end bg-black rounded-r-lg bg-opacity-50 px-5 py-1">
          <div className="flex flex-row gap-1 pb-2">
            <span className="hidden lg:block">~/justintorre.com</span>
            <span>{">"}</span>
            <span>./chat</span>
          </div>
          <div className="flex-wrap whitespace-pre-line pb-2 mb-2 border-b ">
            <TypeWriter
              input={initialWelcomeMessage}
              perWord={true}
              intervalms={100}
              delayms={1000}
            />
          </div>

          <div className="flex flex-row items-start">
            <div className="flex flex-row gap-1">
              <span>{">"}</span>
            </div>
            <TerminalInput
              className="flex-grow"
              ref={inputRef} // Pass the ref to the TerminalInput component
              placeholder=""
              value={inputValue}
              onChange={setInputValue}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setInputValue("");
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
