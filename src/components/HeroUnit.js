import React from 'react';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Components
import Resume from './Resume';
import TechSkills from './TechSkills';
import UseStyles from './UseStyles';

//CSS
import '../App.css'

// Amimate.css
import "animate.css"

function HeroUnit() {
  const classes = UseStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          // color="textPrimary"
          gutterBottom
        >
          <span className='font-name' >Siddharth Chopra</span>
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          <span className='font-profile'  >
            Full Stack Developer |  Physics Instructor
          </span>
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <div className="animate__animated animate__lightSpeedInLeft">
                <Button
                  variant="contained"
                  color="primary"
                  href='https://github.com/sidchopp'
                  target="_blank"
                >
                  <GitHubIcon style={{ fontSize: 28 }} />
                </Button>
              </div>
            </Grid>
            <Grid item>
              <div className="animate__animated animate__lightSpeedInRight">
                <Button
                  variant="contained"
                  color="primary"
                  href='https://www.linkedin.com/in/sidchopp/'
                  target="_blank"
                >
                  <LinkedInIcon style={{ fontSize: 28 }} />
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={6} justifyContent="center">
            <Grid item>
              {/* component import */}
              <div className="animate__animated animate__backInUp">
                <Resume />
              </div>
              {/*  */}
            </Grid>
          </Grid>
        </div>
        <Typography
          variant="h4"
          align="center"
          // color="textPrimary"
          gutterBottom
        >
          <TechSkills />
        </Typography>
      </Container>
    </div>
  )
}

export default HeroUnit;
