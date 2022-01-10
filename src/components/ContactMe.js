import React, { useState, useRef } from 'react'
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Icon, Modal, Header, Divider, Image } from 'semantic-ui-react';
import emailjs from 'emailjs-com';

import 'semantic-ui-css/semantic.min.css'
import sidImage from '../images/sidImage.jpeg'

const ContactMe = () => {

  //States
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  // EmailJS
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ns631vs', 'contact_form', form.current, 'user_TnY5a5lrQ29TcAvOHuN56')
      .then((result) => {
        if (result.status === 200 || result.text === 'OK') {
          setMessage("Thanks for your message. I 'll be in touch soon.")
        }
      }, (error) => {
        setMessage("Some Error Occured!! Please try Again")
      });
    e.target.reset();
  };

  return (
    <div >
      <Modal
        closeIcon
        open={open}
        trigger={<Icon name='mail' />}
        onClose={() => {
          setOpen(false)
          setMessage("")
        }}
        onOpen={() => setOpen(true)}
        size='small'
      >
        <Modal.Header style={{ backgroundColor: "#f1f2f5" }} >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Let's talk.
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            I would <span><Icon disabled name='like' />
            </span> to hear from you so feel free to drop a line.
          </Typography>
        </Modal.Header>
        <Modal.Content style={{ backgroundColor: "#f1f2f5" }} >
          <Modal.Description >
            <form style={{ marginTop: '30px' }} className="ui form" ref={form} onSubmit={sendEmail}>
              <div className="equal width fields">
                <div className="field">
                  {/* <label>Your Name</label> */}
                  <div className="ui input">
                    <input autoFocus required type="text" placeholder="Your Name" name="user_name" />
                  </div>
                </div>
                <div className="field">
                  {/* <label>Your Email</label> */}
                  <div className="ui input">
                    <input required type="text" placeholder="Your Email" name="user_email" />
                  </div>
                </div>
              </div>
              <div className="field">
                {/* <label>Your Message</label> */}
                <textarea placeholder="Your Message.." rows="10" name="message" ></textarea>
              </div>
              <div className="field">
                <button className="ui button primary " value="Send" >
                  Send Message
                </button>
                <button
                  className="ui right floated button secondary"
                  value="Send"
                  onClick={() => {
                    setOpen(false);
                    setMessage("");
                  }} >
                  Back
                </button>
              </div>
              <Typography variant="h5" align="center" color="text.primary">
                {message}
              </Typography>
            </form>
            {/* <Divider horizontal > </Divider> */}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions >
          <Image centered rounded size='small' src={sidImage} />
          <Typography variant="body1" align="center" color="text.secondary" gutterBottom >
            For old schools like me, contact by:
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" >
            <Icon fitted name='mail outline' /> sidchopp@gmail.com
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" >
            <Icon fitted name='mobile alternate' />  (587)-436-7497
          </Typography>
        </Modal.Actions>
      </Modal>
    </div >
  );
};

export default ContactMe;