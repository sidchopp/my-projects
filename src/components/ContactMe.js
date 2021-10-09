import React, { useState, useRef } from 'react'
import { Button, Icon, Modal, Header, Image, Divider } from 'semantic-ui-react';
import emailjs from 'emailjs-com';

import 'semantic-ui-css/semantic.min.css'

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
        // console.log(result);
        // console.log(result.text);
        if (result.status === 200 || result.text === 'OK') {
          setMessage("Thanks for your message. I 'll be in touch soon.")
        }
      }, (error) => {
        // console.log(error.text);
        setMessage("Some Error Occured!! Please try Again")
      });
    e.target.reset();
  };

  return (
    <div >
      <Modal
        closeIcon
        open={open}
        trigger={
          <div >
            <Icon style={{ color: 'black' }} name='mail' />
            Not a big talker? Drop a <a style={{ cursor: 'pointer' }} >Message</a>
          </div>
        }
        onClose={() => {
          setOpen(false)
          setMessage("")
        }}
        onOpen={() => setOpen(true)}
        size='small'
      >
        <Modal.Header style={{ backgroundColor: "#e2e3e8" }} >
          <Header textAlign='center' >
            <Icon name='mail' /> Contact Me
          </Header>
        </Modal.Header>
        <Modal.Content style={{ backgroundColor: "#e2e3e8" }} >
          <Modal.Description>

            {/* <Image rounded bordered centered fluid src='https://images.unsplash.com/photo-1581349437898-cebbe9831942?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80' wrapped /> */}

            <form style={{ marginTop: '30px' }} className="ui form" ref={form} onSubmit={sendEmail}>
              <div className="equal width fields">
                <div className="field">
                  <label>Your Name</label>
                  <div className="ui input">
                    <input required type="text" placeholder="John Doe" name="user_name" />
                  </div>
                </div>
                <div className="field">
                  <label>Your Email</label>
                  <div className="ui input">
                    <input required type="text" placeholder="john@gmail.com" name="user_email" />
                  </div>
                </div>
              </div>
              <div className="field">
                <label>Your Message</label>
                <textarea placeholder="Tell me how can I help..." rows="10" name="message" ></textarea>
              </div>
              <div className="field">
                <button className="ui button primary " value="Send" >
                  Submit
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
              <Header textAlign='center'>
                {message}
              </Header>
            </form>
            <Divider horizontal > </Divider>
            {/* <Header >
              <Icon name='mobile alternate' /> +1 (587)-436-7497
            </Header>  */}
            {/* <Header style={{ color: 'black' }} variant="body2" color="textSecondary" align="center">
              Calgary-AB, Canada
            </Header> */}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div >
  );
};

export default ContactMe;