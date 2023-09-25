import { useEffect, useState } from "react";
import { TypeWriter } from "./typeWriter";
import { initialWelcomeMessage } from "@/lib/contants";

export function ChatApp({
  sentQueue: [sentQueue, setSentQueue],
  gettingResponse: [gettingResponse, setGettingResponse],
  scrollToBottom,
}: {
  sentQueue: [string[], React.Dispatch<React.SetStateAction<string[]>>];
  gettingResponse: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  scrollToBottom: () => void;
}) {
  const [history, setHistory] = useState<
    {
      message: string;
      from: "user" | "bot";
      isTypeWriter?: boolean;
    }[]
  >([
    {
      message: initialWelcomeMessage,
      from: "bot",
      isTypeWriter: true,
    },
  ]);

  useEffect(() => {
    async function readStream(
      reader?: ReadableStreamDefaultReader<Uint8Array>
    ) {
      setGettingResponse(true);
      if (!reader) {
        return "no reader";
      }

      let result = "";
      while (true) {
        const { done, value } = await reader.read();
        scrollToBottom();
        console.log("read loops");
        if (done) {
          console.log("done 1");
          break;
        }
        result += new TextDecoder("utf-8").decode(value);
        setHistory((history) => {
          const lastMessage = history[history.length - 1];
          if (lastMessage.from === "bot") {
            return [
              ...history.slice(0, history.length - 1),
              {
                ...lastMessage,
                message: result,
              },
            ];
          }
          return [
            ...history,
            {
              message: result,
              from: "bot",
            },
          ];
        });
      }
      setGettingResponse(false);
      return "done";
    }
    if (sentQueue.length > 0 && !gettingResponse) {
      const [message, ...rest] = sentQueue;
      setSentQueue(rest);
      setHistory((history) => [
        ...history,
        {
          message,
          from: "user",
        },
        {
          message: "",
          from: "bot",
        },
      ]);

      fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          history: history.slice(1),
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => readStream(res?.body?.getReader()))
        .then((res) => console.log(res));
    }
  }, [
    gettingResponse,
    scrollToBottom,
    sentQueue,
    setGettingResponse,
    setSentQueue,
    history,
  ]);

  return (
    <div className="flex flex-col gap-2 ">
      {history.map((message, i) => (
        <div
          key={i}
          className={`flex flex-row ${
            message.from === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`flex flex-col gap-1 p-3 rounded-lg ${
              message.from === "user"
                ? "bg-cyan-700 text-white"
                : "bg-gray-800 text-white"
            }`}
          >
            {message.isTypeWriter ? (
              <TypeWriter
                input={message.message}
                perWord={true}
                intervalms={100}
                delayms={1000}
              />
            ) : (
              message.message
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
