import React from 'react';
import Transition from '../../transitions';

import './style.css';

import Button from '../../components/button';

const Welcome = () => (
  <Transition>
    <div className="container">
      <p>
        In the last decade, front-end development went through multiple paradigm changes that make it hard to follow.
      </p>
      <div className="button-area">
        <Button text="TRY IT" direction="next" id="0" />
      </div>
    </div>
  </Transition>
);

export default Welcome;
