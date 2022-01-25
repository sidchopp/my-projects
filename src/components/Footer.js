
import Typography from '@material-ui/core/Typography';
import { Icon, Button } from 'semantic-ui-react';
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
        Hope you liked my work. Please let me know, if I can be helpful.
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
      >
        <Icon
          name='mobile alternate'
          fitted
        /> Wanna Talk? Dial (587)-436-7497
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
      >
        Not a big talker? Drop a
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
        /> Calgary-AB, Canada
      </Typography>
      <Typography
        variant="body2"
        align="center"
        gutterBottom
      >
        {' © '}2021{" "}-{" "}{new Date().getFullYear()},
        <span className="font-link"> My Projects</span>
      </Typography>
      <Typography
        variant="body2"
        align="center"
      >
        <Today />
      </Typography>
    </footer>
  )
}

export default Footer;


