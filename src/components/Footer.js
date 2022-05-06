
import Typography from '@material-ui/core/Typography';
import { Icon } from 'semantic-ui-react';
import IconButton from '@mui/material/IconButton';

// Components
import ContactMe from './ContactMe';
import UseStyles from './UseStyles';
import Today from './Today';


// Amimate.css
import "animate.css"

function Footer() {
  const classes = UseStyles();
  return (
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
        gutterBottom
      >
        <span className='font'>Hope you liked my work. </span>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
      >
        <Icon
          name='mobile alternate'
          fitted
        /> <span className='font'> Wanna Talk? Dial (587)-436-7497</span>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
      >
        <span className='font'>Not a big talker? Drop a</span>
        {" "}
        <IconButton >
          <ContactMe />
        </IconButton>
      </Typography>
      <Typography
        variant="body2"
        align="center"
        gutterBottom
      >
        <Icon
          name='map marker alternate'
          fitted
        />  <span className='font'>Calgary-AB, Canada</span>
      </Typography>
      <Typography
        variant="body2"
        align="center"
        gutterBottom
      >
        <span className='font'>
          {' © '}2021{" "}-{" "}{new Date().getFullYear()},
          <span className="font-link"> My Projects</span>
        </span>
      </Typography>
      <Typography
        variant="body2"
        align="center"
        component="div"
      >
        <Today />
      </Typography>
    </footer>
  )
}

export default Footer;


