
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Icon } from 'semantic-ui-react'

import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Sid © '}
      {/* <Link color="inherit" href="https://github.com/sidchopp" target="_blank">
        My GitHub
      </Link>{' '} */}
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
        <span className='font-link'> My Projects</span>
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        <i> Hope you liked them. Please let me know if I can be helpful.</i>
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        <Icon name='mail' />sidchopp@gmail.com
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        <Icon name='mobile alternate' />(587)-436-7497
      </Typography>
      <Copyright />
    </footer>
  )
}

export default Footer;


