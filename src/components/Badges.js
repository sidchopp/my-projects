import React from 'react'
import { Modal, Grid } from 'semantic-ui-react'
import IconButton from '@mui/material/IconButton';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import BackspaceIcon from '@mui/icons-material/Backspace';

//Components
import awsDev from '../images/awsDev.png'
import awsCP from '../images/awsCP.png'
import ibmCloud from '../images/ibmCloud.png'
import UseStyles from './UseStyles';

function Badges() {
  const classes = UseStyles();
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='medium'
      trigger={
        // <Button style={{ marginBottom: '10px' }}>Badges</Button>
        <IconButton variant="contained" className={classes.onHover} size="large">
          <MilitaryTechIcon color="error" className={classes.darkColor} fontSize="large" />
        </IconButton>
      }
    >
      <Modal.Content>
        <Grid stackable relaxed columns={3} >
          <Grid.Column textAlign='center'>
            <img src={awsDev} alt="AWS Developer Associate" width="150" height="150" />
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <img src={awsCP} alt="AWS Cloud Practitioner" width="150" height="150" />
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <img src={ibmCloud} alt="IBM Cloud" width="150" height="150" />
          </Grid.Column>
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

export default Badges



// import React from 'react';
// import AWSDev from '../images/awsDev.png'


// function Badges() {
//   return (
//     <>
//       <img src={AWSDev} alt="Girl in a jacket" width="150" height="150">
//       </img>
//     </>
//   );
// }

// export default Badges;
