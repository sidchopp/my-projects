import React from 'react'
import { Icon, Grid, Container, Header } from 'semantic-ui-react'
import 'animate.css';


//CSS
import '../App.css'

function TechSkills() {
  return (
    <Container  >
      <Header as="h2" textAlign='center'>
        <span className="font-resume"> Technologies, I Love to work with</span>
      </Header>
      <Grid columns={6} divided doubling style={{ marginTop: '10px' }}>
        <Grid.Row id='db_1'>
          <Grid.Column>
            <Header as="h1">
              <a href='https://reactjs.org/' target="_blank" rel="noreferrer">
                <Icon size="large" style={{ color: "#61dafb" }} name="react" />
              </a>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <a href='https://nodejs.org/en/' target="_blank" rel="noreferrer">
                <Icon size="large" style={{ color: "#68A063" }} name="node" />
              </a>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <a href='https://aws.amazon.com/' target="_blank" rel="noreferrer">
                <Icon size="large" style={{ color: " #FF9900" }} name="aws" />
              </a>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_blank" rel="noreferrer"> <Icon size="large" style={{ color: "#323330" }} name="js square" />
              </a>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target="_blank" rel="noreferrer"> <Icon size="large" style={{ color: "#f06529" }} name="html5" />
              </a>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target="_blank" rel="noreferrer"> <Icon size="large" style={{ color: "#264de4" }} name="css3 alternate" />
              </a>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className='animate__animated animate__fadeOutDown animate__slow animate__infinite'>

        <Icon style={{ paddingTop: "70px" }} name=' chevron down' />
      </div>
    </Container>
  )
}

export default TechSkills;



