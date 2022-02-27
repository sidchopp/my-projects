import React from 'react';
import { Modal, Grid, Header, } from 'semantic-ui-react';
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
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='large'
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
              <Grid.Column key={data.id} textAlign='center'>
                <Header as='h4'>
                  <a href={data.website} target="_blank" rel="noreferrer">
                    {data.title}
                  </a>
                </Header>
                <img src={data.img} alt="certificate img" width="150" height="150" />
              </Grid.Column>
            )
          })}
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        <IconButton variant="contained" size="large" onClick={() => setOpen(false)}>
          <BackspaceIcon className={classes.darkColor} />
        </IconButton >
      </Modal.Actions>
    </Modal>
  )
}

export default Badges;



