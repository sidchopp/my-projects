import React from 'react';
import { Modal, Grid, Header, Button } from 'semantic-ui-react';
import IconButton from '@mui/material/IconButton';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import BackspaceIcon from '@mui/icons-material/Backspace';

//Components
import certificationsData from '../data/CertificationsData';
import UseStyles from './UseStyles';

function Badges() {
  const classes = UseStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      // basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='medium'
      trigger={
        <IconButton variant="contained" className={classes.onHover} size="large">
          <MilitaryTechIcon color="error" className={classes.darkColor} fontSize="large" />
        </IconButton>
      }
    >
      <Modal.Content>
        <Grid stackable relaxed columns={3} >
          {certificationsData.map((data) => {
            return (
              <Grid.Column textAlign='center'>
                <img src={data.img} alt="certificate img" width="150" height="150" />
                <Header as='h4'>{data.title}</Header>
                <Button size='small' primary href={data.website} target="_blank" >View</Button>
              </Grid.Column>
            )
          })}
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        <IconButton color="primary" variant="contained" size="large" onClick={() => setOpen(false)}>
          <BackspaceIcon color="primary" fontSize='large' />
        </IconButton >
      </Modal.Actions>
    </Modal>
  )
}

export default Badges;



