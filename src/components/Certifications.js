import React from 'react';
import { Modal, Grid, Header, Icon } from 'semantic-ui-react';
import IconButton from '@mui/material/IconButton';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BackspaceIcon from '@mui/icons-material/Backspace';

//Components
import certificationsData from '../data/CertificationsData';

function Certifications() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='large'
      trigger={
        <IconButton variant="contained" size="large">
          <WorkspacePremiumIcon className='icon' fontSize="large" />
        </IconButton>
      }
    >
      <Modal.Header ><span className='font-heading'>Certifications</span></Modal.Header>
      <Modal.Content>
        <Grid celled stackable columns={3} >
          {certificationsData.map((data) => {
            return (
              <Grid.Column key={data.id} textAlign='center'>
                <Header as='h3'>
                  <a className='anchor-tag' href={data.website} target="_blank" rel="noreferrer">
                    {data.title}
                  </a>
                </Header>
                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <img src={data.img} alt="certificate img" width="150" height="150" />
                    </div>
                    <div className="flip-box-back">
                      <img src={data.img} alt="certificate img" width="150" height="150" />
                    </div>
                  </div>
                </div>
                <Grid style={{ marginTop: "20px" }}>
                  <Grid.Column textAlign='left'>
                    <h3>
                      {/* <Icon circular className={classes.darkColor} name='setting' /> */}
                      {" "} Skills learned
                    </h3>
                    {data.skills.map(skill => {
                      return (<div key={skill} >
                        <p>
                          <Icon className='icon' name='angle right' />
                          {skill}
                        </p>
                      </div>
                      )
                    })
                    }
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            )
          })}
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        <IconButton variant="contained" size="large" onClick={() => setOpen(false)}>
          <BackspaceIcon />
        </IconButton >
      </Modal.Actions>
    </Modal>
  )
}

export default Certifications;



