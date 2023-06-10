import React from 'react';

export default function Contact() {
  return (
    <section className="section-container">
      <div className="section-header">
        <h2>Contact</h2>
      </div>
      <div className="section-content">
        <form className="contact-form">
          <label for="name">Name: </label>
          <input type="text" name="name" id="name" className=""></input>
          <label for="email">Email: </label>
          <input type="text" name="email" id="email" className=""></input>
          <label for="message">Message: </label>
          <input type="text" name="message" id="message" className=""></input>
        </form>
      </div>
    </section>
  );
}
