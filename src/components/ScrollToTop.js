import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';

function ScrollToTop() {

  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <div>
      {showButton && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            bottom: "12.5px",
            right: "8.5px",
            position: "fixed",
            boxShadow: 5,
            background: "#dae0f2"
          }}
        >
          <KeyboardArrowUpIcon fontSize="large" />
        </IconButton>
      )}
    </div>
  )
}

export default ScrollToTop;
