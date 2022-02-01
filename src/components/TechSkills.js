import { Icon, Grid, Header } from 'semantic-ui-react';
import Typography from '@material-ui/core/Typography';

//CSS
import '../App.css'

// Amimate.css
import "animate.css"

const techAnimate = ' animate__animated animate__fadeIn animate__delay-3s animate__slower';

function TechSkills() {
  return (
    <div>
      <div className={techAnimate}  >
        <Typography variant="h5" gutterBottom component="div" >
          <span className="font-technology"> Technologies, I Love </span>
        </Typography>
      </div>
      <Grid columns={6} doubling style={{ marginTop: '10px' }}>
        <Grid.Row id='db_1'>
          <Grid.Column>
            <div className={techAnimate}  >
              <Header as="h1">
                <a href='https://reactjs.org/' target="_blank" rel="noreferrer">
                  <Icon size="large" style={{ color: "#61dafb" }} name="react" />
                </a>
              </Header>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className={techAnimate}   >
              <Header as="h1">
                <a href='https://nodejs.org/en/' target="_blank" rel="noreferrer">
                  <Icon size="large" style={{ color: "#68A063" }} name="node" />
                </a>
              </Header>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className={techAnimate}   >
              <Header as="h1">
                <a href='https://aws.amazon.com/' target="_blank" rel="noreferrer">
                  <Icon size="large" style={{ color: " #FF9900" }} name="aws" />
                </a>
              </Header>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className={techAnimate}   >
              <Header as="h1">
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_blank" rel="noreferrer"> <Icon size="large" style={{ color: "#323330" }} name="js square" />
                </a>
              </Header>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className={techAnimate}   >
              <Header as="h1">
                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target="_blank" rel="noreferrer"> <Icon size="large" style={{ color: "#f06529" }} name="html5" />
                </a>
              </Header>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className={techAnimate}   >
              <Header as="h1">
                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target="_blank" rel="noreferrer"> <Icon size="large" style={{ color: "#264de4" }} name="css3 alternate" />
                </a>
              </Header>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default TechSkills;



