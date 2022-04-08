import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const beforeArrowComes = 'animate__animated animate__fadeIn animate__slow ';
const afterArrowComes = ' animate__animated animate__fadeIn  animate__slow animate__delay-1s animate__infinite';

function DownArrow() {
  return (
    <div className={afterArrowComes}  >
      <div style={{ paddingTop: "70px" }} className={beforeArrowComes}>
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 40 }} />
      </div>
    </div>
  )
}

export default DownArrow;
