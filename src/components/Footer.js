
import Typography from '@material-ui/core/Typography';
import { Icon, Button } from 'semantic-ui-react'

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
        style={{ color: 'black' }}
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
        gutterBottom
      >
        Hope you liked my work. Please let me know, if I can be helpful.
      </Typography>
      <Typography
        style={{ color: 'black' }}
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        <Icon
          style={{ color: 'black' }}
          name='mobile alternate'
          fitted
        /> Wanna Talk? Dial (587)-436-7497
      </Typography>
      <Typography
        style={{ color: 'black' }}
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Not a big talker? Drop a
        {" "}
        <span className="animate__animated animate__fadeIn animate__infinite">
          <Button compact size='tiny'>
            <ContactMe />
          </Button>
        </span>
      </Typography>
      <Typography
        style={{ color: 'black' }}
        variant="body2"
        color="textSecondary"
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
        color="textSecondary"
        align="center"
        gutterBottom
      >
        {' © '}{new Date().getFullYear()}
        {' '}
        <span className="font-link"> My Projects</span>
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
      >
        <Today />
      </Typography>
    </footer>
  )
}

export default Footer;


