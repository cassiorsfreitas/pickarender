import React from 'react';
import { useParams } from 'react-router-dom';

import './style.css';

import Progress from '../../components/progress';
import Button from '../../components/button';
import Transition from '../../transitions';

import quiz from '../../quiz';

const Question = () => {
  const { id } = useParams();
  const pageId = id < quiz.length ? id : null;
  const questionId = parseInt(id) - 1;

  return (
    <Transition>
      <div className="container">
        <div className="title">Question {id}</div>
        <Progress />
        <div className="asking">{quiz[questionId].text}</div>
        <div className="options">
          <div>{quiz[questionId].answers[0]}</div>
          <div>{quiz[questionId].answers[1]}</div>
        </div>
        <div className="button-area">
          <Button text="NEXT" direction="next" id={pageId} />
          <Button text="BACK" direction="back" id={pageId} />
        </div>
      </div>
    </Transition>
  );
};

export default Question;
