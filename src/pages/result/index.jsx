import React from 'react';
import { useHistory } from 'react-router-dom';

import Transition from '../../transitions';

import quiz from '../../quiz';

const Result = () => {
  let history = useHistory();

  function handleClick() {
    quiz.map((question) => (question.selected = ''));
    history.push('/');
  }

  return (
    <Transition>
      <div className="container">
        <p>Result SSG!</p>
        <p>Result SPA!</p>
        <p>Result SSR!</p>
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
