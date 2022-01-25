import React, { useState } from 'react';
import { Modal } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import IconButton from '@mui/material/IconButton';
import BackspaceIcon from '@mui/icons-material/Backspace';
import 'semantic-ui-css/semantic.min.css'

// Components
import DetailedResume from './DetailedResume';
import UseStyles from './UseStyles';

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
          <IconButton color="primary" variant="contained" size="large" onClick={() => setOpen(false)}>
            <BackspaceIcon color="primary" fontSize='large' />
          </IconButton >
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Resume;