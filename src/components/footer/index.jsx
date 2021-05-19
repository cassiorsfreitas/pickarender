import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

import './style.css';

const Footer = () => {
  return (
    <a
      href="https://github.com/cassiorsfreitas/pickarender"
      className="footer-container"
      target="_blank"
      rel="noreferrer"
    >
      <div className="icon">
        <FaGithub size="1.5em" />
      </div>
      /cassiorsfreitas
    </a>
  );
};

export default Footer;
