import React from 'react';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Components
import Resume from './Resume'
import UseStyles from './UseStyles';

//CSS
import '../App.css'

// Amimate.css
import "animate.css"

// const useStyles = makeStyles((theme) => ({
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     backgroundImage: `url(https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)`,
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
// }));

function HeroUnit() {
  const classes = UseStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          <span className='font-name' >Siddharth Chopra</span>
        </Typography>
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          <span className='font-profile'  >  Developer |  Instructor</span>
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <div class="animate__animated animate__lightSpeedInLeft">
                <Button variant="contained" style={{ color: 'black' }} href='https://github.com/sidchopp'
                  target="_blank">
                  <GitHubIcon style={{ fontSize: 28 }} >
                  </GitHubIcon>
                </Button>
              </div>
            </Grid>
            <Grid item>
              <div class="animate__animated animate__lightSpeedInRight">
                <Button variant="contained" style={{ color: 'black' }} href='https://www.linkedin.com/in/sidchopp/' target="_blank" >
                  <LinkedInIcon style={{ fontSize: 28 }} />
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={6} justifyContent="center">
            <Grid item>
              {/*/////// component import */}
              <div class="animate__animated animate__backInUp">
                <Resume />
              </div>
              {/* //////// */}
            </Grid>
          </Grid>
          {/* <div style={{ margin: '10px' }}> <Typography variant="h3" align="center" color="textSecondary" paragraph>
            <span className='font-link'>My Projects</span>
          </Typography></div> */}
        </div>
      </Container>
    </div>
  )
}

export default HeroUnit;
