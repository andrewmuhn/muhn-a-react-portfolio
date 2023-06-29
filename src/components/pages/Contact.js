import './Contact.css';
import React, { useState } from 'react';

export default function Contact() {
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
        <form className="contact-form">
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
