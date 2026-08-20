import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function WordSlider({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words.length]);

  // Find the longest word to use as a spacer
  const longestWord = [...words].sort((a, b) => b.length - a.length)[0];

  return (
    <div className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      {/* Invisible spacer to maintain width */}
      <span className="invisible pointer-events-none" aria-hidden>
        {longestWord}
      </span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="absolute left-0 top-0 inline-block w-full bg-gradient-to-r from-brand-orange to-primary bg-clip-text text-transparent whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
