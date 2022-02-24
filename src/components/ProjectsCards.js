import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import Button from '@material-ui/core/Button';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';

import { Header, Icon } from 'semantic-ui-react'

//Components
import ProjectData from '../data/ProjectData'
import UseStyles from './UseStyles';

function ProjectsCards() {
  const classes = UseStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <LazyLoad height={1000} offset={[-65, 0]} >
        <Paper sx={{ backgroundColor: "#4cbfa6" }} className={classes.projectPaper} elevation={4} >
          <Container className={classes.myProjectsHeader} maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
              <span className='font-projects' >My Projects</span>
            </Typography>
          </Container>
          <Grid style={{ marginTop: '10px' }} container spacing={4}>

            {ProjectData.map((card) => {
              const { title, duties, techUsed, website, img, bestView, typeOfProject } = card
              return (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <LazyLoad height={1000} offset={[-150, 0]}
                      placeholder={
                        <div>
                          <Header as='h3' icon textAlign='center'>
                            <Icon disabled style={{ margin: '20px' }} loading name='spinner' />
                          </Header>
                        </div>
                      }
                    >
                      <CardHeader
                        action={
                          <Tooltip
                            placement="left-start"
                            title={<Typography>{typeOfProject}</Typography>}>
                            {typeOfProject === "Individual" ? <PersonIcon /> : <GroupIcon />}
                          </Tooltip>
                        }
                        title={title}
                        subheader={techUsed}
                        className={classes.darkColor}
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
                        <Button
                          variant="outlined"
                          color="inherit"
                          href={
                            website !== 'https://sid-projects.netlify.app/' ? website : ""
                          }
                          target={
                            website === 'https://sid-projects.netlify.app/' ? false : "_blank"
                          }
                        >
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
                        <div className={classes.darkColor} style={{ margin: '3px' }}> <h4> Best View: </h4> {bestView}</div>
                        {/* <div style={{ margin: '3px' }}> <h4>Made from: </h4>{dates}</div> */}
                      </CardContent>}
                    </LazyLoad>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Paper>
      </LazyLoad>
    </Container>
  )
}

export default ProjectsCards;
