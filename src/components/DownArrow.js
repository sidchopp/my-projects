import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// animate CSS
import 'animate.css';

const arrowDownAnimate = 'animate__animated animate__fadeOutDown animate__slow animate__infinite';

function DownArrow() {
  return (
    <div className=' animate__animated animate__fadeInDownBig animate__delay-3s animate__slower'   >
      <div style={{ paddingTop: "70px" }} className={arrowDownAnimate}>
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 40 }} />
      </div>
    </div>
  )
}

export default DownArrow;
