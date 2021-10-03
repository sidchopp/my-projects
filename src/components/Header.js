// Not using Header at the moment...
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// Components
import UseStyles from './UseStyles';


// const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
// }));

function Header() {
  const classes = UseStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        {/* <CollectionsIcon style={{ fontSize: 40 }} className={classes.icon} /> */}
        <Typography variant="h4" color="inherit" noWrap>
          <span className='font-link'> My Projects</span>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
