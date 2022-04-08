import React from 'react';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Components
import ResumeModal from './ResumeModal';
import TechSkills from './TechSkills';
import UseStyles from './UseStyles';
import DownArrow from './DownArrow';
import Certifications from './Certifications';

//CSS
import '../App.css'

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
          <div className='font-name  ' >
            Siddharth Chopra
          </div>
        </Typography>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          <div className='font-profile '  >
            Full Stack Developer
          </div>
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <div >
                <IconButton
                  // variant="contained"
                  // color="primary"
                  href='https://github.com/sidchopp'
                  target="_blank"
                  size="large"
                // className={classes.onHover}
                >
                  <GitHubIcon className='icon' fontSize="large" />
                </IconButton>
              </div>
            </Grid>
            <Grid item>
              <div >
                {/* component import */}
                <Certifications />
              </div>
            </Grid>
            <Grid item>
              <div >
                <IconButton
                  variant="contained"
                  color="primary"
                  href='https://www.linkedin.com/in/sidchopp/'
                  target="_blank"
                  size="large"
                >
                  <LinkedInIcon className='icon' fontSize="large" />
                </IconButton>
              </div>
            </Grid>

          </Grid>
          <Grid container spacing={6} justifyContent="center">
            <Grid item>
              {/* component import */}
              <div >
                <ResumeModal />
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
