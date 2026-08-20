import { useState, useEffect } from "react";

export function TypewriterHeading({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        timeout = setTimeout(() => {}, 500); // Wait before re-typing
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length - 1));
        }, 30);
      }
    } else {
      if (displayedText.length === text.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Wait after completing before deleting
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        }, 70);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text]);

  return (
    <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl text-primary">
      {displayedText}
      {showCursor && (
        <span className="ml-1 inline-block h-[1em] w-1 animate-pulse bg-primary align-middle" />
      )}
    </h2>
  );
}
