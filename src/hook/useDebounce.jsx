import { useEffect, useState } from "react";

export default function useDebounce(initalizeValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initalizeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initalizeValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initalizeValue]);
  return debounceValue;
}
