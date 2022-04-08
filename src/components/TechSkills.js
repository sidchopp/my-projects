import { Icon, Grid, Header } from 'semantic-ui-react';
import Typography from '@material-ui/core/Typography';

function TechSkills() {
  return (
    <div>
      <div   >
        <Typography variant="h5" gutterBottom component="div" >
          <span className="font"> Technologies, I Love </span>
        </Typography>
      </div>
      <Grid columns={6} doubling style={{ marginTop: '10px' }}>
        <Grid.Row id='db_1'>
          <Grid.Column>
            <div   >
              <Header as="h1">
                <a href='https://reactjs.org/' target="_blank" rel="noreferrer">
                  <Icon circular className='tech-icon' style={{ color: "#61dafb" }} name="react" />
                </a>
              </Header>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div    >
              <Header as="h1">
                <a href='https://nodejs.org/en/' target="_blank" rel="noreferrer">
                  <Icon circular className='tech-icon' style={{ color: "#68A063" }} name="node" />
                </a>
              </Header>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div    >
              <Header as="h1">
                <a href='https://aws.amazon.com/' target="_blank" rel="noreferrer">
                  <Icon circular className='tech-icon' style={{ color: " #FF9900" }} name="aws" />
                </a>
              </Header>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div    >
              <Header as="h1">
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_blank" rel="noreferrer">
                  <Icon circular className='tech-icon' style={{ color: "#323330" }} name="js square" />
                </a>
              </Header>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div    >
              <Header as="h1">
                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target="_blank" rel="noreferrer"> <Icon circular className='tech-icon' style={{ color: "#f06529" }} name="html5" />
                </a>
              </Header>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div    >
              <Header as="h1">
                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target="_blank" rel="noreferrer"> <Icon circular className='tech-icon' style={{ color: "#264de4" }} name="css3 alternate" />
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



