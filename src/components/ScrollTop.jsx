import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollTop = () => {
  const [show, setShow] = useState();
  const handleScroll = () =>
    window.scrollY >= 100 ? setShow(true) : setShow(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-btn-container ${show && "show"}`}
      onClick={() => (document.documentElement.scrollTop = 0)}
    >
      <KeyboardArrowUpIcon color="secondary" />
    </div>
  );
};

export default ScrollTop;
