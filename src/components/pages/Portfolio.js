import './Portfolio.css';
import React from 'react';

export default function Portfolio() {
  return (
    <section className="section-container" id="work">
      <div className="section-header text-sm-center text-lg-start">
        <h2>Portfolio</h2>
      </div>
      <div className="project-container container">
        <div className="row">
          <div className="col-md">
            <div className="project-card rounded text-center pt-2 mx-2 my-2">
              <h4>Cook's Companion</h4>
              <p>Handlebars, mySQL, Express</p>
              <img
                src="./images/cooks-companion.jpg"
                alt="Full Stack Web-App"
              />
              <div className="projects-child py-2 d-flex justify-content-around">
                <a className="btn" href="https://cookscompanion.herokuapp.com/">
                  Deployed Application
                </a>
                <a
                  className="btn"
                  href="https://github.com/andrewmuhn/cooks-companion"
                >
                  Github Repo
                </a>
              </div>
            </div>
            <div className="project-card rounded text-center pt-2 mx-2 my-2">
              <h4>Book Search Engine</h4>
              <p>GraphQL, MERN, JWT</p>
              <img
                src="./images/book-search-engine.png"
                alt="MERN GraphQL Book Search Engine"
              />
              <div className="projects-child py-2 d-flex justify-content-around">
                <a
                  className="btn"
                  href="https://google-book-search-7654-71fedf550da4.herokuapp.com/"
                >
                  Deployed Application
                </a>
                <a
                  className="btn"
                  href="https://github.com/andrewmuhn/book-search-engine"
                >
                  Github Repo
                </a>
              </div>
            </div>
            <div className="project-card rounded text-center pt-2 mx-2 my-2">
              <h4>Text Editor</h4>
              <p>PWA</p>
              <img src="./images/text-editor.png" alt="text editor PWA" />
              <div className="projects-child py-2 d-flex justify-content-around">
                <a
                  className="btn"
                  href="https://text-editor-pwa-445577.herokuapp.com/"
                >
                  Deployed Application
                </a>
                <a
                  className="btn"
                  href="https://github.com/andrewmuhn/text-editor"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="project-card rounded text-center pt-2 mx-2 my-2">
              <h4>Employee Tracker</h4>
              <p>Node, mySql, Sequelize</p>
              <img
                src="./images/employee-manager.png"
                alt="employee manager CLI"
              />
              <div className="projects-child py-2 d-flex justify-content-around">
                <a
                  className="btn"
                  href="https://github.com/andrewmuhn/employee-tracker"
                >
                  Github Repo
                </a>
              </div>
            </div>
            <div className="project-card rounded text-center pt-2 mx-2 my-2">
              <h4>Dopamine Box</h4>
              <p>MERN Stack</p>
              <img src="./images/dopamine-box.png" alt="dopamine-box app" />
              <div className="projects-child py-2 d-flex justify-content-around">
                <a
                  className="btn"
                  href="https://dopamine-box-178888939ab3.herokuapp.com/"
                >
                  Deployed Application
                </a>
                <a
                  className="btn"
                  href="https://github.com/sethleininger/dopamine-box"
                >
                  Github Repo
                </a>
              </div>
            </div>
            <div className="project-card rounded text-center pt-2 mx-2 my-2">
              <h4>Weather App</h4>
              <p>Third-Party APIs</p>
              <img src="./images/weather-app.png" alt="weather app" />
              <div className="projects-child py-2 d-flex justify-content-around">
                <a
                  className="btn"
                  href="https://andrewmuhn.github.io/weather-app/"
                >
                  Deployed Application
                </a>
                <a
                  className="btn"
                  href="https://github.com/andrewmuhn/weather-app"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
