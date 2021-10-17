import React, { useState } from 'react';

import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

// Components
import DetailedResume from './DetailedResume';
import image from '../image.png'

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
        trigger={<Button color='secondary'> <span className="font-resume"> Resume</span> </Button>}
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
          <Button onClick={() => setOpen(false)}>
            <Icon name='chevron left' />Back
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Resume;