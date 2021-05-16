import React from 'react';
import Progress from '../../components/progress';
import Button from '../../components/button';

const Question = () => (
  <div className="container">
    <Progress />
    Question here!
    <div className="button-container">
      <Button text="NEXT" />
    </div>
  </div>
);

export default Question;
