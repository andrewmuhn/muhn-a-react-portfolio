import './About.css';
import React from 'react';

export default function About() {
  return (
    <section className="section-container">
      <div className="section-header text-center">
        <h2>About Me</h2>
        <img
          src="./images/headshot.jpeg"
          alt="Headshot of the author while packswimming."
          className="rounded-circle border border-dark w-25"
        />
      </div>
      <div className="about-section section-content mx-5">
        <p>
          Hello, my name is Andrew Muhn. For the majority of my adult life, I
          have immersed myself in the outdoors, embracing a lifestyle of living,
          playing, and teaching in nature's vast playground. Guiding students on
          backpacking trips, climbing adventures, rafting expeditions, and
          encouraging them to explore their own backyards has been my passion.
          The freedom to spend my time in such a way has been incredibly
          rewarding, filled with cherished memories and valuable lessons learned
          through both triumphs and challenges.
        </p>
        <p>
          However, now I find myself standing at the precipice of a new
          adventure—coding. It may seem contradictory to some, who question my
          willingness to shift from gazing at the breathtaking vistas of the
          outdoors to fixating on a computer screen. Nevertheless, I see coding
          as a means to pursue my love for problem-solving in a concrete way,
          while still leaving room for my deep connection to nature.
        </p>
        <p>
          Recently, I completed a coding bootcamp where I honed my skills and
          expanded my proficiency in various front-end and back-end
          technologies. On the front end, I have become adept in HTML5, CSS3,
          and JavaScript ES6. I have also gained experience in utilizing jQuery
          for efficient DOM manipulation, implementing responsive design
          techniques, and building dynamic user interfaces using React and
          Bootstrap.
        </p>
        <p>
          When it comes to the back end, I have acquired knowledge in Node.js,
          working with APIs to fetch and manipulate data, and utilizing Express
          to develop robust and scalable web applications. I am familiar with
          working with databases, specifically MySQL with Sequelize as an ORM,
          as well as MongoDB with Mongoose for efficient NoSQL data management.
          Additionally, I have experience working with both REST APIs and
          GraphQL to provide flexible and efficient data querying.
        </p>
        <p>
          I am excited to tackle the new challenges in my coding journey head-on
          and apply my problem-solving abilities to solve unique and intricate
          problems.
        </p>
      </div>
    </section>
  );
}
