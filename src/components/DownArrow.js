import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// animate CSS
import 'animate.css';

const arrowDownAnimate = 'animate__animated animate__fadeOutDown animate__slow animate__infinite';

function DownArrow() {
  return (
    <div style={{ paddingTop: "70px" }} className={arrowDownAnimate}>
      <KeyboardDoubleArrowDownIcon sx={{ fontSize: 40 }} />
    </div>
  )
}

export default DownArrow;
