/* eslint-disable react/prop-types */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import './style.css';

export default function Form(props) {
  // eslint-disable-next-line no-unused-vars
  const id = props.id;
  const questionId = parseInt(id) - 1;
  const nextId = parseInt(id) + 1;

  let history = useHistory();

  const initialQuiz = props.quiz;
  const firstOption = initialQuiz[questionId].answers[0].ans;
  const firstValue = initialQuiz[questionId].answers[0].value;
  const secondOption = initialQuiz[questionId].answers[1].ans;
  const secondValue = initialQuiz[questionId].answers[1].value;
  const thirdOption = initialQuiz[questionId].answers[2].ans;
  const thirdValue = initialQuiz[questionId].answers[2].value;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  let watchInput = watch('Selected', null);
  console.log('here', watchInput);
  let statusButton = watchInput !== null ? '' : 'disabled';

  const onSubmit = (data) => {
    console.log(data.Selected);
    reset();
    handleNextPage();
  };

  console.log(errors);

  function handleNextPage() {
    if (id >= initialQuiz.length) {
      return history.push('/result');
    }

    history.push(`/question/${nextId}`);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="asking">{initialQuiz[questionId].text}</div>
      <div className="options">
        <div className="float">
          <div>
            <input {...register('Selected', { required: true })} type="radio" value={firstValue} />
          </div>
          <div className="textAnswer">{firstOption}</div>
        </div>
        <div className="float">
          <div>
            <input {...register('Selected', { required: true })} type="radio" value={secondValue} />
          </div>
          <div className="textAnswer">{secondOption}</div>
        </div>
        <div className="float">
          <div>
            <input {...register('Selected', { required: true })} type="radio" value={thirdValue} />
          </div>
          <div className="textAnswer">{thirdOption}</div>
        </div>
      </div>
      <div className="button-area">
        <input className={`button ${statusButton}`} type="submit" value="NEXT" />
      </div>
    </form>
  );
}
