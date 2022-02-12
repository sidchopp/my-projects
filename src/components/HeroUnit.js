import React from 'react';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Components
import Resume from './Resume';
import TechSkills from './TechSkills';
import UseStyles from './UseStyles';
import DownArrow from './DownArrow';

//CSS
import '../App.css'

// Amimate.css
import "animate.css"
import Badges from './Badges';

const nameAnimate = 'font-name animate__animated animate__fadeIn animate__slow ';
const profileAnimate = 'font-profile animate__animated animate__fadeIn animate__delay-1s animate__slower';
const iconsAnimate = "animate__animated animate__fadeIn animate__delay-2s animate__slower";

function HeroUnit() {
  const classes = UseStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
        >
          <div className={nameAnimate} >
            Siddharth Chopra
          </div>
        </Typography>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          <div className={profileAnimate}  >
            Full Stack Developer
          </div>
          <div className={profileAnimate}  >
            Physics Instructor
          </div>
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <div className={iconsAnimate}>
                <IconButton
                  // variant="contained"
                  // color="primary"
                  href='https://github.com/sidchopp'
                  target="_blank"
                  size="large"
                  className={classes.onHover}
                >
                  <GitHubIcon className={classes.darkColor} fontSize="large" />
                </IconButton>
              </div>
            </Grid>
            <Grid item>
              <div className={iconsAnimate}>
                {/* component import */}
                <Badges />
              </div>
            </Grid>
            <Grid item>
              <div className={iconsAnimate}>
                <IconButton
                  variant="contained"
                  color="primary"
                  href='https://www.linkedin.com/in/sidchopp/'
                  target="_blank"
                  size="large"
                  className={classes.onHover}
                >
                  <LinkedInIcon className={classes.darkColor} fontSize="large" />
                </IconButton>
              </div>
            </Grid>

          </Grid>
          <Grid container spacing={6} justifyContent="center">
            <Grid item>
              {/* component import */}
              <div className={iconsAnimate}>
                <Resume />
              </div>

            </Grid>
          </Grid>
        </div>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >

          {/* Component Import */}
          <TechSkills />
          <DownArrow />
          {/*  */}

        </Typography>
      </Container>
    </div>
  )
}

export default HeroUnit;
