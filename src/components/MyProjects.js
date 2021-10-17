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
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



// Components
import ProjectData from '../data/ProjectData'
import Footer from './Footer';
// import Header from './Header';
import HeroUnit from './HeroUnit';
import UseStyles from './UseStyles';

function MyProjects() {

  //States
  const classes = UseStyles();
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
              const { title, dates, duties, techUsed, website, img, bestView } = card
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
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" href={website} target="_blank" >
                        <TouchAppIcon /> View
                      </Button>
                      <IconButton
                        style={{ marginLeft: 'auto' }}
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
                      <div style={{ margin: '3px' }}> <h4>Technologies Used: </h4>{techUsed}</div>
                      <div style={{ margin: '3px' }}> <h4> Best View: </h4> {bestView}</div>
                    </CardContent>}
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </main>

      {/* Footer import */}
      <Footer />
      {/* End footer */}

    </React.Fragment >
  );
}

export default MyProjects;