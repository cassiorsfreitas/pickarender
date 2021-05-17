import React from 'react';
import { useParams } from 'react-router-dom';

import './style.css';

import Progress from '../../components/progress';
import Transition from '../../transitions';
import Form from '../../components/form';
import quiz from '../../quiz';

const Question = () => {
  const { id } = useParams();
  // const pageId = id < quiz.length ? id : null;
  // const nameOfButton = pageId != null ? 'NEXT' : 'RESULT';
  // const questionId = parseInt(id) - 1;

  return (
    <Transition>
      <div className="container">
        <div className="title">Question {id}</div>
        <Progress potato={quiz.length} />
        <Form id={id} quiz={quiz} />
        {/* <div className="button-area">
          <Button text={nameOfButton} direction="next" id={pageId} />
          <Button text="BACK" direction="back" id={pageId} />
        </div> */}
      </div>
    </Transition>
  );
};

export default Question;
