import React, { useState } from 'react';
import { Modal } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'semantic-ui-css/semantic.min.css'

// Components
import DetailedResume from './DetailedResume';
import UseStyles from './UseStyles'
//CSS
import '../App.css'

function Resume() {
  const classes = UseStyles();
  const [open, setOpen] = useState(false);

  return (
    <div >
      <Modal
        className={classes.darkColor}
        size='small'
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button variant="contained" color="primary" >
          <span className="font-resume">
            My Resume
          </span>
        </Button>
        }
      >
        {/* <div><Image fluid src={image} rounded bordered centered /></div> */}
        <Modal.Header  >My Experience</Modal.Header>
        <Modal.Content  >
          <Modal.Description >
            <DetailedResume />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button variant="contained" onClick={() => setOpen(false)}>
            <ArrowBackIcon />
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Resume;