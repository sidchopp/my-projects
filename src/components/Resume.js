import React, { useState } from 'react';
import { Modal } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'semantic-ui-css/semantic.min.css'

// Components
import DetailedResume from './DetailedResume';

//CSS
import '../App.css'

function Resume() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal
        size='small'
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button variant="contained" style={{ color: 'black' }}>
          <span className="font-resume">
            Resume
          </span>
        </Button>
        }
      >
        {/* <div><Image fluid src={image} rounded bordered centered /></div> */}
        <Modal.Header>Experience</Modal.Header>
        <Modal.Content >
          <Modal.Description>

            {/* Imported Component */}
            <DetailedResume />
            {/*  */}

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