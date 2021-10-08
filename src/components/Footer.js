
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import { Icon, Divider } from 'semantic-ui-react'
import ContactMe from './ContactMe';

// Components
import UseStyles from './UseStyles';

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     // backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));

function Footer() {
  const classes = UseStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h4" align="center" gutterBottom>
        <span style={{ color: 'black' }} className='font-link'> My Projects</span>
      </Typography>
      <Typography style={{ color: 'black' }} variant="subtitle1" align="center" color="textSecondary" component="p" gutterBottom>
        <i> Hope you liked them. Please let me know if I can be helpful.</i>
      </Typography>
      {/* <Divider horizontal></Divider> */}

      {/* <Typography style={{ color: 'black' }} variant="subtitle1" align="center" color="textSecondary" component="p">
        <Icon style={{ color: 'black' }} name='mail' />sidchopp@gmail.com
      </Typography> */}
      <Typography style={{ color: 'black' }} variant="subtitle1" align="center" color="textSecondary" component="p">

        <Icon style={{ color: 'black' }} name='mobile alternate' /> Wanna Talk? Just dial  (587)-436-7497
      </Typography>
      <Typography style={{ color: 'black' }} variant="subtitle1" align="center" color="textSecondary" component="p">


        <ContactMe />
      </Typography>

      <Typography style={{ color: 'black' }} variant="body2" color="textSecondary" align="center" gutterBottom>
        Sid, Calgary-AB, Canada.
      </Typography>

      <Typography variant="body2" color="textSecondary" align="center" >
        {/* <Divider horizontal></Divider> */}
        {'My Projects © '}{new Date().getFullYear()}

        {/* {'.'} */}
      </Typography>

    </footer>
  )
}

export default Footer;


