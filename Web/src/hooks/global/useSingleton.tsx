import { useEffect, useRef } from "react"

export function useSingleton(effect: () => Promise<void>) {
  const initialized = useRef(false);
  
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      effect().then(() => {});
    }
  }, []);
}