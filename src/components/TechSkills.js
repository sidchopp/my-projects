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
      <Grid doubling style={{ marginTop: '10px' }}>
        <Grid.Row columns={6} id='db_1'>
          <Grid.Column>
            <Popup
              inverted
              trigger={<Header as="h1">
                <Icon
                  link
                  name="react"
                />
              </Header>}
              content='React'
              position='bottom center'
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              inverted
              trigger={<Header as="h1">
                <Icon
                  link
                  name="node"
                />
              </Header>}
              content='Node'
              position='bottom center'
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              inverted
              trigger={<Header as="h1">
                <Icon
                  link
                  name="js square"
                />
              </Header>}
              content='JavaScript'
              position='bottom center'
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              inverted
              trigger={<Header as="h1">
                <Icon
                  link
                  name="html5"
                />
              </Header>}
              content='HTML 5'
              position='bottom center'
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              inverted
              trigger={<Header as="h1">
                <Icon
                  link
                  name="css3 alternate"
                />
              </Header>}
              content='CSS 3'
              position='bottom center'
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              inverted
              trigger={<Header as="h1">
                <Icon
                  link
                  name="aws"
                />
              </Header>}
              content='Amazon Web Services'
              position='bottom center'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default TechSkills;



