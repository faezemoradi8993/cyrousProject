import React, { useState, setState } from 'react'
import Layout from '../../common/layout'
import './contactus.css'

import { LocalPhone, LocationOn, Twitter, Telegram, Instagram } from '@material-ui/icons'


const ContactUs = () => {
  const [status, setStatus] = useState(false);
  // const sendHandle = () => {

  //   setStatus(true);
  // }
  return (
    <Layout>

      {(status===false) && (
        <div className="mainContainer contact ">
          <p className="title">Contact Us</p>
          <div className="contactus">
            <div class="form">
              <p>Feel Free To Contact Us Any Time . We Will get back to you as soon as we can!</p>
              <div className="form-Item">
                <input type="text" name="name"
                  required outocomplate="off"
                  class="input-name" />
                <label for="name" class="label-name">
                  <span class="content-name">name</span>
                </label>
              </div>
              <div className="form-Item">
                <input type="text" name="email"
                  required outocomplate="off"
                  class="input-name" />
                <label for="email" class="label-name">
                  <span class="content-name">Email</span>
                </label>
              </div>
              <div className="form-Item">
                <input type="text" name="message"
                  required outocomplate="off"
                  class="input-name" />
                <label for="message" class="label-name">
                  <span class="content-name">Message</span>
                </label>
              </div>
              <div className="horizentalTitle contact"><p>CYRUS</p></div>
              <button className="contact-btn" onclick={() => setStatus(true)}>Send</button>
            </div>
            <div className="info">
              <h2>info</h2>
              <p><span><LocationOn /></span> Suite 72 Cariocca Business Park 2
                Sawaley Road Manchester Lancshire
                ENGELAND M40 8BB</p>
              <p><span><LocalPhone /></span>+44-161-8840607</p>
              <p><span><LocalPhone /></span>+44-161-8840609</p>
            </div>
            <div className="social-media">
              <a href=""><Instagram /></a>
              <a href=""><Telegram /></a>
              <a href=""><Twitter /></a>
            </div>
          </div>
        </div>)}
      {status &&
        (<div className="mainContainer next">
          <div className="next-container">
            <div className="caption">
              <h1>Thank you for contacting us</h1>
              <p className="">You are very important to us, all information received will always remain confidential
                We will contact you as soon as we review your message.</p>
            </div>
            <p className="vertical-text">CYRUS</p>
          </div>
          <div className="social-media">
            <a href=""><Instagram /></a>
            <a href=""><Telegram /></a>
            <a href=""><Twitter /></a>
          </div>
        </div>)}




    </Layout>
  )
}

export default ContactUs
