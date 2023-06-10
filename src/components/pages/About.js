import React from 'react';

export default function About() {
  return (
    <section class="section-container" id="about">
      <div class="about-me">
        <h3>About Me</h3>
        <img
          src="./images/Profile.png"
          alt="author on a backpacking trip in the Tetons"
        />
      </div>
      <div class="about-text">
        <div>
          <p>
            My name is Andrew Muhn. I have spent most of my adult life living,
            playing and teaching in the outdoors. Spending months guiding
            students through backpacking trips, climbing adventures, rafting
            rivers, and exploring their own backyards. The ability to use my
            time has been such a reward and I have a plethora of fond memories
            in addition to many trials and tribulations. However, it is time for
            me to try something new. Coding is the next adventure. It some ways
            I hope it will allow me more time to pursue the outdoors even if
            some question my willingness to oggle at a computer's screen.
          </p>
          <img
            src="./images/Headshot.png"
            alt="Headshot of the author while packswimming."
          />
        </div>
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
