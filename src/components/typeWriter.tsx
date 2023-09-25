import { clsx } from "clsx";
import { useEffect, useState } from "react";

export function TypeWriter({
  input,
  className,
  perWord = false,
  intervalms: intervalms = 100,
  delayms: delayms = 0,
}: {
  input: string;
  className?: string;
  perWord?: boolean;
  intervalms?: number;
  delayms?: number;
}) {
  const [output, setOutput] = useState(input.split(" ")?.[0] ?? "");
  useEffect(() => {
    if (output === input) {
      return;
    }
    setTimeout(() => {
      if (perWord) {
        const words = input.split(" ");
        const interval = setInterval(() => {
          setOutput((output) => {
            const wordsAlreadyTyped = output.split(" ");
            const nextWord = words[wordsAlreadyTyped.length];
            if (nextWord) {
              return output + " " + nextWord;
            }
            return output;
          });
          if (output === input) {
            clearInterval(interval);
          }
        }, intervalms);
      } else {
        const interval = setInterval(() => {
          setOutput((output) => {
            const nextLetter = input[output.length];
            if (nextLetter) {
              return output + nextLetter;
            }
            return output;
          });
          if (output === input) {
            clearInterval(interval);
          }
        }, intervalms);
      }
    }, delayms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={clsx("relative bg-transparent text-white rounded", className)}
    >
      {output}
    </div>
  );
}
