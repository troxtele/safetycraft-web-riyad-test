import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
    else {
      const element = document.getElementById(hash.slice(1));
      if (element) element.scrollIntoView({ behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}
