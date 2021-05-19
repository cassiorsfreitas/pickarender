import React from 'react';
import { useParams } from 'react-router-dom';

import './style.css';

import Progress from '../../components/progress';
import Transition from '../../transitions';
import Form from '../../components/form';
import quiz from '../../quiz';

const Question = () => {
  const { id } = useParams();

  return (
    <Transition>
      <div className="container">
        <div className="title">Question {id}</div>
        <Progress potato={quiz.length} />
        <Form id={id} quiz={quiz} />
      </div>
    </Transition>
  );
};

export default Question;
