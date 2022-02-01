import { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import IconButton from '@mui/material/IconButton';

import UseStyles from './UseStyles';

function ScrollToTop() {
  const classes = UseStyles();
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
    <div >
      {showButton && (
        <div className={classes.scrollToTop}>
          <IconButton onClick={scrollToTop}>
            <KeyboardDoubleArrowUpIcon className={classes.lightColor} fontSize="medium" />
          </IconButton>
        </div>
      )}
    </div>
  )
}

export default ScrollToTop;
