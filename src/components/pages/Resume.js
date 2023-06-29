import './Resume.css';
import React from 'react';

export default function Resume() {
  return (
    <section className="section-container text-center">
      <div className="section-header">
        <h2>Resume</h2>
        <p>
          Download my&nbsp;
          <a href="./resume.pdf" download="Muhn-A-Resume">
            resume
          </a>
        </p>
      </div>
      <div className="section-content resume-section mx-auto">
        <h3 className="text-center">Front-end Proficiencies</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript ES6</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>Node</li>
          <li>APIs</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}
