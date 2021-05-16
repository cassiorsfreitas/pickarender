/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Button = (props) => (
  <>
    <Link to="/question">
      <button className="button">{props.text}</button>
    </Link>
  </>
);

export default Button;
