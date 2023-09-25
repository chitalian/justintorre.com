"use client";
import { useEffect, useRef, useState } from "react";
import TerminalInput from "./terminalCursor";
import { initialWelcomeMessage } from "@/lib/contants";
import { TypeWriter } from "./typeWriter";
import { ChatApp } from "./chatApp";

export function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const [gettingResponse, setGettingResponse] = useState(false);
  const [sentQueue, setSentQueue] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null); // Step 1: Create a ref
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  function scrollToBottom() {
    if (scrollContainerRef.current) {
      const element = scrollContainerRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }
  useEffect(() => {
    scrollToBottom();
  }, [sentQueue]);

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input when the div is clicked
    }
  };

  return (
    <div
      className="flex-1rounded-lg flex flex-col relative p-2 w-full max-w-4xl h-full"
      onClick={handleDivClick} // Step 2: Add an onClick event handler to the parent div
    >
      <div
        className={`fadeOutAnimation absolute text-xl w-full h-full flex justify-center items-center`}
      >
        <div className="border-2 p-10 rounded-lg bg-black">
          Hello! Welcome to my personal website 🚀
        </div>
      </div>
      <div className="flex-grow flex flex-row fadeInAnimation w-full items-stretch font-mono rounded-lg border-gray-400 border-2 text-xs bg-cyan-800 h-full overflow-clip ">
        <div className="lg:flex flex-col border-r-2 text-center h-auto border-gray-400 hidden">
          <div className="border-b text-left py-1 px-6">/terminal</div>
          <div className="border-b text-left py-1 px-6">
            /images {"(coming soon)"}
          </div>
          <div className="border-b text-left py-1 px-6">
            /videos {"(coming soon)"}
          </div>
          <div className="border-b text-left py-1 px-6">
            /blog {"(coming soon)"}
          </div>
        </div>

        <div className="w-full justify-end flex flex-col bg-black rounded-r-lg bg-opacity-50 px-5 py-1">
          <div className="w-full overflow-scroll " ref={scrollContainerRef}>
            <div className="flex flex-row gap-1 pb-2">
              <span className="hidden lg:block">~/justintorre.com</span>
              <span>{">"}</span>
              <span>./chat</span>
            </div>
            <div className="flex-wrap whitespace-pre-line pb-2 mb-2 ">
              <ChatApp
                sentQueue={[sentQueue, setSentQueue]}
                scrollToBottom={scrollToBottom}
                gettingResponse={[gettingResponse, setGettingResponse]}
              />
            </div>
          </div>
          <div className="flex flex-row items-start border-t pt-2 mt-2 pb-2">
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
                if (
                  e.key === "Enter" &&
                  inputValue !== "" &&
                  sentQueue.length < 1 &&
                  !gettingResponse
                ) {
                  setSentQueue([...sentQueue, inputValue]);
                  setInputValue("");
                  scrollToBottom();
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
