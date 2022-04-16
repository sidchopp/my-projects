import { Icon, Grid, Header } from 'semantic-ui-react';
import Typography from '@material-ui/core/Typography';

//Components
import UseStyles from './UseStyles';

function TechSkills() {
  const classes = UseStyles();
  const { reactIcon, nodeIcon, awsIcon, jsIcon, htmlIcon, cssIcon } = classes;

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
            <Header as="h1">
              <a href='https://reactjs.org/' target="_blank" rel="noreferrer">
                <Icon circular className={`${reactIcon} tech-icon `} name="react" />
              </a>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <a href='https://nodejs.org/en/' target="_blank" rel="noreferrer">
                <Icon circular className={`${nodeIcon} tech-icon `} name="node" />
              </a>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <a href='https://aws.amazon.com/' target="_blank" rel="noreferrer">
                <Icon circular className={`${awsIcon} tech-icon `} name="aws" />
              </a>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_blank" rel="noreferrer">
                <Icon circular className={`${jsIcon} tech-icon `} name="js square" />
              </a>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target="_blank" rel="noreferrer"> <Icon circular className={`${htmlIcon} tech-icon `} name="html5" />
              </a>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target="_blank" rel="noreferrer"> <Icon circular className={`${cssIcon} tech-icon `} name="css3 alternate" />
              </a>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default TechSkills;



