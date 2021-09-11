import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CollectionsIcon from '@material-ui/icons/Collections';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
//import Collapse from '@material-ui/core/Collapse';

// components

import Data from './Data'
import Resume from './Resume'




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

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function Projects() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      {/* Header */}

      <AppBar position="relative">
        <Toolbar>
          <CollectionsIcon style={{ fontSize: 40 }} className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            My Projects
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Siddharth Chopra
            </Typography>
            <div>
              <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                Full Stack Developer
              </Typography>
            </div>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              These are some of my Projects that I have worked on, since I have started learning about Stack Development.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" href='https://github.com/sidchopp' target="_blank">
                    <GitHubIcon />
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" href='https://www.linkedin.com/in/sidchopp/' target="_blank" >
                    <LinkedInIcon />
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={4} justifyContent="center">
                <Grid item>

                  {/*/////// component import */}

                  <Resume />

                  {/* //////// */}

                </Grid>

              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Data.map((card) => {

              const { id, order, title, dates, duties, techUsed, website, img, bestView } = card
              return (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardHeader
                      // avatar={
                      //   <Avatar aria-label="recipe" className={classes.avatar}>
                      //     R
                      //   </Avatar>
                      // }
                      // action={
                      //   <IconButton aria-label="settings">
                      //     <MoreVertIcon />
                      //   </IconButton>
                      // }
                      title={title}
                      subheader={dates}

                    />
                    <CardMedia
                      className={classes.cardMedia}
                      image={img}
                      alt={title}
                    />
                    <CardContent className={classes.cardContent}>
                      {/* <Typography gutterBottom variant="h5" component="h2">
                        {title}
                      </Typography> */}
                      <Typography>
                        {duties}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        BEST VIEW: {bestView}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" href={website} target="_blank" >
                        <TouchAppIcon /> View
                      </Button>
                      <IconButton style={{ marginLeft: 'auto' }}
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"

                      >
                        {/* To change the icon with each click depending on state */}
                        {/* {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />} */}
                        <ExpandMoreIcon />
                      </IconButton>
                    </CardActions>
                    {/* Iff only showInfo is true, only then show info, use AND operator */}
                    {expanded && <CardContent>
                      Technologies Used: {techUsed}
                    </CardContent>}

                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Siddharth Chopra
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>

        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}