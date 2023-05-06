import { IoArrowUpOutline } from "react-icons/io5";
import { ScrollTop } from "./ScrollToTopBtn.styled";
import { useEffect } from "react";
import { useState } from "react";

export const ScrollToToBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <ScrollTop onClick={handleClick}>
          <IoArrowUpOutline />
        </ScrollTop>
      )}
    </>
  );
};
