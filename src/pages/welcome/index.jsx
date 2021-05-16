import React from 'react';

import './style.css';

import Button from '../../components/button';

const Welcome = () => (
  <div className="container">
    <p>In the last decade, front-end development went through multiple paradigm changes that make it hard to follow.</p>
    <div className="button-container">
      <Button text="TRY IT" />
    </div>
  </div>
);

export default Welcome;
