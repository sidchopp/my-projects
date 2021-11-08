import React from 'react'
import { Icon, Grid, Container, Header } from 'semantic-ui-react'

function TechSkills() {
  return (
    <Container >
      <Grid doubling>
        <Grid.Row columns={6} id='db_1'>
          <Grid.Column>
            <Header as="h1">
              <Icon name="react"></Icon>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <Icon name="node"></Icon>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <Icon name="js square"></Icon>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <Icon name="html5"></Icon>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <Icon name="css3 alternate"></Icon>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              <Icon name="aws"></Icon>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default TechSkills;



