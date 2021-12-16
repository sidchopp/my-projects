import React from 'react'
import { Icon, Grid, Container, Header, Popup } from 'semantic-ui-react'

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
            <Popup
              inverted
              mouseEnterDelay={500}
              mouseLeaveDelay={500}
              on='hover'
              trigger={<Header as="h1">
                <a href='https://reactjs.org/' target="_blank" rel="noreferrer">
                  <Icon size="large" color='grey' name="react" />
                </a>
              </Header>}
              content='React'
              position='bottom center'
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              inverted
              mouseEnterDelay={500}
              mouseLeaveDelay={500}
              on='hover'
              trigger={<Header as="h1">
                <a href='https://nodejs.org/en/' target="_blank" rel="noreferrer">
                  <Icon size="large" color='grey' name="node" />
                </a>
              </Header>}
              content='Node'
              position='bottom center'
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              inverted
              mouseEnterDelay={500}
              mouseLeaveDelay={500}
              on='hover'
              trigger={<Header as="h1">
                <a href='https://aws.amazon.com/' target="_blank" rel="noreferrer">
                  <Icon size="large" color='grey' name="aws" />
                </a>
              </Header>}
              content='Amazon Web Services'
              position='bottom center'
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              mouseEnterDelay={500}
              mouseLeaveDelay={500}
              on='hover'
              inverted
              trigger={<Header as="h1">
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_blank" rel="noreferrer"> <Icon size="large" color='grey' name="js square" />
                </a>
              </Header>}
              content='JavaScript'
              position='bottom center'
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              inverted
              mouseEnterDelay={500}
              mouseLeaveDelay={500}
              on='hover'
              trigger={<Header as="h1">
                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target="_blank" rel="noreferrer"> <Icon size="large" color='grey' name="html5" />
                </a>
              </Header>}
              content='HTML5'
              position='bottom center'
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              inverted
              mouseEnterDelay={500}
              mouseLeaveDelay={500}
              on='hover'
              trigger={<Header as="h1">
                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target="_blank" rel="noreferrer"> <Icon size="large" color='grey' name="css3 alternate" />
                </a>
              </Header>}
              content='CSS3'
              position='bottom center'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default TechSkills;



