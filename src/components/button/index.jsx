/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';

const Button = (props) => {
  const direction = props.direction;
  const id = props.id;
  const nextId = parseInt(id) + 1;

  let history = useHistory();

  function handleClick() {
    if (id === null && direction !== 'back') {
      return history.push('/result');
    }

    if (!id && direction !== 'back') {
      return history.push('/');
    }

    direction === 'back' ? history.goBack() : history.push(`/question/${nextId}`);
  }

  return (
    <>
      <button className="button" onClick={() => handleClick()}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
