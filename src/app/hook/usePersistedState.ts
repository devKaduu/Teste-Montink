import { useState, useEffect } from "react";
import { getWithExpiry, setWithExpiry } from "@/app/utils/storage";

export function usePersistedState<T>(key: string, initialValue: T, ttl = 15) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = getWithExpiry<T>(key);
    if (stored !== null) {
      setValue(stored);
    }
  }, [key]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setWithExpiry(key, value, ttl);
  }, [key, value, ttl]);

  return [value, setValue] as const;
}
