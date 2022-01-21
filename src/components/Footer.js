
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
        // style={{ color: 'black' }}
        variant="subtitle1"
        align="center"
        // color="textSecondary"
        component="p"
        gutterBottom
      >
        Hope you liked my work. Please let me know, if I can be helpful.
      </Typography>
      <Typography
        // style={{ color: 'black' }}
        variant="subtitle1"
        align="center"
        // color="textSecondary"
        component="p"
      >
        <Icon
          // style={{ color: 'black' }}
          name='mobile alternate'
          fitted
        /> Wanna Talk? Dial (587)-436-7497
      </Typography>
      <Typography
        // style={{ color: 'black' }}
        variant="subtitle1"
        align="center"
        // color="textSecondary"
        component="p"
      >
        Not a big talker? Drop a
        {" "}
        <IconButton >
          <ContactMe />
        </IconButton>
      </Typography>
      <Typography
        // style={{ color: 'black' }}
        variant="body2"
        // color="textSecondary"
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
        // color="textSecondary"
        align="center"
        gutterBottom
      >
        {' © '}2021{" "}-{" "}{new Date().getFullYear()},
        <span className="font-link"> My Projects</span>
      </Typography>
      <Typography
        variant="body2"
        // color="textSecondary"
        align="center"
      >
        <Today />
      </Typography>
    </footer>
  )
}

export default Footer;


