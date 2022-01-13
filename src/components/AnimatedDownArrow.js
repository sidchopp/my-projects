import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import 'animate.css';

function AnimatedDownArrow() {
  return (
    <div style={{ paddingTop: "70px" }} className='animate__animated animate__fadeOutDown animate__slow animate__infinite'>

      <KeyboardDoubleArrowDownIcon sx={{ fontSize: 40 }} />
    </div>
  )
}

export default AnimatedDownArrow;
