import { useState, useCallback } from "react";
export default function useCopyClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback((text) => {
    if (!navigator.clipboard) {
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    });
  }, []);

  return { isCopied, copy };
}
