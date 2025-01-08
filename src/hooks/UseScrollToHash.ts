import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const UseScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location.hash]);
};
