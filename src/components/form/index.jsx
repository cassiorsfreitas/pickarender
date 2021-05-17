/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function Form(props) {
  const id = props.id;
  const questionId = parseInt(id) - 1;
  const nextId = parseInt(id) + 1;

  let history = useHistory();

  const initialQuiz = props.quiz;
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    setQuiz(initialQuiz);
  }, [initialQuiz]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    quiz[questionId].selected = data.Selected;
    setQuiz(quiz);
    console.log(quiz);
    reset();
    handleNextPage();
  };

  console.log(errors);

  function handleNextPage() {
    if (id >= quiz.length) {
      return history.push('/result');
    }

    history.push(`/question/${nextId}`);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="asking">{initialQuiz[questionId].text}</div>
      <div className="options">
        <div>
          <input {...register('Selected', { required: true })} type="radio" value="Yes " /> Yes
        </div>
        <div>
          <input {...register('Selected', { required: true })} type="radio" value=" No" /> No
        </div>
      </div>
      <div className="button-area">
        <input className="button" type="submit" value="NEXT" />
        <button className="button" onClick={() => history.goBack()}>
          BACK
        </button>
      </div>
    </form>
  );
}
