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
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            className=""
            onMouseLeave={handleNotification}
          ></input>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            className=""
            onMouseLeave={handleNotification}
            onChange={handleEmailValidation}
          ></input>
          <label htmlFor="message">Message: </label>
          <input
            type="text"
            name="message"
            id="message"
            className=""
            onMouseLeave={handleNotification}
          ></input>
          <input type="submit" value="submit"></input>
        </form>
        <p>{notification}</p>
      </div>
    </section>
  );
}
