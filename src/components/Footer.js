
import Typography from '@material-ui/core/Typography';
import { Icon, Divider } from 'semantic-ui-react'

// Components
import ContactMe from './ContactMe';
import UseStyles from './UseStyles';
import Today from './Today';

function Footer() {
  const classes = UseStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h4" align="center" gutterBottom>
        <span
          style={{ color: 'black' }}
          className='font-link'
        >
          My Projects
        </span>
      </Typography>
      <Typography style={{ color: 'black' }} variant="subtitle1" align="center" color="textSecondary" component="p" gutterBottom>
        <i> Hope you liked them. Please let me know if I can be helpful.</i>
      </Typography>
      {/* <Divider horizontal></Divider> */}

      {/* <Typography style={{ color: 'black' }} variant="subtitle1" align="center" color="textSecondary" component="p">
        <Icon style={{ color: 'black' }} name='mail' />sidchopp@gmail.com
      </Typography> */}
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
        <a style={{ cursor: 'pointer' }} >
          <ContactMe />
        </a>
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
      >
        {/* <Divider horizontal></Divider> */}
        {' © '}{new Date().getFullYear()}

        {' '}
        <span className="font-link"> My Projects</span>
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center">
        <Today />
      </Typography>
    </footer>
  )
}

export default Footer;


