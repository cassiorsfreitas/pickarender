import React from 'react';
import { useParams } from 'react-router-dom';

import Progress from '../../components/progress';
import Button from '../../components/button';
import Transition from '../../transitions';

const Question = () => {
  const { id } = useParams();

  return (
    <Transition>
      <div className="container">
        <Progress />
        {id}
        <div className="button-area">
          <Button text="NEXT" direction="next" id={id} />
          <Button text="BACK" direction="back" id={id} />
        </div>
      </div>
    </Transition>
  );
};

export default Question;
