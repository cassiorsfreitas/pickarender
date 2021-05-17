import React from 'react';
import { useHistory } from 'react-router-dom';

import Transition from '../../transitions';

const Result = () => {
  let history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <Transition>
      <div className="container">
        <p>Result here!</p>
        <div className="button-area">
          <button className="button" onClick={handleClick}>
            RETRAY
          </button>
        </div>
      </div>
    </Transition>
  );
};

export default Result;
