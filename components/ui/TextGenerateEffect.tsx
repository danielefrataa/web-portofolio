"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  highlightWords = [],
  className,
}: {
  words: string;
  highlightWords?: string[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words?.split(" ") ?? [];

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, y: 0 },
      { duration: 1, delay: stagger(0.1) }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="flex flex-wrap gap-2 justify-center">
        {wordsArray.map((word, idx) => {
          const isHighlighted = highlightWords.includes(word);
          return (
            <motion.span
              key={word + idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug",
                isHighlighted
                  ? "text-white font-extrabold shadow-[0px_0px_15px_rgba(255,255,255,0.9)]"
                  : "dark:text-white text-black"
              )}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-6">{renderWords()}</div>
    </div>
  );
};
