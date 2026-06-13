// ScrollToHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));

      if (element) {
        const navbarHeight = 80;

        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return null;
}

export default ScrollToHash;
