import { useRef, useEffect } from "react";

export function useThrottle(func: any, delay: number, cleanUp = false) {
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);
  const isFunctionRunning = useRef(false);

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }

  function runFunction() {
    func();
    isFunctionRunning.current = false;
  }

  return () => {
    if (!isFunctionRunning.current) {
      isFunctionRunning.current = true;
      clearTimer();
      timeoutRef.current = setTimeout(runFunction, delay);
    }
  };
}
