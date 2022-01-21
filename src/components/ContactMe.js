import React, { useState, useRef } from 'react'
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Icon, Modal, Header, Divider, Image } from 'semantic-ui-react';
import emailjs from 'emailjs-com';

import 'semantic-ui-css/semantic.min.css'
import sidImage from '../images/sidImage.jpeg'
import UseStyles from './UseStyles'

const ContactMe = () => {
  const classes = UseStyles();
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
        className={classes.darkColor}
        closeIcon
        open={open}
        trigger={<EmailIcon className={classes.darkColor} sidsi/>}
        onClose={() => {
          setOpen(false)
          setMessage("")
        }}
        onOpen={() => setOpen(true)}
        size='small'
      >
        <Modal.Header>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            // color="text.primary"
            gutterBottom
          >
            <span className={classes.darkColor}>Let's talk.</span>
          </Typography>
          <Typography
            variant="h5"
            align="center"
            // color="text.secondary"
            paragraph
          >
            <span className={classes.darkColor}> I would <span><Icon name='like' />
            </span> to hear from you, so feel free to drop a line.</span>
          </Typography>
        </Modal.Header>
        <Modal.Content  >
          <Modal.Description  >
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
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions >
          {/* <Image centered rounded size='tiny' src={sidImage} /> */}
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography align="left" component="h2" variant="h6">
                <Icon fitted name='mail outline' />  EMAIL
              </Typography>
              <Typography gutterBottom align="left" variant="subtitle1" color="text.secondary">
                sidchopp@gmail.com
              </Typography>
              <Typography align="left" component="h2" variant="h6">
                <Icon fitted name='mobile alternate' />  MOBILE
              </Typography>
              <Typography align="left" variant="subtitle1" color="text.secondary">
                (587)-436-7497
              </Typography>
            </Grid>
            <Grid item xs={6} >
              <Typography align="right" >
                <IconButton
                  color="primary"
                  onClick={() => window.open('https://www.facebook.com/siddchopp')}
                  size="large"
                >
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={() => window.open('https://www.linkedin.com/in/sidchopp/')}
                  size="large"
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Typography>
            </Grid>
          </Grid>
        </Modal.Actions>
      </Modal>
    </div >
  );
};

export default ContactMe;