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
          My name is Andrew Muhn. I have spent most of my adult life living,
          playing and teaching in the outdoors. Spending months guiding students
          through backpacking trips, climbing adventures, rafting rivers, and
          exploring their own backyards. The ability to use my time has been
          such a reward and I have a plethora of fond memories in addition to
          many trials and tribulations. However, it is time for me to try
          something new. Coding is the next adventure. It some ways I hope it
          will allow me more time to pursue the outdoors even if some question
          my willingness to oggle at a computer's screen.
        </p>
        <p>
          Currently I'm most excited about being able to continue to use my
          native intrigue for problem solving in a concrete way. The challenges
          that come with coding in the various languages I'm sure will be many,
          but I hope to find them all to be adept at solving unique problems.
        </p>
      </div>
    </section>
  );
}
