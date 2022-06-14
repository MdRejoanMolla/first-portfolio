import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
      const form = useRef();
      const [done, setDone] = useState(false)

      const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_luqmzz6', 'template_qmq9k88', form.current, 'hu8r4zc_Mj6Q4oZGU')
                  .then((result) => {
                        console.log(result.text);
                        setDone(true)
                  }, (error) => {
                        console.log(error.text);
                  });
      };

      return (
            <div className='contact-form' id=''>
                  <div className="left">
                        <div className="awesome">
                              <span>Get in touch</span>
                              <span>Contact Me</span>
                              <div className="blur s-blurl"
                                    style={{ background: '#abf2ff94' }}
                              ></div>

                        </div>
                  </div>
                  <div className="c-right">
                        <form ref={form} onSubmit={sendEmail}>
                              <input type="text" name="user-name" className='user' placeholder='Name' id="1" />
                              <input type="email" name="user-email" className='user' placeholder='Email' id="2" />
                              <textarea name='message' className='user' placeholder='Message' />
                              <input type="submit" value="send" className='button' id="3" />
                              <span>{done && 'Thanks for contactin me !'}</span>
                              <div className="blur c-blurl" style={{ background: 'var(--purple)' }}></div>
                        </form>
                  </div>
            </div>
      );
};

export default Contact;