import { useEffect } from "react";
import { isLangAvailable } from "../utils/langs.js";

export function useInLangChange(condition, src, dependencie, callback) {
  useEffect(() => {
    let isAvailable = isLangAvailable(dependencie);

    if (condition && !src) callback();

    if (condition && isAvailable) {
      if (dependencie !== src) {
        callback();
      }
    }
  }, [dependencie]);
}
