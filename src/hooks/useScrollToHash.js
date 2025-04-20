import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Custom hook to handle scrolling to hash anchors after navigation
const useScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL
    if (hash) {
      // Wait a bit for the page to fully render
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else if (pathname === "/") {
      // If we're on the homepage with no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);
};

export default useScrollToHash;
