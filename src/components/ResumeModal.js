import React, { useState } from 'react';
import { Modal } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import IconButton from '@mui/material/IconButton';
import BackspaceIcon from '@mui/icons-material/Backspace';
import 'semantic-ui-css/semantic.min.css'

// Components
import DetailedResume from './DetailedResume';

function ResumeModal() {
  const [open, setOpen] = useState(false);

  return (
    <div >
      <Modal
        size='small'
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
          <div className=' resume-button ' >
            <Button  >
              <span className="font-resume ">
                My Resume
              </span>
            </Button>
          </div>

        }
      >
        {/* <div><Image fluid src={image} rounded bordered centered /></div> */}
        <Modal.Header>
          <span className='font-heading'> My Experience</span>
        </Modal.Header>
        <Modal.Content  >
          <Modal.Description >
            <DetailedResume />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <IconButton variant="contained" onClick={() => setOpen(false)}>
            <BackspaceIcon />
          </IconButton >
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default ResumeModal;