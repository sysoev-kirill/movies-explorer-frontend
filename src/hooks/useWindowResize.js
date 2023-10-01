import { useEffect, useState } from "react";

export const useWindowResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [screen, setScreen] = useState("desktop");

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width <= 697) {
      setScreen("mobile");
    } else if (width <= 1200) {
      setScreen("tablet");
    } else {
      setScreen("desktop");
    }
  }, [width]);

  return { width, screen };
};
