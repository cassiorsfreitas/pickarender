import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Transition from '../../transitions';
import { ResultsContext } from '../../context/Results';

import quiz from '../../quiz';

import './style.css';

const Result = () => {
  let history = useHistory();
  const { ssg, spa, ssr, resetRenders } = useContext(ResultsContext);

  function handleClick() {
    quiz.map((question) => (question.selected = ''));
    resetRenders();
    history.push('/');
  }

  return (
    <Transition>
      <div className="container">
        <div className="title">List of suggestions</div>
        <div className="columnResults">
          <div className="rowResults">
            <div className="numberResults">{ssg}%</div>
            <div className="textResults">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corporis unde quam.
            </div>
          </div>
          <div className="rowResults">
            <div className="numberResults">{spa}%</div>
            <div className="textResults">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corporis unde quam.
            </div>
          </div>
          <div className="rowResults">
            <div className="numberResults">{ssr}%</div>
            <div className="textResults">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corporis unde quam.
            </div>
          </div>
        </div>

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
