import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-center">
      <ul className="footer-list list-inline">
        <li className="footer-item list-inline-item">
          <a
            href="https://github.com/andrewmuhn"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <img
              className="icon"
              src="./images/github.svg"
              alt="link to Andrew's github profile"
            />
          </a>
        </li>
        <li className="footer-item list-inline-item">
          <a
            href="https://www.linkedin.com/in/andrew-muhn/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <img
              className="icon"
              src="./images/LinkedIn.png"
              alt="link to Andrew's LinkedIn profile"
            />
          </a>
        </li>
        <li className="footer-item list-inline-item">
          <a
            href="https://stackoverflow.com/users/21856307/andrew-muhn"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <img
              className="icon"
              src="./images/stackoverflow.svg"
              alt="link to Andrew's stackoverflow profile"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
