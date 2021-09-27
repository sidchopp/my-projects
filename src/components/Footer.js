
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Icon } from 'semantic-ui-react'



const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Copyright() {
  return (
    <Typography style={{ color: 'black' }} variant="body2" color="textSecondary" align="center">
      {'Sid © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>

      <Typography variant="h4" align="center" gutterBottom>
        <span style={{ color: 'black' }} className='font-link'> My Projects</span>
      </Typography>
      <Typography style={{ color: 'black' }} variant="subtitle1" align="center" color="textSecondary" component="p">
        <i> Hope you liked them. Please let me know if I can be helpful.</i>
      </Typography>
      <Typography style={{ color: 'black' }} variant="subtitle1" align="center" color="textSecondary" component="p">
        <Icon style={{ color: 'black' }} name='mail' />sidchopp@gmail.com
      </Typography>
      <Typography style={{ color: 'black' }} variant="subtitle1" align="center" color="textSecondary" component="p">
        <Icon style={{ color: 'black' }} name='mobile alternate' />(587)-436-7497
      </Typography>
      <Copyright />

    </footer>
  )
}

export default Footer;


