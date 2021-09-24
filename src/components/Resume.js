import React, { useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// React-Semantic-UI
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

// Components

import DetailedResume from './DetailedResume';

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
        trigger={<Button primary> <span className="font-resume"> Resume</span> </Button>}
      >
        <Image size='medium' src='https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80' rounded bordered centered />
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