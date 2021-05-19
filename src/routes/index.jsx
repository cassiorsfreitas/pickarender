import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import Question from '../pages/question/index ';
import Result from '../pages/result';
import Welcome from '../pages/welcome';

import quiz from '../quiz';

const Routes = () => {
  let history = useHistory();

  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/question/:id" component={Question} />
      <Route path="/result" component={Result} />
      <Redirect from="*" to="/" />
      {quiz.map((option) => {
        if (option.selected === '') {
          history.push('/');
        }
      })}
    </Switch>
  );
};

export default Routes;
