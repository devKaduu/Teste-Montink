import { useState, useEffect } from "react";
import { getWithExpiry, setWithExpiry } from "@/app/utils/storage";

export function usePersistedState<T>(key: string, initialValue: T, ttl = 15) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const stored = getWithExpiry<T>(key);
    if (stored !== null) {
      setValue(stored);
    }
  }, [key]);

  useEffect(() => {
    setWithExpiry(key, value, ttl);
  }, [key, value, ttl]);

  return [value, setValue] as const;
}
