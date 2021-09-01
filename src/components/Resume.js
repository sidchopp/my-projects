import React, { useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// React-Semantic-UI
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

// Components

import DetailedResume from './DetailedResume.js';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Resume() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button>Resume</Button>}
      >
        <Modal.Header>Experience</Modal.Header>
        <Modal.Content >
          <Modal.Description>
            {/* Imported Component */}
            <DetailedResume />
            {/*  */}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={() => setOpen(false)}>
            <Icon name='chevron left' />Back
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Resume;