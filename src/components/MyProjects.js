import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



// Components
import ProjectData from '../data/ProjectData'
import Footer from './Footer';
import Header from './Header';
import HeroUnit from './HeroUnit';

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

function MyProjects() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Header /> */}
      <main>
        <HeroUnit />
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {ProjectData.map((card) => {
              const { id, order, title, dates, duties, techUsed, website, img, bestView } = card
              return (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardHeader
                      title={title}
                      subheader={dates}
                    />
                    <CardMedia
                      className={classes.cardMedia}
                      image={img}
                      alt={title}
                    />
                    <CardContent className={classes.cardContent}>
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
      <Footer />
      {/* End footer */}

    </React.Fragment>
  );
}

export default MyProjects;