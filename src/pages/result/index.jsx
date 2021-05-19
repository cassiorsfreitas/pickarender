import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Transition from '../../transitions';
import { ResultsContext } from '../../context/Results';

import quiz from '../../quiz';

import './style.css';

const Result = () => {
  let history = useHistory();
  const { ssg, spa, ssr, resetRenders } = useContext(ResultsContext);

  let ssgRat = Math.round((100 / 6) * ssg);
  let spaRat = Math.round((100 / 6) * spa);
  let ssrRat = Math.round((100 / 6) * ssr);

  let ssgPercent = ssgRat.toString().padStart(2, '0');
  let spaPercent = spaRat.toString().padStart(2, '0');
  let ssrPercent = ssrRat.toString().padStart(2, '0');

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
            <div className="numberResults">{ssgPercent}%</div>
            <div className="textResults">
              <span>SSG:</span> Static Site Generator are a great alternative to Single Page Apps if you care about SEO
              and if your website is heavy with public content.
            </div>
          </div>
          <div className="rowResults">
            <div className="numberResults">{spaPercent}%</div>
            <div className="textResults">
              <span>SPA:</span> Your web project source code (mostly JavaScript) is responsible for filling, interacting
              and navigating between your application contents inside the available rendered (your user’s web browser).
            </div>
          </div>
          <div className="rowResults">
            <div className="numberResults">{ssrPercent}%</div>
            <div className="textResults">
              <span>SSR:</span> When we talk about SSR in the JavaScript world, what we really mean in JavaScript
              isomorphic rendering. With the advent of NodeJS, JavaScript can now run both in the server and the client,
              which makes sharing rendering logic possible.
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
