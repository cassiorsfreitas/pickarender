import React from 'react';

import Transition from '../../transitions';
import Button from '../../components/button';

const Result = () => (
  <Transition>
    <div className="container">
      <p>Result here!</p>
      <div className="button-area">
        <Button className="button" text="RETRAY" />
      </div>
    </div>
  </Transition>
);

export default Result;
