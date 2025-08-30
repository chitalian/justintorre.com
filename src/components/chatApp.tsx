'use client';

import { useChat } from 'ai/react';
import { TypeWriter } from "./typeWriter";
import { initialWelcomeMessage } from "@/lib/contants";
import { useEffect } from 'react';

export function ChatApp({
  sentQueue: [sentQueue, setSentQueue],
  scrollToBottom,
}: {
  sentQueue: [string[], React.Dispatch<React.SetStateAction<string[]>>];
  gettingResponse: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  scrollToBottom: () => void;
}) {
  const { messages, append, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: '1',
        role: 'assistant',
        content: initialWelcomeMessage,
      }
    ],
  });

  useEffect(() => {
    if (sentQueue.length > 0 && !isLoading) {
      const [message, ...rest] = sentQueue;
      setSentQueue(rest);
      append({
        role: 'user',
        content: message,
      });
    }
  }, [sentQueue, setSentQueue, isLoading, append]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  return (
    <div className="flex flex-col gap-2">
      {messages.map((message, i) => (
        <div
          key={message.id}
          className={`flex flex-row ${
            message.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`flex flex-col gap-1 p-3 rounded-lg ${
              message.role === "user"
                ? "bg-cyan-700 text-white"
                : "bg-gray-800 text-white"
            }`}
          >
            {i === 0 && message.role === 'assistant' ? (
              <TypeWriter
                input={message.content}
                perWord={true}
                intervalms={100}
                delayms={1000}
              />
            ) : (
              message.content
            )}
          </div>
        </div>
      ))}
    </div>
  );
}