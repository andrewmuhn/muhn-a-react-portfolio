import './Contact.css';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.end.EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        alert('message sent successfully...');
        console.log(result.text);
      })
      .error((error) => console.error(error.text));
  };

  const [notification, setNotification] = useState('');

  const handleNotification = (e) => {
    if (e.target.value === '') {
      setNotification(`${e.target.name} field is required`);
    }
  };

  const handleEmailValidation = (e) => {
    if (!e.target.value.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
      setNotification('must input a valid email address');
    } else setNotification('');
  };

  return (
    <section className="section-container">
      <div className="section-header">
        <h2>Contact</h2>
      </div>
      <div className="section-content">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              onMouseLeave={handleNotification}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              onMouseLeave={handleNotification}
              onChange={handleEmailValidation}
            ></input>
          </div>
          <div>
            <label htmlFor="message">Message: </label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows="5"
              onMouseLeave={handleNotification}
            ></textarea>
          </div>
          <div className="text-center submit-container">
            <input id="submit" type="submit" value="Submit"></input>
          </div>
        </form>
        <p className="text-center">{notification}</p>
      </div>
    </section>
  );
}
