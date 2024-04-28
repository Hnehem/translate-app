import { useEffect } from "react";

export function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleOutsiderClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleOutsiderClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsiderClick);
    };
  }, []);
}
