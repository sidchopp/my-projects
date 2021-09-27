import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  // const classes = useStyles();
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
