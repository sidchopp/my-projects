
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/sidchopp" target="_blank">
        My GitHub
      </Link>{' '}
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
        My Projects
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        <i>These were some of my projects. Hope you liked them. Please let me know if I can be helpful.</i>
      </Typography>
      <Copyright />
    </footer>
  )
}

export default Footer;


